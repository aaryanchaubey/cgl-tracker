import { lazy, Suspense } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useAuth } from './contexts/AuthContext'
import AppLayout from './components/layout/AppLayout'
import LoadingSpinner from './components/ui/LoadingSpinner'

// ─── Lazy-loaded pages ────────────────────────────────────────────────────────
const AuthPage      = lazy(() => import('./pages/AuthPage'))
const DashboardPage = lazy(() => import('./pages/DashboardPage'))
const RoadmapPage   = lazy(() => import('./pages/RoadmapPage'))
const DayDetailPage = lazy(() => import('./pages/DayDetailPage'))
const QuizPage      = lazy(() => import('./pages/QuizPage'))
const AnalyticsPage = lazy(() => import('./pages/AnalyticsPage'))
const SettingsPage  = lazy(() => import('./pages/SettingsPage'))

// ─── Full-screen loading fallback ─────────────────────────────────────────────
function PageLoader() {
  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{ backgroundColor: 'var(--color-bg)' }}
    >
      <LoadingSpinner size="lg" />
    </div>
  )
}

// ─── ProtectedRoute: redirect to /auth when not logged in ─────────────────────
function ProtectedRoute({ children }) {
  const { user, loading } = useAuth()

  if (loading) return <PageLoader />
  if (!user)   return <Navigate to="/auth" replace />
  return children
}

// ─── AnimatedRoutes: location-keyed so AnimatePresence can animate between pages
function AnimatedRoutes() {
  const location = useLocation()
  const { user, loading } = useAuth()

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>

        {/* /auth — if already logged in, bounce straight to /dashboard */}
        <Route
          path="/auth"
          element={
            loading ? (
              <PageLoader />
            ) : user ? (
              <Navigate to="/dashboard" replace />
            ) : (
              <Suspense fallback={<PageLoader />}>
                <AuthPage />
              </Suspense>
            )
          }
        />

        {/* / → /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Protected routes — all share AppLayout */}
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={<PageLoader />}>
                <DashboardPage />
              </Suspense>
            }
          />

          <Route
            path="/roadmap"
            element={
              <Suspense fallback={<PageLoader />}>
                <RoadmapPage />
              </Suspense>
            }
          />

          <Route
            path="/day/:dateId"
            element={
              <Suspense fallback={<PageLoader />}>
                <DayDetailPage />
              </Suspense>
            }
          />

          <Route
            path="/quiz/:dateId"
            element={
              <Suspense fallback={<PageLoader />}>
                <QuizPage />
              </Suspense>
            }
          />

          <Route
            path="/analytics"
            element={
              <Suspense fallback={<PageLoader />}>
                <AnalyticsPage />
              </Suspense>
            }
          />

          <Route
            path="/settings"
            element={
              <Suspense fallback={<PageLoader />}>
                <SettingsPage />
              </Suspense>
            }
          />
        </Route>

        {/* Catch-all */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Routes>
    </AnimatePresence>
  )
}

// ─── App root — providers are already mounted in main.jsx ─────────────────────
export default function App() {
  return <AnimatedRoutes />
}

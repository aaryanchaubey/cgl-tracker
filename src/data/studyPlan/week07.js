// week07.js — Days 43–49 (June 6–12, 2026)
// Days 43–45: Phase 2 final days, hasQuiz: true (LAST 3 QUIZ DAYS)
// Days 46–49: Phase 3 begins — Pre-Final Push, hasQuiz: false, MOCK HEAVY

export const DAYS = [
  // ─── DAY 43 ─── June 6, Saturday (Weekend · Phase 2 · hasQuiz: true)
  {
    id: "2026-06-06",
    dayNumber: 43,
    phase: "pre-acceleration",
    tier: "pre",
    weekNumber: 7,
    weekType: "weekend",
    totalHours: 8,
    hasQuiz: true,
    title: "Phase 2 Final Weekend I — Forge Your Arsenal",
    promptBlock: `OPERATIONAL BRIEFING — DAY 43 OF 138
CODENAME: FORGE WEEKEND

Hunter, you have completed six full weeks of accelerated preparation. Phase 2 reaches its final weekend. This is not a rest day — this is the forge. Everything you have learned must now be stress-tested under real exam conditions.

CURRENT STATUS:
- Weeks 1–6 complete: English morphology, Quant algebra/geometry, Reasoning all major types, Vocabulary batches 1–4, DI multi-set, P&L advanced
- 3 quiz days remain (Days 43, 44, 45) before quiz protocol ends
- Phase 3 (Final Push) begins Tuesday June 9 — 100% mock-based

WEEKEND FORGE PROTOCOL:
Your Saturday runs two full mocks back-to-back with a structured analysis window between them. Each mock must be treated as the actual Tier 1 exam. No pausing, no checking answers mid-way. Exam conditions only.

TIER 1 STRUCTURE REMINDER:
- 100 questions, 60 minutes
- English: 25 Qs (1 mark each, -0.5 wrong)
- GA: 25 Qs
- Quant: 25 Qs
- Reasoning: 25 Qs
- Target: 160+ marks (80%+) in mocks

WEAKNESS TARGETING:
After Mock 1, identify your worst section. Give it 30 minutes of focused drilling before Mock 2. Do NOT spend these 30 minutes on your strong sections — that is time wasted.

QUIZ REMINDER:
Today's quiz unlocks after you mark all tasks complete. 15 questions, SSC CGL Mains difficulty, 70% pass threshold. This is your 43rd quiz — treat it as a proving ground.

MINDSET:
The strongest hunters do not fear the dungeon. They have prepared so thoroughly that walking in feels familiar. Make today's mocks feel like the real dungeon. When you enter the actual exam hall, it will feel like déjà vu.`,
    tasks: [
      {
        id: "d43-t1",
        title: "Full Mock Test #1 — Exam Simulation",
        description: "Take one complete Tier 1 mock test under strict exam conditions. 100 questions in 60 minutes. No breaks, no phone. Use an online test series (Testbook/PracticeMock/AffairsCloud).",
        subtasks: [
          {
            id: "d43-t1-s1",
            title: "Strict 60-minute mock — no interruptions",
            description: "Set a 60-minute timer. Sit in an exam posture. Answer all 100 questions. Do NOT go back to check answers mid-way. Mark and move on strategy.",
            tip: "English: do RC last. Reasoning: attempt all classification/analogy first. Quant: skip calculation-heavy Qs on first pass.",
            estimatedMins: 60,
            mandatory: true
          },
          {
            id: "d43-t1-s2",
            title: "Score and section-wise breakdown",
            description: "After timer ends: calculate raw score, check section-wise (English/GA/Quant/Reasoning). Note attempted vs correct vs wrong.",
            tip: "Target: 160+ total. Alert if any section below 15/25.",
            estimatedMins: 10,
            mandatory: true
          }
        ]
      },
      {
        id: "d43-t2",
        title: "Mock #1 Analysis + Worst Section Drill (90 min)",
        description: "Analyze every wrong answer in Mock #1. Then spend 30 minutes drilling your weakest section before Mock #2.",
        subtasks: [
          {
            id: "d43-t2-s1",
            title: "Wrong answer audit — categorize errors",
            description: "For each wrong answer: (a) silly mistake / (b) concept gap / (c) guessed wrong. Make a tally. Your concept gap Qs need immediate work.",
            tip: "Silly mistakes (timing): practice slower, deliberate attempt. Concept gaps: review the concept NOW.",
            estimatedMins: 30,
            mandatory: true
          },
          {
            id: "d43-t2-s2",
            title: "Weakest section targeted drill",
            description: "Take your worst-scoring section from Mock #1 and solve 30–40 practice questions from that topic area. Speed + accuracy both.",
            tip: "If Quant is weak: focus on the 2–3 question types you got wrong. Not the whole section — surgical strike only.",
            estimatedMins: 30,
            mandatory: true
          },
          {
            id: "d43-t2-s3",
            title: "GA revision — last 6 months current affairs + static",
            description: "Quick-fire GA: 2024–2025 awards, appointments, sports results, bills passed, science breakthroughs. Use a GA revision PDF or Quizlet deck.",
            tip: "GA is your fastest improvement area if you're below 18/25. 10 mins daily on GA compounds massively.",
            estimatedMins: 30,
            mandatory: true
          }
        ]
      },
      {
        id: "d43-t3",
        title: "Full Mock Test #2 — Higher Intensity",
        description: "Second full mock of the day. Goal: score higher than Mock #1 by applying lessons from analysis. Same strict conditions.",
        subtasks: [
          {
            id: "d43-t3-s1",
            title: "60-minute strict mock — apply corrections",
            description: "Execute Mock #2 with corrections: spend slightly more time on your previously weak section. Apply the time management learnings from Mock #1.",
            tip: "Common trap: rushing through English and having leftover time. Don't — read comprehension passages carefully.",
            estimatedMins: 60,
            mandatory: true
          },
          {
            id: "d43-t3-s2",
            title: "Mock #2 score analysis + improvement delta",
            description: "Score Mock #2. Compare to Mock #1. Did your weak section improve? Calculate delta. Record both scores in your tracker.",
            tip: "Even +5 marks improvement in the same day means the drill worked. Keep this feedback loop going.",
            estimatedMins: 10,
            mandatory: true
          }
        ]
      },
      {
        id: "d43-t4",
        title: "Comprehensive Revision Session — Phase 2 Recap",
        description: "A 90-minute structured revision of all Phase 2 major topics: Algebra identities, Geometry theorems, Vocabulary Batch 3+4, Reasoning advanced patterns.",
        subtasks: [
          {
            id: "d43-t4-s1",
            title: "Algebra + Geometry rapid revision",
            description: "Vieta's formulas, AM-GM, all circle theorems, similar triangle ratios, mass point geometry. Write from memory, then verify. If you can't write it, re-study it.",
            tip: "You should be able to derive Vieta's, sin²+cos²=1, and area of triangle by Heron's formula in under 30 seconds each.",
            estimatedMins: 30,
            mandatory: true
          },
          {
            id: "d43-t4-s2",
            title: "Vocabulary Batches 3+4 revision — 100 words",
            description: "Rapid-fire the final 100 words from batches 3 and 4. For each word: meaning + one usage sentence (mental). Red-flag any word you hesitate on.",
            tip: "Use spaced repetition: words you know go to back of stack, words you're unsure about come up 3x more often.",
            estimatedMins: 30,
            mandatory: true
          },
          {
            id: "d43-t4-s3",
            title: "Reasoning — syllogism + matrix + paper folding sprint",
            description: "Solve 20 mixed reasoning questions: 7 syllogism (venn diagram method), 7 matrix coding, 6 paper folding/cutting. Time yourself: target <90 seconds each.",
            tip: "Syllogism: always draw ALL diagrams for 2-statement problems. Matrix: find the pattern in the diagonal first.",
            estimatedMins: 30,
            mandatory: true
          }
        ]
      }
    ]
  },

  // ─── DAY 44 ─── June 7, Sunday (Weekend · Phase 2 · hasQuiz: true)
  {
    id: "2026-06-07",
    dayNumber: 44,
    phase: "pre-acceleration",
    tier: "pre",
    weekNumber: 7,
    weekType: "weekend",
    totalHours: 8,
    hasQuiz: true,
    title: "Phase 2 Final Weekend II — Pre-Phase 3 Battle Readiness",
    promptBlock: `OPERATIONAL BRIEFING — DAY 44 OF 138
CODENAME: BATTLE READINESS

Hunter. Two days before Phase 3 ignites. This is your final deep-preparation weekend. Tomorrow is the last quiz day (Day 45). Then Phase 3 begins and the training wheels come off — it becomes pure mock warfare.

USE TODAY WISELY:
Sunday's mission: identify and eliminate your remaining concept gaps. Phase 3 will NOT give you time to learn new concepts. Whatever you don't know by end of Day 45 will remain unknown on exam day — unless you fix it TODAY.

PRIORITY MATRIX FOR TODAY:
1. Your weakest topic from yesterday's mocks — MUST improve
2. English: cloze test + one-word substitution — high yield per minute
3. Quant: P&L + Time&Work + STD — these 3 topics = 8–10 Qs in Tier 1
4. GA: last 3 months current affairs blitz
5. Reasoning: seating arrangement + direction sense (common weak points)

TOPIC GAPS TO FILL:
If you still struggle with: Mensuration 3D formulae, Trigonometry applications, Idioms & Phrases, Matrix Coding — today is your LAST chance for structured learning. After this, only revision.

QUIZ NOTE:
Tomorrow (Day 45) is your FINAL quiz. Thursday you enter Phase 3. The quiz protocol tested your conceptual mastery. Phase 3 tests your exam execution. Different skill, same preparation.

EVENING MANDATE:
By 9 PM tonight, write down your Top 5 weakest areas. This list becomes your Phase 3 revision priority queue. Do not lie to yourself. Honest self-assessment now = better exam performance.`,
    tasks: [
      {
        id: "d44-t1",
        title: "Concept Gap Elimination — Morning Session",
        description: "Systematic attack on your weakest 2–3 topics. NOT a mock day — today we patch holes before Phase 3 locks the door.",
        subtasks: [
          {
            id: "d44-t1-s1",
            title: "Quant weak topic deep-dive (P&L / TW / STD)",
            description: "Identify your most error-prone Quant topic from recent mocks. Work through 25 problems methodically: theory review, formula memo, then timed practice.",
            tip: "P&L: master cost price vs selling price equations, successive discounts. TW: LCM method for efficiency. STD: relative speed concept.",
            estimatedMins: 90,
            mandatory: true
          },
          {
            id: "d44-t1-s2",
            title: "English: Cloze Test + One-Word Substitution blitz",
            description: "Solve 3 full cloze tests (5–6 blanks each). Then rapid-fire 40 OWS questions. Goal: accuracy over speed here — understand context, don't guess.",
            tip: "Cloze test strategy: read full passage first, then fill. OWS: eliminate options by etymology — Latin/Greek roots help.",
            estimatedMins: 60,
            mandatory: true
          }
        ]
      },
      {
        id: "d44-t2",
        title: "Full Mock #3 — Mid-Day Pressure Test",
        description: "One full Tier 1 mock under strict conditions. Focus: clean execution, no careless errors. Apply all lessons from Saturday's two mocks.",
        subtasks: [
          {
            id: "d44-t2-s1",
            title: "60-minute exam simulation",
            description: "Third mock of the weekend. By now you should be finding your rhythm. Target: your highest score yet. Aim 165+.",
            tip: "Order: Reasoning → English → Quant → GA. This order minimizes decision fatigue for most students.",
            estimatedMins: 60,
            mandatory: true
          },
          {
            id: "d44-t2-s2",
            title: "Quick analysis — focus only on concept gaps",
            description: "Don't spend 2 hours analyzing this time. Only look at questions you got wrong due to concept issues, not timing. Fix those concepts immediately.",
            tip: "Timing issues resolve with more mocks. Concept gaps require study. Separate these two error types ruthlessly.",
            estimatedMins: 30,
            mandatory: true
          }
        ]
      },
      {
        id: "d44-t3",
        title: "GA Blitz — Current Affairs + Static GK",
        description: "A comprehensive 90-minute GA session: last 3 months current affairs + high-yield static GK topics.",
        subtasks: [
          {
            id: "d44-t3-s1",
            title: "Current Affairs — Mar/Apr/May/Jun 2026",
            description: "Cover: major appointments (RBI governor, CJI, etc.), awards (Padma, Bharat Ratna, Oscar), sports results, bills passed in Parliament, important dates/summits.",
            tip: "GA questions in SSC Tier 1: 40% current affairs, 60% static. Don't neglect static — it's more predictable.",
            estimatedMins: 45,
            mandatory: true
          },
          {
            id: "d44-t3-s2",
            title: "Static GK — Science + History + Geography + Polity",
            description: "Rapid revision: Chemistry (elements, compounds, reactions), Physics (Newton's laws, optics), Biology (disease-causing organisms), Indian history (Mughal/British period key events), Polity (constitutional articles).",
            tip: "Top static GA Qs in SSC: First Indian in space, Constitutional articles, Chemical formulas, River-dam pairs. Know all of these.",
            estimatedMins: 45,
            mandatory: true
          }
        ]
      },
      {
        id: "d44-t4",
        title: "Phase 3 Battle Plan — Evening Strategy Session",
        description: "Write your personalized Phase 3 plan: weak areas list, daily mock schedule, revision rotation. Make it concrete before Tuesday.",
        subtasks: [
          {
            id: "d44-t4-s1",
            title: "Top 5 weak areas — honest self-assessment",
            description: "From all 6 weeks of data: which 5 topics are your weakest? Write them down. These become your Phase 3 priority revision topics (5 min each day).",
            tip: "Common weak areas: Mensuration 3D, Trigonometry, Idioms, Matrix Coding, Probability. Be honest — denial costs marks.",
            estimatedMins: 20,
            mandatory: true
          },
          {
            id: "d44-t4-s2",
            title: "Reasoning full-topic speed drill",
            description: "30 mixed reasoning questions: Blood relations, Directions, Seating arrangement (circular), Input-Output, Alphanumeric series. Time yourself — target 60 seconds per question.",
            tip: "Seating: always draw the circle before attempting. Blood relations: use family tree diagram.",
            estimatedMins: 40,
            mandatory: false
          },
          {
            id: "d44-t4-s3",
            title: "Phase 3 schedule + study plan finalization",
            description: "Map out Days 46–61 (Phase 3). Each weekday: 1 full mock + targeted revision. Each weekend: 2–3 mocks + deep analysis. Write this in your notebook/tracker.",
            tip: "Phase 3 is about EXECUTION, not LEARNING. No new topics from Day 46. Only reinforce and refine.",
            estimatedMins: 20,
            mandatory: true
          }
        ]
      }
    ]
  },

  // ─── DAY 45 ─── June 8, Monday (Weekday · Phase 2 · hasQuiz: true — FINAL QUIZ DAY)
  {
    id: "2026-06-08",
    dayNumber: 45,
    phase: "pre-acceleration",
    tier: "pre",
    weekNumber: 7,
    weekType: "weekday",
    totalHours: 2.5,
    hasQuiz: true,
    title: "Day 45 — The 45th Trial: Your Final Proving Ground",
    promptBlock: `OPERATIONAL BRIEFING — DAY 45 OF 138
CODENAME: FINAL TRIAL

Hunter. This is it. Day 45. The final quiz day.

You have been tested 44 times. You have answered hundreds of SSC CGL Mains-standard questions. You have been pushed to 70% minimum passing each day. You have proven — day after day — that you can perform under pressure.

Today's quiz is your 45th and final trial in this format. After today, there are no more daily quizzes. Phase 3 begins tomorrow and the format shifts entirely to mock warfare. The quiz protocol has served its purpose: it has forged your ability to THINK under pressure. That skill stays with you forever.

TAKE A MOMENT:
45 days. 45 concept-level tests. Most SSC aspirants never do this. You have done something exceptional. The habits you've built — daily study, quiz performance, weak area tracking — these are the invisible weapons that will carry you on exam day.

TODAY'S MISSION:
- Complete your daily English + GA + Quant + Reasoning blocks
- Demonstrate mastery on the final quiz — no passing by luck today
- Begin transitioning your mindset to Phase 3: MOCK WARRIOR MODE

THE SHIFT BEGINS TOMORROW:
From Day 46, your daily target changes. No quiz to unlock. Instead: mock performance becomes your only metric. Every day is a performance day. Treat each mock as the real exam.

GO CLAIM YOUR 45th VICTORY. THE DUNGEON HAS BEEN CLEARED. NOW THE REAL BOSS FIGHT BEGINS.`,
    tasks: [
      {
        id: "d45-t1",
        title: "English — Final Comprehension + Grammar Sprint",
        description: "RC passage + error detection + sentence improvement. High accuracy focus — Phase 3 demands consistent 22–25/25 in English.",
        subtasks: [
          {
            id: "d45-t1-s1",
            title: "Reading Comprehension — timed passage",
            description: "One RC passage (400–500 words), answer 5 comprehension questions. Time: 8 minutes max. Strategy: skim → questions → selective re-read.",
            tip: "In SSC CGL Tier 1, RC passages are moderate difficulty. The trap questions test inference, not direct reading.",
            estimatedMins: 15,
            mandatory: true
          },
          {
            id: "d45-t1-s2",
            title: "Error Detection + Sentence Improvement — 20 Qs",
            description: "10 error detection + 10 sentence improvement. Focus on subject-verb agreement, pronoun reference, tense consistency errors — the most common in SSC.",
            tip: "Elimination strategy: in error detection, check each part in sequence. If Part A/B both seem fine, check C before marking D (no error).",
            estimatedMins: 20,
            mandatory: true
          },
          {
            id: "d45-t1-s3",
            title: "Idioms & OWS — 20 rapid-fire Qs",
            description: "20 mixed idioms and one-word substitution questions. Pure accuracy — these are either you know it or you don't. Mark unknowns for GA-style memorization.",
            tip: "Common SSC idioms: 'once in a blue moon', 'bite the bullet', 'cost an arm and a leg'. Know the literal vs figurative meaning distinction.",
            estimatedMins: 10,
            mandatory: true
          }
        ]
      },
      {
        id: "d45-t2",
        title: "Quant — Mixed Sectional Practice",
        description: "Full-section Quant practice: 25 questions, 20-minute target. Mix of all topics from Phase 1+2.",
        subtasks: [
          {
            id: "d45-t2-s1",
            title: "25-question mixed Quant drill — timed",
            description: "Solve 25 Quant questions covering: Algebra (5), Geometry (5), P&L (4), TW (3), STD (3), Mensuration (3), Number System (2). Target: 22+ correct.",
            tip: "Skip any question taking more than 90 seconds on first pass. Return at end. In Tier 1, time is the main differentiator.",
            estimatedMins: 25,
            mandatory: true
          }
        ]
      },
      {
        id: "d45-t3",
        title: "GA — Rapid Revision + Current Affairs",
        description: "20-minute GA session: top 50 facts + recent events recap.",
        subtasks: [
          {
            id: "d45-t3-s1",
            title: "Flash revision — top 50 GA facts",
            description: "Scan your GA revision notes / Telegram GA PDF: top appointments, awards, records, bills. Speed reading, not deep study.",
            tip: "Today's GA session is maintenance, not learning. Trust your 6-week preparation.",
            estimatedMins: 20,
            mandatory: true
          }
        ]
      },
      {
        id: "d45-t4",
        title: "Reasoning — Speed & Accuracy Calibration",
        description: "25 reasoning questions in 15 minutes. Calibrate your speed for Tier 1 exam conditions.",
        subtasks: [
          {
            id: "d45-t4-s1",
            title: "Mixed reasoning — 25 Qs in 15 minutes",
            description: "Strict time: analogy (5), classification (5), series (5), directions (3), blood relations (3), coding-decoding (4). 36 seconds per question.",
            tip: "At 36 seconds/question, you need instant pattern recognition. If you're slower, practice the fast-elimination method on each type.",
            estimatedMins: 15,
            mandatory: true
          }
        ]
      }
    ]
  },

  // ─── DAY 46 ─── June 9, Tuesday (Weekday · Phase 3 BEGINS · hasQuiz: false)
  {
    id: "2026-06-09",
    dayNumber: 46,
    phase: "pre-final-push",
    tier: "pre",
    weekNumber: 7,
    weekType: "weekday",
    totalHours: 2.5,
    hasQuiz: false,
    title: "Phase 3 Day 1 — Mock Warrior Protocol Activated",
    promptBlock: `OPERATIONAL BRIEFING — DAY 46 OF 138
CODENAME: MOCK WARRIOR ACTIVATED

Phase 3. No more quizzes. No more learning new topics. From today until the exam, ONE metric matters: your mock test score.

PHASE 3 PROTOCOL:
Every weekday: 1 full sectional mock OR full mock + targeted revision
Every weekend: 2–3 full mocks + deep analysis session
No new topics. No concept learning. Only REINFORCEMENT and EXECUTION.

WHY NO NEW TOPICS?
Because the exam is in approximately 2–3 weeks. New information introduced now has a 70% chance of causing confusion rather than helping. Everything you need is already in your head. Phase 3 is about RETRIEVAL, not STORAGE.

YOUR DAILY MOCK SCORE PROTOCOL:
- Attempt: 165+ minimum target
- Section minimums: English 20/25, Quant 18/25, Reasoning 22/25, GA 18/25
- Any section below minimum → 30-minute drill of that section next day
- Keep a score log — you should see upward trajectory

TODAY'S FOCUS:
First mock of Phase 3. Set your baseline. Don't be discouraged if it's not 165 — that's the start. Track the trajectory, not the absolute number.

THE MINDSET OF A PHASE 3 HUNTER:
You don't prepare anymore. You PERFORM. Each mock is a dress rehearsal for the real dungeon raid. Imperfect execution now becomes perfect execution on exam day.`,
    tasks: [
      {
        id: "d46-t1",
        title: "Phase 3 Mock #1 — Full Tier 1 Simulation",
        description: "First Phase 3 mock. Strict 60-minute exam conditions. Set your Phase 3 baseline score.",
        subtasks: [
          {
            id: "d46-t1-s1",
            title: "60-minute full mock — strict conditions",
            description: "No pausing. No checking answers mid-way. Treat this as the actual SSC CGL Tier 1 exam. Timer starts, you go.",
            tip: "Recommended order: Reasoning (fast, confidence builder) → English (vocabulary/grammar) → Quant (slowest) → GA (last, knowledge-based).",
            estimatedMins: 60,
            mandatory: true
          },
          {
            id: "d46-t1-s2",
            title: "Score, log, and error category breakdown",
            description: "Mark the test. Log score. Categorize errors: (a) time pressure, (b) concept gap, (c) silly mistake. Today's Phase 3 baseline is your starting point.",
            tip: "If score is below 140: intensify daily drills. 140–160: on track. 160+: excellent, focus on consistency.",
            estimatedMins: 20,
            mandatory: true
          }
        ]
      },
      {
        id: "d46-t2",
        title: "Priority Weak Section Drill — 30 Minutes",
        description: "Target your lowest-scoring section from today's mock with 20–25 focused practice questions.",
        subtasks: [
          {
            id: "d46-t2-s1",
            title: "Weakest section — targeted practice",
            description: "Pull 20–25 questions from your worst section. Do not exceed 30 minutes. Accuracy focus. Understand each wrong answer before moving on.",
            tip: "This 30-minute drill is the most important part of Phase 3 besides the mock itself. Never skip it.",
            estimatedMins: 30,
            mandatory: true
          }
        ]
      },
      {
        id: "d46-t3",
        title: "GA Speed Revision — 20 Minutes",
        description: "Daily GA maintenance: current affairs flash + 1 static topic rapid review.",
        subtasks: [
          {
            id: "d46-t3-s1",
            title: "Current affairs + 1 static GK topic",
            description: "Today's static focus: Indian Polity (constitutional articles 1–50, fundamental rights). Plus scan last week's current affairs headlines.",
            tip: "GA revision should feel effortless by now — you're not learning, you're reminding yourself of what you already know.",
            estimatedMins: 20,
            mandatory: true
          }
        ]
      }
    ]
  },

  // ─── DAY 47 ─── June 10, Wednesday (Weekday · Phase 3 · hasQuiz: false)
  {
    id: "2026-06-10",
    dayNumber: 47,
    phase: "pre-final-push",
    tier: "pre",
    weekNumber: 7,
    weekType: "weekday",
    totalHours: 2.5,
    hasQuiz: false,
    title: "Phase 3 Day 2 — English Precision + Reasoning Speed",
    promptBlock: `OPERATIONAL BRIEFING — DAY 47 OF 138
CODENAME: PRECISION CALIBRATION

Day 2 of Phase 3. Yesterday you set your baseline. Today we begin the refinement process. Specifically: English precision (often the most improvable section in Phase 3) and Reasoning speed.

ENGLISH PRECISION CONCEPT:
SSC CGL Tier 1 English is primarily vocabulary + grammar. In Phase 3, you should be approaching this as a VOCABULARY ATHLETE — you either know the word or you don't. Stop trying to infer words you should have memorized. Instead, this is your last chance to nail the high-frequency unknowns.

HIGH-FREQUENCY ENGLISH TOPICS (memorize these):
1. Antonyms/Synonyms: focus on advanced words not in Batches 1–4
2. Cloze test: 5 blanks, context-dependent — trust intuition developed over 45 days
3. Error detection: subject-verb agreement, pronoun case, tense errors
4. Sentence improvement: cleaner, more formal alternatives
5. Idioms: top 50 SSC-repeated idioms

REASONING SPEED CONCEPT:
Reasoning should be your FASTEST section — target 22/25 in 12 minutes. If you're spending 18+ minutes on reasoning, you're leaving marks on the table. The fix is pattern recognition speed, built through repetition.

DAILY AFFIRMATION:
You are not studying. You are PERFORMING. The knowledge is already inside you. Phase 3 is the excavation process.`,
    tasks: [
      {
        id: "d47-t1",
        title: "Sectional Mock — English Focus (30 Qs in 20 min)",
        description: "English-only sectional practice. 30 questions covering all English topics. Target: 27+ correct.",
        subtasks: [
          {
            id: "d47-t1-s1",
            title: "Mixed English — vocabulary + grammar + RC",
            description: "10 synonyms/antonyms, 5 cloze test blanks, 5 error detection, 5 sentence improvement, 5 idioms/phrases. 20-minute strict timer.",
            tip: "Vocabulary: eliminate wrong options by connotation (positive/negative). Grammar: trust your ear but verify with rule.",
            estimatedMins: 20,
            mandatory: true
          },
          {
            id: "d47-t1-s2",
            title: "Review all wrong answers + unknown words",
            description: "Check each wrong answer. For vocabulary: add unknown words to a 'final 50 words' list. These are your Phase 3 priority vocab.",
            tip: "Your 'final 50 words' list is your Phase 3 cheat sheet. Revise it daily until exam day.",
            estimatedMins: 10,
            mandatory: true
          }
        ]
      },
      {
        id: "d47-t2",
        title: "Reasoning Speed Drill — Pattern Recognition",
        description: "Pure speed training for Reasoning. 30 questions in 18 minutes. Target: 27+ correct.",
        subtasks: [
          {
            id: "d47-t2-s1",
            title: "High-speed reasoning — all major types",
            description: "Series (5), Analogy (5), Classification (5), Directions (3), Coding-Decoding (5), Blood Relations (4), Syllogism (3). 36 seconds per question.",
            tip: "Series: look for arithmetic, geometric, alternating patterns. Coding: identify +1/-1/×2 letter position patterns instantly.",
            estimatedMins: 18,
            mandatory: true
          },
          {
            id: "d47-t2-s2",
            title: "Non-verbal reasoning speed drill",
            description: "15 non-verbal: mirror image (5), water image (3), paper folding (4), embedded figures (3). Target: under 60 seconds each.",
            tip: "Mirror image: flip left-right (not up-down). Water image: flip up-down. Paper folding: mentally unfold step by step.",
            estimatedMins: 12,
            mandatory: false
          }
        ]
      },
      {
        id: "d47-t3",
        title: "Quant Revision — Formula Bank Recall",
        description: "20-minute rapid formula recall session. No practice questions — just verify you remember all critical formulas.",
        subtasks: [
          {
            id: "d47-t3-s1",
            title: "Write all critical Quant formulas from memory",
            description: "In 15 minutes, write: Algebra identities (5), Geometry formulas (10), P&L formulas (4), TW formula, STD formula, Mensuration (8). Verify against notes.",
            tip: "If you can write them all from memory, you'll be able to apply them under exam pressure. If you can't, you're not ready.",
            estimatedMins: 15,
            mandatory: true
          }
        ]
      },
      {
        id: "d47-t4",
        title: "GA Flash Cards — Science + History",
        description: "15-minute high-yield GA revision for Science and History.",
        subtasks: [
          {
            id: "d47-t4-s1",
            title: "Science: Chemistry + Physics top 30 facts",
            description: "Atomic numbers (H, C, N, O, Na, Fe, Au, Ag), pH scale, Newton's laws, Ohm's law, human body facts (blood type, organ functions), diseases and pathogens.",
            tip: "Chemistry: know the first 20 elements + their symbols. Physics: know all basic formula units (force=Newton, pressure=Pascal, etc.).",
            estimatedMins: 15,
            mandatory: false
          }
        ]
      }
    ]
  },

  // ─── DAY 48 ─── June 11, Thursday (Weekday · Phase 3 · hasQuiz: false)
  {
    id: "2026-06-11",
    dayNumber: 48,
    phase: "pre-final-push",
    tier: "pre",
    weekNumber: 7,
    weekType: "weekday",
    totalHours: 2.5,
    hasQuiz: false,
    title: "Phase 3 Day 3 — Quant Speed Drills + GA Power Revision",
    promptBlock: `OPERATIONAL BRIEFING — DAY 48 OF 138
CODENAME: QUANT ACCELERATION

Day 3 of Phase 3. Quant is the section where most SSC CGL aspirants lose their exam. Not because they don't know the concepts — they do. They lose because they're TOO SLOW.

THE QUANT SPEED PROBLEM:
In Tier 1, you have 60 minutes for 100 questions. That's 36 seconds per question on average. Most Quant questions genuinely require 60–120 seconds to solve. The implication: you need to solve the EASY Quant questions in 20–30 seconds to give yourself more time on the hard ones.

FAST QUANT TECHNIQUES:
1. Fractions: know 1/1 through 1/30 as decimals — instant calculation
2. Percentage shortcuts: 10%=÷10, 15%=10%+5%, 25%=÷4, etc.
3. Tables up to 25 by heart
4. Squares 1–30 and cubes 1–15 memorized
5. P&L: plug into formula directly — don't derive from scratch each time
6. TW: assume total work = LCM of days given

GA POWER REVISION:
By exam day, GA should feel like reading your own biography — it's all things you already know. Today: focus on Polity + Economy + Geography. These are the most reliably tested static GA topics in SSC CGL.

PERFORMANCE TRACKING:
After 3 days of Phase 3, you should have a clearer picture of your trajectory. Are your mock scores improving? If yes: stay the course. If no: re-evaluate time allocation — possibly spending more on analysis and less on practice.`,
    tasks: [
      {
        id: "d48-t1",
        title: "Quant Speed Training — Calculation Shortcuts",
        description: "Focus session on calculation speed: tables, squares, cubes, fraction-decimal conversions. Pure memorization + application.",
        subtasks: [
          {
            id: "d48-t1-s1",
            title: "Speed calculation drill — tables, squares, cubes",
            description: "Tables 1–25: recite all in under 3 minutes. Squares 1–30: recite all in under 2 minutes. Cubes 1–15: recite all in under 90 seconds. Time yourself.",
            tip: "If any table/square/cube takes you more than 3 seconds, it's not memorized — it's being calculated. Memorize, don't calculate.",
            estimatedMins: 15,
            mandatory: true
          },
          {
            id: "d48-t1-s2",
            title: "Fraction-decimal-percentage speed conversion",
            description: "1/2 through 1/30 as both decimals and percentages — recite all. Then solve 15 percentage application questions using mental math only.",
            tip: "1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/11=9.09%, 1/12=8.33%, 1/13=7.69%. Know these cold.",
            estimatedMins: 20,
            mandatory: true
          },
          {
            id: "d48-t1-s3",
            title: "25-question Quant timed drill — real PYQs",
            description: "25 SSC CGL PYQ Quant questions. Target: 22+ correct in 22 minutes. Previous years' papers from 2019–2024.",
            tip: "PYQs are gold — topics repeat. Do a quick tally of which topic appears most in your PYQ set. Give it extra attention.",
            estimatedMins: 25,
            mandatory: true
          }
        ]
      },
      {
        id: "d48-t2",
        title: "GA Power Revision — Polity + Economy + Geography",
        description: "40-minute deep GA session on three high-yield static topics.",
        subtasks: [
          {
            id: "d48-t2-s1",
            title: "Polity — Constitution + Parliament + Articles",
            description: "Key articles: Article 1 (India is Union), 14 (Equality), 19 (Freedom), 21 (Life), 32 (Constitutional remedies), 51A (Fundamental duties), 368 (Amendment). Parliament: Rajya Sabha 250, Lok Sabha 545. PM appointment, President election.",
            tip: "SSC frequently asks: which article abolished untouchability (17), right to education (21A), which list has defence (Union).",
            estimatedMins: 20,
            mandatory: true
          },
          {
            id: "d48-t2-s2",
            title: "Economy + Geography — rapid revision",
            description: "Economy: GDP, GNP, inflation types, RBI functions, budget terms (fiscal deficit, revenue deficit, primary deficit). Geography: longest river (Nile/Ganga), highest peak (Everest/K2), India's states-capitals, major passes.",
            tip: "Economy questions in SSC: mostly basic — know RBI rate types (repo, reverse repo, CRR, SLR), NABARD function, types of banks.",
            estimatedMins: 20,
            mandatory: false
          }
        ]
      },
      {
        id: "d48-t3",
        title: "English — Active/Passive + Direct/Indirect Sprint",
        description: "Grammar revision: voice and narration — consistently tested in SSC CGL.",
        subtasks: [
          {
            id: "d48-t3-s1",
            title: "20 Active/Passive transformation questions",
            description: "Convert 10 active to passive, 10 passive to active. Focus: auxiliary verb changes (is/are/was/were + V3 for passive), agent ('by' phrase).",
            tip: "Common error: forgetting to change the object to subject and vice versa. Always swap subject-object when changing voice.",
            estimatedMins: 15,
            mandatory: true
          }
        ]
      }
    ]
  },

  // ─── DAY 49 ─── June 12, Friday (Weekday · Phase 3 · hasQuiz: false)
  {
    id: "2026-06-12",
    dayNumber: 49,
    phase: "pre-final-push",
    tier: "pre",
    weekNumber: 7,
    weekType: "weekday",
    totalHours: 2.5,
    hasQuiz: false,
    title: "Phase 3 Day 4 — Full Mock + Comprehensive Weak Area Audit",
    promptBlock: `OPERATIONAL BRIEFING — DAY 49 OF 138
CODENAME: WEEK 7 FINALE

Day 49. Seven weeks complete. You are approaching the final stretch before the Tier 1 exam.

WEEKLY AUDIT — WHAT THIS WEEK ACCOMPLISHED:
- Days 43–44: Final Phase 2 weekend — double mocks, concept gap filling
- Day 45: FINAL QUIZ — 45-day quiz protocol successfully completed
- Days 46–49: Phase 3 launch — mock warrior mode activated, English/Quant/Reasoning speed calibrated

THE EXAM CLOCK:
SSC CGL Tier 1 is approximately 2–3 weeks away. You have approximately 12–13 more preparation days in Phase 3. Each one counts at a premium now.

FRIDAY MANDATE:
Friday is your weekly performance assessment. Today's full mock + analysis tells you where you stand heading into the weekend. The weekend will then be 2–3 mocks + whatever area this assessment reveals.

SCORE TRAJECTORY CHECK:
Compare today's score to Day 46's baseline. Are you improving? Even +5–8 marks per week is an excellent trajectory. The goal is to hit 170+ by exam day from a 150–160 baseline.

THIS WEEKEND'S PRIORITY:
Whatever this Friday mock reveals as your weakest section — that becomes Saturday's deep drill target before Mock 1. Don't waste the weekend doing what you're already good at.

HUNTER'S RESOLVE:
There are aspirants preparing right now who will not complete Phase 3. They will panic, scatter their focus, try to learn new topics, and lose confidence. You will not be one of them. You know exactly what to do. Execute.`,
    tasks: [
      {
        id: "d49-t1",
        title: "Weekly Assessment Mock — Full Tier 1",
        description: "Friday benchmark mock. Full 100 questions, 60 minutes. This score sets the weekend agenda.",
        subtasks: [
          {
            id: "d49-t1-s1",
            title: "60-minute full mock — benchmark attempt",
            description: "Complete mock under exam conditions. This is your Week 7 benchmark. Push for your personal best today.",
            tip: "Mental preparation before starting: take 3 deep breaths, set intent for each section (target scores), begin.",
            estimatedMins: 60,
            mandatory: true
          },
          {
            id: "d49-t1-s2",
            title: "Detailed section-wise analysis",
            description: "Calculate: total score, section scores, accuracy percentage, questions attempted. Compare to Monday's baseline (Day 46). What improved? What didn't?",
            tip: "Keep a weekly score log. Trend line matters more than any single score. Upward trend = Phase 3 is working.",
            estimatedMins: 20,
            mandatory: true
          }
        ]
      },
      {
        id: "d49-t2",
        title: "Weak Section Intensive — Based on Today's Mock",
        description: "30-minute targeted drill on today's weakest section. Sets up weekend strategy.",
        subtasks: [
          {
            id: "d49-t2-s1",
            title: "Identify + drill weakest section",
            description: "Take your single lowest-scoring section from today's mock. Solve 20 targeted questions from that section. Focus on the specific question types you missed.",
            tip: "Be surgical: if Quant's problem is DI specifically, practice DI only. Don't generalize — specificity is efficiency.",
            estimatedMins: 30,
            mandatory: true
          }
        ]
      },
      {
        id: "d49-t3",
        title: "GA + Vocabulary — Weekend Prep",
        description: "15-minute GA and vocab prep to set up the weekend's focus areas.",
        subtasks: [
          {
            id: "d49-t3-s1",
            title: "Update final word list + GA weak areas",
            description: "Add any new unknown words from today's mock to your 'Final 50' list. Note any GA topics that tripped you up. These two lists are your weekend drill priorities.",
            tip: "Your 'Final 50 words' list should be reviewed DAILY until exam day. Even 5 minutes matters.",
            estimatedMins: 15,
            mandatory: true
          }
        ]
      }
    ]
  }
];

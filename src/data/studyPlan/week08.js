// Week 8 — Jun 13 (Sat) to Jun 19 (Fri) — Phase 3: Final Pre-Exam Push | Days 50-56
// NO new chapters. Mock tests dominate. Revision-only mode activated.
const WD_ENG = (id, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Revision Sprint (45 min)', subtasks })
const WD_GA  = (id, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA Rapid Recall (45 min)', subtasks })
const WD_QR  = (id, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Speed Drill Sprint (60 min)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`,  subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:120, title:'Full Mock Test (2 Hours)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision', icon:'🔍', color:'#06b6d4', duration:60, title:'Mock Analysis + Weak Areas (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`,  subject:'Deep Revision', icon:'🧠', color:'#8b5cf6', duration:240, title:'Deep Revision Block (4 Hours)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-06-13',dayNumber:50,date:'2026-06-13',phase:3,tier:1,weekNumber:8,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 50 — Triple Mock Saturday (Phase 3 Begins)',
    promptBlock:`OPERATIVE BRIEFING — DAY 50 (PHASE 3: FINAL PUSH BEGINS)

You have 12 days until Tier 1. This week marks the transition from learning to executing. Phase 3 is simple: DO NOT study new topics. ONLY take mocks, analyze errors, and sprint on your weakest 3 question types.

TODAY: Take 3 full mocks (back-to-back or with 30-minute breaks). Track your scores. The variance between your best and worst mock score should be less than 10 marks by exam day. Consistency is the goal, not peak performance.

PRIORITY ANALYSIS: After each mock, categorize errors into 3 types: (A) Concept error — you didn't know the method, (B) Application error — you knew but applied wrong, (C) Speed error — you knew but ran out of time. Type C errors resolve with practice. Type A errors need 1 focused revision session. Type B errors need pattern recognition training. Focus your evening on Type A errors only from today's mocks.`,
    tasks:[
      WE_MT('d50',[
        s('d50-m1','Full Mock Test 1 (60 min)','Take one complete Tier 1 mock under strict exam conditions. Phone away, no distractions, 60-minute timer. Aim for 145+ attempts out of 200 questions.','Section strategy: Reasoning first (fastest marks), English second, Quant last (most thinking required). GA is fixed speed — spend exactly 8 minutes on it.',60),
        s('d50-m2','Full Mock Test 2 (60 min)','Second full mock immediately after a 20-minute break. Notice if your accuracy drops — this identifies stamina weaknesses.','If accuracy drops in Mock 2: your focus is the problem, not knowledge. Practice deep breathing for 2 minutes before each section.',60),
      ]),
      WE_REV('d50',[
        s('d50-r1','Full Error Analysis — Both Mocks','Go through every wrong answer in both mocks. For each error: (1) Write the correct method in 1 line. (2) Label as A/B/C error type. (3) Mark the topic. You should have a prioritized list of 3 topics to revise this week.','Do NOT redo every question. Focus on wrong answers and the specific error type. This analysis is more valuable than another mock.',45),
        s('d50-r2','Targeted Revision — Top 3 Error Topics','Based on error analysis, choose 3 topics and do 15 PYQs each from those topics only. Speed is not the priority here — accuracy and method clarity are.','Write the solving method for each topic in 2 sentences. Test yourself on whether you can apply it without hesitation.',30),
      ]),
    ],
  },
  {
    id:'2026-06-14',dayNumber:51,date:'2026-06-14',phase:3,tier:1,weekNumber:8,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 51 — Vocabulary Final Lock + Sectional Mocks',
    promptBlock:`OPERATIVE BRIEFING — DAY 51

Vocabulary is now locked. You should NOT be learning new words at this stage — only reinforcing what's already in your memory. Run through your Blackbook or notes at high speed. The goal is recognition, not memorization.

ENGLISH FOCUS: Idioms, OWS, and Error Spotting PYQs from the last 5 years. These are fixed-difficulty question types — you either know them or you don't. If you've been consistent, you know 70%+ of them. The remaining 30% are low-frequency items you can skip.

REASONING: Pattern completion and series questions are where engineers lose 5-6 marks to time pressure. Practice the 30-second rule aggressively today: if you can't identify the pattern in 30 seconds, mark and move. Do 60 reasoning questions today under this strict rule.`,
    tasks:[
      WE_DS('d51',[
        s('d51-d1','Vocabulary Rapid Review — Full Blackbook Pass','Go through your vocabulary list at 3× your normal speed. You are NOT learning — you are recognizing. For any word you hesitate on for more than 2 seconds, circle it. You should circle no more than 20 words in the entire run.','Spaced repetition: Circle the words you hesitated on in red. Come back to ONLY these circled words in the evening for 10 minutes.',90),
        s('d51-d2','English Sectional Mock — 50 Questions (15 min)','Take a full English section from a recent mock. 50 questions in 15 minutes. Do NOT overthink — go with first instinct on straightforward questions.','Target: 38+ correct. If you score below 35, it indicates vocabulary gaps that need immediate attention today.',15),
        s('d51-d3','Reasoning — 60 Qs in 30 min (Pattern + Series)','Solve 60 reasoning questions: 20 pattern completion, 20 number series, 20 letter/alpha-numeric series. Hard rule: 30 seconds per question, then next.','The pattern you should develop: scan all 4 options first, then look for what discriminates them. This reverse approach is 40% faster for pattern questions.',30),
      ]),
      WE_REV('d51',[
        s('d51-r1','Weak Vocabulary Words — Final Revision','Go through only the circled words from your morning session. Create 1 mental image or mnemonic for each. Then cover the list and recall each word meaning.','Mnemonic technique: associate the word with a vivid, unusual image. "Laconic" = imagine a machine (La-CONE-ic) that only produces cones of silence. Absurd but memorable.',30),
        s('d51-r2','GA Rapid Recall — Current Affairs Last 45 Days','Run through current affairs from Apr-Jun 2026 at high speed. Focus: government appointments, awards, sports, defense exercises, economic data.','At this stage, just scan the headlines. If you don\'t recall the detail in 3 seconds, accept the loss. Do not re-read full articles.',30),
      ]),
    ],
  },
  {
    id:'2026-06-15',dayNumber:52,date:'2026-06-15',phase:3,tier:1,weekNumber:8,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 52 — Error Spotting PYQs + Quant Speed Drills',
    promptBlock:`OPERATIVE BRIEFING — DAY 52

12 days to exam. Today's English block is entirely PYQ-based. No grammar theory. No new concepts. 40 Error Spotting questions from last 5 years — answer by pattern recognition, not rule application. Your brain has absorbed the rules. Trust it.

QUANT: Today's speed drill targets Percentage, SI/CI, and Profit/Loss — the 3 most common Quant topics in Tier 1. Each of these should take you under 30 seconds per question using ratio/fraction methods. If you're taking longer, you're using algebra — switch methods immediately.`,
    tasks:[
      WD_ENG('d52',[
        s('d52-e1','40 Error Spotting PYQs — Last 5 Years','Solve 40 error spotting questions from SSC CGL 2020-2024. Time limit: 8 minutes (12 seconds per question). Mark answers first, then check — do not look up rules mid-question.','Pattern to remember: Tier 1 error spotting always tests the same 6 error types: S-V agreement, pronoun reference, tense inconsistency, preposition misuse, article misuse, comparative degree. If you identify which of these 6 it is, you solve it 90% faster.',40),
        s('d52-e2','Idioms PYQs — 25 Questions','25 idiom questions from PYQs. If you know the idiom: mark and move in 5 seconds. If you don\'t know it: use elimination (2 options usually don\'t fit grammatically).','For elimination: idioms with extreme/absolute meanings ("go to the wall" = complete failure) rarely have synonyms that use moderate language. Use tone matching.',15),
      ]),
      WD_QR('d52',[
        s('d52-qr1','60 PYQs — Percentage + Profit/Loss + SI/CI','Solve 60 PYQs from these 3 topics combined. RULE: Fraction method only. No x/y algebra. Target: 2 minutes per 5 questions (24 seconds per question).','Keep your fraction equivalents sheet open: 1/6=16.67%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/11=9.09%. The moment you see a percentage, convert to fraction and compute.',35),
        s('d52-qr2','Reasoning — Classification + Analogy (30 Qs)','30 questions: 15 classification, 15 analogy. Target: 15 minutes maximum. These are free marks — do not spend more than 30 seconds on any question.','For classification: find the ODD ONE OUT by identifying what 3 of the 4 share. Never try to disprove all 4 — find the 3-group first.',20),
      ]),
    ],
  },
  {
    id:'2026-06-16',dayNumber:53,date:'2026-06-16',phase:3,tier:1,weekNumber:8,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 53 — Reading Comprehension Sprint + Geometry Formulas',
    promptBlock:`OPERATIVE BRIEFING — DAY 53

Reading Comprehension is 2-3 passages × 5 questions each in Tier 1. That's 10-15 marks from approximately 8 minutes of work. The key insight: SSC RC questions test detail retrieval, NOT interpretation. The answer is always explicitly in the passage. Do NOT infer.

GEOMETRY today: Triangles, circles, and quadrilateral properties. These are formula-heavy. Today's session is pure formula recall — not problem-solving. Every formula should roll off your tongue instantly by exam day.`,
    tasks:[
      WD_ENG('d53',[
        s('d53-e1','RC Passages — 3 Passages, 15 Questions (10 min)','Read 3 RC passages and answer 15 questions in under 10 minutes. Strategy: read questions first, then scan passage for keywords from each question.','Scanning strategy: Tier 1 RC questions are sequentially ordered — Q1 answer is usually in para 1, Q3 in para 2-3, etc. Use this to locate answers faster.',30),
        s('d53-e2','Fill in the Blanks — 25 PYQs','25 FIB questions focusing on prepositions, articles, and vocabulary. These appear 5-8 times in Tier 1 and are pure pattern recognition after adequate practice.','For preposition FIBs: narrow to 2 options, then ask "what would a native speaker say?" — your subconscious pattern recognition is usually correct.',15),
      ]),
      WD_QR('d53',[
        s('d53-qr1','Geometry Formula Recall Session','NOT problem solving. Close your notes and write down: (a) all triangle theorems (Pythagoras, angle bisector, median), (b) circle theorems (chord, tangent, angle in segment), (c) all area formulas for quadrilaterals. Then check and re-learn what you missed.','Formula consolidation at this stage = guaranteed marks. A formula you know perfectly = 1 mark guaranteed. A formula you half-know = 0 marks with –0.5 penalty risk.',20),
        s('d53-qr2','30 Geometry PYQs — Speed Application','Apply the formulas from your recall session on 30 PYQs. Time limit: 25 minutes. For any question where you don\'t know the formula: skip immediately, no guessing.','The exam trap: geometry questions with "nice" answer options tempt you to guess. Resist. An unanswered question costs 0. A wrong guess costs 0.5.',30),
      ]),
    ],
  },
  {
    id:'2026-06-17',dayNumber:54,date:'2026-06-17',phase:3,tier:1,weekNumber:8,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 54 — GA Full Revision + Algebra/Trig Speed',
    promptBlock:`OPERATIVE BRIEFING — DAY 54

GA is the highest-variance section. Candidates with strong GA can score 40/50 (full marks). Candidates with weak GA often score 20-25. Your target is 35+. Today: full GA sprint covering all static + current affairs domains. This is not detailed study — this is rapid recall across all topics.

ALGEBRA and TRIGONOMETRY: By now you should know all identities. Today's test: can you apply them under time pressure? 20 algebra + 20 trig PYQs in 25 minutes. If you can't, it means the method is not automatic yet.`,
    tasks:[
      WD_GA('d54',[
        s('d54-ga1','Static GK Rapid Recall — All Domains','Run through mental recall for: Polity (important articles, amendments), History (key events/years/battles), Geography (rivers, peaks, passes), Science (physics laws, chemistry reactions, biology), Economy (key institutions, policies). 2 minutes per domain — write 10 facts per domain on a blank sheet.','Memory refresh rule: if you can write 8/10 facts for a domain, you\'re ready. If you write less than 6/10, spend 5 minutes re-reading that domain\'s notes.',35),
        s('d54-ga2','Current Affairs — Apr to Jun 2026 Flash Review','Scan your current affairs compilation for Apr-Jun 2026. Focus: PM/CM appointments, India-specific international agreements, major schemes launched, sports championships.','Priority topics: India-specific events score more than global events in SSC GA. When in doubt between two options, pick the India-centric one.',15),
      ]),
      WD_QR('d54',[
        s('d54-qr1','20 Algebra + 20 Trig PYQs — Pure Speed (25 min)','Alternating: 1 algebra, 1 trig, 1 algebra, 1 trig... 40 questions total in 25 minutes. Goal: automatic identity application.','Trig shortcut: sin30=0.5, cos30=√3/2, tan45=1, sin60=√3/2, cos60=0.5 should be instant recall. If they\'re not, write them 10 times right now.',25),
        s('d54-qr2','Number System + HCF/LCM — 20 PYQs','These appear 3-4 times in every Tier 1 exam. Target: 15 minutes, zero wrong answers. If you get any wrong, identify which property you forgot.','HCF/LCM relationship: HCF × LCM = Product of numbers (only for 2 numbers). For 3+ numbers this doesn\'t apply — memorize this distinction.',20),
      ]),
    ],
  },
  {
    id:'2026-06-18',dayNumber:55,date:'2026-06-18',phase:3,tier:1,weekNumber:8,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 55 — Full Mock + Weak Section Targeting',
    promptBlock:`OPERATIVE BRIEFING — DAY 55

Today's mock must be treated as the real exam. Wake up at the same time you'll wake on exam day. Eat the same food. Sit at the same desk. This is psychological conditioning — your brain needs to associate "exam conditions" with "calm performance."

After the mock: your score today is irrelevant. What matters is your error classification. 7 days from now, you take the actual exam. Your job tonight is to find your 3 most-expensive error types (most marks lost per error category) and fix them.`,
    tasks:[
      WD_ENG('d55',[
        s('d55-e1','Full Mock Simulation — Exam Day Protocol','Take a full mock under exact exam conditions: 60-minute timer, no phone, same physical setup as exam hall. Do not pause or check anything.','Mindset: treat this as your final rehearsal. Your exam-day performance is the average of your last 7 mocks, not your best mock.',60),
        s('d55-e2','Post-Mock Error Deep Dive','For every wrong answer: write (a) what you thought the answer was and why, (b) what the correct answer is and why. This forces genuine comprehension of each mistake.','Do not just look at the answer key. The act of explaining WHY you were wrong is what prevents the same error in the actual exam.',30),
      ]),
      WD_QR('d55',[
        s('d55-qr1','Targeted PYQ Sprint — 3 Weakest Topics','Based on mock error analysis: pick your 3 weakest Quant topics. Solve 15 PYQs from each (45 total). Focus on identifying where in the method you fail.','Diagnostic question: for each wrong answer, at which step did you make the error? (1) Setup, (2) Calculation, (3) Answer selection. Each has a different fix.',35),
        s('d55-qr2','Reasoning Rapid Fire — 30 Qs (10 min)','30 easy-medium reasoning questions. Time pressure drill: 20 seconds per question. This trains your brain to not overthink simple questions.','Overthinking is the enemy of reasoning sections. Your first instinct on simple questions is correct 80% of the time. Trust it and move.',15),
      ]),
    ],
  },
  {
    id:'2026-06-19',dayNumber:56,date:'2026-06-19',phase:3,tier:1,weekNumber:8,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 56 — Revision Lock + Compound Interest Deep',
    promptBlock:`OPERATIVE BRIEFING — DAY 56

One week left. Today is the last day for any formula-level learning. After today: only application and mocks. CI (Compound Interest) and Time-Speed-Distance are commonly missed topics where 3-4 marks are lost by candidates who "almost know" the formulas.

MENTAL CONDITIONING: Start practicing the exam entry sequence. When you sit down to take the exam: (1) Read all instructions, (2) Take 3 deep breaths, (3) Start with Reasoning, (4) Never return to unanswered questions until you've completed your first pass. Internalize this sequence today.`,
    tasks:[
      WD_ENG('d56',[
        s('d56-e1','Synonym/Antonym Final Sprint — 50 Questions','50 PYQ synonym/antonym questions from last 5 years. Target: 40 correct. For any miss: write the word and its meaning + a synonym/antonym pair in your notes.','Elimination tip: if you know 2 of the 4 options are wrong (too extreme or wrong field), you have a 50% chance on the remaining two. Use contextual clues from the word\'s tone.',25),
        s('d56-e2','Active/Passive — Final 20 PYQs','Transformation of voice: 20 PYQs. These are completely formula-based. If you know the formula table, you should score 18-20/20.','Voice formula: Active = Subj + Aux(Tense) + V-base + Obj → Passive = Obj + be(Tense) + V3 + by + Subj. The tense mapping is the most-tested concept.',20),
      ]),
      WD_QR('d56',[
        s('d56-qr1','CI and Time-Speed-Distance — 30 PYQs','30 mixed PYQs: 15 CI/SI, 15 TSD. CI key concept: Effective rate for 2 years = a + b + ab/100 where a and b are annual rates. TSD key: use ratio tables for multi-leg journeys.','Most common CI trick question: "What is the effective rate for 2 years at 10% PA?" Answer = 10 + 10 + 1 = 21%. Memorize this shortcut.',35),
        s('d56-qr2','Calendar + Clock — 10 PYQs (Speed Test)','10 PYQs on calendar and clock problems. These appear 1-2 times in Tier 1. Quick wins if formulas are memorized. Target: 8 minutes maximum.','Calendar formula: Jan 1, 2000 = Saturday. Count odd days from reference. Clock formula: hands coincide every 65.45 minutes (approx 65 + 5/11 minutes).',15),
      ]),
    ],
  },
]

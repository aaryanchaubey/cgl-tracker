// Week 6 — May 30 (Sat) to Jun 5 (Fri) — Phase 2: Acceleration | Days 36-42 | ALL HAVE QUIZ
const e=(id,s)=>({id:`${id}-eng`,subject:'English',icon:'📖',color:'#6366f1',duration:45,title:'English Block (45 min)',subtasks:s})
const g=(id,s)=>({id:`${id}-ga`,subject:'General Awareness',icon:'🌏',color:'#10b981',duration:45,title:'GA & Current Affairs (45 min)',subtasks:s})
const q=(id,s)=>({id:`${id}-qr`,subject:'Quant + Reasoning',icon:'🔢',color:'#f59e0b',duration:60,title:'Quant + Reasoning Sprint (60 min)',subtasks:s})
const ds=(id,s)=>({id:`${id}-ds`,subject:'Deep Study',icon:'🧠',color:'#8b5cf6',duration:300,title:'Deep Study Block (5 Hours)',subtasks:s})
const mt=(id,s)=>({id:`${id}-mt`,subject:'Mock Test',icon:'⏱️',color:'#ef4444',duration:120,title:'Mock Test Block (2 Hours)',subtasks:s})
const rv=(id,s)=>({id:`${id}-rev`,subject:'Revision & Analysis',icon:'🔍',color:'#06b6d4',duration:60,title:'Post-Mortem Revision (1 Hour)',subtasks:s})
const st=(id,title,desc,tip,mins,m=true)=>({id,title,description:desc,tip,estimatedMins:mins,mandatory:m})

export const DAYS=[
  {
    id:'2026-05-30',dayNumber:36,date:'2026-05-30',phase:2,tier:1,weekNumber:6,
    weekType:'weekend',totalHours:8,hasQuiz:true,
    title:'Day 36 — Double Full Mock Weekend + P&L Advanced',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 36 (MAXIMUM INTENSITY WEEKEND)\n\nSix weeks in. The mock frequency now increases to twice per session.\n\nMOCK PROTOCOL UPGRADE:\nTwo full Tier 1 mocks today (not one). Back-to-back simulation. Between mocks: 10-minute analysis only — find 3 critical errors, note them, then immediately start Mock 2. This builds cognitive endurance and prevents score collapse in difficult exam shifts.\n\nP&L ADVANCED (3 hrs):\nProfit/Loss with discount chains: If marked price is 40% above CP and successive discounts of 15%, 10% → net SP = CP×1.4×0.85×0.9. False weight and measurement problems: "A shopkeeper cheats by using 900g weight instead of 1kg" → effective gain = (1000-900)/900 × 100 = 11.11%. Cost price of N items but selling price of M items → profit/loss calculation.\n\nAIM TODAY: First mock percentile + Second mock percentile — are they consistent? Large variance = fatigue or environment issue.`,
    tasks:[
      ds('d36',[
        st('d36-ds1','Advanced P&L — All Problem Types (90 min)','Successive discounts: (1-d1)(1-d2)... of MP. False weight: actual gain% = (100/(100-error%)) - 1)×100. Cost n items, sell at cost of m items: profit% = (n-m)/m × 100. Dishonest dealer: sells at SP but weighs less → actual gain calculation.','False weight shortcut: Uses 900g instead of 1000g → gain% = (difference/used weight) × 100 = 100/900 × 100 = 11.11%.',90),
        st('d36-ds2','DI — Advanced Multi-Set (90 min)','Two related data sets: table + pie chart. Practice extracting data from one set to answer questions about the other. Time: 8-9 minutes per combined DI set.','Read both charts before answering ANY question. Understanding the relationship between charts prevents re-reading.',90),
        st('d36-ds3','English — Error Spotting Comprehensive (60 min)','30 error spotting questions — 5 each from: SVA, Tense, Voice/Narration error, Preposition, Comparison, and Vocabulary (confusable words). Full spectrum coverage.','Error spotting strategy: Read the sentence ALOUD in your head. Your language intuition catches approximately 60% of errors. Grammar rules catch the remaining 40%.',60),
        st('d36-ds4','Fractional Equivalents Drill (60 min)','Memorize all fractional equivalents: 1/2=50%, 1/3=33.33%, 1/4=25%, 1/5=20%, 1/6=16.67%, 1/7=14.28%, 1/8=12.5%, 1/9=11.11%, 1/10=10%, 1/11=9.09%, 1/12=8.33%, 1/13=7.69%, 1/14=7.14%, 1/15=6.67%, 1/16=6.25%, 1/17=5.88%, 1/18=5.55%, 1/20=5%, 1/25=4%, 1/30=3.33%. Drill: decimal → fraction → decimal.','These allow you to solve Percentage and Ratio questions in under 10 seconds. The fractional equivalents table is one of the highest-ROI memorization tasks in Tier 1 prep.',60),
      ]),
      mt('d36',[
        st('d36-mt1','Full Tier 1 Mock 1 — 60 Minutes','Eleventh mock. Section order: GA (7 min) → Reasoning (17 min) → English (12 min) → Quant (24 min). This order maximizes score if your GA is fast and accurate.','After Mock 1: Note only your top 3 errors. Do NOT do full analysis yet — save that for the Revision block.',60),
        st('d36-mt2','Full Tier 1 Mock 2 — 60 Minutes','Twelfth mock! Immediately after Mock 1 with only a 10-minute break. Test cognitive endurance — can you maintain the same speed and accuracy?','Common in SSC: Two shifts in one day (some candidates reattempt). This drill builds capacity for exactly that scenario.',60),
      ]),
      rv('d36',[
        st('d36-rev1','Dual Mock Error Analysis','Compare errors from Mock 1 and Mock 2. Did the same question types cause errors in both? That\'s a systematic weakness. Did different types cause errors? That\'s inconsistency.','Systematic weakness: address with targeted practice. Inconsistency: address with more mock volume.',30),
        st('d36-rev2','Fractional Equivalents Recall Test','Without notes: write fractions 1/2 through 1/30. Score. Any wrong = 5-minute re-drill.',30),
      ]),
    ],
  },
  {
    id:'2026-05-31',dayNumber:37,date:'2026-05-31',phase:2,tier:1,weekNumber:6,
    weekType:'weekend',totalHours:8,hasQuiz:true,
    title:'Day 37 — Double Simulation Day + Grammar Final Sprint',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 37\n\nSecond double-simulation day. This is the Week 6 accelerator weekend.\n\nGRAMMAR FINAL SPRINT (2 hrs):\nEvery English grammar rule, in one consolidated session. Write the rule, write the example, write the common trap. Then take 30 error-spotting questions at exam speed. Target: 28+/30.\n\nDI + REASONING COMBINED (3 hrs):\nPractice DI sets back-to-back with Reasoning — this is the exact structure of Tier 2 Session I (Section II switches between Math and Reasoning). Building cognitive flexibility between these two different thinking modes is essential.`,
    tasks:[
      ds('d37',[
        st('d37-ds1','Grammar Final Sprint — All Rules (90 min)','Speed revision: SVA (10 min) → Articles (10 min) → Tenses (10 min) → Voice (10 min) → Narration (10 min) → Prepositions (10 min) → Degrees of Comparison (10 min) → Conjunctions (10 min). 30 mixed error-spotting questions after.','Target: 28+/30 in error spotting after this revision. If below, re-identify the specific rules causing errors.',90),
        st('d37-ds2','Spelling + One-Word Comprehensive Revision (90 min)','Review ALL spelling rules learned: double letters, ie/ei rule, silent letters. Then all OWS batches 1-3 in random order recall test. Record final accuracy.','OWS target: 90%+ recall across all 150 words. Any below 70% batch needs an emergency re-run.',90),
        st('d37-ds3','DI + Reasoning Combined Session (90 min)','Alternate blocks: 15-min DI (1 set) → 10-min Reasoning (10 Qs) → 15-min DI → 10-min Reasoning → 15-min DI → 10-min Reasoning → 15-min review. This trains the cognitive switching required for Tier 2.','The brain\'s adjustment time between math and logic tasks is ~5 seconds. This drill reduces that adjustment time.',90),
        st('d37-ds4','Speed-Distance-Time Advanced + Trains (60 min)','Relative speed problems (same/opposite direction). Circular track (meeting time = LCM). Train crossing problems. Platform + bridge crossing. Two trains meeting.','Two trains from A and B: meeting time = (distance between them) / (sum of speeds). This is the single most common STD question type.',60),
      ]),
      mt('d37',[
        st('d37-mt1','Full Tier 1 Mock 1 — 60 min','Thirteenth mock. Percentile target: 98th+ on your platform. Apply all acceleration phase learning.','If percentile drops from previous week\'s average: identify what changed. Fatigue? Different mock difficulty? Specific topic weakness?',60),
        st('d37-mt2','Full Tier 1 Mock 2 — 60 min','Fourteenth mock. Second consecutive full mock. Measure: does your percentile drop significantly in Mock 2 vs Mock 1? If drop >5 percentile points: endurance issue.',60),
      ]),
      rv('d37',[
        st('d37-rev1','Weak Area Protocol','Top 3 weaknesses from this week\'s 4 mocks. Each weakness: write the specific question type, the mistake made, the correct approach. This error catalog is your exam-day prevention checklist.','Error catalog: Turn weaknesses into a personal "trap question list." Reviewing this list before the exam prevents repeat errors.',30),
        st('d37-rev2','Week 6 Momentum Check','14 mocks completed! Calculate your mock 10-14 average percentile. Week 6 target: consistently above 97th percentile. Plan remaining 2-3 weeks strategy.','Two weeks remain before likely exam. Plan: Week 7 with final quizzes → Week 8-9 pure mock sprint → Exam day.',30),
      ]),
    ],
  },
  {
    id:'2026-06-01',dayNumber:38,date:'2026-06-01',phase:2,tier:1,weekNumber:6,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 38 — Vocabulary Final Batch 4 + P&L PYQs + Non-Verbal Final',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 38\n\nJune begins. 24 days to Tier 1 (estimated). Vocabulary and Non-Verbal locked today.\n\nVOCABULARY: Final batch of 50 vocabulary words. After today, your vocabulary bank will be 200+ OWS + 150+ Idioms + 100+ Synonyms/Antonyms. This is the complete high-frequency SSC vocabulary arsenal.\n\nQUANT: P&L PYQs — all advanced types covered in Day 36, now applied. Track your solve time per question. Target: under 25 seconds per arithmetic PYQ.\n\nREASONING: Non-Verbal final practice. After today, these should be zero-error, under 10 seconds per question. Mirror, Water, Embedded, Pattern completion — purely visual processing.`,
    tasks:[
      e('d38',[
        st('d38-e1','Vocabulary Batch 4 — Final 50 Words','Focus on less common but high-SSC-frequency words: Perspicacious (keenly perceptive), Obsequious (overly compliant), Equivocal (ambiguous), Veracious (truthful), Recidivism (repeated criminal behavior), Ameliorate (improve), Exacerbate (worsen), Propitious (favorable), Inimical (harmful), Perfidious (treacherous).','Plus 40 more advanced words. After today\'s batch: total vocabulary across all categories = 550+ words. You\'re exam-ready on vocabulary.',25),
        st('d38-e2','Complete Vocabulary Recap Test (20 min)','Test: 10 OWS + 10 Idioms + 10 Synonyms + 10 Antonyms = 40 random words from all batches. Target: 36+/40.','This is your final vocabulary benchmark before the exam. If <36: schedule daily 10-minute vocab flash reviews.',20),
      ]),
      g('d38',[
        st('d38-ga1','Current Affairs — June 2026 Opening Week','All news from June 1 onwards. Focus on major events that could appear in Tier 1 scheduled in late June.','Timeline: Tier 1 is estimated late June. June CA will be heavily tested. Stay current — daily commute video essential.',20),
        st('d38-ga2','Sports CA Comprehensive','Olympics 2024 medals review (gold medalists from India), Commonwealth Games highlights, Asian Games, IPL 2025 winner, FIFA World Cup 2026 updates (teams qualified, host cities).','Olympics: India\'s 6 medals in Paris 2024. Gold: Neeraj Chopra (Javelin) — verify latest from CA sources.',25),
      ]),
      q('d38',[
        st('d38-qr1','40 P&L PYQs — All Types (Time Challenge)','All P&L types: simple, successive discounts, false weight, dishonest dealer, cost n sell m, combined. Target: each question in under 25 seconds using fractional equivalents and cross-multiplication.','Track your average solve time. Record: how many solved in <25 sec vs >25 sec. Target by exam: 90% in <25 seconds.',35),
        st('d38-qr2','Non-Verbal Final — 50 Questions (25 min)','Mirror Images (15) + Water Images (10) + Pattern Completion (10) + Paper Folding (10) + Embedded Figures (5). Target: 48+/50 in under 25 minutes. These are free marks.','Any non-verbal question taking >15 seconds is taking too long. Visual processing should be instantaneous after 6 weeks.',25),
      ]),
    ],
  },
  {
    id:'2026-06-02',dayNumber:39,date:'2026-06-02',phase:2,tier:1,weekNumber:6,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 39 — Grammar Final Rules + Speed-Time-Distance Final',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 39\n\nGrammar rules locked. Speed-Time-Distance finalized.\n\nENGLISH: Grammar final sprint — focus only on the rules that were still marked ✗ in your Day 35 audit. If all rules were ✓, upgrade today to a comprehensive English mock (45 questions, 45 minutes).\n\nQUANT: Speed-Time-Distance advanced problems — relative speed, circular tracks, train problems with platforms. These types have fixed formula structures. Engineer's approach: identify the structure → plug in numbers → solve in under 30 seconds.\n\nREASONING: Syllogism final round. After 4 weeks of practice, your Venn diagram method should produce the correct answer in 30 seconds per syllogism question. If still taking 60+ seconds, the diagram method needs refinement.`,
    tasks:[
      e('d39',[
        st('d39-e1','Grammar Targeted Final Sprint','Based on your Day 35 audit ✗ list: solve 5 PYQs per uncovered rule. If all rules were ✓: take a 45-question English mock (all types mixed, 45 minutes, exam conditions).','If taking the full English mock: note your percentile equivalent score (>40/45 = 99th+ percentile English performer).',25),
        st('d39-e2','Sentence Improvement Final — 15 PYQs','Focus on the trickiest sentence improvement types: (1) Redundancy correction, (2) Dangling modifier correction, (3) Parallel structure restoration, (4) Idiom correction.','Redundancy test: "She returned back home" — "back" is redundant because "return" already implies coming back. "Returned home" is correct.',20),
      ]),
      g('d39',[
        st('d39-ga1','Current Affairs — Economy Final Focus','Final economic data: inflation figures (CPI/WPI), GDP projection, RBI rates, budget scheme updates, SEBI regulations, major IPOs, India\'s forex reserves.','By exam day, these figures may change. Always use the MOST RECENT official data available.',20),
        st('d39-ga2','Geography — World Geography Basics','Major world rivers (Nile, Amazon, Mississippi, Yangtze), mountain ranges (Andes, Rockies, Alps, Himalayas), deserts (Sahara, Gobi, Arabian, Patagonian), capitals of frequently-asked countries.','SSC tests world geography less than Indian geography, but 2-3 questions appear. Focus on superlatives: longest, largest, deepest.',25),
      ]),
      q('d39',[
        st('d39-qr1','40 STD Advanced + Train PYQs','Relative speed same direction: |v1-v2|. Opposite: v1+v2. Train crossing a man: time = train length/train speed. Train crossing platform: time = (train+platform length)/train speed. Circular track: meeting = track length/relative speed.','Train problem trap: "Two trains approaching each other — when will they meet?" Answer: after distance/(sum of speeds) time, not the train length question.',35),
        st('d39-qr2','Syllogism Final + Blood Relations Final (25 min)','Syllogism: 20 questions, Venn diagram method, target 20/20. Blood Relations: 20 questions, family tree method, target 19+/20.','Syllogism mastery: draw diagram → check conclusion 1 independently → check conclusion 2 independently. Never check both together — it leads to interference errors.',25),
      ]),
    ],
  },
  {
    id:'2026-06-03',dayNumber:40,date:'2026-06-03',phase:2,tier:1,weekNumber:6,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 40 — Top 50 Vocab Revision + Mixed PYQ Sprint + Reasoning Final',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 40\n\nDay 40 milestone. 20 days to exam (estimated). Vocabulary compressed and Reasoning finalized.\n\nVOCABULARY: Top 50 most-frequently-appearing words in SSC CGL history. These are the words that appear in 60%+ of exam cycles. Review and lock.\n\nQUANT: The ultimate mixed PYQ sprint — 40 questions drawn from previous 3 SSC CGL exam papers. These are exactly the questions that will appear in similar form in your exam. Pattern recognition and speed.\n\nREASONING: "Final" doesn\'t mean easy — add the previously avoided "complex series" questions. Figure series with multiple transformations simultaneously. These are Tier 2 difficulty — beat them now.`,
    tasks:[
      e('d40',[
        st('d40-e1','Top 50 Vocabulary — SSC Frequency-Ranked','Ubiquitous (present everywhere), Ephemeral (short-lived), Egregious (extremely bad), Magnanimous (generous), Perfunctory (done without care), Ambivalent (mixed feelings), Taciturn (quiet), Gregarious (sociable), Obdurate (stubborn), Sagacious (wise).','Top 50 includes OWS, synonyms, and antonyms of highest SSC frequency. After this review, you\'re examination-ready on vocabulary.',25),
        st('d40-e2','Error Spotting Speed Drill — 15 Qs (15 min)','15 error spotting questions, 1 minute each maximum. Any question exceeding 1 minute = mark and skip. After completing 15, revisit skipped ones.','At exam speed: if you don\'t see the error in the first read-through, re-read the individual clauses. If still unclear, skip — error spotting has high opportunity cost per confused question.',20),
      ]),
      g('d40',[
        st('d40-ga1','Sports + Defence Final CA','Any recent sports events, medal counts, new records. Defence: recent acquisitions, indigenisation announcements, Make in India defence updates, Agni/Prithvi missile tests.','June onwards is CA-critical. Exam likely to be late June — so June 1-20 CA will be tested. Stay current.',20),
        st('d40-ga2','Science — Physics & Chemistry Quick Round','Physics: Sound (speed in different media — fastest in solids), Light (VIBGYOR, refraction, total internal reflection), Electricity (Ohm\'s law, series vs parallel). Chemistry: Alloys (Steel=Fe+C, Brass=Cu+Zn, Bronze=Cu+Sn), common acids (HCl, H₂SO₄, HNO₃), common bases.',25),
      ]),
      q('d40',[
        st('d40-qr1','40 PYQs — Last 3 SSC CGL Papers (Mixed)','Solve 40 questions drawn from SSC CGL 2023-2024 actual papers. These are the most representative questions for 2026 pattern. Apply all shortcuts systematically.','PYQ pattern recognition: 40-50% of questions have near-identical twins in previous years. Recognizing the template instantly saves 30-40 seconds.',35),
        st('d40-qr2','Complex Figure Series + Reasoning Mixed (25 min)','Figure series with 2-3 simultaneous transformations. Mixed Reasoning sprint for final accuracy audit.','Complex series strategy: List ALL transformations observed in the known figures. Then verify which option satisfies ALL of them.',25),
      ]),
    ],
  },
  {
    id:'2026-06-04',dayNumber:41,date:'2026-06-04',phase:2,tier:1,weekNumber:6,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 41 — Error Detection Sprint + DI Complex + Blood Relations Final',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 41\n\nTwo weeks to exam (approximately). Error detection mastery and DI speed.\n\nENGLISH: Error detection sprint — your highest-ROI English activity in these final weeks. You can theoretically score 10/10 in this category with practice. Target today: 14+/15 in 12 minutes.\n\nQUANT: Complex DI — multi-variable tables with 5+ questions. Tier 2 DI is harder than Tier 1. Prepare now so Tier 1 DI feels easy.\n\nREASONING: Blood Relations final. Family tree drawing must be automatic — 5 seconds to set up the structure, then 30 seconds to solve. Any question taking >45 seconds is a trap question.`,
    tasks:[
      e('d41',[
        st('d41-e1','Error Detection Sprint — 15 Questions (12 min)','15 error spotting questions, 12 minutes total (48 seconds each). Every answer must be justified by a grammar rule name. No "sounds wrong" answers accepted.','Speed strategy: Sentence has 4 parts. Scan each part for 10 seconds. Most errors found in parts B and C (middle sections). If no error found, choose "No Error" with confidence.',25),
        st('d41-e2','Advanced Fill-in-the-Blanks — Double Blanks (10 Qs)','Double-blank FIB: Two blanks in one sentence, both must be contextually and grammatically correct simultaneously. Use elimination: test each option pair systematically.','Eliminate: If first blank is definitely wrong → eliminate that option entirely. Usually narrows to 2 options quickly.',20),
      ]),
      g('d41',[
        st('d41-ga1','Current Affairs — Political Events','State elections (if any in June), major political announcements, cabinet reshuffle, parliamentary sessions, constitutional appointments (Governors, Judges, Constitutional body members).','Political CA: Focus on Central Government appointments. State-level is less frequently tested but can appear.',20),
        st('d41-ga2','Economy — Schemes Deep Revision (Final)','Revise all government schemes from your notes: PM Awas Yojana, Jal Jeevan Mission, PM KUSUM, PM-Kisan, PM Jan Dhan, Atma Nirbhar Bharat, Make in India, Startup India, PLI Scheme.','For each scheme: Ministry | Objective | Key provision | Budget allocation | Recent milestone.',25),
      ]),
      q('d41',[
        st('d41-qr1','Complex DI — Multi-Variable Tables (35 min)','3-4 variable DI table with 5-7 questions requiring cross-calculation. Apply: read all labels first, identify variable relationships, answer simpler Qs first (direct reading), complex Qs last.','DI time target: 7-8 minutes per complex set. If taking >10 minutes, immediately skip the 2 hardest Qs.',35),
        st('d41-qr2','Blood Relations Final + Coding-Decoding Final (25 min)','Blood Relations: 15 Qs, family tree method, target: 15/15. Coding-Decoding: 10 Qs, pattern identification method, target: 9+/10.','Combined session purpose: these two topics bookend the Reasoning section in difficulty. Mastering both = strong Reasoning foundation.',25),
      ]),
    ],
  },
  {
    id:'2026-06-05',dayNumber:42,date:'2026-06-05',phase:2,tier:1,weekNumber:6,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 42 — Complete Integration Test + Final Formula Review',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 42\n\nSix weeks of disciplined preparation. Today is integration day — all subjects, all topics, exam speed.\n\nFINAL INTEGRATION TEST:\nThis is your final structured test before entering the pure mock sprint phase. 45 English + 40 Quant + 25 Reasoning + 25 GA = 135 questions in 90 minutes. This is harder than Tier 1 (60 minutes for 100 questions) — intentionally. If you can perform well here, Tier 1 will feel comfortable.\n\nFORMULA SHEET FINAL:\nYour formula book should now be complete. Every formula, every shortcut, every grammar rule that matters. This sheet is what you review every morning for the next 3 weeks.\n\nMINDSET CHECK:\n6 weeks in. You have built something real. The next 3 weeks are execution and refinement — not new learning. The foundation is set. The weapon is forged. Now sharpen the blade.`,
    tasks:[
      e('d42',[
        st('d42-e1','English Integration Test — 45 Questions (35 min)','All types: 10 Error Spotting + 5 Voice + 5 Narration + 5 Para Jumbles + 5 OWS + 5 Idioms + 5 Synonyms/Antonyms + 5 Fill-in-the-Blanks. Time: 35 minutes. No exception. Score target: 40+/45.','This is your English exam benchmark. Performance here predicts your Tier 1 English section score.',35),
        st('d42-e2','English Weak Area Re-Practice (10 min)','Based on above test errors: solve 5 targeted questions from your weakest English sub-type.','Final precision correction — better now than during the exam.',10),
      ]),
      g('d42',[
        st('d42-ga1','Comprehensive GA Speed Round — 25 Questions (20 min)','25 GA questions across all topics. 48 seconds each (Tier 1 pace). Target: 22+/25.','GA speed round simulates the exact Tier 1 GA section: 25 questions, 5-7 minutes.',20),
        st('d42-ga2','CA October 2025 to June 2026 — Key Events List','Ensure you have at least 50 key current affairs events memorized: dates, names, numbers, countries. This is your final CA audit.','Any gaps in CA → fill in during tomorrow\'s commute. You have 20 days to fix any CA gaps.',25),
      ]),
      q('d42',[
        st('d42-qr1','Quant Integration — 40 Questions (35 min)','10 Arithmetic + 5 Algebra + 5 Geometry + 5 Mensuration + 5 Trigonometry + 5 Statistics + 5 DI. This is the complete Tier 1 Quant simulation in 35 minutes.','After this: every topic should feel practiced. If any topic still feels shaky, prioritize it in the next 3 days.',35),
        st('d42-qr2','Formula Book Final Review + Sign-Off (25 min)','Read through your complete formula book front to back. This should take 20-25 minutes. Any formula you struggle to recall = mark it. Tomorrow morning review marked formulas first.','After this review: your formula book is your daily morning ritual for the next 20 days. 15 minutes every morning. No exceptions.',25),
      ]),
    ],
  },
]

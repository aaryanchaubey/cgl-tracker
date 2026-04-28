// Week 4 — May 16 (Sat) to May 22 (Fri) — Phase 1 | Days 22-28 | ALL HAVE QUIZ
const e=(id,s)=>({id:`${id}-eng`,subject:'English',icon:'📖',color:'#6366f1',duration:45,title:'English Block (45 min)',subtasks:s})
const g=(id,s)=>({id:`${id}-ga`,subject:'General Awareness',icon:'🌏',color:'#10b981',duration:45,title:'GA & Current Affairs (45 min)',subtasks:s})
const q=(id,s)=>({id:`${id}-qr`,subject:'Quant + Reasoning',icon:'🔢',color:'#f59e0b',duration:60,title:'Quant + Reasoning Sprint (60 min)',subtasks:s})
const ds=(id,s)=>({id:`${id}-ds`,subject:'Deep Study',icon:'🧠',color:'#8b5cf6',duration:300,title:'Deep Study Block (5 Hours)',subtasks:s})
const mt=(id,s)=>({id:`${id}-mt`,subject:'Mock Test',icon:'⏱️',color:'#ef4444',duration:120,title:'Mock Test Block (2 Hours)',subtasks:s})
const rv=(id,s)=>({id:`${id}-rev`,subject:'Revision & Analysis',icon:'🔍',color:'#06b6d4',duration:60,title:'Post-Mortem Revision (1 Hour)',subtasks:s})
const st=(id,title,desc,tip,mins,m=true)=>({id,title,description:desc,tip,estimatedMins:mins,mandatory:m})

export const DAYS=[
  // ── Day 22 — Sat May 16 — WEEKEND (8 hours) ──────────────────────
  {
    id:'2026-05-16',dayNumber:22,date:'2026-05-16',phase:1,tier:1,weekNumber:4,
    weekType:'weekend',totalHours:8,hasQuiz:true,
    title:'Day 22 — Number System + Grammar Voice & Narration Comprehensive',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 22 (WEEKEND FORGE)\n\nNumber System is the backbone of Quant. Master it this weekend.\n\nNUMBER SYSTEM DIRECTIVE (3 hrs):\nDivisibility rules for 2,3,4,5,6,7,8,9,10,11,12. LCM & HCF: Prime factorization method + Division method. Remainder theorem (Chinese Remainder Theorem for advanced questions). Last digit patterns: 2 has cycle 2,4,8,6 (period 4), 3 has cycle 3,9,7,1. For last digit of aⁿ: find n mod cycle_length.\n\nGRAMMAR COMPREHENSIVE (2 hrs):\nActive/Passive + Direct/Indirect in one complete revision. Write the transformation rules for all 12 tenses for voice, and all 4 speech types for narration. This session locks in these mechanical rules permanently.\n\nMOCK INTENSITY: Seventh mock. By Week 4, you should consistently be in 95th+ percentile. If not, your mock environment (timing, conditions) needs to be stricter.`,
    tasks:[
      ds('d22',[
        st('d22-ds1','Divisibility Rules + LCM & HCF (90 min)','Divisibility: 2(last digit even), 3(digit sum divisible by 3), 4(last 2 digits), 5(0 or 5), 6(by 2 AND 3), 7(double last digit, subtract from rest, check if divisible by 7), 8(last 3 digits), 9(digit sum div by 9), 11(alternating digit sum difference div by 11). LCM×HCF = Product of two numbers. Practice 30 questions.',90,'LCM×HCF rule only applies to TWO numbers. For three or more, use prime factorization.'),
        st('d22-ds2','Remainders + Last Digit + Number Properties (90 min)','Remainder of powers: Fermat\'s little theorem for prime modulus. Last digit cycles: 2→2,4,8,6(period 4), 3→3,9,7,1(period 4), 4→4,6(period 2), 7→7,9,3,1(period 4), 8→8,4,2,6(period 4), 9→9,1(period 2). Digit sum trick for checking answers. Solve 30 PYQs.','For 7^83: 83 mod 4 = 3, so last digit same as 7³ = 343 → last digit = 3.',90),
        st('d22-ds3','Grammar — Active/Passive All 12 Tenses (60 min)','Write the active and passive structure for all 12 tenses. Then solve 20 PYQs mixing all tense types. Focus on Perfect Progressive (has/have/had been + V-ing in active → has/have/had been being + V3 in passive).','Test: Can you convert any tense from active to passive in under 10 seconds? This should be the target.',60),
        st('d22-ds4','Grammar — Direct/Indirect All Types (60 min)','Types: Statement (tense shift + pronoun change + time expressions), Question (if/whether for Yes-No, Wh-word for Wh-questions), Command/Request (infinitive form), Exclamatory (very/much + declarative).','Write 5 examples for each type. Practicing all types together builds the flexibility needed for error-spotting questions.',60),
      ]),
      mt('d22',[
        st('d22-mt1','Full Tier 1 Mock — 60 Minutes','Seventh mock. Priority: Zero wrong answers in GA (skip uncertain, don\'t guess). GA -0.50 marks for wrong = same cost as leaving it blank, but skipping uncertain = saving 0.50 marks if 50%+ wrong.','GA guessing strategy: Only attempt GA questions where you\'re 75%+ confident. Skip all others.',60),
        st('d22-mt2','Sectionals: English (30 min) + Quant (30 min)','English: Apply all grammar conversions practiced today. Quant: Apply Number System concepts — divisibility, LCM/HCF shortcuts.','Direct application of day\'s learning in mock = strongest retention pathway.',60),
      ]),
      rv('d22',[
        st('d22-rev1','Number System Quick Test','Without notes: write divisibility rules for 3,7,9,11. Write last digit cycles for 2,3,7,8. Score. Any gap → 10-minute re-review.','Self-testing within 4 hours of learning is the optimal first review point (spaced repetition science).',30),
        st('d22-rev2','Formula Book — Number System Edition','Add: LCM×HCF rule, divisibility rules (especially 7 and 11), last digit cycle table, remainder theorem basics.','Formula book should now cover 6 topic areas. Can you review it in 30 minutes? If not, it\'s too long — summarize.',30),
      ]),
    ],
  },

  // ── Day 23 — Sun May 17 — WEEKEND (8 hours) ──────────────────────
  {
    id:'2026-05-17',dayNumber:23,date:'2026-05-17',phase:1,tier:1,weekNumber:4,
    weekType:'weekend',totalHours:8,hasQuiz:true,
    title:'Day 23 — Statistics + Data Interpretation + RC Fast Reading',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 23 (WEEKEND)\n\nData Interpretation is the highest-weightage new topic in Tier 2. Build the foundation today.\n\nDI DIRECTIVE (3 hrs):\nTables, Bar Charts, Line Graphs, Pie Charts, and most importantly — MULTI-SET DI. In Tier 2, you'll get 2 related charts (e.g., table of sales data + bar chart of growth %). Approach: (1) Read ALL data labels and units. (2) Identify what each chart represents. (3) For calculation questions, approximate to 2 significant figures. (4) For comparison questions, use ratio, not absolute values.\n\nRC FAST READING (2 hrs):\nReading speed improvement technique: Preview first and last paragraphs to get context. Read topic sentences of middle paragraphs only for structure. Then go to questions — answer fact-based questions first, inference questions last.\n\nThis is an 8-hour day. Maintain intensity in all 3 blocks.`,
    tasks:[
      ds('d23',[
        st('d23-ds1','DI — Tables + Bar Charts (90 min)','Tables: Practice reading 3 complex tables (3-4 variables). Bar charts: Single and grouped bars. Key calculations: percentage change, ratio, per capita, cumulative totals. Time per 5-Q set: 5-6 minutes maximum.','Read every label before starting. Units matter: \'in thousands\' changes all calculations.',90),
        st('d23-ds2','DI — Pie Charts + Line Graphs + Mixed (90 min)','Pie charts: Angle = (Value/Total)×360°, Value = (Angle/360°)×Total. Line graphs: Focus on slope (rate of change). Mixed DI: Two sets with linked data. Time per set: 6-7 min (these are harder).','Pie chart shortcut: If one sector = 25%, it\'s a quarter of the pie visually. Use visual estimation for quick elimination.',90),
        st('d23-ds3','RC Fast Reading — Speed Protocol (120 min)','Technique: (1) Read first paragraph fully (2 min). (2) Topic sentences of middle paragraphs only (30 sec each). (3) Last paragraph fully (1 min). (4) Now read questions. Total: 4-5 minutes before questions. Practice 4 passages.','Track your comprehension accuracy. If it drops below 70% with this technique, spend more time on step 2.',120),
      ]),
      mt('d23',[
        st('d23-mt1','Full Tier 1 Mock — 60 Minutes','Eighth mock. Focus: DI questions in Quant section — try the new reading protocol (labels first, then questions).','Even 30 seconds saved per DI set (5 Qs) = significant score improvement in Tier 1.',60),
        st('d23-mt2','Sectional: Reasoning (30 min) + English RC Focus (30 min)','Reasoning: Apply clock/calendar and pattern questions practiced this week. English: Only RC and Para Jumbles in this sectional.','Isolate RC in sectional practice to measure your true RC speed without other question types skewing time.',60),
      ]),
      rv('d23',[
        st('d23-rev1','DI Speed Benchmark','In the mock DI section, how long did each set take? Benchmark: 5Q set in ≤5 min = pass, >7 min = needs work. Calculate your average.','Week 4 DI speed: rough estimate acceptable. By Week 8: within 5 min consistently. Set the baseline today.',30),
        st('d23-rev2','Week 4 Progress Assessment','4 weekends of deep study completed. Score yourself honestly 1-10 on: Geometry, Algebra, Mensuration, Trigonometry, Statistics, DI, Number System. Any score <7 = that topic needs a re-visit in Weekend 5.','Honest self-assessment > optimistic self-assessment. Act on the gaps, not on the strengths.',30),
      ]),
    ],
  },

  // ── Day 24 — Mon May 18 — WEEKDAY (2.5 hours) ────────────────────
  {
    id:'2026-05-18',dayNumber:24,date:'2026-05-18',phase:1,tier:1,weekNumber:4,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 24 — Antonyms Advanced + Proportion & Mixture',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 24\n\nWeek 4. Foundation is solid. We now enter the acceleration lane.\n\nVOCABULARY: Advanced antonyms — words with non-obvious opposites are SSC favorites. "Benevolent" ↔ "Malevolent", "Laconic" ↔ "Verbose", "Ephemeral" ↔ "Eternal", "Sanguine" ↔ "Pessimistic". These require exposure, not just memorization.\n\nQUANT: Proportion advanced — Direct/Inverse proportion, fourth proportional, third proportional, mean proportional. Mixture & Alligation: Rule of allegation for mixing two solutions, three-mixture problems using repeated application of alligation.\n\nREASONING: Clock & Calendar questions. Clocks: Angle between hands = |30H - 11M/2|. When do hands coincide? Every 65.45 minutes (approximately 65 min 27 sec). Calendar: Day-of-week calculation using Zeller's formula or odd days method.`,
    tasks:[
      e('d24',[
        st('d24-e1','Advanced Antonyms — 50 Word Pairs','Focus on abstract vocabulary: Lucid/Obscure, Sanguine/Pessimistic, Laconic/Verbose, Ephemeral/Eternal, Benevolent/Malevolent, Frugal/Extravagant, Candid/Evasive, Recalcitrant/Compliant, Gregarious/Reclusive, Taciturn/Garrulous.','Advanced words appear more in Tier 2 RC passages than direct vocab questions. Build context familiarity.',20),
        st('d24-e2','Vocabulary in Context — 15 Reading Questions','Read 3 short passages, answer vocabulary-in-context questions (what does the underlined word mean as used here?).','Context clues: contrast words (but, although, however), cause-effect (because, so), elaboration (like, as, for example). Use these to infer meaning.',25),
      ]),
      g('d24',[
        st('d24-ga1','Current Affairs — State-Level Events','Focus: State elections, new Chief Ministers/Governors, major state-specific schemes, state-level infrastructure projects inaugurated.','State CA is underrated in SSC prep. "Who is the current CM of ___" appears 1-2 times per paper.',20),
        st('d24-ga2','Geography — Indian Agriculture & Resources','Major crops by region, soil types (Alluvial=North plains, Black/Regur=Deccan, Red=Tamil Nadu), major minerals and mining states, forest types (Tropical Evergreen, Deciduous, Mangrove).','Crops: Wheat=Punjab/Haryana, Rice=WB/AP, Cotton=Gujarat/Maharashtra, Jute=WB/Bihar. These are examination staples.',25),
      ]),
      q('d24',[
        st('d24-qr1','40 PYQs — Proportion + Mixture & Alligation','Proportion: x:y::a:b → xb=ya (product of extremes = product of means). Mean proportional of a and b = √(ab). Alligation: Draw the cross, differences = mixing ratio. Three-mixture: Apply alligation twice.','Three-mixture problem: If 20L, 30L, and pure water are mixed to get a concentration of 25% alcohol, find the ratios using alligation twice.',35),
        st('d24-qr2','Clock & Calendar — 40 Questions','Clock angle: |30H - 5.5M|. Hands coincide: every 720/11 minutes ≈ 65.45 min. Calendar odd days: Regular year=1 odd day, Leap year=2, Century year=0, 400-year=0.','Calendar shortcut: Find day for Jan 1 of the year using accumulated odd days. Then add days within the year.',25),
      ]),
    ],
  },

  // ── Day 25 — Tue May 19 — WEEKDAY (2.5 hours) ────────────────────
  {
    id:'2026-05-19',dayNumber:25,date:'2026-05-19',phase:1,tier:1,weekNumber:4,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 25 — Idioms Final Sprint + Partnership & Boats',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 25\n\nIdioms second batch and Partnership math.\n\nENGLISH: Second 50 idioms batch. By now you should know 100+ idioms. Test: cover the meanings and recall them from the phrases alone. If recall rate <70%, reschedule the first batch for tomorrow morning commute.\n\nQUANT: Partnership — profit sharing proportional to (investment × time). "A invests ₹4000 for 12 months, B invests ₹6000 for 8 months → A:B = 4000×12 : 6000×8 = 48000:48000 = 1:1." Boats & Streams revision from Week 2 — ensure the formula structure is automatic.\n\nREASONING: Alphabet series — include all pattern types: letter position values (A=1, Z=26 or A=26, Z=1), alternating sequences, skip patterns, vowel-consonant sequences.`,
    tasks:[
      e('d25',[
        st('d25-e1','Idioms Batch 2 — 50 More Idioms','Bite off more than you can chew (take on more than you can handle), Beat around the bush (avoid the main topic), Burn the midnight oil (work late), Cost an arm and a leg (very expensive), Every cloud has a silver lining, Hit the nail on the head (exactly correct), Kick the bucket (die), Let the cat out of the bag (reveal a secret), Once in a blue moon (rarely), Spill the beans (reveal secret information).','Plus 40 more from Blackbook. Active recall: read phrase, recall meaning before checking.',25),
        st('d25-e2','Idioms Recall Test — Batch 1 (25 idioms)','Cover meanings. Write meanings for 25 idioms from Batch 1 (Day 2). Score yourself. Any <70% recall = those idioms get re-learned before next mock.','Spaced repetition principle: reviewing after 1 week maximizes long-term retention.',20),
      ]),
      g('d25',[
        st('d25-ga1','Current Affairs — Environment & Disaster','Major floods, cyclones, earthquakes in recent months. India\'s disaster management: NDMA, NDRF, their roles. Climate funds (Green Climate Fund, International Solar Alliance).','India-specific: How many NDRF battalions, NDMA composition, recent disaster response operations.',20),
        st('d25-ga2','Economy — Banking & Finance Deep','Types of banks (Scheduled, Commercial, RRB, Cooperative), types of accounts (CASA, FD, RD), Monetary policy tools (Repo rate, CRR, SLR, MSF, OMO), Basel III norms basics.','Repo Rate: Rate at which banks borrow from RBI. CRR: Cash held with RBI (no interest). SLR: Liquid assets maintained. Know current values.',25),
      ]),
      q('d25',[
        st('d25-qr1','40 PYQs — Partnership + Boats & Streams Combined','Partnership: ratio = sum(investment × time periods). For joining partners: A joins at start, B joins after k months → A:(n-k) months vs B:n months if equal capital. Boats: formulas revision.','Sleeping partner: Invests money but doesn\'t work. Active partner: Works. SSC may give combined profit sharing of both.',35),
        st('d25-qr2','Alphabet Series — 40 Questions','Types: Simple (+n), Reverse (Z=1 coding), Alternating (two sequences), Letter pairs (paired skipping), EJOTY pattern (E=5,J=10,O=15,T=20,Y=25). Mixed alpha-numeric series.','EJOTY trick: These are 5th, 10th, 15th, 20th, 25th letters. Knowing this pattern reveals many series instantly.',25),
      ]),
    ],
  },

  // ── Day 26 — Wed May 20 — WEEKDAY (2.5 hours) — CORRECT ──────────
  {
    id:'2026-05-20',dayNumber:26,date:'2026-05-20',phase:1,tier:1,weekNumber:4,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 26 — Voice+Narration Final Revision + Sitting Arrangement',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 26\n\nLock in voice and narration permanently today. These are 3-4 marks in Tier 1 and 6-8 marks in Tier 2.\n\nENGLISH: Final comprehensive revision of Active/Passive and Direct/Indirect Speech. After today, these topics should be zero-error zones. Take 20 mixed PYQs and achieve 100% accuracy.\n\nQUANT: Apply Number System PYQs from the weekend. Test if divisibility rules, LCM/HCF shortcuts, and last-digit cycles are automatized.\n\nREASONING: Sitting Arrangement — the most feared reasoning topic. Strategy: Draw the arrangement structure first (linear/circular/facing direction). Use definite clues to anchor positions, then place conditional clues. Never guess — always derive.`,
    tasks:[
      e('d26',[
        st('d26-e1','Voice + Narration — 20 Mixed PYQs (ACCURACY TARGET: 100%)','Take 20 mixed PYQs covering voice (all tenses) and narration (all types). Goal: 20/20. If any wrong, stop, re-learn that specific rule immediately.','If you scored <20/20, identify the exact rule that failed. Is it a tense shift error? Pronoun change error? Reporting verb error?',25),
        st('d26-e2','Articles — Definite + Indefinite + Zero Article Rules','Rules: "a" before consonant sounds, "an" before vowel sounds. "The" for specific/previously mentioned/unique objects. Zero article for: plural uncountable nouns, names, meals, games, academic subjects.','Tricky articles: "an hour" (h is silent), "a university" (pronounced y-oo), "a European" (consonant sound e-oo).',20),
      ]),
      g('d26',[
        st('d26-ga1','Polity — Parliamentary System Deep','Lok Sabha (elected, 543 seats), Rajya Sabha (elected by states+UTs, 250 seats-12 nominated). Speaker/Deputy Speaker. President\'s powers (Article 85-88). PM and Council of Ministers (Article 74-75).','Key: President appoints PM, PM advises President on other appointments. President acts on Cabinet advice (Art.74).',20),
        st('d26-ga2','Current Affairs — All Topics Weekly Compilation','Review this week\'s current affairs across all topics: Economy, Polity, International, Science, Sports, Environment. Quick 20-question self-quiz.','Weekly CA review ensures no event from the week is missed. This prevents blind spots.',25),
      ]),
      q('d26',[
        st('d26-qr1','30 Number System PYQs + 10 LCM/HCF','Number System: Divisibility, remainders, digit problems. LCM/HCF: Product = LCM×HCF (for two numbers). For bell problems: LCM gives when they ring together.','Bell problem: Bells ring every 12, 15, 20 minutes. When next together? LCM(12,15,20) = 60 minutes.',30),
        st('d26-qr2','Sitting Arrangement — 40 Questions (Circular + Linear)','Linear: Fixed positions for absolute clues, relative for conditional. Circular: Clockwise/anticlockwise distinction crucial. Mark "facing center" vs "facing outward".','Drawing technique: Use letters/initials in circles or boxes. Write conditions as you place — don\'t try to hold all in memory.',30),
      ]),
    ],
  },

  // ── Day 27 — Thu May 21 — WEEKDAY (2.5 hours) — CORRECT ──────────
  {
    id:'2026-05-21',dayNumber:27,date:'2026-05-21',phase:1,tier:1,weekNumber:4,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 27 — Comprehensive Vocab Sprint + LCM/HCF + Paper Folding',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 27\n\nVocabulary consolidation, HCF/LCM mastery, and visual reasoning finale.\n\nENGLISH: Vocabulary comprehensive — you should now know 200+ words (100 OWS, 100 Idioms/Phrasal Verbs, 100 Synonyms/Antonyms). Do a rapid recall test on all four categories. Identify the category with lowest recall — that gets 10 extra minutes today.\n\nQUANT: LCM/HCF problems — include problems on: (1) Number of tiles needed to cover a floor, (2) Smallest number divisible by given numbers, (3) Largest number dividing a, b, c leaving same remainder, (4) Least number added/subtracted to make it divisible.\n\nREASONING: Paper Cutting & Folding — the easiest 2-3 marks in Tier 1. The paper is folded (track fold lines), then cut, then unfolded. Strategy: trace each fold and cut step mentally. Never unfold randomly.`,
    tasks:[
      e('d27',[
        st('d27-e1','Vocabulary Comprehensive Recall — All 4 Categories','Test: 20 OWS (cover meanings, recall), 20 Idioms (cover meanings, recall), 20 Synonyms, 20 Antonyms. Total: 80-word test. Record your score in each category.','Category with lowest score: spend 10 additional minutes reviewing those specific words now.',30),
        st('d27-e2','Geography/Science Vocabulary — 15 Words','Technical vocabulary: Littoral, Alluvial, Precipitation, Photosynthesis, Osmosis, Isotope, Catalyst, Combustion, Fission, Fusion, Tectonic, Sedimentary, Metamorphic, Igneous, Seismic.','These often appear in RC passages about science/geography. Knowing them improves RC comprehension.',15),
      ]),
      g('d27',[
        st('d27-ga1','Geography — Climate of India','Monsoon (SW monsoon June-Sept, NE monsoon Oct-Dec), Tropical Monsoon Climate, Koppen classification, drought-prone areas, flood-prone states, cyclone-prone coasts (East Coast more prone).','The Malabar Coast, Coromandel Coast, Konkan Coast — know which state each belongs to.',20),
        st('d27-ga2','Static GK — Sports Trophies & Awards','Cricket: ICC trophies, Duleep Trophy, Ranji Trophy. Football: Santosh Trophy. Hockey: Dhyan Chand Trophy. Tennis: Davis Cup. Most sports: national competitions vs international cups.','Sports GK: Often "Which trophy/cup is associated with ___" format. Make a simple two-column list.',25),
      ]),
      q('d27',[
        st('d27-qr1','40 LCM/HCF PYQs — All Problem Types','Type 1: Tiles/fencing (LCM). Type 2: Smallest n divisible by a,b,c: LCM(a,b,c). Type 3: Largest n dividing a,b,c leaving same remainder r: HCF(a-b, b-c, a-c). Type 4: Least number to add/subtract for divisibility.','Type 3 trick: "Largest number dividing 13, 23, 47 leaving same remainder" → differences: 23-13=10, 47-23=24, 47-13=34. HCF(10,24,34)=2. Answer: 2.',35),
        st('d27-qr2','Paper Cutting + Embedded Figures — 40 Qs','Paper folding: Trace each fold. After cutting: unfold in reverse order. The cut creates holes that mirror across fold lines. Embedded figures: Find which given shape is hidden in the complex figure.','Paper cutting tip: For each fold line, the cut creates a symmetric hole. A fold and cut = 2 holes (one for each layer).',25),
      ]),
    ],
  },

  // ── Day 28 — Fri May 22 — WEEKDAY (2.5 hours) — CORRECT ──────────
  {
    id:'2026-05-22',dayNumber:28,date:'2026-05-22',phase:1,tier:1,weekNumber:4,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 28 — Error-Free Writing + Data Analysis Sprint + Week 4 Close',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 28\n\nWeek 4 complete. The foundation phase ends. Phase 2 (Acceleration) begins next week.\n\nENGLISH: Error-Free Writing drill — read paragraphs with multiple embedded errors (grammar, vocabulary, tense, punctuation). Find and fix all errors. This holistic approach is harder than single-sentence error spotting but builds a more robust skillset for Tier 2.\n\nQUANT: DI sprint — complex multi-set DI. Time pressure: 6 minutes per 5-question DI set maximum. Apply approximation aggressively — if two answer options are far apart, you don't need exact calculation.\n\nREASONING: Speed test across all topics. By Week 4 end, your Reasoning target should be 14-16 minutes for 25 questions. If consistently below 14, you're ahead of schedule.\n\nFOUR-WEEK ASSESSMENT: You've covered the complete Tier 1 syllabus. Weeks 5-7 are acceleration and mock-heavy. The foundation is in place.`,
    tasks:[
      e('d28',[
        st('d28-e1','Error-Free Writing — 5 Paragraphs (8 errors each)','Read 5 short paragraphs each containing 8 intentional errors (grammar + vocabulary + tense). Find and correct all errors. Time: 5 minutes per paragraph.','Types of errors embedded: SVA, tense, wrong word choice, preposition, article, comparison, redundancy, punctuation.',30),
        st('d28-e2','Para Jumbles Sprint — 10 Questions (3 min each)','Solve 10 Para Jumble sets using the mandatory pair + transition word method. Strict 3-minute timer per set.','Any set taking >3 minutes in the actual exam is a trap question — mark it and return if time permits.',15),
      ]),
      g('d28',[
        st('d28-ga1','Current Affairs — Weekly Comprehensive Review','Full week\'s CA across all domains. Focus: events that could generate MCQ options (specific numbers, person names, event names, awards, dates).','CA review: For each event, generate 3 possible MCQ forms. This reverse-engineering builds pattern recognition.',20),
        st('d28-ga2','Science — Chemistry Deep Revision','Periodic Table (periods 1-3 in detail), chemical bonds (ionic, covalent), acids/bases/salts, common chemical reactions (rusting, burning, photosynthesis), pH scale and indicators.','pH: Below 7 = acidic, 7 = neutral, above 7 = basic/alkaline. Litmus paper: Red in acid, blue in base.',25),
      ]),
      q('d28',[
        st('d28-qr1','Complex DI Sprint — 4 Sets (25 min)','4 DI sets (3-4 variables each, 5 Qs each). Time: 6 min per set maximum. Use approximation for decimal calculations. If a set is taking too long, abandon the 2 hardest Qs and move on.','Priority within a DI set: Easy calculation Qs → Ratio Qs → Percentage change Qs → Complex multi-step Qs (last).',25),
        st('d28-qr2','All Reasoning — Speed Drill (35 min)','35 minutes, all reasoning types in random order. Target: 40+ questions answered correctly. This simulates the exact cognitive load of Tier 1 Reasoning section.',35),
      ]),
    ],
  },
]

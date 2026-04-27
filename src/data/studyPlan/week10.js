// Week 10 — Jul 6 (Mon) to Jul 12 (Sun) — Phase 4: Tier 2 Foundation | Days 62-68
// Tier 1 exam was Jun 25. Gap period Jun 25-Jul 5. Tier 2 prep starts NOW.
// Tier 2 Paper 1: Quant (90Q, 90min) + English (90Q, 90min). -1 penalty.
const WD_ENG = (id, subtasks) => ({ id:`${id}-eng`, subject:'English T2', icon:'📖', color:'#6366f1', duration:60, title:'English T2 Block (60 min)', subtasks })
const WD_GA  = (id, subtasks) => ({ id:`${id}-ga`,  subject:'GA & CKT', icon:'🌏', color:'#10b981', duration:45, title:'GA + CKT Daily (45 min)', subtasks })
const WD_QR  = (id, subtasks) => ({ id:`${id}-qr`,  subject:'Quant T2', icon:'🔢', color:'#f59e0b', duration:75, title:'Quant T2 Block (75 min)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`,  subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper 1 Mock (2h 15min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Review', icon:'🔍', color:'#06b6d4', duration:60, title:'DEST + Mock Analysis (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`,  subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:240, title:'Deep Study Block (4 Hours)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-07-06',dayNumber:62,date:'2026-07-06',phase:4,tier:2,weekNumber:10,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 62 — Tier 2 Begins: Advanced RC + DI Fundamentals',
    promptBlock:`OPERATIVE BRIEFING — DAY 62 (TIER 2 BEGINS)

Tier 1 is done. Results come Jul 5. Regardless of outcome, Tier 2 preparation starts TODAY. This is a different exam with different demands.

TIER 2 ENGLISH SHIFT: Tier 2 has 90 English questions in 90 minutes. Passages are longer (600-800 words), vocabulary is harder (GRE-level synonyms appear), and error detection spans entire paragraphs — not just underlined phrases. 60% of candidates fail to clear the English cutoff because they continue using Tier 1 strategies. Change begins today.

TIER 2 QUANT SHIFT: 90 questions, 90 minutes, -1 per wrong answer. You cannot afford to guess. The strategy is: attempt 65-70 questions with 90%+ accuracy, rather than 85 with 75% accuracy. Speed matters less than precision now.

CKT DAILY HABIT: Computer Knowledge Test (CKT) is a 20-minute separate module. 10 minutes of daily practice from today becomes 70 minutes by exam week. Start today.`,
    tasks:[
      WD_ENG('d62',[
        s('d62-e1','Tier 2 RC — Long Passage (600+ words)','Read 1 long RC passage (600+ words) and answer 10 questions. Time yourself: you should complete 1 passage + questions in 15 minutes. Focus on tone identification and inference questions.','Tier 2 RC trick: read the last sentence of each paragraph before reading the full passage. This gives you the structure of the argument without full reading time.',35),
        s('d62-e2','Tier 2 Vocabulary — GRE-Level Synonyms (20 Qs)','20 synonym/antonym questions at GRE difficulty level. Target vocabulary: esoteric, laconic, obsequious, fastidious, perspicacious, perfidious, sanguine, equivocal, etc.','For unknown words: break into root + prefix/suffix. "Per-fid-ious" = per(through) + fid(faith) + ious(adj) = one who goes through faith = treacherous. Etymology unlocks 60% of hard vocabulary.',25),
      ]),
      WD_QR('d62',[
        s('d62-qr1','DI — Table-Based Complex Problems (20 Qs)','Solve 20 table DI questions with multiple conditions and sub-tables. Tier 2 DI requires extracting precise values and computing ratios under time pressure.','Table DI strategy: spend 3 minutes reading the full table first. Annotate min/max values. Calculate all column sums before answering. This front-loading saves time on each question.',40),
        s('d62-qr2','Number Theory — Advanced (15 Qs)','15 questions on LCM/HCF with 3+ numbers, Euler\'s totient function basics, divisibility rules for primes 7, 11, 13. Tier 2 number theory goes deeper than Tier 1.','Divisibility by 11: alternating digit sum (A-B+C-D+...) divisible by 11. Divisibility by 7: double last digit, subtract from rest. These appear 3-4 times in Tier 2 Quant.',30),
      ]),
      WD_GA('d62',[
        s('d62-ga1','CKT Daily — Computer Basics (10 min)','Memory units: bit, byte, KB, MB, GB, TB. Input devices vs output devices. Primary vs secondary storage. RAM vs ROM. CPU components: ALU, CU, Registers.','CKT covers ~20-25 topics total. 10 minutes per day for 10 days = full CKT coverage before the exam. Start the habit now.',10),
      ]),
    ],
  },
  {
    id:'2026-07-07',dayNumber:63,date:'2026-07-07',phase:4,tier:2,weekNumber:10,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 63 — Tier 2 Error Detection + Algebra Advanced',
    promptBlock:`OPERATIVE BRIEFING — DAY 63

Tier 2 Error Detection is paragraph-level. You are given 5-8 sentences and must identify which sentence contains a grammatical error. The errors are subtle — dangling modifiers, misplaced participial phrases, incorrect comparative degrees, tense inconsistency across a paragraph. These are qualitatively harder than Tier 1 single-sentence spotting.

ALGEBRA ADVANCED: Tier 2 has 8-12 algebra questions involving simultaneous equations, quadratic equations, and identities. The key upgrade from Tier 1: Tier 2 algebra questions have nested expressions. Example: if x + 1/x = 3, find x³ + 1/x³. You must know the chain of identities to solve these in under 60 seconds.`,
    tasks:[
      WD_ENG('d63',[
        s('d63-e1','Tier 2 Error Detection — Paragraph Level (20 Qs)','20 paragraph-level error detection questions. Identify the sentence containing the error from a 5-7 sentence paragraph. Focus: dangling modifiers, tense inconsistency, incorrect comparative degree.','Method: read each sentence as a standalone unit. Ask: (a) does the verb agree with its subject? (b) are pronouns clear? (c) is the tense consistent with surrounding sentences? (d) are comparatives formed correctly?',35),
        s('d63-e2','Cloze Test Practice — Formal Register (2 passages, 10 blanks each)','2 formal cloze passages with 10 blanks each. Choose from given options. Focus: prepositions, connectors (however, therefore, consequently, nonetheless), and contextual vocabulary.','Connector logic: "however" = contrast, "consequently" = result, "nevertheless" = despite, "moreover" = addition. Identify the logical relationship first, then select the connector.',25),
      ]),
      WD_QR('d63',[
        s('d63-qr1','Algebra — Nested Identity Chain Problems (20 Qs)','20 problems using identity chains. Key identities: (x+y)³ = x³+y³+3xy(x+y), x³+y³ = (x+y)(x²-xy+y²), if x+1/x=k then x²+1/x²=k²-2, x³+1/x³=k³-3k.','Identity chain example: x+1/x=3 → x²+1/x²=9-2=7 → x³+1/x³=27-9=18. Practice this chain until it\'s automatic. Appears 3-4 times in every Tier 2 paper.',40),
        s('d63-qr2','CKT Daily — Operating Systems (10 min)','Windows OS: file management, keyboard shortcuts, Task Manager, file extensions (.docx, .xlsx, .pdf, .jpg). Types of operating systems: single-user, multi-user, real-time, distributed.','CKT shortcut to memorize: Ctrl+Z=Undo, Ctrl+Y=Redo, Ctrl+C=Copy, Ctrl+V=Paste, Ctrl+X=Cut, Alt+F4=Close, Win+D=Desktop, Win+L=Lock.',10),
      ]),
      WD_GA('d63',[
        s('d63-ga1','Polity — Parliament Procedures + Emergency Provisions','Lok Sabha quorum, Parliamentary sessions, Zero Hour, Starred vs Unstarred questions, Question Hour. Emergency provisions: Art 352, 356, 360 — grounds, duration, approval requirements.','Emergency provisions memory device: 352=National (war/external aggression/armed rebellion), 356=State (President\'s Rule), 360=Financial. All require Parliamentary approval within defined timelines.',35),
      ]),
    ],
  },
  {
    id:'2026-07-08',dayNumber:64,date:'2026-07-08',phase:4,tier:2,weekNumber:10,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 64 — Para Jumbles Advanced + Mensuration 3D',
    promptBlock:`OPERATIVE BRIEFING — DAY 64

Para Jumbles in Tier 2 feature 6-7 sentences on abstract academic topics — climate economics, philosophy of science, behavioral psychology. These cannot be solved by "gut feeling." You need anchor pairs.

ANCHOR PAIR METHOD: Find 2 sentences whose connection is undeniable (pronoun → antecedent, cause → effect, question → answer). Build outward from these anchors. 3 anchor pairs typically solve a 6-sentence jumble. Practice until this becomes automatic.

MENSURATION 3D: Cone, sphere, cylinder, frustum combinations are the highest-value 3D problems in Tier 2. The key formula: frustum volume = (πh/3)(r₁² + r₂² + r₁r₂). Memorize it today.`,
    tasks:[
      WD_ENG('d64',[
        s('d64-e1','Para Jumbles — 6-7 Sentence Abstract Sets (10 Qs)','10 parajumble sets with 6-7 sentences each. Use anchor pair method exclusively. Target: 8+ correct in 25 minutes.','Anchor pair identification: look for pronouns (he/she/it/they = refers to something previously mentioned), numerical sequences (first, second, third), and discourse markers (furthermore, however, in contrast).',30),
        s('d64-e2','Sentence Rearrangement — Choose Correct Sequence (15 Qs)','15 questions where 4 options show different arrangements of 4-5 sentences. Eliminate options by first checking if the opening sentence makes sense as an opener.','Elimination strategy: sentences starting with "However," "Therefore," or "But" cannot be the FIRST sentence of a paragraph. Use this to eliminate 2 of 4 options immediately.',20),
      ]),
      WD_QR('d64',[
        s('d64-qr1','Mensuration 3D — Combination Problems (15 Qs)','15 problems involving: cone placed on cylinder, hemisphere on top of cone, sphere inscribed in cube, cylinder melted into cones. Use component-volume approach: total volume = sum of parts.','Sphere inscribed in cube: if cube side = a, then sphere radius = a/2. Sphere volume = (4/3)π(a/2)³ = πa³/6. The ratio sphere:cube = π/6 ≈ 0.524. Memorize this ratio.',40),
        s('d64-qr2','CKT Daily — MS Office Suite (10 min)','MS Word: paragraph formatting, headers/footers, mail merge. MS Excel: VLOOKUP, SUM, AVERAGE, COUNT, IF formulas. MS PowerPoint: slide transitions, animations, design themes.','Frequent CKT questions: which Excel function returns the largest value (MAX), which finds average (AVERAGE), which counts numbers (COUNT vs COUNTA for non-empty cells).',10),
      ]),
      WD_GA('d64',[
        s('d64-ga1','Indian Economy — GDP, Inflation, Monetary Policy','GDP calculation methods (expenditure, income, value-added). Inflation types: cost-push, demand-pull, structural. WPI vs CPI difference. RBI\'s inflation target: 4% with ±2% band (Flexible Inflation Targeting).','Key statistic to know: India\'s GDP is measured at constant prices (base year 2011-12) and at current prices. Nominal GDP = current prices, Real GDP = constant prices. GDP deflator = Nominal/Real × 100.',35),
      ]),
    ],
  },
  {
    id:'2026-07-09',dayNumber:65,date:'2026-07-09',phase:4,tier:2,weekNumber:10,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 65 — Sentence Completion + Trigonometry Advanced',
    promptBlock:`OPERATIVE BRIEFING — DAY 65

Tier 2 English has "Para Completion" questions where you choose the best concluding or transitional sentence for a paragraph. These test logical coherence AND grammatical fitness. The wrong options typically: (a) contradict the paragraph's tone, (b) introduce unrelated information, (c) are grammatically correct but logically disconnected.

TRIGONOMETRY ADVANCED: Tier 2 has 10-12 trig questions. Compound angles (sin(A±B), cos(A±B), tan(A±B)), multiple angles (sin2A, cos2A, tan2A), and identity verification questions are the standard. If you haven't mastered compound angle formulas, this is the week to lock them.`,
    tasks:[
      WD_ENG('d65',[
        s('d65-e1','Para Completion — Choose Best Ending Sentence (15 Qs)','15 para completion questions. Method: (1) identify the paragraph\'s main argument, (2) note the tone (formal/analytical/descriptive), (3) check each option for logical continuation + tone match.','The correct option always "closes" the argument logically. Wrong options either add new unrelated information or contradict what was said. Tone mismatch eliminates 1-2 options instantly.',30),
        s('d65-e2','Double Blank Fill — Pair Selection (15 Qs)','15 double-blank sentences requiring 2 words that BOTH fit logically and grammatically. The trap: one word fits perfectly but the second doesn\'t — eliminate options where either word fails.','Strategy: fill blank 1 with each pair option first. Eliminate pairs where blank 1 doesn\'t work. From remaining options, check blank 2. Usually reduces to 2 options, then use contextual logic.',25),
      ]),
      WD_QR('d65',[
        s('d65-qr1','Trig — Compound Angles Deep Practice (20 Qs)','20 problems using compound angle formulas. Key: sin(A+B)=sinAcosB+cosAsinB, cos(A+B)=cosAcosB-sinAsinB, tan(A+B)=(tanA+tanB)/(1-tanAtanB). Compute sin75°, cos15°, tan105° using these.','sin75° = sin(45°+30°) = sin45cos30+cos45sin30 = (√2/2)(√3/2)+(√2/2)(1/2) = (√6+√2)/4. Memorize this value: sin75°=cos15°=(√6+√2)/4.',40),
        s('d65-qr2','CKT Daily — Internet & Networking (10 min)','Internet terms: IP address, URL, HTTP/HTTPS, DNS, firewall, browser, search engine. Types of networks: LAN, WAN, MAN. Network devices: router, switch, hub, modem.','IP address format: 4 sets of numbers 0-255 separated by dots (e.g., 192.168.1.1). IPv4 = 32-bit (4 billion addresses), IPv6 = 128-bit (virtually unlimited). This distinction is frequently tested.',10),
      ]),
      WD_GA('d65',[
        s('d65-ga1','Geography — Physical Features of India + Climate Zones','Mountain ranges: Himalayas (fold mountains), Vindhya, Aravalli (oldest), Western Ghats, Eastern Ghats. River systems: Himalayan rivers (perennial) vs Peninsular rivers (seasonal). Climate zones: tropical, subtropical, arid, alpine.','Aravalli range significance: world\'s oldest fold mountains. Western Ghats: UNESCO World Heritage, biodiversity hotspot. Eastern Ghats: discontinuous, lower elevation. These distinctions appear in Tier 2 GA.',35),
      ]),
    ],
  },
  {
    id:'2026-07-10',dayNumber:66,date:'2026-07-10',phase:4,tier:2,weekNumber:10,
    weekType:'weekday',totalHours:3,hasQuiz:false,
    title:'Day 66 — Height & Distance + Active/Passive Advanced',
    promptBlock:`OPERATIVE BRIEFING — DAY 66

Height & Distance problems (H&D) in Tier 2 are multi-observer, multi-angle problems. Standard Tier 1 H&D: "A tower of height h, angle of elevation = 30°, find distance." Tier 2 H&D: "Two observers at the same level see the top of a tower at 30° and 45°. The observers are 100m apart. Find the height of the tower." These require simultaneous equation setup using trig.

ACTIVE/PASSIVE EDGE CASES: Tier 2 tests passive construction for complex sentences with modals (could have been, should have been, must have been), passive with prepositional phrases, and double-object passives. These require careful grammatical analysis, not pattern matching.`,
    tasks:[
      WD_QR('d66',[
        s('d66-qr1','Height & Distance — Multi-Observer Problems (15 Qs)','15 H&D problems with 2+ observers or changing angles. Setup: draw a diagram first (mandatory), label all distances and angles, form equations using tan = opposite/adjacent, solve simultaneously.','Two-observer formula: if tower height h, distances d₁ and d₂ from base, angles α and β: tanα = h/d₁ and tanβ = h/d₂. When both observers are on the same side: d₁-d₂ = given separation. Solve for h.',45),
        s('d66-qr2','CKT Daily — Database & Software Concepts (10 min)','Database terms: DBMS, SQL (SELECT, INSERT, UPDATE, DELETE), primary key, foreign key. Software types: system software, application software, utility software. Programming languages: compiled vs interpreted.','SQL basic syntax: SELECT * FROM table_name WHERE condition. Primary key = unique identifier, no nulls. Foreign key = references primary key of another table.',10),
      ]),
      WD_ENG('d66',[
        s('d66-e1','Active/Passive — Modal + Complex Sentences (20 Qs)','20 A/P transformation questions using modals and complex clauses. Modal passive pattern: "could have been done," "should have been submitted," "must have been stolen."','Active: "Someone could have stolen the watch" → Passive: "The watch could have been stolen (by someone)." Note: "by someone" is often omitted in passive. This is the most tested complex passive pattern.',30),
        s('d66-e2','Homophones & Commonly Confused Words (15 Qs)','15 questions testing correct usage: affect/effect, bare/bear, complement/compliment, stationary/stationery, principal/principle, counsel/council, altar/alter, cite/site/sight.','Stationary=not moving (a=not), stationery=paper/pens (e=envelope). Complement=something that completes, compliment=praise. Affect=verb (to influence), effect=noun (result). These distinctions are exam staples.',25),
      ]),
    ],
  },
  {
    id:'2026-07-11',dayNumber:67,date:'2026-07-11',phase:4,tier:2,weekNumber:10,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 67 — Weekend: First Full Tier 2 Paper 1 Mock',
    promptBlock:`OPERATIVE BRIEFING — DAY 67 (FIRST T2 MOCK WEEKEND)

This is your first full Tier 2 Paper 1 simulation. 2 hours 15 minutes. 180 questions. -1 for each wrong answer. Do not treat this as a test of where you are — treat it as a test of your exam STRATEGY.

Expected score today: 50-70% accuracy is normal at this stage. Your score will improve dramatically over the next 10 weeks. What matters today: (1) Did you attempt the right number of questions? (2) Did you maintain section time discipline? (3) What was your accuracy?

DEST PRACTICE: Start typing practice. Target: 35 WPM with 95%+ accuracy. Even 15 minutes daily makes a significant difference. Use online typing tutors.`,
    tasks:[
      WE_MT('d67',[
        s('d67-m1','Full Tier 2 Paper 1 Mock (2h 15min)','Simulate the full Tier 2 Paper 1 exam: 90 Quant questions (90 min) + 90 English questions (90 min). Total: 2h 30min with 15-min break between papers, or 2h 15min with both combined.','Target for your first T2 mock: attempt 60-65 Quant questions and 65-70 English questions. Do NOT guess. Accuracy over quantity. This is not a Tier 1 speed race.',135),
        s('d67-m2','DEST Practice — 15 Minutes Typing','Type a 500-word passage. Calculate WPM and error rate. Target by exam day: 35 WPM, <5% error rate. This is the data entry skill test.','DEST typing tip: keep eyes on the source text, not the screen. Develop muscle memory for common letter combinations. "The," "and," "that," "with" = 70% of all English text.',15),
      ]),
      WE_DS('d67',[
        s('d67-d1','Mock Analysis — Full Paper Review','For every wrong answer: (1) identify the topic, (2) find the correct approach, (3) note whether it was a concept error, application error, or time-pressure error.','T2 mock analysis insight: categorize wrong answers by topic. If 5+ wrong answers in one topic = that topic needs immediate deep study this week. This is your learning priority list.',90),
        s('d67-d2','Weak Topic Deep Study — 2 Hours','Based on mock analysis: choose your 2 weakest topics from today\'s Quant section. Study those topics specifically: re-read theory, work 10 PYQs each with full method explanation.','The T2 learning cycle: mock → identify weakness → deep study → apply in next mock. This is the fastest improvement path available at this stage.',120),
      ]),
    ],
  },
  {
    id:'2026-07-12',dayNumber:68,date:'2026-07-12',phase:4,tier:2,weekNumber:10,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 68 — Weekend: English Depth + Statistics Introduction',
    promptBlock:`OPERATIVE BRIEFING — DAY 68

Sunday of week 10. Your mock from yesterday revealed your weak areas. Today: targeted English depth + Statistics (a new Tier 2 Quant topic not in Tier 1).

STATISTICS in TIER 2: Mean, Median, Mode, Standard Deviation, Variance, Coefficient of Variation — these are the main statistical concepts. The key insight: Statistics questions in Tier 2 are calculation-heavy. Mean calculation with grouped data (assumed mean method) and finding median from a cumulative frequency table are the most common question types.

ENGLISH DEPTH: Tier 2 RC passages use academic vocabulary that requires active comprehension. Today: 2 long passages (700+ words each) with full analysis of vocabulary, structure, and question types.`,
    tasks:[
      WE_DS('d68',[
        s('d68-d1','Tier 2 English — 2 Long RC Passages (700+ words)','Read 2 RC passages of 700+ words each. For each passage: (1) identify the author\'s main argument, (2) note the tone (critical/supportive/neutral), (3) identify 3 key vocabulary words with context-derived meanings.','After reading each passage, write 1 sentence summary of the main argument. If you can\'t do this, re-read the first and last paragraphs of each section.',90),
        s('d68-d2','Statistics — Mean, Median, Mode + Standard Deviation (20 Qs)','20 statistics problems covering: arithmetic mean of grouped data (assumed mean method), median from cumulative frequency, mode for grouped data, and standard deviation calculation for small datasets.','Assumed mean method: take an assumed mean A, calculate d = x - A, then actual mean = A + (Σfd/Σf). This is faster than direct calculation for grouped data with large class intervals.',90),
      ]),
      WE_DS('d68',[
        s('d68-d3','CKT — Security, Virus, Cybersecurity (10 min)','Computer viruses: types (boot sector, file infector, macro, worm, Trojan, ransomware). Antivirus software function. Cybersecurity basics: encryption, password security, phishing awareness.','Worm vs Virus: virus needs a host file to spread, worm spreads independently. Trojan = disguised as useful software. Ransomware = encrypts files and demands payment.',10),
        s('d68-d4','Weekly Review — T2 Foundation Assessment','Review the week: (a) Which T2 topics are clear? (b) Which need more practice? (c) Mock score trend. Set 3 specific improvement targets for next week.','Weekly self-assessment is more valuable than any single study session. It ensures your effort is directed at the right places.',20),
      ]),
    ],
  },
]

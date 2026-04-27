// Week 13 — Jul 27 (Sun) to Aug 2 (Sat) — Phase 5: Acceleration | Days 83-89
// Tier 2 Acceleration: Double mocks every weekend, CKT daily, DEST 35WPM target
const WD_ENG = (id, date, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks })
const WD_GA  = (id, date, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks })
const WD_QR  = (id, date, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`, subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`, subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper 1 Mock (2 hr 15 min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:45, title:'DEST Drill + Mock Analysis (45 min)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-07-27',dayNumber:83,date:'2026-07-27',phase:5,tier:2,weekNumber:13,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 83 — Advanced Parajumbles T2 + Economy Advanced + DI Caselets T2',
    promptBlock:`OPERATIVE BRIEFING — DAY 83 (TIER 2 ACCELERATION WEEK 13 BEGINS)

You are now in Phase 5. Thirteen weeks of foundation have built the machine — this phase sharpens it into a weapon. The standard has changed. Tier 2 is not Tier 1 with harder questions. It is a different exam demanding a different mind. 300+/390 is your floor, not your ceiling.

ENGLISH — ADVANCED PARAJUMBLES T2:
Seven-sentence or longer parajumbles with abstract philosophical or literary themes are standard Tier 2 fare. The trap is trying to fix the order sentence-by-sentence. Instead, build anchor pairs first — two sentences whose logical connection is undeniable (pronoun reference, cause-effect, contrast word like "however" or "therefore"). Once you have 2-3 anchor pairs, the structure collapses into place. Attempt 10 hard PYQs. Any parajumble taking more than 90 seconds is a strategic skip — mark it, return after all other questions are done. The -1 penalty for a wrong guess on a 7-sentence parajumble costs more than leaving it blank.

ECONOMY ADVANCED — GA:
Stock market mechanics, SEBI's regulatory framework, mutual fund classifications (equity/debt/hybrid/ELSS), derivatives basics (futures vs options distinction), and RBI's monetary instruments (CRR, SLR, repo rate, reverse repo, MSF, OMO). These topics cluster in Tier 2 GA and reward candidates who understand the interrelationships — not just isolated facts.

QUANT — DI CASELETS T2:
Caselet DI requires extracting numerical data embedded in prose paragraphs. Your first 2 minutes must be pure reading — extract ALL data points and write them in table form before attempting a single question. Attempting questions during the reading phase causes misinterpretation. Target: 20 questions in 35 minutes. Strict 25-second-per-question discipline enforced after your reading phase.

CKT DAILY (10 min): Operating systems — Windows functions, file management, essential keyboard shortcuts (Ctrl+Z, Alt+Tab, Win+D, Ctrl+Shift+Esc etc.).`,
    tasks:[
      WD_ENG('d83','2026-07-27',[
        s('d83-e1','Advanced Parajumbles T2 — 7+ Sentence Abstract Sets','Work through 10 hard PYQs featuring 7+ sentence parajumbles on abstract themes (philosophy, economics, literature criticism). Method: (1) Identify mandatory opening sentence — often a definition or general statement. (2) Build anchor pairs using pronoun references and discourse markers. (3) Eliminate impossible options. (4) Use first/last sentence elimination to break ties.','If two options remain: check the LAST sentence. A conclusion sentence rarely ends with "however" or a question. Use this to break most ties without re-reading the whole passage.',35),
        s('d83-e2','CKT Daily Practice — Operating Systems & Shortcuts (10 min)','Windows OS functions: file management (cut/copy/paste, create/delete folders), Task Manager (Ctrl+Shift+Esc), virtual desktops (Win+Tab), file search (Win+S). Keyboard shortcuts for productivity: Ctrl+Z (undo), Ctrl+Y (redo), Alt+F4 (close), Win+D (show desktop), Ctrl+W (close tab). Practice 15 flashcard-style CKT questions.','CKT in Tier 2 is pass/fail with 20-minute duration. But practicing daily ensures you are never caught off-guard. Operating system questions form the largest CKT cluster.',10),
      ]),
      WD_GA('d83','2026-07-27',[
        s('d83-ga1','Stock Market + SEBI + Mutual Funds Advanced','Stock exchange structure: NSE (National Stock Exchange), BSE (Bombay Stock Exchange), SEBI as regulator (established 1992, statutory body). Key SEBI functions: protects investors, regulates intermediaries, prohibits insider trading. Mutual funds: NAV calculation, open-ended vs closed-ended, ELSS tax benefit under 80C. Derivatives: futures (obligation to buy/sell) vs options (right, not obligation). Call option vs put option distinction.','SEBI was given statutory powers by the SEBI Act 1992. Before that it was a non-statutory body (1988). This distinction appears frequently in Tier 2 GA.',25),
        s('d83-ga2','RBI Monetary Instruments Deep Dive','Repo rate: rate at which RBI lends to commercial banks. Reverse repo: rate at which RBI borrows from banks. CRR: Cash Reserve Ratio — % of deposits banks must keep with RBI (no interest earned). SLR: Statutory Liquidity Ratio — banks must hold in gold/govt securities. MSF: Marginal Standing Facility — emergency overnight borrowing at repo+0.25%. OMO: Open Market Operations — RBI buys/sells govt securities to manage liquidity.','Memory device for RBI rates hierarchy: Repo > Reverse Repo always. MSF = Repo + 0.25%. Bank Rate = MSF rate historically. Any change in repo rate signals monetary policy stance.',20),
      ]),
      WD_QR('d83','2026-07-27',[
        s('d83-qr1','DI Caselets T2 — Reading Comprehension-Based DI (35 min)','Attempt 20 caselet-based DI questions. Protocol: (1) Read full caselet paragraph (2 min). (2) Extract ALL numerical data into a clean mini-table on your rough sheet. (3) Identify what each question is asking before computing. (4) Use approximation for options that are far apart. Do NOT compute exact answers when approximation suffices — saves 30-40 seconds per question.','Caselet DI trap: the numbers are deliberately stated in complex ways ("3/5 of the remaining" or "20% more than last year"). Slow down during extraction — a wrong extracted value cascades into multiple wrong answers.',35),
        s('d83-qr2','CKT Reinforcement — 5 Quick OS Recall Questions','After the QR block, spend 5 minutes doing oral recall: name 5 Windows keyboard shortcuts, 3 file management operations, 2 BIOS functions. This reinforces the morning CKT session with spaced repetition.','Spaced repetition within the same day (morning study + evening recall) improves retention by 40% compared to single-session study.',5),
      ]),
    ],
  },
  {
    id:'2026-07-28',dayNumber:84,date:'2026-07-28',phase:5,tier:2,weekNumber:13,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 84 — RC T2 Advanced Literary + Polity Emergency Provisions + Geometry T2 Hardest',
    promptBlock:`OPERATIVE BRIEFING — DAY 84

Tier 2 RC is a different beast from Tier 1. Literary passages — excerpts from novels, critical essays on poetry, philosophical texts — test your ability to identify tone, infer authorial attitude, and extract implications that are never explicitly stated. This is interpretive reading, not factual reading.

ENGLISH — RC T2 LITERARY + POETRY:
Poetry extract comprehension is high-yield. SSC Tier 2 has repeatedly used 8-12 line poetry excerpts followed by questions on: (a) what the poet implies in line X, (b) what figure of speech is used, (c) what the poem's central theme is. Strategy: Do not try to understand every word. Identify the emotional tone first (celebratory, mournful, satirical, nostalgic). Then identify the subject of the poem (nature, mortality, patriotism, love). With those two anchors, 4 of 6 questions become answerable by elimination. Inference questions: the correct answer is always supported by the text — never requires outside knowledge.

POLITY — EMERGENCY PROVISIONS:
Article 352 (National Emergency), 356 (President's Rule), 360 (Financial Emergency) form one of the most-tested Polity clusters in Tier 2 GA. Know the grounds, duration, Parliamentary approval requirements, and historical instances. Governor's powers — both discretionary and ordinary — are another frequent source. State Legislature composition, sessions, and quorum requirements round out this topic.

GEOMETRY T2 — HARDEST LEVEL:
9-point circle, Euler line, and advanced circle theorems are the peak of SSC Tier 2 geometry. The 9-point circle passes through the midpoints of the three sides, the feet of the three altitudes, and the midpoints of the segments from each vertex to the orthocenter. Euler line contains the orthocenter, centroid, and circumcenter in a 2:1 ratio. Practice 30 PYQs — these theorems appear as "which of the following must be true" questions where knowing the theorem eliminates 3 wrong options instantly. Remember: every wrong answer in Tier 2 costs you -1. Guessing on geometry without knowing the theorem is expensive.`,
    tasks:[
      WD_ENG('d84','2026-07-28',[
        s('d84-e1','RC T2 Advanced — Literary Passage + Poetry Extract (30 min)','Work through 1 literary RC passage (800+ words) and 1 poetry extract (10-12 lines), 6 questions each. Literary passage focus: identify the narrator\'s tone, distinguish between what is stated vs implied, find the passage\'s central argument. Poetry focus: identify the figure of speech in each stanza, determine theme from imagery, answer inference questions by mapping answer choices back to specific lines.','Poetry inference trap: the option that sounds "deep" or "philosophical" is often the wrong answer. The correct inference is always conservative — what the text actually supports, not what you feel it means.',30),
        s('d84-e2','CKT Daily Practice — Polity & Exam OS Commands (10 min)','Practice 15 CKT questions focused on: file extensions (.docx, .xlsx, .pdf, .exe, .jpg), folder navigation shortcuts, Windows Search functions, and basic computer terminology (RAM vs ROM, HDD vs SSD, CPU vs GPU).','CKT file management questions often test: which extension belongs to which application, and basic operations. These are free marks with 2 days of focused practice.',10),
      ]),
      WD_GA('d84','2026-07-28',[
        s('d84-ga1','Emergency Provisions — Art 352, 356, 360','Art 352 (National Emergency): grounds — war, external aggression, armed rebellion (not internal disturbance after 44th Amendment). Approved by Parliament special majority (2/3 members present + majority of total strength) within 1 month. Can be extended indefinitely in 6-month increments. Art 356 (President\'s Rule): on Governor\'s report or President\'s satisfaction. Parliamentary approval within 2 months. Max 3 years (1 year initially + extensions). Art 360 (Financial Emergency): never proclaimed in India\'s history. Affects financial obligations of states.','44th Amendment 1978 changed Art 352 grounds from "internal disturbance" to "armed rebellion" — this distinction is heavily tested. Know which President proclaimed Art 356 most frequently (historical context).',25),
        s('d84-ga2','Governor Powers + State Legislature Structure','Governor discretionary powers: appointment of CM when no clear majority, dissolving assembly on CM advice (can refuse), giving/withholding assent to bills, reserving bills for President. Ordinary powers: executive, legislative, financial, judicial. State Legislature: Vidhan Sabha (lower, directly elected, max 500 min 60 members) + Vidhan Parishad (upper, where exists). Only 6 states have Parishad: UP, Bihar, Maharashtra, Karnataka, Telangana, Andhra Pradesh.','Governor is appointed by President (Art 155) and holds pleasure of President (Art 156) — NOT elected. This makes Governor constitutionally different from President.',20),
      ]),
      WD_QR('d84','2026-07-28',[
        s('d84-qr1','Geometry T2 Hardest — 9-Point Circle + Euler Line + Advanced Circle Theorems (40 min)','9-Point circle radius = circumradius/2. Euler line: circumcenter (O), centroid (G), orthocenter (H) are collinear with OG:GH = 1:2. Advanced circle theorems for T2: Power of a Point, Radical Axis, Alternate Segment Theorem (angle between tangent and chord = inscribed angle in alternate segment). Solve 30 PYQs applying these. Time: 40 minutes = 80 seconds per question average.','Alternate Segment Theorem is the most tested "advanced" circle theorem in SSC Tier 2. If a tangent touches the circle at point P, and PQ is a chord, the angle between tangent and chord PQ equals the inscribed angle in the alternate segment.',40),
        s('d84-qr2','CKT Recall — Computer Terminology (5 min)','Quick oral recall: define RAM, ROM, HDD, SSD, CPU, GPU, motherboard, BIOS. Practice saying the full forms without hesitation. This 5-minute recall locks morning CKT learning.','Consistent daily CKT practice across all 4 weeks of Phase 5 guarantees you enter the CKT section with zero anxiety — it becomes routine.',5),
      ]),
    ],
  },
  {
    id:'2026-07-29',dayNumber:85,date:'2026-07-29',phase:5,tier:2,weekNumber:13,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 85 — Paired Conjunctions T2 + Modern Physics GA + T2 Arithmetic Sprint + DEST',
    promptBlock:`OPERATIVE BRIEFING — DAY 85

Wednesday. Midweek intensity lock. Today combines three of Tier 2's most demanding elements: grammatical precision in English, conceptual breadth in Science GA, and pure execution speed in Quant. Plus your first DEST session of the week.

ENGLISH — PAIRED CONJUNCTIONS:
"Neither/nor," "either/or," "not only/but also," "both/and" — these are correlation conjunctions (correlative conjunctions) that must maintain parallel structure. The SSC Tier 2 trap: using "neither/or" instead of "neither/nor," or breaking parallel structure by having an infinitive on one side and a gerund on the other. Every question on this topic in Tier 2 tests whether you can spot the structural violation. Rule: what follows the first conjunction must be grammatically identical in structure to what follows the second.

SCIENCE — MODERN PHYSICS:
Radioactivity (alpha, beta, gamma radiation — properties and penetration power), nuclear fission (heavy nucleus splits → chain reaction → atomic bomb/nuclear power), nuclear fusion (light nuclei combine → requires extreme temperature → sun's energy source). Semiconductor basics: intrinsic vs extrinsic, p-type (trivalent dopant) vs n-type (pentavalent dopant), p-n junction, forward and reverse bias. Tier 2 tests conceptual understanding, not deep calculations.

QUANT — T2 ARITHMETIC SPRINT:
30 mixed hardest PYQs, all arithmetic topics (percentage, profit/loss, SI/CI, ratio, time/work, STD). Strict 25 seconds per question. This is pure execution speed — the answers are achievable, but only with flawless shortcut application. Any question where you start long-form calculation has already failed the time constraint. Bail out at 25 seconds: either you have the answer or you skip with a strategic mark. The -1 penalty means that a random 4-option guess has an expected value of -0.25 marks per attempt. Only guess when you can eliminate at least 2 options.

DEST (15 min): Aim for 35 WPM with sub-5% error. Measure both metrics today.`,
    tasks:[
      WD_ENG('d85','2026-07-29',[
        s('d85-e1','Paired Conjunctions T2 — Error Detection + Fill-in-Blanks (25 min)','Paired conjunction rules: (1) Neither...nor / Either...or / Both...and — verb agrees with the subject CLOSER to the verb. (2) Not only...but also — both elements must be parallel (both nouns, both verbs, both adjectives). (3) No sooner...than / Hardly...when / Scarcely...when — these trigger inverted subject-verb structure. Practice: 15 error detection questions + 10 FIB questions with paired conjunctions. Target: 23/25.','Trap: "Neither the students nor the teacher ARE present" — wrong because "teacher" (singular, closer) governs the verb → "is." Test yourself: change the order and verify the verb changes accordingly.',25),
        s('d85-e2','DEST Session — 35 WPM Precision Drill (15 min)','Full DEST simulation: type the given passage at maximum accuracy. After session: calculate WPM = (total characters typed / 5) / minutes elapsed. Calculate error% = (wrong keystrokes / total keystrokes) × 100. Target: WPM ≥ 35, error% ≤ 5. Record both numbers in your tracker — daily tracking reveals your improvement curve.','DEST exam format: 15 minutes, given passage to type. Errors are penalized — backspacing does NOT fix your error count in some systems. Practice without backspacing to simulate exam conditions accurately.',15),
      ]),
      WD_GA('d85','2026-07-29',[
        s('d85-ga1','Modern Physics — Radioactivity + Nuclear Reactions','Alpha radiation: 2 protons + 2 neutrons (helium nucleus), stopped by paper, positively charged. Beta radiation: electron or positron, stopped by thin aluminum, negatively charged (beta-minus) or positively (beta-plus). Gamma radiation: electromagnetic wave, stopped by thick lead, no charge, highest penetrating power. Fission: U-235 + neutron → Ba-141 + Kr-92 + 3 neutrons + energy (chain reaction). Fusion: Hydrogen isotopes (deuterium + tritium) → Helium + energy. Fusion requires 10⁷ K temperature — this is why fusion reactors are still experimental.','Penetrating power order: Gamma > Beta > Alpha. Ionizing power order: Alpha > Beta > Gamma. These orderings are always reversed — a classic trap question.',25),
        s('d85-ga2','Semiconductor Basics for T2 GA','Pure silicon/germanium = intrinsic semiconductor (very few free electrons at room temp). Add trivalent impurity (Boron, Aluminium, Gallium) → p-type (holes as majority carriers). Add pentavalent impurity (Phosphorus, Arsenic, Antimony) → n-type (electrons as majority carriers). P-N junction: depletion layer forms at interface. Forward bias (+ to p-side): current flows. Reverse bias (+ to n-side): current blocked (except breakdown). Diode, transistor, LED all based on p-n junction principles.','Mnemonic for p-type dopants: "BAG" — Boron, Aluminium, Gallium (all Group 13 = trivalent). For n-type: "PAS" — Phosphorus, Arsenic, Antimony (all Group 15 = pentavalent).',20),
      ]),
      WD_QR('d85','2026-07-29',[
        s('d85-qr1','T2 Arithmetic Sprint — 30 Hardest Mixed PYQs (25 sec/Q strict)','30 questions from: Percentage (5), Profit/Loss (5), SI/CI (5), Ratio/Proportion (5), Time/Work (5), Speed/Time/Distance (5). Strict timer: 25 seconds per question. On the 26th second, mark your best-elimination guess and move forward. Track: how many you solved under 25 sec vs over. Target: 25+ solved within time, accuracy 88%+.','CI formula speed: A = P(1 + r/100)^n. For 2 years: A = P(1 + r/100)². For the "effective rate" for 2 years: r + r + r²/100. This expansion saves 40 seconds on every CI problem.',35),
        s('d85-qr2','CKT Daily — Keyboard Shortcuts Rapid Recall (5 min)','Rapid recall drill: name the shortcut for: undo, redo, select all, copy, paste, cut, find, save, print, close window, switch window, screenshot. Then: name 3 shortcuts specific to Excel and 3 specific to Word.','CKT keyboard shortcut questions are guaranteed marks — they require pure memorization with zero calculation. Ten minutes of daily drill makes these reflexive by exam day.',5),
      ]),
    ],
  },
  {
    id:'2026-07-30',dayNumber:86,date:'2026-07-30',phase:5,tier:2,weekNumber:13,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 86 — Sentence Completion T2 + World Geography + Algebra T2 Hardest + CKT Excel',
    promptBlock:`OPERATIVE BRIEFING — DAY 86

Thursday. Three weekday sessions remain before the first double-mock weekend. Your preparation must be complete by Saturday morning. Today locks sentence completion logic, world geography, and Tier 2 algebraic difficulty.

ENGLISH — SENTENCE COMPLETION T2:
This question type asks you to choose the sentence that best fills a gap in a paragraph — not just a word, but an entire sentence. This tests logical coherence. The correct choice must: (1) connect semantically to the sentence before it, (2) connect grammatically and logically to the sentence after it, and (3) maintain the paragraph's overall tone. Wrong answers typically: contradict the tone, introduce a topic not related to the passage, or break the logical chain. Practice with 15 Tier 2-level questions. Time yourself: these should take 60-75 seconds each at most.

GEOGRAPHY — WORLD GEOGRAPHY:
Seven continents and their defining features, major rivers (Nile = longest, Amazon = highest volume, Mississippi-Missouri in USA, Rhine in Europe, Yangtze in China), ocean currents (warm: Gulf Stream, Kuroshiro; cold: Labrador, Benguela, California), time zones and the International Date Line (180° meridian), latitude/longitude basics (equator 0°, tropics at 23.5°, Arctic/Antarctic at 66.5°). This topic delivers reliable GA marks in Tier 2 — it rewards systematic memorization.

ALGEBRA T2 — HARDEST:
Simultaneous inequalities, modulus equations, and complex surds represent the hardest Algebra at Tier 2. For modulus equations: |x - a| = b → x = a+b or x = a-b. For |x - a| < b: a-b < x < a+b. Surds rationalization: multiply by conjugate. Complex surds like √(7+4√3) — check if it equals (a + b)² form by expanding and matching coefficients.

CKT (10 min): MS Excel — VLOOKUP syntax, pivot tables, and essential formula shortcuts.`,
    tasks:[
      WD_ENG('d86','2026-07-30',[
        s('d86-e1','Sentence Completion T2 — Logical Coherence Focus (25 min)','15 sentence completion questions where a full sentence must be chosen to fill a gap in a paragraph. Strategy: (1) Read the sentences before and after the gap. (2) Identify the logical relationship needed (contrast, elaboration, consequence, example). (3) Check each option for tonal consistency with the paragraph. (4) The correct answer often uses a discourse marker that matches the required logical relationship.','Eliminate options that: use absolute language ("always," "never") when the paragraph is nuanced; shift to a new unrelated topic; use pronouns that have no clear antecedent in the surrounding text.',25),
        s('d86-e2','CKT Daily Practice — MS Excel Functions (10 min)','VLOOKUP syntax: =VLOOKUP(lookup_value, table_array, col_index_num, [range_lookup]). FALSE = exact match, TRUE = approximate match. Pivot tables: Insert → PivotTable → select range → drag fields. Essential formulas: SUM, AVERAGE, COUNT, COUNTIF, IF, IFERROR, INDEX-MATCH. Keyboard shortcuts: Ctrl+Shift+L (filter), Ctrl+T (table), F4 (absolute reference lock).','VLOOKUP col_index_num trap: counting starts from 1, not 0. If your table has columns A, B, C and you want column C, col_index_num = 3. CKT tests this exact trap.',10),
      ]),
      WD_GA('d86','2026-07-30',[
        s('d86-ga1','World Geography — Continents + Major Rivers + Ocean Currents','Continents by area: Asia > Africa > North America > South America > Antarctica > Europe > Australia. Longest rivers: Nile (Africa, 6650 km) > Amazon (South America) > Yangtze (China) > Mississippi-Missouri (USA). Warm ocean currents: Gulf Stream (Atlantic, warms Western Europe), Kuroshiro (Pacific). Cold currents: Labrador (Canada), Benguela (West Africa), California (US West Coast). Cold currents cause deserts on west coasts (Atacama, Namib).','Cold ocean currents on west coasts of continents create deserts — the upwelling cold water reduces evaporation and precipitation. This explains why the Atacama Desert (world\'s driest) is on South America\'s Pacific coast.',25),
        s('d86-ga2','Time Zones + Latitude/Longitude + Key Geographic Coordinates','IST = UTC +5:30 (unique fractional time zone). International Date Line at 180° meridian — crossing eastward subtracts a day, westward adds a day. Key parallels: Tropic of Cancer (23.5°N) passes through India, China, Egypt, Mexico. Tropic of Capricorn (23.5°S) passes through Australia, Brazil, South Africa. Arctic Circle at 66.5°N, Antarctic Circle at 66.5°S. Prime Meridian (0°) passes through Greenwich, UK.','India facts: IST is 5:30 ahead of GMT. The 82.5°E standard meridian passes through Mirzapur, UP — which is why IST is 5.5 hours ahead (82.5/15 = 5.5).',20),
      ]),
      WD_QR('d86','2026-07-30',[
        s('d86-qr1','Algebra T2 Hardest — Simultaneous Inequalities + Modulus + Complex Surds (40 min)','Simultaneous inequalities: solve each separately, find the intersection. E.g., 2x-3 > 1 AND x+5 < 12 → x > 2 AND x < 7 → solution: 2 < x < 7. Modulus: |2x-3| = 5 → 2x-3 = 5 (x=4) or 2x-3 = -5 (x=-1). Complex surds: √(7+4√3) = √((4+3+4√3)) = √((2+√3)²) = 2+√3. Practice 20 hardest PYQs on these three types.','Surd simplification method: Assume √(a + b√c) = √x + √y. Then square both sides: a + b√c = x + y + 2√(xy). Match rational parts: x+y=a. Match irrational parts: 4xy = b²c. Solve these two equations for x and y.',40),
        s('d86-qr2','CKT Recall — Excel Quick Quiz (5 min)','Without notes: answer these 5 questions orally. (1) What does VLOOKUP stand for? (2) What does FALSE mean in VLOOKUP? (3) How do you create a pivot table? (4) What shortcut locks a cell reference? (5) What is the difference between COUNT and COUNTA?','COUNTA counts all non-empty cells including text. COUNT counts only numerical cells. This distinction appears in CKT questions about Excel functions.',5),
      ]),
    ],
  },
  {
    id:'2026-07-31',dayNumber:87,date:'2026-07-31',phase:5,tier:2,weekNumber:13,
    weekType:'weekday',totalHours:2.5,hasQuiz:false,
    title:'Day 87 — Error Detection T2 Hardest + CA+History + P&C+Probability T2 + Complex Input-Output',
    promptBlock:`OPERATIVE BRIEFING — DAY 87

Friday. Last weekday before the double-mock weekend. The quality of this session determines your readiness for back-to-back 2hr15min mocks tomorrow. Mental sharpness must be maintained — do not skip the QR block because you are "saving energy for the weekend." The mock performance is built by the weekday preparation.

ENGLISH — ERROR DETECTION T2 HARDEST:
The 20 hardest error detection questions at Tier 2 level specifically target: (1) Modal verb errors — "You must to go" (wrong — modal + base verb, no "to") vs "You ought to go" (correct — "ought" is exception). (2) Infinitive vs gerund preference — verbs like "enjoy," "suggest," "avoid," "recommend," "mind" ALWAYS take gerund. Verbs like "decide," "plan," "intend," "promise," "refuse," "hope" take infinitive. (3) Absolute phrase errors — an absolute phrase must logically relate to the subject of the main clause ("Having finished the exam, the students left" — correct; "Having finished the exam, the hall was empty" — wrong, hall did not finish the exam). Each of these 20 questions deserves your full analytical attention. These are not speed questions — they reward grammatical precision.

CA + HISTORY — INDEPENDENCE ERA + CONSTITUTION FRAMING:
The events from 1945-1950 are high-value: Cabinet Mission Plan (1946), Direct Action Day (1946), Mountbatten Plan/Indian Independence Act (1947), partition of India and Pakistan (Aug 14-15, 1947), Constituent Assembly work (Dec 1946 - Nov 1949), and adoption of Constitution on Nov 26, 1949 (effective Jan 26, 1950). Current Affairs: any major government, science, or sports events from the current week.

QUANT — P&C + PROBABILITY + COMPLEX INPUT-OUTPUT:
Permutations and Combinations combined with Probability at Tier 2 level. Derangements concept (all items in wrong positions), circular arrangements, restrictions in seating. Input-Output Reasoning at Tier 2 involves multi-step operations (words shift, numbers transform simultaneously across steps). Track the pattern across 2-3 steps before predicting Step 5 or 6.`,
    tasks:[
      WD_ENG('d87','2026-07-31',[
        s('d87-e1','Error Detection T2 — 20 Hardest (Modal + Infinitive/Gerund + Absolute Phrase)','20 questions specifically targeting the three hardest error types. Modal verb errors: can/could/may/might/shall/will/should/would/must/ought — all followed by base verb (no "to") except "ought to." Infinitive/Gerund: memorize the two verb lists. Absolute phrase: the implied subject of the absolute phrase must match the subject of the main clause.','Gerund-preferring verbs mnemonic: MRSED-FFPCK — Mind, Resent, Suggest, Enjoy, Deny, Finish, Fancy, Postpone, Can\'t help, Keep, Consider. Every other verb in a choice → check if infinitive is required.',35),
        s('d87-e2','CKT Daily — Programming Logic Basics (10 min)','Practice 15 CKT questions on: algorithm definition, flowchart symbols (oval=start/end, rectangle=process, diamond=decision, parallelogram=input/output), binary number system (convert 10 to binary = 1010, convert 1101 to decimal = 13), basic programming concepts (variable, loop, conditional).','Binary conversion: divide by 2 repeatedly, read remainders bottom-up. 10 ÷ 2 = 5 R0, 5÷2 = 2 R1, 2÷2 = 1 R0, 1÷2 = 0 R1 → binary = 1010. Practice 5 conversions without a calculator.',10),
      ]),
      WD_GA('d87','2026-07-31',[
        s('d87-ga1','CA + Independence Era History — 1945-1950 Timeline','1946: Cabinet Mission Plan (proposed 3-tier federation), Nehru\'s interim government formed, Direct Action Day (Aug 16). 1947: Indian Independence Act — two dominions India and Pakistan. Aug 14 = Pakistan independence day, Aug 15 = India independence day. 1946-1949: Constituent Assembly drafted Constitution — Dr. B.R. Ambedkar as Chairman of Drafting Committee. Nov 26, 1949: Constitution adopted ("Constitution Day"/Samvidhan Diwas). Jan 26, 1950: Constitution came into force (Republic Day). First President: Dr. Rajendra Prasad.','The Constituent Assembly had 299 members when it adopted the Constitution. It first met on Dec 9, 1946. Took 2 years, 11 months, 18 days to draft. These exact numbers appear in Tier 2 GA.',25),
        s('d87-ga2','Current Affairs — This Week\'s Major Events','Cover all major news from the current week: government schemes announced, international summits/meetings, science/technology breakthroughs, sports results, major appointments (RBI Governor, Cabinet Ministers, Chief Justices, UN appointments). Cross-reference with SSC-specific CA sources.','Tier 2 GA tests CA from approximately 6-8 months before the exam date. For August 2026 exam: January-July 2026 CA is prime territory. Stay consistent with your daily CA source.',20),
      ]),
      WD_QR('d87','2026-07-31',[
        s('d87-qr1','P&C + Probability T2 Combined (30 PYQs)','P&C: circular arrangement formula = (n-1)!, necklace/garland = (n-1)!/2 (for non-distinguishable flipping). Derangements (none in original position): D(n) = n!(1 - 1/1! + 1/2! - 1/3! + ... ± 1/n!). Probability with P&C: P = favorable arrangements / total arrangements. Coin toss, dice, card drawing — know all standard sample spaces. 30 PYQs in 35 minutes.','Card probability most tested: deck has 52 cards, 4 suits of 13 each. P(ace) = 4/52 = 1/13. P(red card) = 26/52 = 1/2. P(face card) = 12/52 = 3/13. These should be reflex answers.',35),
        s('d87-qr2','Complex Input-Output Reasoning — Multi-Step Pattern (20 min)','Input-Output: Machine takes input (words+numbers), applies rules across steps. Method: (1) Compare Input to Step 1 — identify what changed. (2) Compare Step 1 to Step 2 — verify the same rule applies. (3) Apply the rule forward to find required step. Complex T2 types: words and numbers both rearrange simultaneously with different rules. Practice 5 complex sets.','Input-Output time budget: 2 minutes per set (4 questions). If pattern not found in 90 seconds → skip the entire set. Pattern-finding is all-or-nothing — partial pattern = all 4 answers wrong.',20),
      ]),
    ],
  },
  {
    id:'2026-08-01',dayNumber:88,date:'2026-08-01',phase:5,tier:2,weekNumber:13,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 88 — Double Mock Weekend: Advanced DI + RC Marathon + 2 Full Mocks + DEST',
    promptBlock:`OPERATIVE BRIEFING — DAY 88 (SATURDAY — DOUBLE MOCK DAY 1)

This is the new standard. Two full Paper 1 mocks in a single day. This is not sadism — it is engineering. The Tier 2 examination may have two sessions. Candidates who have never done back-to-back mocks experience 15-25 point score collapse in the second session due to cognitive fatigue. You will not be one of them.

PROTOCOL FOR DOUBLE MOCK DAY:
Morning: Deep Study Block (5 hours) — Advanced DI and RC. After 5 hours: 30-minute break (lunch, walk — no screens). Then Mock 1 (2hr15min). 30-minute analysis break (find top 3 errors only — no deep analysis yet). Then Mock 2 (2hr15min). Then Revision block: DEST drill + deep mock analysis.

ADVANCED DI COMPREHENSIVE (3 hours):
Caselet DI (1hr) → Table-based DI (45min) → Graph/Bar/Line DI (45min) → Combined DI (30min). 50 questions total. This is a DI endurance session. Your reading and extraction speed determines your score in Tier 2 DI. Target: complete 45 of 50 with 88%+ accuracy.

ADVANCED RC MARATHON (2 hours):
Two passages of 1500+ words each. Focus on: tone identification (critical/appreciative/neutral/ironic/nostalgic), author's attitude toward specific characters or ideas, implication questions (what does the passage suggest WITHOUT explicitly stating), and purpose questions (why did the author include this paragraph?). This is the highest-difficulty RC at Tier 2 level.

MOCK TARGETS: Both mocks must hit 88%+ accuracy overall. Track section-wise accuracy. The section below 88% is your Week 14 priority. -1 per wrong answer means precision beats volume — do not attempt questions you cannot answer with 70%+ confidence.`,
    tasks:[
      WE_DS('d88',[
        s('d88-ds1','Advanced DI Comprehensive — Caselets + Tables + Graphs (3 hrs / 50 Qs)','Hour 1 — Caselet DI (20 Qs): Read each caselet fully, extract all data into a structured table before answering. Hour 2 — Table + Graph DI (20 Qs): Bar charts, line graphs, pie charts at T2 level — questions on growth rates, percentage change, ratio between categories. Final 1 hr — Combined DI (10 Qs): Two sources for one question set. Master the skill of cross-referencing between two data sources.','DI accuracy checkpoint: after every 10 questions, spend 30 seconds verifying your last 3 answers. This error-catching habit prevents cascading wrong answers from a misread data point.',180),
        s('d88-ds2','Advanced RC Marathon — 2 Passages 1500+ Words Each (2 hrs)','Passage 1 (60 min): Literary/philosophical passage. Answer all questions. For tone questions: identify at least 3 specific words/phrases that reveal the author\'s attitude before choosing. For implication questions: the answer must be derivable from the text — eliminate any answer that requires outside knowledge. Passage 2 (60 min): Social/economic passage. Focus on the author\'s purpose and structure.','RC time management: spend 40% of time reading (carefully), 60% of time answering. Never re-read the full passage for each question — build a mental map during the initial read.',120),
      ]),
      WE_MT('d88',[
        s('d88-mt1','Full Paper 1 Mock 1 — 2 hr 15 min (Target: 88%+ accuracy)','Attempt full Tier 2 Paper 1 under strict exam conditions: 2 hours 15 minutes, no pause, phone away, exam-like environment. Section strategy: English (45 min) → GA (25 min) → Quant+Reasoning (65 min). Skip-and-return protocol: any question taking more than 75 seconds → mark and skip immediately.','The -1 penalty means your break-even threshold is 75% confidence. Below that: skip. Above that: attempt. This calculation must be automatic — not something you think about during the exam.',135),
        s('d88-mt2','Full Paper 1 Mock 2 — 2 hr 15 min (Back-to-Back After 30 Min Break)','After Mock 1 review (top 3 errors only), take a 30-minute break, then immediately begin Mock 2 without further preparation. This is the fatigue test. The exam does not care that you are tired. Maintain the same section strategy and time allocation. Target: score within 10 marks of Mock 1.','Fatigue markers: if you notice yourself reading questions twice, skipping more than usual, or making arithmetic errors on simple calculations — these are fatigue signs. Drink water, adjust posture, refocus for 30 seconds before continuing.',135),
      ]),
      WE_REV('d88',[
        s('d88-rev1','DEST Drill — 15 Minutes Targeting 35 WPM Sub-5% Error','DEST practice session: type 2 passages (7-8 minutes each). First passage: focus on accuracy — no backspacing. Second passage: focus on speed — push 2-3 WPM above your comfortable speed. Measure: WPM for each passage, error% for each passage. Record in tracker.','If WPM is above 35 but errors are above 5%: slow down by 2 WPM. Accuracy matters more — in DEST, errors accumulate against your score. Sub-5% error is the threshold for confident passage.',15),
        s('d88-rev2','Deep Mock Analysis — Both Mocks Section-Wise Accuracy Heatmap (30 min)','For both mocks: create a table with sections (English, GA, Quant, Reasoning) and mark: (a) questions attempted, (b) questions correct, (c) accuracy%. Identify which section in which mock had lowest accuracy. That section+mock combination reveals your fatigue-specific weakness. Compare Mock 1 accuracy to Mock 2 accuracy per section — a drop in section X in Mock 2 = fatigue hits that section hardest.','Heatmap insight: most candidates maintain English and GA accuracy in fatigue but drop Quant accuracy. If the reverse is true for you, your mental model is unusually Quant-dominant. Plan Week 14 practice accordingly.',30),
      ]),
    ],
  },
  {
    id:'2026-08-02',dayNumber:89,date:'2026-08-02',phase:5,tier:2,weekNumber:13,
    weekType:'weekend',totalHours:8,hasQuiz:false,
    title:'Day 89 — Quant Diagnosis + Advanced Trig+Mensuration + Vocab+RC + 2 Full Mocks + CKT Test',
    promptBlock:`OPERATIVE BRIEFING — DAY 89 (SUNDAY — DOUBLE MOCK DAY 2)

Back again. Two more mocks. This is Week 13's final statement: you are prepared for the Tier 2 intensity that will define whether you reach 300+ or fall short. Sunday's protocol is diagnostic — use the morning Deep Study to identify exactly where your Quant is leaving points on the table, then fix those points before the mocks.

QUANT COMPREHENSIVE DIAGNOSIS (1 hour):
30 mixed T2 PYQs drawn from ALL Quant topics. Solve without time pressure — this is diagnostic, not speed-based. After solving: measure your accuracy% per topic cluster (Arithmetic / Algebra / Geometry / Trig+Mensuration / DI / Statistics). Any cluster below 75% accuracy = your weakest area this phase. This diagnostic determines your Week 14 Deep Study priorities.

ADVANCED TRIGONOMETRY + MENSURATION COMBINED (2 hours):
Trigonometry: compound angle formulas (sin(A+B), cos(A+B), tan(A+B)), product-to-sum, sum-to-product, inverse trig basics, solving trig equations. Mensuration combined with Trig: heights and distances problems (angle of elevation/depression), problems requiring both the trigonometric value AND the mensuration formula (cone, frustum, sphere). These combined problems are classic Tier 2 hardest-level.

VOCABULARY + RC (2 hours):
Vocabulary advanced session: Greek/Latin root words (roots: "bene" = good, "mal" = bad, "dict" = say, "spec" = see, "aud" = hear, "port" = carry, "scrib/script" = write). Learning roots unlocks meaning of 10-15 words per root. Then: 2 RC passages under speed conditions. Target: complete each passage in 12 minutes (including reading).

MOCKS: Target 310+/390 today. If both mocks fall below 300, Week 14 requires emergency recalibration.

CKT: 15-question test today. Score yourself and record.`,
    tasks:[
      WE_DS('d89',[
        s('d89-ds1','Quant Comprehensive Diagnosis — 30 Mixed T2 PYQs (1 hr, accuracy focus)','30 mixed Quant PYQs: 5 each from Arithmetic, Algebra, Geometry, Trigonometry+Mensuration, DI, Statistics. Solve without time pressure. After completion: calculate accuracy% per cluster. Any cluster ≤ 75% accuracy = your diagnostic weak area. Write it down — this drives your Week 14 Deep Study priorities. Also calculate your overall diagnostic accuracy: target ≥ 80%.','Diagnostic rule: do NOT rush. A rushed diagnosis gives wrong data. If you guessed on a question, mark it separately — guessing masks true understanding. Only count questions you SOLVED (not guessed) in your accuracy calculation.',60),
        s('d89-ds2','Advanced Trigonometry + Mensuration Combined Problems (2 hrs)','Trig Hour 1: Compound angles — sin(A+B) = sinAcosB + cosAsinB. cos(A+B) = cosAcosB - sinAsinB. tan(A+B) = (tanA+tanB)/(1-tanAtanB). Product-to-sum: sinAcosB = ½[sin(A+B)+sin(A-B)]. Heights and Distances (1 hr): Angle of elevation/depression applications — ladder against wall, tower height from two points, combined problems with two observers. Mensuration within trig context: find the volume of a cone formed when a sector of angle θ and radius r is rolled.','Heights and distances shortcut: If two poles of height h₁ and h₂ are separated by distance d, the height of intersection of lines from top of each to base of other = h₁h₂/(h₁+h₂). This formula appears in Tier 2 frequently.',120),
        s('d89-ds3','Vocabulary Advanced Root Words + RC Speed Passages (2 hrs)','Root words (1 hr): bene (beneficial, benevolent, benefactor), mal (malevolent, malign, malicious), dict (dictate, predict, contradict, verdict), spec (spectate, inspect, introspect, retrospect), aud (audible, audience, auditorium), port (transport, import, export, portable), scrib/script (describe, prescribe, manuscript, transcript). Learn 5 new words per root. RC Speed (1 hr): 2 passages, 12 minutes each. No re-reading after the first pass.','Root word strategy: knowing "mal" = bad instantly tells you malevolent, malicious, malign, malice, malfeasance, malpractice all share a "bad" meaning — one root unlocks 8-10 vocabulary answers.',120),
      ]),
      WE_MT('d89',[
        s('d89-mt1','Full Paper 1 Mock 1 — 2 hr 15 min (Target: 310+/390)','Apply diagnostic insights from morning: the topic cluster below 75% is your danger zone — allocate 2-3 extra minutes there if needed, but do not over-invest and starve other sections. Full exam conditions. Track your raw score after the mock — does it hit 310+?','310/390 = 79.5% mark. This is your Phase 5 floor. If you are consistently below this, your question-selection strategy (skip reflex) needs recalibration.',135),
        s('d89-mt2','Full Paper 1 Mock 2 — 2 hr 15 min','Second mock. After the morning\'s diagnostic and first mock, your mind is deeply calibrated on Tier 2 content. This second mock measures: can you maintain 310+ under cognitive fatigue? The answer needs to be yes before Phase 6 begins.','Endurance insight: the best way to maintain performance in Mock 2 is aggressive question selection — only attempt questions you can answer in under 90 seconds. Skip-and-return is faster than slow grinding.',135),
      ]),
      WE_REV('d89',[
        s('d89-rev1','DEST + CKT 15-Question Test (25 min)','DEST (15 min): passage typing drill — measure WPM and error%. Record improvement from Day 85. CKT Test (10 min): 15 questions covering Week 13 CKT topics: OS functions, Excel VLOOKUP, networking basics (preview for Week 14), keyboard shortcuts. Score yourself: target 13+/15.','CKT test scoring: if you score below 11/15, the specific topic that caused errors needs a dedicated 10-minute session tomorrow morning. Do not leave CKT gaps — they compound.',25),
        s('d89-rev2','Mock Accuracy Comparison + Week 13 Assessment (20 min)','Compare all 4 mock scores from Days 88-89. Create a comparison table: Mock 1 (Day 88), Mock 2 (Day 88), Mock 1 (Day 89), Mock 2 (Day 89) — record overall score and section-wise accuracy for each. Calculate your average across 4 mocks. If average ≥ 300: Week 13 is a success. If average 280-299: Week 14 acceleration required. If below 280: emergency strategy session needed — identify the 2 highest-weight gaps and address in Week 14 Deep Study blocks.','Week 13 success metric: consistent 300+ across all 4 mocks. Not just one mock — consistent. Consistency is the Tier 2 examination standard.',20),
      ]),
    ],
  },
]

// Week 2 — May 2 (Sat) to May 8 (Fri) — Phase 1: Pre-Exam Foundation
// Days 8-14 | ALL HAVE QUIZ

const WD_ENG = (id,s) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks:s })
const WD_GA  = (id,s) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks:s })
const WD_QR  = (id,s) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks:s })
const WE_DS  = (id,s) => ({ id:`${id}-ds`,  subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks:s })
const WE_MT  = (id,s) => ({ id:`${id}-mt`,  subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:120, title:'Mock Test Block (2 Hours)', subtasks:s })
const WE_REV = (id,s) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:60, title:'Post-Mortem Revision (1 Hour)', subtasks:s })
const st = (id,title,desc,tip,mins,m=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory:m })

export const DAYS = [
  // ── Day 8 — Sat May 2 — WEEKEND (8 hours) ────────────────────────
  {
    id:'2026-05-02', dayNumber:8, date:'2026-05-02', phase:1, tier:1, weekNumber:2,
    weekType:'weekend', totalHours:8, hasQuiz:true,
    title:'Day 8 — Mensuration 2D Mastery + Tenses Deep Dive',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 8 (WEEKEND)

The second weekend forge. Mensuration is where engineers pull ahead.

MENSURATION 2D DIRECTIVE (90 min):
Area, perimeter, and diagonal formulas for ALL 2D shapes. This is non-negotiable memorization: Triangle (Heron's formula, base×height/2), Quadrilaterals (square, rectangle, rhombus, parallelogram, trapezium), Circle (πr², 2πr), Sector (θ/360 × πr²). Special: Equilateral triangle area = (√3/4)a².

MENSURATION 3D PREVIEW (60 min):
Start 3D: Cube (6a², a³), Cuboid (2(lb+bh+lh), lbh), Cylinder (2πr(r+h), πr²h). Sunday will complete cones and spheres.

TENSES DIRECTIVE (2 hrs):
12 tenses — their structures and when to use each. SSC tests tense identification in error spotting. The 4 present tenses, 4 past tenses, 4 future tenses — write the structure formula for each: Subject + Auxiliary Verbs + Main Verb form.

MOCK INTENSITY: Full mock + 2 sectionals. Compare this week's mock percentile with Week 1. Are you moving up?`,
    tasks: [
      WE_DS('d8',[
        st('d8-ds1','Mensuration 2D — All Shapes (90 min)','Triangle: A=½bh, Heron\'s √(s(s-a)(s-b)(s-c)), Equilateral: (√3/4)a². Rectangle: A=lb, P=2(l+b), D=√(l²+b²). Rhombus: A=½d1×d2. Trapezium: A=½(a+b)h. Circle: πr², 2πr. Sector: (θ/360)πr². For each: write formula and verify with a numerical example.','Most SSC mensuration Qs involve combining shapes (e.g., circle inscribed in square). Practice finding the relationship: r = a/2 for inscribed circle in square of side a.',90),
        st('d8-ds2','Mensuration 3D — Preview (Cube, Cuboid, Cylinder) (60 min)','Cube: TSA=6a², LSA=4a², Volume=a³, Main Diagonal=√3 a. Cuboid: TSA=2(lb+bh+lh), Volume=lbh, Diagonal=√(l²+b²+h²). Cylinder: TSA=2πr(r+h), CSA=2πrh, Volume=πr²h.','Key: Volume units are cubic, surface area units are square. Convert consistently. Always read whether "open" or "closed" cylinder is asked.',60),
        st('d8-ds3','Tenses — 12 Tense Structures (90 min)','Write all 12 tense structures: [Simple: S+V1/V2/will+V1], [Continuous: S+is/was/will be+V-ing], [Perfect: S+has/had/will have+V3], [Perfect Continuous: S+has/had/will have been+V-ing]. For each: write structure → write 2 example sentences → identify when to use.','Common error: Mixing Present Perfect with Simple Past. "I have seen him yesterday" is WRONG — use simple past with specific time.',90),
        st('d8-ds4','Read 2 Complex Editorial Passages (60 min)','Read 2 opinion editorials from any major newspaper. Focus on: (1) author\'s tone (critical/supportive/neutral), (2) central argument, (3) evidence used. Answer 5 inference questions for each.','RC in Tier 2 has passages of 500-800 words. Practice reading such lengths without losing focus.',60),
      ]),
      WE_MT('d8',[
        st('d8-mt1','Full Tier 1 Mock — 60 Minutes','Third full mock. Focus on section sequencing: GA first (5-7 min) → Reasoning (15-18 min) → English (10-12 min) → Quant (remaining). Try GA-Reasoning-English-Quant order today.','Different section orders work for different people. Track which order gives you the best time distribution.',60),
        st('d8-mt2','Sectional: Quant 30-min + English 30-min','Back-to-back sectionals. In Quant: apply Mensuration formulas from today. In English: apply Tense identification to error-spotting questions.','Immediate application of learned concepts is the best test of retention.',60),
      ]),
      WE_REV('d8',[
        st('d8-rev1','Error Category Count — Week 2 Trend','Total errors across Week 1 and Week 2 mocks. Which category (Conceptual/Calculation/Optimal Path) is dominant? This guides next week\'s strategy adjustment.','If Conceptual errors dominate: more deep study time on weekends. If Calculation errors: more timed drills on weekdays.',30),
        st('d8-rev2','Formula Book Update — Mensuration Edition','Add all 2D and 3D formulas studied today. Use a visual layout — each shape as a small diagram with formulas annotated.','Visual formula cards are recalled 3× faster during exams than text lists.',30),
      ]),
    ],
  },

  // ── Day 9 — Sun May 3 — WEEKEND (8 hours) ────────────────────────
  {
    id:'2026-05-03', dayNumber:9, date:'2026-05-03', phase:1, tier:1, weekNumber:2,
    weekType:'weekend', totalHours:8, hasQuiz:true,
    title:'Day 9 — Mensuration 3D Complete + Reading Stamina',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 9 (WEEKEND)

Complete the Mensuration arsenal. Build Reading Comprehension stamina.

MENSURATION 3D COMPLETE (90 min):
Cone: CSA=πrl (l=slant height=√(r²+h²)), TSA=πr(r+l), Volume=(1/3)πr²h. Sphere: SA=4πr², Volume=(4/3)πr³. Hemisphere: CSA=2πr², TSA=3πr². Frustum (truncated cone): V=(πh/3)(R²+r²+Rr), CSA=π(R+r)l. These appear EVERY Tier 2 paper.

RC STAMINA (2 hrs):
Three long-form passages (500-600 words each). Your job: read each in under 8 minutes, answer all questions. Track your reading speed. Target: 120 words per minute by exam day. Today's baseline reading speed is critical data.

MOCK: Same intensity. Track your overall percentile trend. Week 2 should show 3-5 percentile points improvement over Week 1 baseline.`,
    tasks: [
      WE_DS('d9',[
        st('d9-ds1','Mensuration 3D — Complete (Cone, Sphere, Frustum) (90 min)','Cone: l=√(r²+h²), CSA=πrl, TSA=πr(r+l), V=(1/3)πr²h. Sphere: SA=4πr², V=(4/3)πr³. Hemisphere: CSA=2πr², TSA=3πr², V=(2/3)πr³. Frustum: V=(πh/3)(R²+Rr+r²), CSA=π(R+r)l where l=√(h²+(R-r)²).','SSC Tier 2 trick: "A cone is melted and recast as N spheres of radius r" → Volume cone = N × (4/3)πr³. Equate and solve. Appears almost every exam.',90),
        st('d9-ds2','Reading Comprehension — 3 Passage Stamina Drill (120 min)','Read 3 passages, each 500-600 words. Timer: 8 minutes per passage reading + 7 minutes answering questions. Practice: (1) Reading for main idea in first 2 paragraphs, (2) Scanning for specific data, (3) Inferring tone.','Measure your WPM: (total words / total minutes). Record today\'s speed. Target growth of 10 WPM per week.',120),
        st('d9-ds3','Mensuration Application Problems (90 min)','Solve 30 Mensuration PYQs mixing 2D and 3D. Focus: problems where one shape is converted/melted/recast into another, and combination problems (cylinder inside a cone, etc.).','Always draw a diagram for combination problems. A labeled diagram reduces errors by 80%.',90),
      ]),
      WE_MT('d9',[
        st('d9-mt1','Full Tier 1 Mock — 60 Minutes','Fourth full mock. By now your section timing should be stabilizing. Focus on: (1) Not exceeding 45 sec on any single question in first pass, (2) GA accuracy (no guessing on uncertain items).','Negative marking math: Missing 2 questions = -1 mark. Wrong answer on 2 uncertain = -1 mark. Same cost — so skip uncertain GA.',60),
        st('d9-mt2','Sectional: Reasoning 30-min + Quant 30-min','Reasoning: Target 15-17 minutes for 25 questions (banking 3 min for review). Quant: Apply Mensuration formulas from today.','If Reasoning target of 17 minutes is met consistently, you have banked 3 extra minutes for Quant.',60),
      ]),
      WE_REV('d9',[
        st('d9-rev1','RC Speed Measurement','Calculate today\'s WPM from the stamina drill. Compare with target of 120 WPM. Record in your tracker.','WPM growth is steady — 5 WPM per week with consistent practice. Don\'t expect overnight jumps.',30),
        st('d9-rev2','Mensuration Self-Test','Without notes, write all 3D shape formulas from memory. Score yourself. Any gaps = 10-minute focused re-review.','Self-testing is 3× more effective than re-reading for formula retention.',30),
      ]),
    ],
  },

  // ── Day 10 — Mon May 4 — WEEKDAY (2.5 hours) ─────────────────────
  {
    id:'2026-05-04', dayNumber:10, date:'2026-05-04', phase:1, tier:1, weekNumber:2,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 10 — Spelling Mastery + Mixture & Alligation',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 10

Week 2. The foundation is set. Now we add bricks.

ENGLISH DIRECTIVE:
Spelling and confusable words are 2-3 guaranteed Tier 1 marks. "Accommodate", "Maintenance", "Necessary", "Bureaucracy", "Occurrence" — these trip up 70% of candidates. Learn the patterns: double letters, silent letters, ie/ei rule.

QUANT DIRECTIVE:
Compound Interest deep practice + Mixture & Alligation. Alligation is a shortcut that eliminates all equations: draw the cross diagram, the ratio of mixing = inverse ratio of differences from mean. 20-second solutions for problems that would otherwise take 2 minutes.

REASONING DIRECTIVE:
Missing Number (matrix/figure problems) + Number Sequences. Missing Number requires you to identify if the pattern is row-wise, column-wise, diagonal, or ring-based. Always check all four before giving up.`,
    tasks: [
      WD_ENG('d10',[
        st('d10-e1','Spelling Corrections — 40 Common SSC Words','Learn correct spelling of most-misspelled words: Accommodation, Necessary, Committee, Occurrence, Maintenance, Bureaucracy, Supersede, Millennium, Rhythm, Conscientious, Conscience, Questionnaire, Separate, Definitely, Acquaintance.','Rule: "i before e except after c" has exceptions. Memorize exceptions: weird, seize, either, neither, leisure.',20),
        st('d10-e2','Confusable Word Pairs — 20 Pairs','Study pairs: Effect/Affect, Principle/Principal, Stationary/Stationery, Complement/Compliment, Eminent/Imminent, Advice/Advise, Fewer/Less, Farther/Further. Write each in a sentence.','SSC loves confusable words in error-spotting AND fill-in-the-blanks. Two exam applications.',25),
      ]),
      WD_GA('d10',[
        st('d10-ga1','Current Affairs — Science & Technology','Focus: Recent ISRO missions, DRDO achievements, IT ministry regulations, major scientific discoveries, digital India updates.','Tech CA: Note the full name of abbreviations — ISRO, DRDO, DPIIT etc. Examiners test full forms.',20),
        st('d10-ga2','Science — Physics: Laws & Principles','Newton\'s 3 Laws, Laws of Thermodynamics (1st=energy conservation, 2nd=entropy), Ohm\'s Law, Faraday\'s Laws. Key units: Force=Newton, Energy=Joule, Power=Watt.','For SSC Physics: Focus on applications and unit recognition. Less theory, more applied MCQs.',25),
      ]),
      WD_QR('d10',[
        st('d10-qr1','40 PYQs — Compound Interest + Mixture & Alligation','CI: Multiplier method. A=P×(1+r/100)^n. For 2 years: CI-SI = P(r/100)². Alligation: Crosshatch diagram. Draw (cheaper price — mean price) : (mean price — costlier price) = ratio of mixing.','Alligation example: Milk at ₹20 and ₹30, mean ₹24 → ratio = (30-24):(24-20) = 6:4 = 3:2.',35),
        st('d10-qr2','Missing Number + Number Sequences — 50 Qs','Missing Number: Check row sums, column products, diagonal patterns, ring patterns. Number Sequences: Prime gaps, Fibonacci variants, square/cube sequences, alternating patterns.','If the missing number is in a 3×3 grid: try (row1+row2)/2, or row1×row2-something. Systematic testing.',25),
      ]),
    ],
  },

  // ── Day 11 — Tue May 5 — WEEKDAY (2.5 hours) ─────────────────────
  {
    id:'2026-05-05', dayNumber:11, date:'2026-05-05', phase:1, tier:1, weekNumber:2,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 11 — Phrasal Verbs + Boats & Streams',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 11

Precision weapons today — phrasal verbs and relative motion problems.

ENGLISH DIRECTIVE:
Phrasal Verbs are frequently tested in Fill-in-the-Blanks and sentence improvement. "Call off" (cancel), "Come across" (find by chance), "Look into" (investigate), "Take after" (resemble). Learn 40 today — grouped by the main verb for memory efficiency.

QUANT DIRECTIVE:
Time & Distance advanced: Boats & Streams (downstream/upstream, still water speed vs stream speed equations), Train problems (length of train + platform = speed × time). These follow strict formula structures — memorize the structures, not individual solutions.

REASONING DIRECTIVE:
Alpha-Numeric Series — SSC loves mixing letters and numbers. Key: code each letter as its position (A=1, Z=26) or reverse position (A=26). Then check if the number pattern matches letter positions. Analogy review — missed analogy types from Week 1.`,
    tasks: [
      WD_ENG('d11',[
        st('d11-e1','40 Phrasal Verbs — Grouped by Main Verb','Call: call off/up/on/out/back. Look: look into/up/after/down on/forward to. Take: take after/off/over/on/up. Come: come across/up with/around/about. Put: put off/up with/across/away.','Learn meaning + one example sentence. Group = easier to retain. Test: cover the meaning, recall from the phrasal verb.',25),
        st('d11-e2','Active/Passive Voice — Complex Tenses Revision','Practice Perfect Continuous tenses in voice conversion. These are the hardest and most tested: "She has been writing a letter" → "A letter has been being written by her."','Perfect Continuous passive is rare in usage but common in SSC error-spotting — as a trap answer.',20),
      ]),
      WD_GA('d11',[
        st('d11-ga1','Current Affairs — Defence & Military','Focus: Major defence exercises (name, countries, location), recent weapon system inductions, India\'s defence export targets, border infrastructure.','SSC loves bilateral exercise names: Tarkash (India-Russia), Nomadic Elephant (India-Mongolia), Shakti (India-France).',20),
        st('d11-ga2','History — Major Indian Dynasties & Dates','Ancient: Maurya (322-185 BC), Gupta (320-550 AD), Pallava, Chola, Chalukya. Medieval: Delhi Sultanate (1206-1526), Mughal Empire (1526-1857). Key rulers and achievements only.','SSC tests specific dates and achievements, not narrative. Akbar = Din-i-Ilahi + Mansabdari. Ashoka = Dhamma + Rock Edicts.',25),
      ]),
      WD_QR('d11',[
        st('d11-qr1','40 PYQs — Time & Distance Advanced + Boats & Streams','STD: Train problems (T=(L1+L2)/Relative Speed), circular tracks (meeting time = LCM of individual times). Boats: Downstream=u+v, Upstream=u-v, Still water=(DS+US)/2, Stream=(DS-US)/2.','Key trap: "A train passes a pole in 10s and a platform of 100m in 20s" → Train length = 100m (since extra 10s for 100m at that speed).',35),
        st('d11-qr2','Alpha-Numeric Series + Analogy Revision — 50 Qs','Alpha-numeric: Decode letters by position, then find numerical pattern. Analogy: Identify the relationship type (synonym, antonym, part-whole, tool-use, cause-effect, worker-product).','Never assume a single analogy type. Always check: is it 1:2 ratio? Is it A:A² ? Is it Country:Capital?',25),
      ]),
    ],
  },

  // ── Day 12 — Wed May 6 — WEEKDAY (2.5 hours) — CORRECT ───────────
  {
    id:'2026-05-06', dayNumber:12, date:'2026-05-06', phase:1, tier:1, weekNumber:2,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 12 — Error Detection Sprint + Direction/Ranking',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 12

Back to weekday efficiency. Apply this weekend's learning immediately.

ENGLISH DIRECTIVE:
Error Detection using tense rules from Day 10. Rule-based approach: read the sentence, identify the tense being used, check if it's correct for the context. Then check subject-verb agreement. Then check prepositions. Systematic, not intuitive.

QUANT DIRECTIVE:
Mensuration PYQs — apply formulas from Weekend. This is the "cement drying" phase — concepts learned on weekends solidify through weekday application. 30 Mensuration + 10 Arithmetic mixed.

REASONING DIRECTIVE:
Direction & Ranking problems. Direction: Always use a fixed compass diagram with North at top. Never rotate your mental map. Ranking: "A is 5th from left in a row of 20" → A is 16th from right (20+1-5=16). Distance problems: use Pythagoras for non-cardinal directions (NE, SW etc.).`,
    tasks: [
      WD_ENG('d12',[
        st('d12-e1','20 Error Detection PYQs — Tense-Based','For each question: (1) Identify the tense, (2) Check if tense is consistent, (3) Check subject-verb agreement, (4) Check preposition use. Write your reasoning for each answer.','Common tense errors in SSC: Using Simple Past with "since" (wrong: "I lived here since 2010", right: "I have lived here since 2010").',25),
        st('d12-e2','Mensuration Vocabulary + Reading Passage','Read a science-based editorial passage focusing on unfamiliar vocabulary in context. Note 10 new words.','Context clues: "Despite the severe drought, the region remained verdant" → verdant = green/lush (inferred from contrast).',20),
      ]),
      WD_GA('d12',[
        st('d12-ga1','Current Affairs — Awards & Honours','Focus: Padma Awards (Padma Vibhushan, Bhushan, Shri), Bharat Ratna recipients, Nobel Prize 2025 winners, Booker Prize, Pulitzer Prize for recent years.','SSC tests: Person → Award → Field. Three-column framework. Reverse testing also common: "Who received X award?".',20),
        st('d12-ga2','Biology — Human Body Systems','Circulatory (heart chambers, blood types), Respiratory (parts, mechanism), Digestive (enzymes and organs), Nervous (CNS/PNS), Endocrine (hormones and glands).','Most SSC-tested: Blood groups (A, B, AB, O) and Rh factor. Deficiency diseases of vitamins and minerals.',25),
      ]),
      WD_QR('d12',[
        st('d12-qr1','30 Mensuration PYQs + 10 Arithmetic Mixed','Mensuration: Apply yesterday\'s 3D formulas directly. Arithmetic: Mixed 10 questions to keep all arithmetic topics warm.','Efficiency rule: Mensuration questions without diagrams take 2× longer. Always sketch the shape.',35),
        st('d12-qr2','Direction & Ranking — 40 Questions','Directions: 20 Qs using fixed compass. Ranking: 20 Qs using (Total+1-rank from one side = rank from other side) formula.','Direction pitfall: "A walks 3km North then turns East for 4km" → Displacement = √(3²+4²) = 5km. Pythagorean triple!',25),
      ]),
    ],
  },

  // ── Day 13 — Thu May 7 — WEEKDAY (2.5 hours) — CORRECT ───────────
  {
    id:'2026-05-07', dayNumber:13, date:'2026-05-07', phase:1, tier:1, weekNumber:2,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 13 — Vocab Comprehensive + Advanced Algebra Surds',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 13

Vocabulary and surds — two areas where focused effort creates massive differentiation.

ENGLISH DIRECTIVE:
Comprehensive vocabulary: today you TEST yourself before learning. Take 30 random words from Blackbook and guess meanings. Then check accuracy. This forces your brain to engage deeply with gaps, making retention 2× stronger.

QUANT DIRECTIVE:
Surds and Indices are favorite SSC traps. Engineers often approach these with overconfidence and make sign errors. Rules: aᵐ×aⁿ=aᵐ⁺ⁿ, aᵐ÷aⁿ=aᵐ⁻ⁿ, (aᵐ)ⁿ=aᵐⁿ, a⁰=1, a⁻ⁿ=1/aⁿ. Surd rationalization: multiply numerator and denominator by conjugate.

REASONING DIRECTIVE:
Matrix-based Reasoning — 3×3 grids where the pattern must be found. Systematic approach: check row patterns (sum, product, difference), then column patterns, then diagonal patterns, then inner ring patterns. Never try to eyeball these.`,
    tasks: [
      WD_ENG('d13',[
        st('d13-e1','Vocabulary Self-Test + Gap Fill (50 words)','Take 50 words from Blackbook synonyms/antonyms section. Cover meanings. Write your best guess. Then check. Score yourself. Re-learn only the ones you missed.','This retrieval practice method is scientifically proven to be 50% more effective than re-reading.',20),
        st('d13-e2','Sentence Correction PYQs — 20 Questions','Each wrong sentence has exactly one error. Find and correct it, then name the grammatical rule violated.','Common SSC sentence errors: "He is one of those students who studies hard" (WRONG: should be "who study" because "who" refers to "students" plural).',25),
      ]),
      WD_GA('d13',[
        st('d13-ga1','Current Affairs — International Affairs & Trade','Focus: Major international summits (G20, BRICS, SCO, UN sessions), India\'s trade agreements (FTAs), import/export rankings, WTO rulings involving India.','G20/BRICS: Know the host country + year + theme. These appear almost every exam cycle.',20),
        st('d13-ga2','Geography — Indian Rivers & Dams','Major rivers: Origin, tributaries, states they pass through, important dams (Bhakra-Nangal, Tehri, Sardar Sarovar). River projects: Interlinking of rivers.','Memory aid: "Son Hugs Chambal" = right bank tributaries of Yamuna are not this — left bank of Ganga are Son, Ghaghra, Gandak, Koshi.',25),
      ]),
      WD_QR('d13',[
        st('d13-qr1','40 PYQs — Surds + Indices + Advanced Algebra','Indices: Solve all simplification problems using laws only. Surds: Rationalize, then simplify. Combined: Problems mixing both. Target: 40 Qs in 35 minutes.','Surd trick: If (a+√b)(a-√b), directly apply difference of squares = a²-b. Avoid expanding term by term.',35),
        st('d13-qr2','Matrix-Based Reasoning — 30 Questions','3×3 number matrices, figure matrices. Check: row pattern → column pattern → diagonal → ring. Time: 25 minutes for 30 questions.','If row/column pattern isn\'t obvious in 30 seconds, skip and return last. These can be severe time sinks.',25),
      ]),
    ],
  },

  // ── Day 14 — Fri May 8 — WEEKDAY (2.5 hours) — CORRECT ───────────
  {
    id:'2026-05-08', dayNumber:14, date:'2026-05-08', phase:1, tier:1, weekNumber:2,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 14 — Para Completion + DI Sprint + Week 2 Close',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 14

Week 2 closes. Integration day. Data Interpretation introduced.

ENGLISH DIRECTIVE:
Para Completion (choosing the sentence that best concludes a paragraph) tests inference ability. The correct answer (1) logically follows from the last paragraph point, (2) maintains the author's tone, (3) doesn't introduce a new unrelated idea.

QUANT DIRECTIVE:
Data Interpretation introduction — Bar charts, Line graphs, Pie charts, Tables. DI in Tier 2 is complex: multi-variable, cross-chart comparison. Build the reading habit now: read all axis labels, units, and legends BEFORE looking at questions.

REASONING DIRECTIVE:
Full Reasoning sectional — 25 questions in under 18 minutes. This should be a comfortable target by Week 2. Track your time. If still above 18 minutes, identify which question types are slowing you.

WEEK 2 REFLECTION:
Two weekends of deep study. Identify the 3 strongest and 3 weakest areas. Plan Week 3 accordingly.`,
    tasks: [
      WD_ENG('d14',[
        st('d14-e1','Para Completion — 15 PYQ Questions','For each passage, read carefully, identify the main theme and author\'s tone. Then evaluate each option: (1) Does it follow logically? (2) Does it maintain tone? (3) Does it avoid tangents?','The most common wrong answer in Para Completion is one that\'s factually true but tonally inconsistent with the passage.',20),
        st('d14-e2','Fill in the Blanks Sprint — 20 Qs','Mixed FIB: 10 grammar-based + 10 vocabulary-based. Grammar first (faster), vocabulary second.','FIB vocabulary: Use elimination. Remove clearly wrong options first, then choose from remaining based on connotation.',25),
      ]),
      WD_GA('d14',[
        st('d14-ga1','Current Affairs — Sports & Cultural Events','Focus: Major sports events (Olympics, Commonwealth, Asian Games highlights), Padma & sports award recipients, cultural heritage UNESCO listings.','Sports CA: Name of event → Location → Gold medal winner in key events → India\'s medal count.',20),
        st('d14-ga2','Economy — Budget 2025-26 Key Highlights','Major allocations, fiscal deficit target, GDP growth projection, key schemes announced, tax changes, infrastructure spending.','Budget: Focus on top-5 allocated sectors and any new flagship schemes. Numbers must be precise.',25),
      ]),
      WD_QR('d14',[
        st('d14-qr1','DI Sprint — Bar Chart + Pie Chart + Table (35 min)','Solve one bar chart DI set (5 Qs), one pie chart set (5 Qs), one table set (5 Qs). Read all labels before attempting. Calculate percentages and ratios quickly.','DI time saver: For percentage comparison questions, approximate rather than calculate exactly. 200/1500 ≈ 13.3%, no need for long division.',35),
        st('d14-qr2','Full Reasoning Sectional — 25 Qs Under 18 Min','Complete sectional. Record exact time. Identify the 2-3 question types that took the longest.','Week 2 target: 18 minutes. Week 4 target: 16 minutes. Week 7 target: 14 minutes. Track progress weekly.',25),
      ]),
    ],
  },
]

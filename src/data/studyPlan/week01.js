// Week 1 — Apr 25 (Thu) to May 1 (Wed) — Phase 1: Pre-Exam Foundation
// Weekday: 2.5 hrs | Weekend: 8 hrs
// Days 1-7 | ALL HAVE QUIZ

const WD_ENG = (id, date, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks })
const WD_GA  = (id, date, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks })
const WD_QR  = (id, date, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`,  subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`,  subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:120, title:'Mock Test Block (2 Hours)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:60, title:'Post-Mortem Revision (1 Hour)', subtasks })

const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-04-25', dayNumber:1, date:'2026-04-25', phase:1, tier:1, weekNumber:1,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 1 — Ratio Methods & Pattern Recognition',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 1

You are now in the Pre-Exam Sprint. The Tier 1 examination is approximately 61 days away. This is not a practice session — this is war preparation.

TODAY'S STRATEGIC DIRECTIVE:
Your engineering brain is your weapon. Today we activate it fully. STOP using algebraic 'x' and 'y' methods for arithmetic. Every Percentage and P&L problem must be solved using ratio methods and fractional equivalents. This is non-negotiable.

ENGLISH DIRECTIVE:
50 One-Word Substitutions. Do not skim — speak each word aloud and write it once. OWS questions appear 3-4 times in Tier 1 and 4-6 times in Tier 2. Each missed OWS = -0.5 to -1 mark. The Blackbook is your bible.

REASONING DIRECTIVE:
Coding-Decoding and Number Series are the easiest 4-6 marks in Tier 1. But they become time traps if your pattern recognition is slow. Tonight's drill: if a pattern is not visible within 30 seconds → SKIP IMMEDIATELY. Build that reflex now.

COMMUTE TASK: Watch one Current Affairs video (30-40 min) from any channel covering Nov 2025 – May 2026. Do not take notes. Passive absorption only.

MINDSET: Day 1 sets the tempo. Set it high.`,
    tasks: [
      WD_ENG('d1','2026-04-25',[
        s('d1-e1','Memorize 50 High-Frequency OWS','Open Blackbook of English Vocabulary — OWS Section. Read each word, its one-line meaning, and repeat aloud. Cover words 1-50 today.','Group by category (law, medicine, behavior). This boosts retention by 40% vs random memorization.',20),
        s('d1-e2','Solve 20 PYQ Error Spotting Questions','Take error spotting PYQs from last 3 years. Focus ONLY on spotting grammatical errors — not intuition. Label each error type after solving.','Common traps: Subject-Verb agreement with "each/every", collective nouns, and comparative adjectives.',25),
      ]),
      WD_GA('d1','2026-04-25',[
        s('d1-ga1','Current Affairs — Last 7 Days','Revise this week\'s current affairs from your preferred source (Parmar SSC / Vision IAS daily CA summary). Focus: appointments, awards, schemes.','Write just 3 facts per news item. More than that is wasteful.',20),
        s('d1-ga2','Static GK — Polity Blast (Articles 1-30)','Quick revision of Preamble + Articles 1-30 of Indian Constitution. These appear almost every exam.','Just read and recall — don\'t rewrite notes at this stage.',25),
      ]),
      WD_QR('d1','2026-04-25',[
        s('d1-qr1','40 PYQs — Percentages & Profit/Loss (RATIO METHOD ONLY)','Solve 40 mixed PYQs from Percentages and Profit/Loss. RULE: Do NOT use x/y variables. Use fractional equivalents and ratio chains only. Time yourself.','P&L: Mark-up% and Discount% → Net effect = (1+a)(1-b)-1. Keep this formula chain in your formula book.',35),
        s('d1-qr2','50 Qs — Coding-Decoding + Number Series','Solve 2 sets of Coding-Decoding (25 Qs) and Number Series (25 Qs). Hard rule: 30-second timer per question. Skip if pattern not found.','For letter coding: always check +1/+2/+3 shift, reverse alphabet (Z=1), and alternate patterns first.',25),
      ]),
    ],
  },
  {
    id:'2026-04-26', dayNumber:2, date:'2026-04-26', phase:1, tier:1, weekNumber:1,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 2 — Idioms Arsenal & LCM Time Work',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 2

Day 1 is done. The tempo is set. Now we build the arsenal.

TODAY'S STRATEGIC DIRECTIVE:
Idioms & Phrases are pure memory marks. 4-5 questions in Tier 1, 6-8 in Tier 2 = 18-24 marks minimum. Engineers skip this at their peril. 45 minutes today = guaranteed marks later.

QUANT DIRECTIVE:
Time & Work and Ratio & Proportion. Key insight: NEVER set up equations. Use LCM method for Time & Work — assign total work = LCM of given days, compute per-day rates, solve directly. This cuts solution time from 90 seconds to 20 seconds.

REASONING DIRECTIVE:
Analogy and Classification are confidence builders. They test lateral thinking, not math. An engineer who misses these is losing free marks. Train your mind to find the odd pattern in under 15 seconds.

COMMUTE TASK: Same as Day 1 — 1 current affairs video passively. Different channel if possible.`,
    tasks: [
      WD_ENG('d2','2026-04-26',[
        s('d2-e1','Memorize 50 Idioms & Phrases','Cover Idioms 1-50 from Blackbook. Each idiom: read the phrase, note its meaning, read the example sentence once.','Focus on ACTION idioms (burn bridges, bite the bullet, etc.) — these appear most frequently.',20),
        s('d2-e2','20 Active/Passive Voice PYQs','Solve 20 Active↔Passive conversion PYQs. Treat each tense conversion as a FORMULA — not intuition.','Formula: Active (Subject + Verb + Object) → Passive (Object + be-verb[tense] + V3 + by + Subject). Memorize the be-verb chart for all 12 tenses.',25),
      ]),
      WD_GA('d2','2026-04-26',[
        s('d2-ga1','Current Affairs — This Week','Continue daily CA revision. Focus: International relations, economic data (GDP, inflation figures), major defense exercises.','Key for SSC: India-specific international events and bilateral agreements.',20),
        s('d2-ga2','Static GK — Important Constitutional Amendments','Revise: 42nd, 44th, 52nd, 61st, 73rd, 74th, 86th, 91st, 101st, 103rd amendments. These are examiner favorites.','Link each amendment to a clear mnemonic. E.g. 42nd = "Mini Constitution of Indira".',25),
      ]),
      WD_QR('d2','2026-04-26',[
        s('d2-qr1','40 PYQs — Ratio & Proportion + Time & Work','Solve 40 PYQs. Time & Work: ALWAYS use LCM method. Ratio: Use componendo-dividendo for ratio equations.','Time & Work LCM method: If A=6 days, B=12 days → LCM=12, A does 2 units/day, B does 1 unit/day. Total work=12 units. Combined = 12/3 = 4 days.',35),
        s('d2-qr2','Analogy + Classification — 50 Questions','Solve 25 Analogy + 25 Classification (Odd One Out) questions. Focus on finding the hidden rule quickly.','Classification: First identify 3 that share something. The 4th is the answer. Don\'t try all 4 starting points.',25),
      ]),
    ],
  },
  {
    id:'2026-04-27', dayNumber:3, date:'2026-04-27', phase:1, tier:1, weekNumber:1,
    weekType:'weekend', totalHours:8, hasQuiz:true,
    title:'Day 3 — Geometry Deep Dive + Grammar Architecture',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 3 (WEEKEND WARRIOR MODE)

8 hours. This is your forge. This is where rank gaps are created.

GEOMETRY DIRECTIVE (3 HOURS):
Geometry + Mensuration = highest weightage in Tier 2 (30-35 marks). Engineers have a natural spatial advantage — exploit it. Today: Triangles (Congruence, Similarity, Centers — Incenter/Circumcenter/Centroid/Orthocenter), and all circle theorems. Memorize results without derivation — exam doesn't grade your proof, it grades your speed.

ENGLISH DIRECTIVE (2 HOURS):
Subject-Verb Agreement and Conditional Sentences are mechanical rules. Zero intuition. Zero guessing. Every rule has exceptions you must memorize: "Each of the boys IS", "Either/Neither IS", "News IS", "Mathematics IS". Conditional types (Zero, Type 1, 2, 3) must become reflex.

MOCK DIRECTIVE (2 HOURS):
Full 60-minute mock — strict conditions: silence, no pausing, full paper. Then 2 sectional mocks (30 min Quant + 30 min English). Your score doesn't matter today. Your error PATTERN matters.

REVISION (1 HOUR):
Every wrong answer gets categorized into 3 buckets: (1) Conceptual gap, (2) Calculation error, (3) Slow method. Update your formula sheet based on bucket 3.`,
    tasks: [
      WE_DS('d3',[
        s('d3-ds1','Geometry: Triangle Theorems & Centers (90 min)','Master: Congruence (SAS, ASA, AAS, SSS, RHS), Similarity (AA, SAS, SSS), and all 4 centers. Incenter: angle bisectors meet, equidistant from sides. Circumcenter: perpendicular bisectors meet, equidistant from vertices. Centroid: medians meet, divides 2:1. Orthocenter: altitudes meet.','Key result: In any triangle, Centroid divides median in 2:1 from vertex. Median to hypotenuse = half hypotenuse. Write these on index cards.',90),
        s('d3-ds2','Geometry: Circle Theorems (60 min)','Cover: Angle in semicircle=90°, Angles in same segment equal, Tangent⊥Radius, Two tangents from external point are equal, Alternate Segment Theorem, Power of a Point.','Draw each theorem with a labeled diagram. Geometry without diagrams = geometry not learned.',60),
        s('d3-ds3','English: Subject-Verb Agreement (60 min)','Rules with examples: Collective nouns (The team IS playing), Indefinite pronouns (Everyone IS), Correlative conjunctions (Neither A nor B → verb agrees with B), Inverted sentences (There ARE mistakes).','Write a rule → example → common trap card for each rule. 15 rules minimum.',60),
        s('d3-ds4','English: Conditional Sentences (30 min)','Type 0 (fact), Type 1 (real future), Type 2 (hypothetical present), Type 3 (impossible past). Mixed conditionals. Write 5 example sentences for each type.','Common SSC trap: mixing tenses in one conditional clause. "If I will come" is ALWAYS wrong.',30),
        s('d3-ds5','Read 2 Editorial Passages (30 min)','Read 2 full editorial articles from The Hindu or Indian Express. Time each: under 12 minutes per passage. Answer 5 inferred questions for each.','Note 5 new vocabulary words per passage — don\'t look them up now. Guess from context.',30),
      ]),
      WE_MT('d3',[
        s('d3-mt1','Full Tier 1 Mock — 60 Minutes STRICT','Attempt a full 100-question mock on Testbook/Oliveboard. Timer starts, no pause, no outside help. Section order recommended: GA (5-7 min) → English (10-12 min) → Reasoning (15-18 min) → Quant (23-25 min).','If stuck on any question past 45 seconds, mark and move. Never get anchored.',60),
        s('d3-mt2','Sectional Mock — Quant (30 min)','Attempt 50 Quant questions in 30 minutes = 36 seconds per question. Focus on executing ratio methods without switching back to equation methods.','Any question exceeding 60 seconds is a "trap question" — mark it and skip.',30),
        s('d3-mt3','Sectional Mock — English (30 min)','50 English questions in 30 minutes. Grammar questions first (error spotting, voice, narration), then vocabulary, then comprehension.','Error spotting: Read the whole sentence once, then check each underlined part systematically.',30),
      ]),
      WE_REV('d3',[
        s('d3-rev1','Categorize Every Error','Go through mock answer key. For each wrong answer: write the question ID, your answer, correct answer, and category: C=Conceptual, E=Calculation Error, O=Optimal Path missed.','Do NOT spend time re-solving every question. Just categorize and move on.',20),
        s('d3-rev2','Update Formula Sheet','For every "O" (Optimal Path) error: write the correct shortcut/method in your personal formula book. This is the most important 20 minutes of your week.','Formula book should be a living document. Review it every single weekday morning.',20),
        s('d3-rev3','Plan Next Week Weak Areas','Based on mock errors, identify 2 topics for next weekend\'s deep study. Write them down.','Prioritize by: (frequency of appearance × your error rate). Maximum impact topics first.',20),
      ]),
    ],
  },
  {
    id:'2026-04-28', dayNumber:4, date:'2026-04-28', phase:1, tier:1, weekNumber:1,
    weekType:'weekend', totalHours:8, hasQuiz:true,
    title:'Day 4 — Algebra Mastery + Para Jumbles Intelligence',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 4

Second weapon forged. Algebra and Para Jumbles today.

ALGEBRA DIRECTIVE (3 HOURS):
Algebraic identities = free marks for engineers IF you eliminate the tendency to expand and simplify the long way. SSC questions are designed for value-putting (substitution). Key identities: (a+b)², (a-b)², (a+b)³, (a-b)³, a³+b³, a³-b³, a²+b²+c²-ab-bc-ca. For any "find the value" question: substitute x=1, y=1, or specific values that collapse the expression. Value-putting gets you the answer in under 10 seconds vs 90 seconds algebraically.

ENGLISH DIRECTIVE (2 HOURS):
Para Jumbles and Cloze Tests test your linguistic intelligence, not memory. Para Jumbles strategy: (1) Find the mandatory opening sentence — usually introduces a subject/topic, rarely starts with pronouns or connectors. (2) Find mandatory pairs — sentences connected by pronouns (he/she/they referring back). (3) Use transition words (However, Therefore, Moreover) to sequence logically.

MOCK DIRECTIVE:
Same intensity as yesterday. Log your section-wise time. Are you within the recommended windows?

TRAP QUESTION DRILL:
During revision, specifically identify questions you spent >90 seconds on. These are your "ego trap" questions — where you refused to skip. Calculate how many easy questions you missed because of this time drain.`,
    tasks: [
      WE_DS('d4',[
        s('d4-ds1','Algebra: Core Identities Mastery (90 min)','Memorize and drill: (a±b)²=a²±2ab+b², (a+b)(a-b)=a²-b², (a±b)³, a³±b³ factorizations. For each identity: (1) write from memory, (2) verify with a=2 b=3, (3) solve 5 SSC-style questions using it.','The "value-putting" hack: If question asks "If x+1/x=3, find x²+1/x²", square both sides directly. Never expand the hard way.',90),
        s('d4-ds2','Algebra: Linear/Quadratic Equations + Surds (90 min)','Quadratic: Sum of roots = -b/a, Product of roots = c/a. If sum and product are given, directly reconstruct the quadratic. Surds: rationalize denominators, √a×√b=√(ab), (√a+√b)(√a-√b)=a-b.','Surd simplification hack: Always rationalize by multiplying conjugate. Keep irrational numbers separate from rational parts.',90),
        s('d4-ds3','English: Cloze Test Strategy (60 min)','Read 3 full Cloze Test passages with blanks. Strategy: (1) Read full passage first for context, (2) Fill grammar-forced blanks first (articles, prepositions, tenses), (3) Fill vocabulary blanks last using context + elimination.','The most common cloze error: filling blanks grammatically correct but contextually wrong. Always re-read the filled passage.',60),
        s('d4-ds4','English: Para Jumbles — 30 Questions (60 min)','Solve 30 Para Jumble questions. Apply the systematic approach: Find opener → find mandatory pairs → use connectors. Time limit: 90 seconds per question maximum.','Opener clues: Abstract/general statement, definition, historical context. Ender clues: Conclusion words (thus, finally, therefore, hence).',60),
      ]),
      WE_MT('d4',[
        s('d4-mt1','Full Tier 1 Mock — 60 Minutes STRICT','Second full mock. Compare section time-splits with yesterday. Is GA taking <7 min? Is Reasoning under 18 min?','Track: Questions attempted, correct, wrong, skipped. The skipped number should decrease over weeks.',60),
        s('d4-mt2','Sectional Mock — Reasoning (30 min)','50 Reasoning questions in 30 minutes. Target: Finish within 20 minutes to bank 10 minutes for review.','Immediately skip any question where the logic isn\'t visible in 30 seconds. Return only if time permits.',30),
        s('d4-mt3','Sectional Mock — Quant (30 min)','50 Quant in 30 minutes. Focus on Arithmetic questions — these should take <20 seconds each with ratio methods.','Any Geometry question taking >60 seconds likely has a shortcut you\'re missing. Mark it for the revision hour.',30),
      ]),
      WE_REV('d4',[
        s('d4-rev1','Identify Trap Questions','Specifically list every question that took >90 seconds. Were they worth attempting? Calculate the opportunity cost: 90 sec wasted = 2-3 easy questions missed.','Ego is the enemy in the exam hall. The elite ranker skips freely and returns if time permits.',20),
        s('d4-rev2','Weak Area Diagnosis','Compare both mocks from Days 3 and 4. Which subject is consistently dragging? This determines next weekend\'s deep study priority.','Pattern recognition: If the same topic type is causing errors across both mocks, it\'s a conceptual gap, not a fluke.',20),
        s('d4-rev3','Formula Book + Strategy Update','Add any new shortcuts discovered today. Write this week\'s key learning in one sentence.','Your formula book is your exam-day weapon. It should be reviewable in 30 minutes.',20),
      ]),
    ],
  },
  {
    id:'2026-04-29', dayNumber:5, date:'2026-04-29', phase:1, tier:1, weekNumber:1,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 5 — Grammar Revision + Syllogism Venn Mastery',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 5

Weekend over. Back to the weekday sprint. The knowledge from the weekend must now be consolidated.

ENGLISH DIRECTIVE:
Revise exactly what was studied over the weekend — Subject-Verb Agreement, Conditionals, Cloze logic. Then solve Fill-in-the-Blanks PYQs using the grammar rules, not gut feeling. Every blank should be traced back to a rule.

QUANT DIRECTIVE:
Apply the Algebra and Geometry theorems you studied over the weekend to actual PYQs. These concepts only solidify when applied. Target: 40 questions in 35 minutes.

REASONING DIRECTIVE:
Syllogism + Blood Relations. Syllogism: Always draw 2-circle Venn diagrams for ALL-SOME-NO type statements. Never solve in your head — it leads to errors. Blood Relations: Use standardized notations consistently (□=male, ○=female).

COMMUTE TASK: Current affairs video — continue from yesterday's session.`,
    tasks: [
      WD_ENG('d5','2026-04-29',[
        s('d5-e1','Weekend Grammar Revision — 20 mins','Quickly re-read your notes on Subject-Verb Agreement and Conditional Sentences from Days 3-4. No re-learning, just activation.','Recite the 5 most important SVA rules from memory before opening your notes. Test retention.',15),
        s('d5-e2','20 Fill-in-the-Blanks PYQs — Grammar Focus','Solve 20 FIB questions where grammar (not vocabulary) determines the answer. For each answer, write the rule name.','Common FIB grammar types: articles (a/an/the), prepositions (in/on/at), conjunctions, appropriate tense.',30),
      ]),
      WD_GA('d5','2026-04-29',[
        s('d5-ga1','Current Affairs — National Level Events','Focus: Major government schemes announced in last 60 days, RBI/Finance Ministry updates, important committee recommendations.','For schemes: Name → Ministry → Beneficiary → Key provision. 4-point framework per scheme.',20),
        s('d5-ga2','Polity Revision — Fundamental Rights & DPSP','Articles 12-35 (Fundamental Rights) + Articles 36-51 (DPSP). Key differences: FR are justiciable, DPSP are non-justiciable. Remember Part III and Part IV.','Most asked: Article 21 (life & liberty), Article 32 (constitutional remedy), Article 14-18 (equality).', 25),
      ]),
      WD_QR('d5','2026-04-29',[
        s('d5-qr1','40 PYQs — Algebra + Geometry Combined','Solve 30 Algebra PYQs (use value-putting) + 10 Geometry PYQs (apply theorems directly without derivation). Time: 35 minutes.','Geometry: If you don\'t see the theorem in 30 seconds, skip it. These are the "study more" questions not "exam day" questions.',35),
        s('d5-qr2','Syllogism (Venn Diagrams) + Blood Relations — 40 Qs','Syllogism: Draw actual Venn diagrams for every question. No mental solving. Blood Relations: Draw the family tree every time.','Syllogism key: "Some A are B" ≠ "Some B are A" logically could be different in size. Always check both conclusions independently.',25),
      ]),
    ],
  },
  {
    id:'2026-04-30', dayNumber:6, date:'2026-04-30', phase:1, tier:1, weekNumber:1,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 6 — Synonyms/Antonyms Sprint + Non-Verbal Vision',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 6

Vocabulary and visual intelligence — two extreme ends of the syllabus. Both critical.

ENGLISH DIRECTIVE:
Synonyms and Antonyms account for 4-6 marks in Tier 1 and 8-10 in Tier 2. Learn them in pairs (synonym + antonym together). Direct/Indirect Speech: completely mechanical. Tense shifts are formulaic. Reporting verb changes are formulaic.

QUANT DIRECTIVE:
SI/CI is one of the highest-frequency arithmetic topics. The CI formula (A = P(1+r/n)^nt) is secondary — SSC questions use the multiplier approach far more efficiently. Speed-Time-Distance: Relative speed (same/opposite direction), average speed = 2xy/(x+y) for equal distances.

REASONING DIRECTIVE:
Non-Verbal Reasoning (Mirror Images, Water Images, Paper Folding) = FREE MARKS. These require zero calculation. Solve purely visually. Never use rough work for these — it wastes time. If you're spending >15 seconds on any non-verbal question, you're doing it wrong.`,
    tasks: [
      WD_ENG('d6','2026-04-30',[
        s('d6-e1','50 Synonyms + Antonyms — Paired Learning','Learn 25 synonym pairs + 25 antonym pairs. Method: Write word → synonym → antonym in one line. 3 lines = 3 words. This is the optimal format.','Focus on confused word pairs: Affect/Effect, Principle/Principal, Complement/Compliment, Eminent/Imminent/Immanent.',20),
        s('d6-e2','20 Direct/Indirect Speech PYQs','Solve 20 conversion questions. Apply the tense shift table mechanically: Present → Past, Past → Past Perfect, will → would, can → could, shall → should.','Reporting verb change rules: "said to" → "told", "said" (no object) stays "said". Pronoun changes: I→He/She, we→they, you→he/she.',25),
      ]),
      WD_GA('d6','2026-04-30',[
        s('d6-ga1','Current Affairs — International Affairs & Defence','Focus: India\'s bilateral agreements, major defence acquisitions, military exercises (name + countries involved + purpose).','Format per exercise: Name | Countries | Location | Purpose | Month. 5-point card.',20),
        s('d6-ga2','Science Revision — Physics Basics','Revise: Laws of motion, reflection/refraction laws, electric current basics, SI units of major quantities. High SSC frequency zone.','SSC loves: units (Joule, Newton, Pascal, Watt), conversion, and conceptual "which of these" questions.',25),
      ]),
      WD_QR('d6','2026-04-30',[
        s('d6-qr1','40 PYQs — SI/CI + Speed-Time-Distance','SI: Use simple ratio. CI: Use multiplier method (1+r%) raised to n. STD: Relative speed = sum (opposite) or difference (same). Average speed (equal distances) = 2xy/(x+y). Solve 40 mixed PYQs in 35 mins.','CI shortcut for 2 years: CI-SI = P×(r/100)². For 3 years use standard expansion.',35),
        s('d6-qr2','Non-Verbal Reasoning — 50 Questions','Mirror Images (15 Qs) + Water Images (10 Qs) + Paper Folding/Cutting (15 Qs) + Embedded Figures (10 Qs). Purely visual. No rough work. 15 seconds max per question.','Mirror image rule: Horizontal mirror = upside-down image. Vertical mirror = left-right flipped. Practice both.',25),
      ]),
    ],
  },
  {
    id:'2026-05-01', dayNumber:7, date:'2026-05-01', phase:1, tier:1, weekNumber:1,
    weekType:'weekday', totalHours:2.5, hasQuiz:true,
    title:'Day 7 — Integration Sprint + Cognitive Switching Drill',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 7

Week 1 closes today. Integration day — all subjects in rapid fire.

ENGLISH DIRECTIVE:
Mixed format today — Error Spotting (apply grammar rules) + Idioms (from memory) + one full Cloze Test (context logic). This mirrors the actual exam's English section structure. Time yourself: 45 minutes for all three.

QUANT DIRECTIVE:
Mixed PYQs across ALL arithmetic and advanced topics. This is the cognitive switching drill — the exam forces you to jump between Percentages → Geometry → Algebra → Trigonometry in seconds. Your brain must adapt. 30 questions, 30 minutes.

REASONING DIRECTIVE:
Two full sectional mocks. Target: 25 Reasoning questions in under 18 minutes each. If you're hitting this target consistently, you're ahead of 90% of candidates.

WEEK 1 ASSESSMENT:
After completing all tasks, ask yourself: What is my 30-second-skip reflex like? Am I still using algebra where ratios work? Is my Venn diagram speed improving? Write one honest sentence answering each.`,
    tasks: [
      WD_ENG('d7','2026-05-01',[
        s('d7-e1','Mixed English Sprint — 10 Error Spotting + 10 Idioms + 1 Cloze','10 Error Spotting PYQs (grammar-based, no intuition), then recall 10 idioms from memory and write their meanings, then 1 full Cloze Test (10-15 blanks). Total: 45 minutes.','Error Spotting: Most errors are in ONE clause. Scan all underlined parts but most answers lie in subject-verb agreement or tense consistency.',45),
      ]),
      WD_GA('d7','2026-05-01',[
        s('d7-ga1','Current Affairs + Economy — Weekly Summary','Today\'s CA focus: Economy — Inflation data (CPI/WPI), RBI decisions, major scheme launches with budget allocation, India\'s trade balance news.','SSC GA loves numbers: inflation %, budget allocations, GDP growth figures. Write each number precisely.',20),
        s('d7-ga2','Science — Chemistry & Biology Basics','Chemistry: Periodic table trends, chemical reactions, pH scale, major acids/bases. Biology: Cell organelles, blood types, human organ systems, vitamins and deficiency diseases.','Memorize as tables: Vitamin | Source | Deficiency Disease. 3 columns, 10 rows = done.',25),
      ]),
      WD_QR('d7','2026-05-01',[
        s('d7-qr1','Mixed Quant — 30 PYQs All Topics (30 min)','30 mixed questions covering: Arithmetic (10), Algebra (5), Geometry (5), Mensuration (5), Data Interpretation (5). Enforce cognitive switching — no "topic momentum". Each question is fresh.','This is the most important drill for Tier 1 prep. The exam never gives you 10 questions of the same type consecutively.',30),
        s('d7-qr2','2 Reasoning Sectional Mocks (40 min)','Two 25-question Reasoning sections, 20 minutes each. Target: Under 18 minutes. Record your actual time.','First mock: approach in natural order. Second mock: do visual questions first (fastest), then rule-based, then logic-heavy last.',40),
      ]),
    ],
  },
]

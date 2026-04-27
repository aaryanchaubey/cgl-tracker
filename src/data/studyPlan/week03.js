// Week 3 — May 9 (Thu) to May 15 (Wed) — Phase 1 | Days 15-21 | ALL HAVE QUIZ
const e=(id,s)=>({id:`${id}-eng`,subject:'English',icon:'📖',color:'#6366f1',duration:45,title:'English Block (45 min)',subtasks:s})
const g=(id,s)=>({id:`${id}-ga`,subject:'General Awareness',icon:'🌏',color:'#10b981',duration:45,title:'GA & Current Affairs (45 min)',subtasks:s})
const q=(id,s)=>({id:`${id}-qr`,subject:'Quant + Reasoning',icon:'🔢',color:'#f59e0b',duration:60,title:'Quant + Reasoning Sprint (60 min)',subtasks:s})
const ds=(id,s)=>({id:`${id}-ds`,subject:'Deep Study',icon:'🧠',color:'#8b5cf6',duration:300,title:'Deep Study Block (5 Hours)',subtasks:s})
const mt=(id,s)=>({id:`${id}-mt`,subject:'Mock Test',icon:'⏱️',color:'#ef4444',duration:120,title:'Mock Test Block (2 Hours)',subtasks:s})
const rv=(id,s)=>({id:`${id}-rev`,subject:'Revision & Analysis',icon:'🔍',color:'#06b6d4',duration:60,title:'Post-Mortem Revision (1 Hour)',subtasks:s})
const st=(id,title,desc,tip,mins,m=true)=>({id,title,description:desc,tip,estimatedMins:mins,mandatory:m})

export const DAYS=[
  {
    id:'2026-05-09',dayNumber:15,date:'2026-05-09',phase:1,tier:1,weekNumber:3,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 15 — Homophones & Trigonometry Basics',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 15\n\nWeek 3. Trigonometry enters the battlefield. This is where engineers MUST dominate.\n\nENGLISH DIRECTIVE: Homophones and confused words are 1-2 marks in Tier 1 and 3-4 in Tier 2. "Their/There/They're", "Accept/Except", "Lose/Loose", "Desert/Dessert" — these appear in error spotting AND vocabulary sections.\n\nQUANT DIRECTIVE: Trigonometry standard values — sin30°=½, cos30°=√3/2, sin45°=1/√2, tan45°=1, sin60°=√3/2, sin90°=1, tan90°=undefined. These values enable value-substitution shortcuts in 90% of SSC trig questions. You do NOT need to derive — you need to recall in under 3 seconds.\n\nREASONING: Pattern Completion in figures — identify the rule governing the sequence and predict the missing figure. Check rotations (90°/180°/270°), reflections, additions/removals of elements.`,
    tasks:[
      e('d15',[
        st('d15-e1','30 Homophone Pairs + Confused Words','their/there/they\'re, accept/except, affect/effect, desert/dessert, principal/principle, stationary/stationery, compliment/complement, allude/elude, advice/advise, council/counsel, later/latter, lose/loose, cite/site/sight, bare/bear, fair/fare.','Write one sentence for EACH word in a pair. This forces you to understand meaning, not just memorize spelling.',20),
        st('d15-e2','20 Error Spotting — Vocabulary-Based Errors','These errors involve wrong word choice (homophone or confusable). Find the incorrect word and replace it correctly.','In error spotting: if grammar seems correct, check if a confusable word is used. "He gave me an advice" is wrong — advice is uncountable.',25),
      ]),
      g('d15',[
        st('d15-ga1','Current Affairs — Economy & Finance','RBI policy updates, SBI/major bank highlights, insurance sector changes, stock market milestones (Sensex, Nifty record), digital payment statistics (UPI transaction volumes).','RBI CA: Governor, Deputy Governors, recent policy rate decisions (repo rate, reverse repo). These are frequent.',20),
        st('d15-ga2','Geography — Physical Features of India','Mountain ranges (Himalayas, Vindhyas, Aravalli), Deccan Plateau, Coastal plains (Eastern/Western Ghats), Thar Desert, major passes (Banihal, Rohtang, Nathu La, Bolan — though Bolan is in Pakistan).','Passes: Know their states/location. Banihal=J&K, Rohtang=HP, Nathu La=Sikkim, Zoji La=J&K, Lipu Lekh=Uttarakhand.',25),
      ]),
      q('d15',[
        st('d15-qr1','40 PYQs — Trigonometry Basics + Standard Values','Memorize complete table: sin/cos/tan for 0°,30°,45°,60°,90°. Then solve 40 PYQs using value-substitution method. Most trig Qs: substitute the given angle, simplify, choose answer.','Trig identity shortcut: sin²θ+cos²θ=1 → if sin=3/5, cos=4/5 (3-4-5 triple). Always check Pythagorean triples first.',35),
        st('d15-qr2','Pattern Completion + Figure Series — 40 Qs','Identify: rotation angle, number of elements added/removed, shading patterns, size changes. Apply rule to predict missing figure.','Systematic check: (1) Rotation? (2) Reflection? (3) Addition/subtraction of elements? (4) Shading pattern? In that order.',25),
      ]),
    ],
  },
  {
    id:'2026-05-10',dayNumber:16,date:'2026-05-10',phase:1,tier:1,weekNumber:3,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 16 — Sentence Improvement + Height & Distance',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 16\n\nSentence Improvement and Height & Distance — precision tools.\n\nENGLISH DIRECTIVE: Sentence Improvement questions give you 4 options for a highlighted part. One option (including "No improvement") is correct. Strategy: First check if the original is correct (No improvement applies ~25% of time in SSC). Then check grammar (tense, SVA), then style (redundancy, clarity).\n\nQUANT DIRECTIVE: Height & Distance uses tan (for vertical) and sin/cos (for inclined). Most problems: "angle of elevation from point A to top of tower of height h = θ → distance = h/tanθ". Two-angle problems use the tan formula twice and solve simultaneously. Always draw a diagram.\n\nGA: Economy budget highlights — knowing key budget 2025-26 allocations is crucial for next 3-4 months of CA questions.`,
    tasks:[
      e('d16',[
        st('d16-e1','20 Sentence Improvement PYQs','Strategy for each: (1) Is the original correct? (2) If not, what grammar rule does it violate? (3) Which option correctly applies the rule?','Never choose an option just because it "sounds better." Every change must be justified by a rule.',25),
        st('d16-e2','Preposition Usage — 10 Key Rules + 10 PYQs','Key prepositions: "different from" (not "different than"), "inferior to" (not "inferior than"), "listen to" (not "listen"), "die of" disease (not "die from"), "abide by" (not "abide with").','Preposition errors are the second most common error type in SSC after SVA. Learn fixed prepositions with verbs/adjectives.',20),
      ]),
      g('d16',[
        st('d16-ga1','Current Affairs — Environment & Climate','Focus: COP summits, India\'s climate commitments (Net Zero 2070), major environmental policies, endangered species news, national parks/wildlife sanctuaries in news.','Climate CA: India\'s renewable energy targets (500 GW by 2030), solar capacity milestones. Know the numbers.',20),
        st('d16-ga2','Economy — GDP, Inflation & Key Indicators','India\'s GDP growth rate, CPI/WPI inflation, unemployment rate, fiscal deficit as % of GDP, foreign exchange reserves. Latest figures from Economic Survey.','These numbers appear directly in MCQs. Must know the most recent official figures.',25),
      ]),
      q('d16',[
        st('d16-qr1','30 PYQs — Height & Distance','Every question: draw diagram first. Label: height (h), base distance (d), angle (θ). Apply: tanθ=h/d, sinθ=h/hypotenuse, cosθ=d/hypotenuse. Two-angle problems: set up two equations, solve.','Common setup: Tower AB, observer at C. Angle of elevation = θ. tanθ = AB/BC → BC = AB/tanθ. Height asked = use cotθ or tan(complementary angle).',35),
        st('d16-qr2','Number + Alphabet Sequences — 40 Qs','Number sequences: arithmetic (fixed difference), geometric (fixed ratio), prime-based, square/cube-based, Fibonacci-type. Alphabet sequences: +n positions, alternating, skip patterns.','First identify if it\'s a single sequence or split into even/odd terms. Many SSC series alternate between two independent sequences.',25),
      ]),
    ],
  },
  {
    id:'2026-05-11',dayNumber:17,date:'2026-05-11',phase:1,tier:1,weekNumber:3,
    weekType:'weekend',totalHours:8,hasQuiz:true,
    title:'Day 17 — Trigonometry Deep Dive + Sentence Rearrangement',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 17 (WEEKEND FORGE)\n\nTrigonometry mastery and Para Jumbles — the two most ignored, highest-gain areas.\n\nTRIGONOMETRY DIRECTIVE (3 hrs):\nAll identities must be memorized: sin²+cos²=1, 1+tan²=sec², 1+cot²=cosec². Compound angles: sin(A+B)=sinAcosB+cosAsinB, cos(A+B)=cosAcosB-sinAsinB. Double angle: sin2A=2sinAcosA, cos2A=cos²A-sin²A=1-2sin²A=2cos²A-1. Sum to product and product to sum formulas. Height & Distance multi-step problems.\n\nSENTENCE REARRANGEMENT (2 hrs):\nPara Jumbles: Practice the 4-step method: (1) Find opener (definite article 'The', proper noun introduction), (2) Find mandatory pairs via pronoun references, (3) Use discourse markers (However, Therefore, Moreover, Nevertheless), (4) Read the assembled passage to verify.\n\nMOCK: Fifth full mock. Aim to break into top 10 percentile on your platform.`,
    tasks:[
      ds('d17',[
        st('d17-ds1','Trigonometric Identities — Complete Mastery (90 min)','Fundamental: sin²θ+cos²θ=1, sec²θ-tan²θ=1, cosec²θ-cot²θ=1. Compound: sin(A±B), cos(A±B), tan(A±B). Double: sin2A, cos2A (3 forms), tan2A. Half angle: sin(A/2), cos(A/2). Product to sum and sum to product.','For each identity: write from memory, verify with A=30° B=60°, then solve 3 SSC questions using it.',90),
        st('d17-ds2','Trig Advanced — Complex Identity Questions (60 min)','Questions like: "If sinA+cosA=√2, find sinA-cosA" — square both sides and use sin²+cos²=1. Or "Prove that sin⁶x+cos⁶x=1-3sin²xcos²x" — use (a+b)³ identity recognition.','Value-putting works here too: substitute A=45° to verify identities and check answer options.',60),
        st('d17-ds3','Para Jumbles — 30 Questions (90 min)','Solve 30 Para Jumble sets using the systematic 4-step method. Time: 3 minutes maximum per set. Stop using gut feel — every arrangement must have a justification.','Track: How many did you solve correctly using the systematic method vs. pure intuition? Systematic should be higher accuracy.',90),
        st('d17-ds4','Height & Distance — Multi-Step Problems (60 min)','Two observers, moving objects, two angles: these require 2+ equations. Practice: "A man observes a tower at 30°, walks 20m closer, now observes at 60°. Find tower height."','Two-angle formula: h = d×tanα×tanβ/(tanβ-tanα) where d=distance walked. Memorize this general formula.',60),
      ]),
      mt('d17',[
        st('d17-mt1','Full Tier 1 Mock — 60 Minutes','Fifth mock. Maintain section timing discipline. New focus: flag questions you were unsure about. After mock, track how many of those you got right vs. wrong — this measures your uncertainty calibration.','A well-calibrated candidate can tell when they\'re 90% sure vs 60% sure. This prevents bad guesses.',60),
        st('d17-mt2','Sectional English (30 min) + Sectional Reasoning (30 min)','English: Focus on Para Jumbles and Sentence Improvement using today\'s techniques. Reasoning: Compress to under 17 minutes.','Apply what was just studied. Immediate application = fastest path to permanent retention.',60),
      ]),
      rv('d17',[
        st('d17-rev1','Trig Identity Recall Test','Without notes: write all 10+ trig identities from memory. Score. Any gap = immediate 5-min review.','Test yourself on identities at the START of the revision hour. If gaps exist, you know what to focus the remaining time on.',30),
        st('d17-rev2','Mock Error Analysis + Formula Book Update','Categorize mock errors. Add any new trig shortcuts to formula book. Plan Sunday\'s deep study topics.','The formula book should now have at least 3 pages. Review it front-to-back in 10 minutes.',30),
      ]),
    ],
  },
  {
    id:'2026-05-12',dayNumber:18,date:'2026-05-12',phase:1,tier:1,weekNumber:3,
    weekType:'weekend',totalHours:8,hasQuiz:true,
    title:'Day 18 — Statistics + Coordinate Geometry + Cloze Deep',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 18\n\nStatistics and Coordinate Geometry — underrated in Tier 1, dominant in Tier 2.\n\nSTATISTICS DIRECTIVE (2 hrs):\nMean (AM, GM, HM), Median (middle value, or average of two middle values for even n), Mode (most frequent), Range (max-min), Variance (mean of squared deviations), Standard Deviation (√Variance). SSC asks: "If each observation increased by k, how does Mean/Median/Mode/SD change?" Rule: Mean, Median, Mode increase by k. SD unchanged (it measures spread, not position).\n\nCOORDINATE GEOMETRY (1.5 hrs):\nDistance formula √((x2-x1)²+(y2-y1)²), Midpoint ((x1+x2)/2,(y1+y2)/2), Section formula (divides in ratio m:n), Slope m=(y2-y1)/(x2-x1), parallel lines: m1=m2, perpendicular: m1×m2=-1.\n\nCLOZE TEST MASTERY (1.5 hrs):\nThree complex Cloze passages — focus on developing instinct for grammatical vs. semantic fills.`,
    tasks:[
      ds('d18',[
        st('d18-ds1','Statistics — All Measures of Central Tendency (90 min)','AM = sum/n. GM = nth root of product. HM = n/sum(1/xi). Median: sort, find middle. Mode: most frequent. Combined mean: (n1×x̄1 + n2×x̄2)/(n1+n2). Effect of adding/multiplying constants: adding k → Mean shifts by k, SD unchanged; multiplying k → Mean and SD both scale by k.','Frequency distribution: To find median, use cumulative frequency table. (n/2)th observation determines median class.',90),
        st('d18-ds2','Coordinate Geometry (90 min)','Distance, Midpoint, Section formula (internal m:n: (mx2+nx1)/(m+n), (my2+ny1)/(m+n)), Area of triangle with vertices: ½|x1(y2-y3)+x2(y3-y1)+x3(y1-y2)|. Line: y=mx+c, slope-intercept form. Centroid of triangle: ((x1+x2+x3)/3, (y1+y2+y3)/3).','Section formula trap: External division: (mx2-nx1)/(m-n). Check if "externally" is specified.',90),
        st('d18-ds3','Cloze Tests — 3 Advanced Passages (120 min)','Three Cloze passages of 15+ blanks each. Strategy: fill grammar blanks first (articles, prepositions, conjunctions), then vocabulary blanks. Re-read the complete filled passage at end.','Typical Cloze structure: 30% grammar fills + 70% vocabulary fills. Master both categories.',120),
      ]),
      mt('d18',[
        st('d18-mt1','Full Tier 1 Mock — 60 min','Sixth mock. Target: Match or exceed Week 2 percentile. If percentile is dropping, revise the formula sheet before next mock.','Never take a mock without reviewing the previous mock\'s top 5 errors. Carry forward learning.',60),
        st('d18-mt2','DI Sectional — Tables + Graphs (60 min)','Solve 2 DI sets: one tabular + one bar/line graph. Apply reading habit: labels first, then questions.','Time allocation for DI: 3-4 minutes per 5-question set. If a set is taking >5 minutes, skip 1-2 hardest Qs in that set.',60),
      ]),
      rv('d18',[
        st('d18-rev1','Statistics Formula Self-Test','Write all statistics formulas from memory. Particular focus: combined mean formula and effect of arithmetic operations on SD.','SD independence from shift is a VERY common SSC MCQ. "If 5 is added to each observation, SD becomes ___" → Answer: unchanged.',30),
        st('d18-rev2','Plan Week 3 Remaining Days','Based on today\'s mock, identify your 2 weakest topics. Schedule targeted practice on Days 19-21.','Don\'t just identify weaknesses — write the SPECIFIC resource or method you\'ll use to address them.',30),
      ]),
    ],
  },
  {
    id:'2026-05-13',dayNumber:19,date:'2026-05-13',phase:1,tier:1,weekNumber:3,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 19 — Active/Passive Advanced + Trig PYQs',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 19\n\nConsolidate the weekend's weapons on weekday battlefield.\n\nENGLISH: Active/Passive Voice for compound and complex sentences. The challenge is not simple conversion — it's maintaining meaning in complex structures. "The teacher made the students write an essay" → Passive: Two options possible. Know when to use get/have passive.\n\nQUANT: 30 Trigonometry PYQs applying yesterday's identities. Use value-putting for identity verification questions. Use standard values for ratio questions. Use formula substitution for Height & Distance.\n\nREASONING: Venn Diagrams (Syllogism). Master the 4 types of statements (All A are B, No A is B, Some A are B, Some A are not B) and their valid conclusions. Draw circles — never solve mentally.`,
    tasks:[
      e('d19',[
        st('d19-e1','Active/Passive — Complex Sentences (20 PYQs)','Types: Causative (make/have/get + object + infinitive/past participle), Passive with modals (must be done, should be seen), Double object sentences (give/send/show → two passive forms possible).','Causative passive: "She got her hair cut" is already passive. "She had the mechanic repair the car" → "She had the car repaired by the mechanic."',25),
        st('d19-e2','Tense Identification in Context — 20 Qs','Given paragraphs with intentional tense errors. Identify which verb is incorrect and why. Focus on narrative consistency.','If a story is in past tense, all verbs must be past tense unless there\'s a specific time shift marker.',20),
      ]),
      g('d19',[
        st('d19-ga1','Polity — Fundamental Rights Deep Revision','Articles 14-22 in detail: Right to Equality (14,15,16,17,18), Right to Freedom (19-22). Key cases: Kesavananda Bharati (basic structure doctrine), Maneka Gandhi case (expanded Art.21).','Article 21 has been expanded by Supreme Court to include right to education, health, livelihood, dignity, environment.',20),
        st('d19-ga2','Current Affairs — Government Schemes (Last 6 months)','PM Janman Yojana, PM Garib Kalyan, Ayushman Bharat, PM-KISAN, Stand Up India, PM SVANidhi. For each: Ministry, beneficiary, key provision, budget.','Framework: Scheme name | Ministry | Target group | Key benefit | Year launched.',25),
      ]),
      q('d19',[
        st('d19-qr1','30 Trig PYQs — Mixed Identity + Heights & Distance','Apply: (1) identity-based simplification, (2) value substitution, (3) height & distance diagram. Solve 30 questions in 30 minutes.','Quick check: if answer has √3, the angle is likely 60°. If answer has √2, angle is likely 45°. Use answer options to guide substitution.',30),
        st('d19-qr2','Syllogism — Venn Diagrams (40 Qs)','Standard form: Convert to All/No/Some statements first. Draw circles: "All A are B" = A inside B. "No A is B" = separate circles. "Some A are B" = overlapping circles. Check both conclusions independently.','Trick: "Some A are not B" is POSSIBLE if any A is outside B. Only "No A is B" definitively proves "Some A are not B" as Definite conclusion.',30),
      ]),
    ],
  },
  {
    id:'2026-05-14',dayNumber:20,date:'2026-05-14',phase:1,tier:1,weekNumber:3,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 20 — Direct/Indirect Deep + Statistics PYQs',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 20\n\nDirect/Indirect Speech is 2-3 marks in Tier 1 and 4-5 in Tier 2. Statistics questions in Tier 2 are guaranteed 3-4 marks. Both get dedicated treatment today.\n\nENGLISH: Direct/Indirect Speech — systematic application of 4 change rules: (1) Pronoun change, (2) Tense backshift, (3) Time/place expression change, (4) Reporting verb change. For Questions: reporting verb becomes "asked/inquired" + if/whether or question word. For Commands: "told/ordered/requested" + infinitive.\n\nQUANT: Statistics PYQs — Mean, Median, Mode, SD, Combined Mean. Cube-based reasoning is today's reasoning addition — a cube painted on all sides, cut into 27 smaller cubes (3×3×3): 8 corner cubes (3 painted faces), 12 edge cubes (2 faces), 6 face cubes (1 face), 1 center cube (0 faces).`,
    tasks:[
      e('d20',[
        st('d20-e1','Direct/Indirect Speech — 20 Complex PYQs','Practice: (1) Exclamatory sentences conversion, (2) Optative sentences, (3) Questions (Yes/No and Wh-type), (4) Imperative sentences. Each type has specific reporting verb and structure.','Exclamatory: "How beautiful!" → "She exclaimed that it was very beautiful." Note: "how/what" disappears, tense shifts, very/much may be added.',25),
        st('d20-e2','Error Spotting — Mixed Grammar PYQs (10 Qs)','10 difficult error spotting questions covering SVA + tense + preposition + voice/narration + comparison errors all mixed.','In a mixed question, check in order: (1) SVA first, (2) Tense consistency, (3) Pronoun agreement, (4) Preposition correctness.',20),
      ]),
      g('d20',[
        st('d20-ga1','Current Affairs — Science & Health','Focus: Disease outbreaks, WHO reports, new drug approvals in India, medical research highlights, Health Ministry schemes (Ayushman Bharat updates, PMJAY coverage).','Health CA is frequent: Disease name, causative agent (virus/bacteria), affected region, India\'s response.',20),
        st('d20-ga2','History — Freedom Struggle Key Events','1857 Revolt, Indian National Congress formation (1885), Partition of Bengal (1905), Non-Cooperation (1920), Civil Disobedience (1930), Quit India (1942), Independence (1947). Key leaders and their contributions.','Timeline: Events → Year → Key leader → SSC-favorite fact from that event.',25),
      ]),
      q('d20',[
        st('d20-qr1','30 Statistics PYQs — All Measures','Mean, Median, Mode problems from frequency distribution tables. Combined mean. Effect of adding/multiplying constant. SD questions.','Trick: In frequency distribution, Mean = Σ(fi×xi)/Σfi. Use assumed mean method: a + Σ(fi×di)/Σfi where di=xi-a.',30),
        st('d20-qr2','Cube-Based Reasoning + Dice Problems (30 Qs)','3×3×3 cube cut into 27 pieces. Questions: "How many cubes have exactly 2 painted faces?" (Answer: 12 — edge pieces). Dice: opposite faces sum to 7 if standard dice (1-6), otherwise use unfolded diagram.','For non-standard dice: Draw the net (unfolded cube). Adjacent faces in the net cannot be opposite. Opposite face = the face not sharing an edge.',30),
      ]),
    ],
  },
  {
    id:'2026-05-15',dayNumber:21,date:'2026-05-15',phase:1,tier:1,weekNumber:3,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 21 — Mixed Grammar Sprint + Full Speed Drill',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 21\n\nWeek 3 closes. Speed is the theme today. No new concepts — pure application at maximum velocity.\n\nENGLISH: 45-minute mixed English sprint. Cover Error Spotting (10 Qs), Voice/Narration (5 each), Para Jumbles (5), and Vocabulary (5). No more than 45 seconds per question. Build exam-day reflexes.\n\nQUANT: Speed drill — 40 questions covering ALL topics from Weeks 1-3. Time yourself. Questions exceeding 60 seconds must be attempted via shortcut or skipped. Build the mental reflex to switch strategies instantly.\n\nREASONING: Full sectional mock. Target time: 16 minutes for 25 questions. If you achieve this, you are banking 4 extra minutes for Quant.\n\nWEEK 3 CLOSE: Three weekends of deep study completed. You should now have solid foundations in: Geometry, Algebra, Mensuration, Trigonometry, Statistics. The acceleration phase begins Week 5.`,
    tasks:[
      e('d21',[
        st('d21-e1','Mixed English Sprint — All Topics (45 min)','10 Error Spotting + 5 Active/Passive + 5 Direct/Indirect + 5 Para Jumbles + 5 Synonyms/Antonyms + 10 Fill-in-the-Blanks. Under 45 seconds per question. No exceptions.','Treat this as a real exam section. Sit at a desk, no distractions, timer running. Record your score.',45),
      ]),
      g('d21',[
        st('d21-ga1','Current Affairs — Economy & Business','Major mergers/acquisitions, FDI inflows (top sectors and countries), ease of doing business rankings, startup ecosystem news, stock exchange updates.','FDI CA: Top source countries for FDI in India (historically Singapore, Mauritius, USA, Netherlands). Sector-wise FDI leaders.',20),
        st('d21-ga2','Static GK Speed Round — All Topics','5 questions each on: History, Geography, Polity, Science, Economy. 2-minute time limit per topic. This tests retention across all GA domains.','Speed round purpose: find which GA topic gives you the most wrong answers. This is your weakest GA topic.',25),
      ]),
      q('d21',[
        st('d21-qr1','40 Mixed Quant — All Topics Speed Drill','10 Arithmetic + 5 Algebra + 5 Geometry + 5 Mensuration + 5 Trigonometry + 5 Statistics + 5 DI. 60-second limit per question strictly.','This mimics Tier 1 Quant section. The goal: never get "anchored" on one question type. Each question is a fresh start.',35),
        st('d21-qr2','Full Reasoning Sectional — Target 16 Minutes','25 questions. Track time. New target: 16 minutes for full section. Sequence: Visual questions (5 min) → Rule-based (5 min) → Logic heavy (6 min) → Review (free time).','If you miss the 16-min target, identify which question type cost the most time.',25),
      ]),
    ],
  },
]

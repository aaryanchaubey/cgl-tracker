// Week 5 — May 23 (Sat) to May 29 (Fri) — Phase 2: Acceleration | Days 29-35 | ALL HAVE QUIZ
// NOTE: Week starts Saturday (May 23 is Sat), ends Friday May 29
const e=(id,s)=>({id:`${id}-eng`,subject:'English',icon:'📖',color:'#6366f1',duration:45,title:'English Block (45 min)',subtasks:s})
const g=(id,s)=>({id:`${id}-ga`,subject:'General Awareness',icon:'🌏',color:'#10b981',duration:45,title:'GA & Current Affairs (45 min)',subtasks:s})
const q=(id,s)=>({id:`${id}-qr`,subject:'Quant + Reasoning',icon:'🔢',color:'#f59e0b',duration:60,title:'Quant + Reasoning Sprint (60 min)',subtasks:s})
const ds=(id,s)=>({id:`${id}-ds`,subject:'Deep Study',icon:'🧠',color:'#8b5cf6',duration:300,title:'Deep Study Block (5 Hours)',subtasks:s})
const mt=(id,s)=>({id:`${id}-mt`,subject:'Mock Test',icon:'⏱️',color:'#ef4444',duration:120,title:'Mock Test Block (2 Hours)',subtasks:s})
const rv=(id,s)=>({id:`${id}-rev`,subject:'Revision & Analysis',icon:'🔍',color:'#06b6d4',duration:60,title:'Post-Mortem Revision (1 Hour)',subtasks:s})
const st=(id,title,desc,tip,mins,m=true)=>({id,title,description:desc,tip,estimatedMins:mins,mandatory:m})

export const DAYS=[
  {
    id:'2026-05-23',dayNumber:29,date:'2026-05-23',phase:2,tier:1,weekNumber:5,
    weekType:'weekend',totalHours:8,hasQuiz:true,
    title:'Day 29 — Advanced Algebra Mastery + Para Jumbles Expert',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 29 (PHASE 2 BEGINS)\n\nPhase 1 is complete. You have covered the full Tier 1 syllabus. Phase 2 is acceleration — deeper, faster, more precise.\n\nADVANCED ALGEBRA DIRECTIVE (3 hrs):\nThis weekend focuses on the most complex algebra that appears in Tier 2. Complex polynomial expansions, sum of roots/product of roots (Vieta's formulas), AM-GM-HM inequalities (AM≥GM≥HM for positive numbers), and combined algebraic-trigonometric expressions.\n\nPARA JUMBLES EXPERT (2 hrs):\nYour Para Jumble accuracy should now exceed 85%. Today's drill introduces the hardest Para Jumble variants: passages where multiple arrangements seem grammatically valid. Solution: check logical/causal flow, not just grammatical flow.\n\nMOCK: Ninth mock. Target: 97th percentile or above. Below 95th = emergency review needed.`,
    tasks:[
      ds('d29',[
        st('d29-ds1','Advanced Algebra — Polynomial Identities Deep (90 min)','(a+b+c)²=a²+b²+c²+2(ab+bc+ca). (a+b+c)³ expansion. If a+b+c=0, then a³+b³+c³=3abc. AM-GM: (a+b)/2 ≥ √(ab) for a,b>0. HM = 2ab/(a+b). AM×HM = GM². Solve 30 complex PYQs.','Key exam question type: "If a+b+c=6 and ab+bc+ca=11, find a²+b²+c²" → (a+b+c)²-2(ab+bc+ca) = 36-22 = 14.',90),
        st('d29-ds2','Algebra — Vieta\'s Formulas + Advanced Equations (90 min)','For quadratic ax²+bx+c=0: α+β=-b/a, αβ=c/a. "Find quadratic whose roots are (α+1) and (β+1)" → new sum = α+β+2, new product = αβ+(α+β)+1. Solve 30 questions.','This technique converts "find the equation with modified roots" questions from complex to simple. Learn the general modification formulas.',90),
        st('d29-ds3','Para Jumbles — Expert Level (60 min)','Passages with abstract arguments, scientific reasoning, or narrative structure where grammar is correct in multiple arrangements. Focus: logical causality (A causes B → A before B), evidence hierarchy (claim → data → conclusion).','When stuck between two arrangements: ask "which event/idea logically precedes the other?" Causality always trumps grammar.',60),
        st('d29-ds4','Speed Arithmetic Drill — All Methods (60 min)','30 questions covering Percentage, P&L, SI/CI, Ratio, Time&Work, Time&Distance — all using shortcut methods ONLY. No algebra. Time: 2 minutes for 5 questions (24 seconds each).','This is a benchmark drill. Record your score. Week 5 target: 25+/30 in under 2 minutes per 5-question block.',60),
      ]),
      mt('d29',[
        st('d29-mt1','Full Tier 1 Mock — 60 Minutes','Ninth mock. New focus: GA accuracy. Skip any GA question where you\'re <70% confident. The saved -0.5 marks from skipping add up significantly over 25 GA questions.','Track your GA skip count and accuracy separately. Elite candidates skip 5-8 GA questions and get 90%+ of attempted ones correct.',60),
        st('d29-mt2','Double Sectional — Quant + Reasoning Back-to-Back (60 min)','30-min Quant sectional (apply new algebra shortcuts) → immediate 30-min Reasoning sectional. No break between. This simulates the cognitive fatigue of the actual Tier 2 pattern.','The purpose: can you maintain Reasoning speed after a demanding Quant section? This is a Tier 2 critical skill.',60),
      ]),
      rv('d29',[
        st('d29-rev1','Percentile Trend Analysis','Plot your last 5 mock percentiles. Is the trend upward? If it\'s flat or declining, the study routine needs adjustment — more weekday PYQ practice.','Expected trend: Start 85th percentile → reach 97th+ by Week 7. If behind: add 20 extra PYQ questions to each weekday Quant session.',30),
        st('d29-rev2','Algebra Formula Consolidation','Write all advanced algebra formulas from memory: (a+b+c)², (a+b+c)=0 implication, Vieta\'s formulas. Test with numbers.','The algebra formula book page should now fit on one A4 sheet. If longer, summarize — conciseness = faster exam recall.',30),
      ]),
    ],
  },
  {
    id:'2026-05-24',dayNumber:30,date:'2026-05-24',phase:2,tier:1,weekNumber:5,
    weekType:'weekend',totalHours:8,hasQuiz:true,
    title:'Day 30 — Advanced Geometry + Long RC Passage Endurance',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 30\n\nGeometry and Reading Comprehension endurance today. The Tier 2 discriminator topics.\n\nGEOMETRY ADVANCED (3 hrs):\nCircles + Triangles combined problems. Key advanced circle theorems: Ptolemy's theorem (for cyclic quadrilaterals: AC×BD=AB×CD+AD×BC), Power of a Point (PA×PB=PC×PD for chords through P), Tangent-Chord angle = inscribed angle in alternate segment. Mass point geometry for cevians. Practice 40+ PYQs.\n\nLONG RC ENDURANCE (2 hrs):\nTwo passages of 800-1000 words each. Tier 2 RC endurance exercise. Target: full comprehension + accurate answer in 15 minutes per passage. Track your WPM. At 150 WPM, an 800-word passage takes 5.3 minutes. This leaves 10 minutes for questions.\n\nTenth mock today. The double-digit mock milestone.`,
    tasks:[
      ds('d30',[
        st('d30-ds1','Advanced Circle Geometry (90 min)','Theorems: Tangent-Chord angle = ½ × intercepted arc. Alternate Segment Theorem: angle between tangent and chord = angle in alternate segment. Intersecting chords: PA×PB=PC×PD. External tangent: PA×PB=PT² (tangent from P). Cyclic quadrilateral: Opposite angles supplementary. Ptolemy for specific cases.','Draw every theorem. Geometry without diagrams is geometry without understanding. Exam confidence comes from visual intuition, not formula memorization.',90),
        st('d30-ds2','Advanced Triangle Geometry (90 min)','Cevians (Medians, Altitudes, Angle Bisectors, Perpendicular Bisectors). Stewart\'s Theorem for finding length of cevian. Angle Bisector Theorem: BD/DC = AB/AC. Mass point geometry: balance point method for finding ratios.','Key result: In any triangle, G (centroid) divides each median in ratio 2:1 from vertex. Area ratio when G divides triangle: each of 6 small triangles has equal area = Total/6.',90),
        st('d30-ds3','Long RC — 2 Passages 800-1000 Words (120 min)','Passage 1: Scientific/Technical topic (climate, biology, economics). Passage 2: Social/Philosophical topic. Apply: preview → skim structure → answer fact questions → inference questions last.','Tone words in RC: skeptical, optimistic, critical, laudatory, ambivalent, disparaging, sanguine. Know what each means for tone questions.',120),
      ]),
      mt('d30',[
        st('d30-mt1','Full Tier 1 Mock — 60 min','Tenth mock! Milestone. After this mock, calculate your average percentile over mocks 6-10. This is your true baseline.','Average over 5 mocks is a much more reliable indicator than any single mock. One-off good/bad mocks are noise.',60),
        st('d30-mt2','Sectional: English (30 min) + GA Speed Round (30 min)','English sectional: Focus on RC questions only. GA: Rapid 25 questions at 1 minute max per question.','GA speed round: This is a simulation of exam-day GA section at 5-7 minutes. Practice the GA-first-speed-strategy.',60),
      ]),
      rv('d30',[
        st('d30-rev1','10-Mock Performance Review','Review mocks 1-10. What is your: best percentile, worst percentile, and average? Which section shows the most variance? High variance = inconsistency = needs more practice.','Section-wise consistency: Reasoning should be most consistent (logic doesn\'t change). GA is most variable. English improves steadily.',30),
        st('d30-rev2','Geometry Theorem Recall','Without notes: write 10 geometry theorems from memory. Include at least: 3 circle theorems, 3 triangle theorems, 2 cevian results.','The geometry theorems you can\'t recall in 30 seconds during revision = the ones you\'ll be slow on in the exam.',30),
      ]),
    ],
  },
  {
    id:'2026-05-25',dayNumber:31,date:'2026-05-25',phase:2,tier:1,weekNumber:5,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 31 — OWS Batch 3 Revision + Circles PYQs',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 31\n\nWeekday acceleration. Apply weekend geometry to PYQs.\n\nVOCABULARY: Third OWS batch — 50 more high-frequency substitutions. By Day 35, you should know 150+ OWS. This is the complete high-frequency OWS bank for SSC.\n\nQUANT: Circle geometry PYQs — apply every theorem from Day 30 to actual SSC questions. Engineering approach: identify which theorem applies first, then calculate mechanically. Don't derive — apply.\n\nREASONING: Input-Output questions are 2-3 marks in Tier 2 Reasoning. Machines that rearrange words/numbers by a specific rule each step. Find the rule in steps 1-2, then apply to later steps.`,
    tasks:[
      e('d31',[
        st('d31-e1','OWS Batch 3 — 50 More Substitutions','Ambidextrous (using both hands equally), Altruist (selfless person), Posthumous (after death), Misogynist (woman-hater), Introvert/Extrovert, Prodigy (exceptionally talented young person), Stoic (indifferent to pain/pleasure), Verbose (using too many words), Teetotaler (non-drinker), Insomniac (cannot sleep).','Plus 40 more. Test yourself on all 3 OWS batches in rotation — spaced practice builds long-term memory.',25),
        st('d31-e2','OWS Self-Test — All 3 Batches (50 words test)','Cover meanings. Recall 50 random OWS from all 3 batches. Record score. Target: 40+/50.','Batch self-test: how many from each batch? If Batch 1 is your weakest, spend tomorrow\'s commute reviewing it.',20),
      ]),
      g('d31',[
        st('d31-ga1','Current Affairs — Recent Week Comprehensive','Complete all major news from the past 7 days. Ensure no important event is missed across: Polity, Economy, International, Science, Sports, Environment, Culture.','Use a structured news summary (Parmar SSC or Daily CA compilation). Don\'t read raw news — too much noise.',20),
        st('d31-ga2','History — Modern India — British Period','Key events: 1857 Revolt causes and results, INC Formation 1885, Partition of Bengal 1905, Morley-Minto Reforms 1909, Rowlatt Act 1919, Jallianwala Bagh 1919, Non-Cooperation 1920, Simon Commission 1927, Civil Disobedience 1930.','Timeline mastery: Year → Event → Key figures → SSC-testable fact. Four columns, 20 rows.',25),
      ]),
      q('d31',[
        st('d31-qr1','40 Circle Geometry PYQs','Apply: tangent-radius perpendicularity, two tangents equal from external point, angle in semicircle = 90°, alternate segment theorem, chord-chord intersecting inside circle.','Quick check: If a question has a tangent and a circle, immediately look for: (1) right angle at point of tangency, (2) equal tangent lengths from external point.',35),
        st('d31-qr2','Input-Output — 30 Questions','Each step rearranges according to a rule. Find the rule from the first few steps (usually alphabetical/numerical ordering, or specific word/number shifting). Apply consistently.','Common rules: Largest number moved right-end each step, alphabetical word arrangement, alternating left-right insertion.',25),
      ]),
    ],
  },
  {
    id:'2026-05-26',dayNumber:32,date:'2026-05-26',phase:2,tier:1,weekNumber:5,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 32 — Idioms Batch 3 + Triangle Advanced PYQs',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 32\n\nIdioms and triangle geometry — two domains where consistent practice creates permanent gains.\n\nVOCABULARY: Third idioms batch. Your idioms bank should now be at 150+. These cover 90% of SSC's tested idioms. Focus today on idioms related to behavior and personality — these appear most frequently in error spotting contexts.\n\nQUANT: Advanced triangle geometry PYQs. Apply: incenter-excircle formulas, mass point geometry for cevian ratios, Apollonius theorem (median formula: m²=½(b²+c²)-a²/4 where a is the side bisected), and Pythagorean triplet recognition.\n\nREASONING: Mirror images and water images — revisit with harder questions. These should be 100% accuracy at this point in training.`,
    tasks:[
      e('d32',[
        st('d32-e1','Idioms Batch 3 — 50 More Phrases','Hit the sack (go to sleep), Apple of one\'s eye (cherished person), Beating a dead horse (wasting effort), Barking up the wrong tree (pursuing wrong path), Bite the bullet (endure pain), Break the ice (initiate conversation), Catch someone red-handed (caught in the act), Drawing a blank (unable to remember), Drop the ball (make a mistake), Egg on one\'s face (be embarrassed).','Plus 40 more. All 3 batches = 150 idioms. SSC typically tests 50-80 idioms per cycle, so you are comprehensively covered.',25),
        st('d32-e2','10 Idioms in Context — Fill in the Blanks','10 sentences with blank spaces — choose the correct idiom from 4 options. Context clues determine the answer.','Idiom-based FIB: Context testing is harder than direct meaning testing. Practice both.',20),
      ]),
      g('d32',[
        st('d32-ga1','Current Affairs — Technology & Innovation','Focus: Major tech policy announcements, AI/ML-related government initiatives, semiconductor industry India news, digital infrastructure (OFC, 5G rollout, data centers).','Digital India: Know key metrics — UPI transaction volume records, internet penetration, smartphone users.',20),
        st('d32-ga2','Biology — Genetics & Cell Biology','DNA structure (double helix, Watson-Crick), cell division (mitosis vs meiosis), chromosomes, genes, genetic diseases (Down syndrome=47 chromosomes, Hemophilia=X-linked), blood group genetics.','Genetics exam staple: Blood group inheritance — O parents cannot have AB child. A and B are codominant.',25),
      ]),
      q('d32',[
        st('d32-qr1','40 Triangle Geometry Advanced PYQs','Apply: Apollonius theorem (ma²=½(b²+c²)-a²/4), Angle bisector theorem (BD/DC=AB/AC), Area by Heron\'s formula, Sine rule (a/sinA=b/sinB=c/sinC), Cosine rule (a²=b²+c²-2bc·cosA).','Pythagorean triplets to memorize: (3,4,5), (5,12,13), (8,15,17), (7,24,25), (9,40,41), (6,8,10), (10,24,26). These appear constantly.',35),
        st('d32-qr2','Mirror & Water Images — 40 Expert Questions','Mirror: Left-right flip for vertical mirror, up-down flip for horizontal mirror. Water image = horizontal mirror image. Clock mirror image: if clock shows 4:30, mirror shows 7:30 (subtract from 12:00 or 11:60).','Clock formula: Mirror time = 11:60 - original time (if original < 12:00) or 23:60 - original (if original > 12:00).',25),
      ]),
    ],
  },
  {
    id:'2026-05-27',dayNumber:33,date:'2026-05-27',phase:2,tier:1,weekNumber:5,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 33 — Grammar Comprehensive + Advanced Quant Mixed',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 33\n\nHalf-way through Week 5. Accelerating on all fronts.\n\nENGLISH: Comprehensive grammar revision in 45 minutes — ALL rules covered in a speed pass. This is the calibration session: you'll quickly discover which rules are fully automatic vs. which still require conscious thought. Those requiring conscious thought need one more focused session.\n\nQUANT: Mixed advanced PYQs — questions that combine multiple topics (e.g., a Geometry + Algebra hybrid, or a Trigonometry + Height&Distance hybrid). This is the exact format of Tier 2. Train for it explicitly.\n\nREASONING: Mixed reasoning speed test. All question types, all in one go. Your Reasoning section time target for Tier 1 is now 14-15 minutes. For Tier 2 (30 Qs), target is 25 minutes.`,
    tasks:[
      e('d33',[
        st('d33-e1','Grammar Comprehensive Speed Revision — All Rules (35 min)','Rapid pass through all grammar rules: SVA (5 min) → Tenses (5 min) → Voice (5 min) → Narration (5 min) → Prepositions (5 min) → Comparison/Degree (5 min) → Articles (5 min). Identify which felt uncertain.','Use a checklist: mark each rule as Green (100% confident), Yellow (usually right), Red (often wrong). Focus next sessions on Reds.',35),
        st('d33-e2','Targeted Practice on Uncertain Rules (10 min)','Take the rules marked Yellow or Red from the above exercise. Solve 2-3 PYQs for each uncertain rule.','This targeted approach is 5× more efficient than re-reading all grammar rules uniformly.',10),
      ]),
      g('d33',[
        st('d33-ga1','Polity — Indian Judiciary','Supreme Court (Article 124-147): composition, appointment, jurisdiction (original/appellate/advisory). High Courts (Article 214-231). Subordinate Courts. Writ jurisdiction: Habeas Corpus, Mandamus, Certiorari, Prohibition, Quo Warranto.','5 Writs: Habeas Corpus (produce the body/person), Mandamus (command to do duty), Certiorari (call up records), Prohibition (stop inferior court), Quo Warranto (by what authority).',20),
        st('d33-ga2','Current Affairs — Appointments & Events','New appointments: Governor, Chief Minister, Chief Justice, Head of PSUs, Ambassadors. Major cultural events, film awards, music/dance festivals, UNESCO heritage additions.','Appointment CA: Always note the full name + designation + state/country. Avoid partial information.',25),
      ]),
      q('d33',[
        st('d33-qr1','30 Advanced Mixed Quant PYQs','Questions combining: (1) Algebra + Trigonometry, (2) Geometry + Mensuration, (3) Statistics + Arithmetic, (4) Number System + Algebra. These are Tier 2 difficulty.','When you see a hybrid question: identify which formula applies first. Don\'t try to solve whole question in head — break into sub-steps.',30),
        st('d33-qr2','Mixed Reasoning Speed Test — All Types (30 min)','30 minutes, 40+ questions, all types mixed. Track time. Any question type exceeding average time: note it as a priority for tomorrow\'s commute review.','Speed test purpose: find the 2-3 question types slowing you down. These are your "time hemorrhage" risks on exam day.',30),
      ]),
    ],
  },
  {
    id:'2026-05-28',dayNumber:34,date:'2026-05-28',phase:2,tier:1,weekNumber:5,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 34 — Vocab Comprehensive + Trig + SI/CI Mixed + Input-Output Final',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 34\n\nHigh-intensity multi-topic day. Test across the board.\n\nENGLISH: Vocabulary comprehensive sprint — all 4 categories (OWS, Idioms, Synonyms, Antonyms) in rapid fire. Today you also add 20 more collocations (verb + noun combinations that appear in Cloze Tests): "make a decision", "take responsibility", "render services", "raise an objection".\n\nQUANT: Three-way mixed — Trigonometry + SI/CI + Mensuration. Each of these in a 15-minute sub-block. This tests topic-switching speed. After Week 5, you should be able to switch between math domains without a mental reset.\n\nREASONING: Input-Output final practice — this topic is 2-3 marks in Tier 2. After today, it should be zero-error for you.`,
    tasks:[
      e('d34',[
        st('d34-e1','Vocabulary Sprint — All 4 Categories (25 min)','OWS: 15 recall test. Idioms: 15 recall test. Synonyms: 10 recall test. Antonyms: 10 recall test. Total: 50-word speed test in 25 minutes.','Track category-wise accuracy. The weakest category = first to review tomorrow morning.',25),
        st('d34-e2','Collocations + Cloze Test (20 min)','Learn 20 key collocations: make/take/give/do + noun combinations. Then solve 1 full Cloze Test (15 blanks) applying collocations knowledge.','Cloze collocations: "He _____ a decision" (MAKE, not DO). "She _____ responsibility" (TOOK, not MADE). Prepositions of collocations differ from standalone verbs.',20),
      ]),
      g('d34',[
        st('d34-ga1','Current Affairs — Economy: RBI & Banking','Latest RBI Monetary Policy Committee decision, repo rate, reverse repo, CRR, SLR current values, CRAR norms, recent bank mergers or privatization news.','Monetary Policy: Expansionary = lower rates = more money supply. Contractionary = higher rates = less money supply. Know which action achieves which goal.',20),
        st('d34-ga2','Static GK — Important Dams & Power Plants','Bhakra Nangal (Punjab+HP, Sutlej), Sardar Sarovar (Gujarat, Narmada), Tehri (Uttarakhand, Bhagirathi), Nagarjuna Sagar (AP+Telangana, Krishna), Hirakud (Odisha, Mahanadi).','For each: Dam name | River | State | Additional fact (longest/highest/largest).',25),
      ]),
      q('d34',[
        st('d34-qr1','40 Mixed PYQs — Trig + SI/CI + Mensuration (35 min)','Block 1 (15 min): 15 Trig questions. Block 2 (10 min): 10 SI/CI questions. Block 3 (10 min): 10 Mensuration questions. Force rapid topic switching.','Each block switch: do a 10-second mental reset. Take one breath, recall the formula set for the new topic. This prevents carrying the wrong formula set into the new topic.',35),
        st('d34-qr2','Input-Output Final — 30 Complex Questions (25 min)','Multi-step machines with 5-6 steps. Identify the rule, apply it to reach the given step, or find the input from the output.','Input-Output expert tip: The rule is ALWAYS consistent across all steps. If your rule breaks at step 3, you identified the wrong rule — go back to step 1.',25),
      ]),
    ],
  },
  {
    id:'2026-05-29',dayNumber:35,date:'2026-05-29',phase:2,tier:1,weekNumber:5,
    weekType:'weekday',totalHours:2.5,hasQuiz:true,
    title:'Day 35 — Full Mock Analysis Day + Formula Sheet Audit',
    promptBlock:`🎯 OPERATIVE BRIEFING — DAY 35\n\nWeek 5 closes. Today is different — analysis and calibration, not new learning.\n\nINTEGRATION DIRECTIVE:\nAfter 35 days of intensive preparation, today you take stock. Complete a timed mixed exercise (30 min), then spend the remaining time on forensic analysis of your formula book and error log.\n\nFORMULA BOOK AUDIT:\nYour formula book should now contain: Arithmetic shortcuts (P&L, SI/CI, ratios), Algebra identities, Geometry theorems (triangles + circles), Mensuration (2D and 3D), Trigonometry (all identities + values), Statistics, Number System rules. If any topic is missing, add it today.\n\nERROR LOG REVIEW:\n5 weeks of errors. What are your top-3 most repeated error types? Plan specific targeted sessions to eliminate them in Week 6.\n\nWEEK 6 PREVIEW: The final week with quizzes. Maximum intensity. Two full mocks on the weekend. Daily sectional mocks on weekdays.`,
    tasks:[
      e('d35',[
        st('d35-e1','English Integration Test — 30 Questions (30 min)','10 Error Spotting + 5 Voice/Narration + 5 Para Jumbles + 5 Vocabulary + 5 Fill-in-the-Blanks. This is your 5-week English benchmark. Target: 27+/30.','After the test: identify which question type gave wrong answers. Are there any clear patterns?',30),
        st('d35-e2','Grammar Rule Audit (15 min)','Read through ALL grammar rules you\'ve learned. Mark: ✓ (confident), ✗ (still unsure). Rules with ✗ must be re-practiced this weekend.','By Week 6 end, EVERY grammar rule should be ✓. Zero ✗ rules before the exam.',15),
      ]),
      g('d35',[
        st('d35-ga1','5-Week CA Compilation Review','Review all current affairs from April 25 to May 29. Use your notes/compilation. Focus: events you learned about but may have forgotten.','5-week CA review: 30-45 events. Quick recall test — can you remember the key fact for each event?',20),
        st('d35-ga2','Static GK Gap Analysis','Identify which Static GK topics you haven\'t covered yet. Any major gaps? Common missed topics: Art & Culture, Medieval Indian History, World Geography (capitals, rivers).','You cannot cover everything. Prioritize by SSC frequency: Polity > Science > History > Geography > Economics > Art & Culture.',25),
      ]),
      q('d35',[
        st('d35-qr1','Formula Book Audit + Update (30 min)','Go through every topic in your formula book. Identify: (1) Missing formulas, (2) Formulas you no longer need to look up (mark these as mastered), (3) Formulas still needing active recall practice.','Mastered formulas can be "archived" to back pages. Active recall formulas stay on front pages for daily review.',30),
        st('d35-qr2','Top-3 Error Type Targeted Practice (30 min)','From your error log: what are your 3 most common error types? Solve 10 questions specifically from each category. Total: 30 questions.','Targeted practice on identified weaknesses is 4× more efficient than random practice. This is the elite preparation difference.',30),
      ]),
    ],
  },
]

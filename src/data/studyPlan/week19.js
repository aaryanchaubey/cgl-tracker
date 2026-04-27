// Week 19 — Sep 7 (Mon) to Sep 13 (Sun) — Phase 6: Tier 2 Final Sprint | Days 125-131
// Weekday: 2.5 hrs | Weekend: 8 hrs | hasQuiz: false
// PENULTIMATE WEEK — Exam is Sep 19

const WD_ENG = (id, date, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks })
const WD_GA  = (id, date, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks })
const WD_QR  = (id, date, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`, subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`, subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper 1 Mock (2 hr 15 min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:45, title:'DEST Drill + Mock Analysis (45 min)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-09-07', dayNumber:125, date:'2026-09-07', phase:6, tier:2, weekNumber:19,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 125 — RC Ultra-Speed + All Static GK Final Rapid Revision + Quant Elite Mixed + CKT Final Push',
    promptBlock:`OPERATIVE BRIEFING — DAY 125 | WEEK 19 BEGINS — PENULTIMATE WEEK

12 days to exam. This is the penultimate week. Every day from today is irreversible — what you lock in this week stays with you into the exam hall.

THE PENULTIMATE WEEK PHILOSOPHY:
No new topics. No new books. No new platforms. Everything this week comes from what you already know — but you will practice it faster, sharper, and with higher accuracy than ever before. The goal of Week 19 is: automation. Every skill becomes automatic. Every formula becomes reflex. Every question type is recognized within 3 seconds of reading.

RC ULTRA-SPEED:
3 passages in 18 minutes total — 6 minutes each. This is faster than exam pace. If you can do it in 18 minutes in practice, 19-20 minutes in the actual exam feels comfortable. Ultra-speed RC trains rapid thesis identification — the most critical skill.

STATIC GK FINAL:
All static GK, one last comprehensive rapid revision. After today, you do not study static GK from books — only from recall.

QUANT ELITE MIXED:
30 hardest questions, 25-minute window. Target: 25+ correct. Under exam pace.

CKT FINAL PUSH:
This week is your last chance to max out CKT. 10+ minutes daily, covering the remaining topics.`,
    tasks: [
      WD_ENG('d125','2026-09-07',[
        s('d125-e1','RC Ultra-Speed — 3 Passages in 18 Minutes (6 min each) (35 min)','Three RC passages, strict 6-minute timer per passage. Protocol for each passage: 90 seconds reading (identify thesis + tone) → 4.5 minutes for all questions (45 seconds each). When the 6-minute timer ends: move to the next passage regardless. No exceptions. After all three: review wrong answers. Track: did time pressure increase your error rate, or were errors pre-existing knowledge gaps?','RC 6-minute protocol: 90 seconds of reading is non-negotiable — do NOT skip reading to go straight to questions. Questions cannot be answered accurately without understanding the passage\'s direction.',35),
        s('d125-e2','RC Ultra-Speed Analysis (10 min)','Review every wrong answer from the 3 passages. For each error: was it a time pressure error (would you have gotten it with 8 minutes?) or a comprehension error (you were wrong even on careful reading)? Time pressure errors decrease with practice. Comprehension errors need skill work.','Distinguishing error types guides your remaining practice. Time pressure errors → more ultra-speed practice. Comprehension errors → slower, careful reading practice to identify what you miss.',10),
      ]),
      WD_GA('d125','2026-09-07',[
        s('d125-ga1','All Static GK Final Rapid Revision — Part 1 (25 min)','Polity rapid recall (8 min): All constitutional articles and amendments from memory — state only the articles/amendments you actually know. Skip unknown ones — at this stage, time is better spent consolidating known content. Economy rapid recall (8 min): All institutions, key rates, current figures, budget highlights. History rapid recall (9 min): Ancient → Medieval → Modern, one key fact per era, 30 seconds per fact.','Final rapid revision principle: State the fact, verify mentally, move on. This is recall training, not reading. Close all books. Speak aloud if possible.',25),
        s('d125-ga2','All Static GK Final Rapid Revision — Part 2 (20 min)','Geography rapid recall (10 min): All rivers and tributaries, passes, ports, airports, mineral belts, physical geography facts. Science rapid recall (10 min): Physics laws, Chemistry alloys + pH + reactions, Biology cell organelles + vitamins + blood groups + photosynthesis. For each science fact: state it in under 15 seconds.','Week 19 static GK principle: If a fact does not surface within 15 seconds of recall attempt — it is too fragile to rely on in the exam. Mark it as uncertain and do not bank on it.',20),
      ]),
      WD_QR('d125','2026-09-07',[
        s('d125-qr1','Quant Elite Mixed — 30 Hardest, 25 Minutes (Target 25+) (40 min)','30 of the hardest mixed Quant questions in 25 minutes — under exam pace intentionally. This is a pressure drill, not an accuracy drill. After completing: score. Did you get 25+? If not: which topic type failed under this pressure level? Note it for the Week 19 targeted practice.','25-minute window for 30 hard questions: 50 seconds average. This is harder than exam pace. If you maintain 25+ correct here, you are in strong shape for the actual exam speed.',40),
        s('d125-qr2','CKT Final Push — Programming Fundamentals + Shortcuts (10 min)','Programming basics: Machine language (binary — directly understood by CPU), Assembly language (uses mnemonics like MOV, ADD — needs assembler), High-level language (Python, Java, C++ — needs compiler/interpreter). Compiler: converts entire program at once. Interpreter: converts line by line (slower execution). Keyboard shortcuts: Ctrl+C (copy), Ctrl+X (cut), Ctrl+V (paste), Ctrl+Z (undo), Ctrl+Y (redo), Ctrl+A (select all), Ctrl+S (save), Ctrl+P (print), Alt+F4 (close window), Ctrl+Alt+Delete (task manager). MS Office: Ctrl+B (bold), Ctrl+I (italic), Ctrl+U (underline), F7 (spell check), Ctrl+Home (beginning of document), Ctrl+End (end of document).','Keyboard shortcuts appear directly in CKT papers. The 10 most-tested shortcuts: Ctrl+C, Ctrl+V, Ctrl+Z, Ctrl+A, Ctrl+S, Alt+F4, Ctrl+P, Ctrl+F (find), F5 (refresh), F12 (Save As).',10),
      ]),
    ],
  },
  {
    id:'2026-09-08', dayNumber:126, date:'2026-09-08', phase:6, tier:2, weekNumber:19,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 126 — Grammar Precision (Perfect Target) + CA Final + DI Elite Final + DEST',
    promptBlock:`OPERATIVE BRIEFING — DAY 126

11 days to exam. Grammar precision today means targeting perfection.

GRAMMAR PRECISION:
20 elite questions, target: 20/20. Not 18. Not 19. Twenty. The reason: grammar is the one area of the exam where perfection is genuinely achievable. Unlike Quant, where some questions are intentionally hard enough to stump most candidates, grammar questions have a single objectively correct answer that any well-prepared candidate can get. Perfection is the standard.

CA FINAL:
Last full CA revision session dedicated exclusively to current affairs. After today: CA revision happens only as part of mock GA sections or rapid-fire drills.

DI ELITE FINAL:
20 of the hardest DI questions. This is the last dedicated DI session. After today, DI practice happens only within full mocks.

DEST: 15 minutes. Sub-3% must now be automatic. If it is not: spend 5 extra minutes today and identify what specific error type is holding you above 3%.`,
    tasks: [
      WD_ENG('d126','2026-09-08',[
        s('d126-e1','Grammar Precision — 20 Elite Qs (Target Perfect 20/20) (35 min)','20 elite grammar questions, one from each major category. Before each answer: explicitly name the rule that applies. After completing: check all 20. For any wrong answer: write the rule you should have applied and the specific mistake in your reasoning. If score is 20/20: you have achieved grammar precision. If score is 18-19: identify the 1-2 rules still causing errors and review them specifically tonight.','Grammar perfection is achievable because there are finite rules and every question tests one specific rule. Unlike RC where inference can be debated, grammar has no grey area. Own the rules, own the marks.',35),
        s('d126-e2','Grammar Rule Finalization (10 min)','Review your complete grammar rule sheet. This is the penultimate week — your grammar rule sheet should be finalized by today. No new rules after today. Read through the entire sheet once and note any rule you feel uncertain about.','Your grammar rule sheet is what you will briefly review on the morning of the exam. Make sure every rule on it is something you genuinely know, not something you copied but do not understand.',10),
      ]),
      WD_GA('d126','2026-09-08',[
        s('d126-ga1','CA Final — Comprehensive Last Revision (25 min)','Final dedicated CA revision session. Go through all CA from the past 60 days: summits, appointments, awards, India bilateral agreements, economic announcements, sports results, ISRO/defense. For each item you remember: 10-second confirmation. For items you have forgotten: re-read once, write a 3-word trigger phrase.','After today, CA practice happens only within mock GA sections. This is your last "study CA" session. Make it count.',25),
        s('d126-ga2','CA High-Priority Verification (20 min)','Specifically verify the highest-probability CA items: current heads of all major constitutional/statutory bodies, latest India-rank in global indices (HDI, Global Peace Index, Ease of Doing Business), recent Supreme Court landmark verdicts, latest economic data (GDP growth rate, inflation, forex reserves, repo rate).','High-probability CA: Items that have changed recently (new appointment, new rate) are more likely to be tested than items unchanged for years.',20),
      ]),
      WD_QR('d126','2026-09-08',[
        s('d126-qr1','DI Elite Final — 20 Hardest Tier 2 DI Questions (40 min)','20 hardest Tier 2 DI questions — your final dedicated DI session. All formats: caselet, dual-axis chart, multi-table, combined. Protocol: Read all data before attempting any question. Write extracted values before computing. No mental arithmetic for multi-step DI calculations — write every intermediate step. Target: 18+/20.','Final DI session purpose: After today, DI practice happens only in full mocks. This session must solidify your DI method so it is fully automatic in the exam. Method: Extract → Write → Calculate → Verify.',40),
        s('d126-qr2','DEST — 15 Minutes (Sub-3% Automatic Standard) (15 min)','15-minute DEST session. This must now be sub-3% without conscious effort — automatic accuracy at comfortable speed. If still requiring conscious effort to maintain sub-3%: your speed is still too high. Drop by 5 WPM until accuracy is automatic, then gradually rebuild.','Week 19 DEST standard: You should be able to type a DEST passage with your focus primarily on the content, not on your finger accuracy. When accuracy becomes automatic, that is when you are truly ready.',15),
      ]),
    ],
  },
  {
    id:'2026-09-09', dayNumber:127, date:'2026-09-09', phase:6, tier:2, weekNumber:19,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 127 — Complete English Memory Review + Economy+Polity Key Numbers + Formula Sheet Final Memory Write',
    promptBlock:`OPERATIVE BRIEFING — DAY 127

10 days to exam. Today is the most important writing exercise of the entire preparation.

ENGLISH MEMORY REVIEW — FROM SCRATCH:
Close all notes. On blank paper: write every grammar rule you know, write the top 30 idioms and their meanings, write the top 20 OWS. This is not a test — it is the most effective form of active recall. What emerges from memory under this condition is exactly what will emerge under exam conditions. What does not emerge: these are the gaps you must close in the next 10 days.

ECONOMY + POLITY KEY NUMBERS BY HEART:
Numbers are the hardest facts to retain and the most frequently tested. Today: economy numbers (rates, percentages, budget figures) and polity numbers (article numbers, amendment numbers, years). These must be instantly retrievable, not approximately right.

FORMULA SHEET FINAL — WRITE FROM MEMORY:
On blank paper, without reference: write every Quant formula you know. Every algebraic identity, every geometry theorem result, every trigonometric identity, every mensuration formula. What comes out is what you own. What doesn't come out: add it to your daily formula review for the next 10 days.`,
    tasks: [
      WD_ENG('d127','2026-09-09',[
        s('d127-e1','Complete English Review — Write All Grammar Rules From Memory (25 min)','Blank paper exercise. Write — do not read — the following from memory: (1) All SVA rules (10 rules minimum), (2) All tense sequence rules, (3) Active/Passive conversion rules for all 12 tenses, (4) Direct/Indirect Speech rules (tense shifts, pronoun changes, reporting verb changes), (5) Conditional sentence types (Types 0, 1, 2, 3), (6) Articles rules (definite, indefinite, zero article), (7) Preposition rules (at/in/on for time and place), (8) Degrees of comparison rules.','Memory write protocol: Write without stopping. If you cannot remember a rule exactly, write what you think it is. After completing: compare with your grammar sheet. Gaps here are exactly the gaps that will cause exam errors.',25),
        s('d127-e2','Top 30 Idioms + Top 20 OWS From Memory (20 min)','On blank paper: write the top 30 idioms and their meanings without any reference. Then write the top 20 OWS and their definitions. Score yourself when done. Any idiom or OWS you could not recall: these are your highest-priority vocabulary review targets for this week.','Top 30 idioms to include: at the drop of a hat, bite the bullet, burn bridges, spill the beans, under the weather, cut corners, hit the nail on the head, let the cat out of the bag, once in a blue moon, cost an arm and a leg, the ball is in your court, beat around the bush, blow hot and cold, bring to light, by hook or by crook, call a spade a spade, come to grips with, die in harness, draw a blank, feather in your cap, fly in the ointment, get the hang of, hit the sack, in the limelight, kick the bucket, make both ends meet, on the fence, pull strings, see eye to eye, turn a blind eye.',20),
      ]),
      WD_GA('d127','2026-09-09',[
        s('d127-ga1','Economy Key Numbers By Heart (25 min)','Write from memory on blank paper: Current repo rate, reverse repo rate, CRR, SLR, MSF rate, bank rate (all RBI figures). Current GDP growth rate (India, current FY). Current inflation rate (CPI). India\'s rank in GDP (PPP and nominal). Latest Union Budget: fiscal deficit as % of GDP, CAPEX allocation, largest scheme allocation. GST rates: 5%, 12%, 18%, 28% — which categories fall where. Foreign Exchange Reserves (approximate, current month). Compare with your notes after.','Economy numbers are the highest-tested fact category in GA. A wrong number (getting repo rate wrong by 0.25%) costs the same 1 mark as a completely unknown question. Get them exactly right.',25),
        s('d127-ga2','Polity Key Numbers By Heart (20 min)','Write from memory: Total articles in constitution (395 original, 448 currently with amendments). Total schedules (12). Total parts (22). Total amendments (105+). Key article numbers: 1 (Name and territory), 14 (Equality before law), 19 (Freedom of speech etc.), 21 (Life and liberty), 32 (Right to constitutional remedies), 44 (Uniform Civil Code), 51A (Fundamental Duties), 72 (President\'s pardon powers), 76 (Attorney General), 80 (Rajya Sabha composition), 243 (Panchayati Raj), 356 (President\'s Rule), 370 (J&K — now abrogated). All amendment numbers and their content from the standard list.','Article numbers must be precise. "Article 21 deals with equality" is wrong (that is Article 14). One-off errors in article numbers are extremely common and cost marks.',20),
      ]),
      WD_QR('d127','2026-09-09',[
        s('d127-qr1','Formula Sheet Final — Write ALL Quant Formulas From Memory (40 min)','Blank paper exercise — write every Quant formula you know without reference. Organize by topic: Percentage (% change formula, successive % change formula), Profit/Loss (SP, CP, profit%, loss%, MP, discount%, dishonest dealer, false weight), SI (P×R×T/100), CI (P×(1+R/100)^T), Ratio (componendo-dividendo), Time-Work (LCM method), STD (average speed = 2xy/(x+y), relative speed), Algebra (all identities), Geometry (all triangle theorems, circle theorems, quadrilateral properties), Mensuration (all 2D and 3D area/perimeter/volume formulas), Trigonometry (all values, all identities, height-distance formulas).','After completing: compare with your formula sheet. Anything missing from your memory-write: these formulas need daily practice in the remaining 10 days. Write them on a separate sticky note.',40),
        s('d127-qr2','Formula Gap Fill (15 min)','Identify formulas that did not emerge in the memory write. For each missing formula: (1) Read it from your notes. (2) Close the notes. (3) Derive or write it from memory. (4) Verify. Repeat for all missing formulas. This gap-fill session is your highest-ROI 15 minutes of the week.','Formula memory gap closure: Missing a formula in the exam because you could not recall it is one of the most avoidable losses. Every formula you add to stable memory in the next 10 days is a guaranteed mark.',15),
      ]),
    ],
  },
  {
    id:'2026-09-10', dayNumber:128, date:'2026-09-10', phase:6, tier:2, weekNumber:19,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 128 — Timed English + Timed GA + Timed Quant+Reasoning (All Above Target) + DEST + CKT Finals',
    promptBlock:`OPERATIVE BRIEFING — DAY 128

9 days to exam. Three timed sections today — all above target thresholds.

THE THRESHOLDS:
English: 45 Qs in 50 minutes, target 42+ correct (93% accuracy).
GA: 25 Qs in 12 minutes, target 22+ correct (88% accuracy).
Quant+Reasoning: 60 Qs in 70 minutes, target 52+ correct (87% accuracy).

These thresholds, if achieved simultaneously, put you at approximately 335-340 range in a full mock. Today tests whether you can hit all three thresholds in a single study session — the same cognitive context as the actual exam.

SECTION TIME TIGHTENING:
English: 50 min (10 min below actual). GA: 12 min (3 min below actual). Quant: 70 min (5 min below actual). This deliberate tightening is the final pressure-acclimatization before the exam. If you hit targets under tighter time, the actual exam will feel like relief.

DEST + CKT FINALS:
Both final dedicated sessions today. After today, DEST and CKT practice happen only integrated into full mock analysis days.`,
    tasks: [
      WD_ENG('d128','2026-09-10',[
        s('d128-e1','Timed English Section — 45 Qs in 50 Minutes (Target 42+) (50 min)','Full English section simulation, 50-minute strict timer. All 45 questions. Section order: Error Detection (10 min) → Sentence Improvement + FIB + OWS + Idioms (15 min) → Para Jumbles + Cloze (10 min) → RC 2 passages (15 min). After completing: raw score. If 42+: you are above the English threshold. If below 40: identify which sub-type dropped the score and address it in tomorrow\'s integration sprint.','50-minute pressure: If you cannot finish all 45 questions in 50 minutes, you have a time management issue in English. Track which sub-type takes the most time and practice it under time pressure specifically.',50),
      ]),
      WD_GA('d128','2026-09-10',[
        s('d128-ga1','Timed GA Section — 25 Qs in 12 Minutes (Target 22+) (15 min)','25 GA questions, 12-minute strict timer. No hesitation policy: if the answer is not recalled within 15 seconds, mark your best choice and move immediately. After 12 minutes: score. Target 22+. If below 20: identify which GA topics caused the most hesitation.','12-minute GA: This is a deliberate pressure drill. The actual exam gives 15 minutes for GA. Training at 12 minutes makes 15 minutes feel spacious.',15),
        s('d128-ga2','GA Section Analysis + Remaining Time Review (30 min)','Review all GA errors from the 12-minute test. Note each wrong answer: was it a knowledge gap (never learned) or a hesitation failure (knew but could not recall quickly)? For all hesitation failures: add a stronger recall anchor tonight. Spend remaining time on a rapid-fire static GK review of the weakest topic from today.','Hesitation failures are different from knowledge gaps. Hesitation means the knowledge exists but retrieval is slow. The fix is more rapid-fire practice, not more studying.',30),
      ]),
      WD_QR('d128','2026-09-10',[
        s('d128-qr1','Timed Quant+Reasoning — 60 Qs in 70 Minutes (Target 52+) (45 min)','60 questions in 70 minutes. Execution protocol: Arithmetic + short algebra (15 Qs, 15 min) → Reasoning non-verbal + short verbal (20 Qs, 18 min) → DI (10 Qs, 17 min) → Advanced Maths: geometry, trigonometry, mensuration (15 Qs, 20 min). After 60 minutes: score. Target 52+. Any section that consistently falls short indicates a speed or accuracy problem specific to that type.','70-minute vs 75-minute: Training at 70 minutes gives you a 5-minute buffer in the actual exam. Use that buffer for question review or answer sheet verification.',45),
        s('d128-qr2','DEST + CKT Final Sessions (15 min)','DEST: 8-minute session. Log error rate. This should be your last dedicated DEST session before the exam — subsequent practice happens only within full study days. CKT: 7-minute rapid recall of all topics studied (hardware, software, networking, OS, cybersecurity, number systems, shortcuts, programming basics). Write from memory, verify against notes. Any gap: review tonight.','DEST final target: sub-3% consistently across any 8-minute session. CKT final target: 80%+ on any cold recall test. Both should be at these levels by today.',15),
      ]),
    ],
  },
  {
    id:'2026-09-11', dayNumber:129, date:'2026-09-11', phase:6, tier:2, weekNumber:19,
    weekType:'weekday', totalHours:2.5, hasQuiz:false,
    title:'Day 129 — Full Integration Sprint (Weak Points Only) + DEST + CKT Final Practice',
    promptBlock:`OPERATIVE BRIEFING — DAY 129

8 days to exam. Today's directive is the most important conceptual instruction of the entire preparation:

NOTHING NEW. ONLY ALMOST-GOT-IT QUESTIONS.

Today is not a study session. It is a precision finalization session. You will practice only the questions and topics that you "almost got right" in previous sessions — the questions where you knew the concept but made a calculation error, or chose the second-best option instead of the best, or were one formula step away from the right answer.

WHY ONLY ALMOST-GOT-IT:
Almost-got-it questions represent the highest-conversion opportunity. You are 80-90% of the way there. A small correction converts them from wrong to right. Studying a topic you completely do not know at 8 days before the exam is high-risk: you might partially learn it, become confused, and disrupt existing knowledge. Almost-got-it questions are low-risk, high-reward.

NO NEW TOPICS. NO NEW PLATFORMS. NO NEW BOOKS.
Only your existing notes, your error log, and your weak question list.

DEST + CKT: Final practice sessions before exam week.`,
    tasks: [
      WD_ENG('d129','2026-09-11',[
        s('d129-e1','English Almost-Got-It Precision Drill (35 min)','From your error log of the past 3 weeks: identify all English questions where you chose the second-best option (almost right). Solve only those. Then identify the specific decision point where you chose wrong — was it a rule ambiguity, a vocabulary confusion, a para jumbles transition error? Write the specific correction for each in one sentence.','Almost-got-it English types: (1) Grammar questions where two options both "sound right" — rule application would have resolved it. (2) Vocabulary questions where you knew the word but confused synonym with antonym. (3) RC inference questions where you chose a "partially true" option instead of the "fully true" option. (4) Para Jumbles where you identified the right opener but made a wrong pair.',35),
        s('d129-e2','English Weak Points Rapid Retest (10 min)','Take 5 questions from the almost-got-it list that you have now corrected. Re-attempt them cold — without looking at your correction. Did the correction hold? If yes: the learning is locked. If no: revisit the specific rule once more.','Retest protocol confirms whether the correction was absorbed or just understood momentarily. There is a difference between "I understand this now" and "I will get this right in the exam."',10),
      ]),
      WD_GA('d129','2026-09-11',[
        s('d129-ga1','GA Almost-Got-It Precision Drill (25 min)','From your GA error log: identify all GA questions where you hesitated and chose wrong (almost-got-it). These are questions where you knew something about the topic but got the specific fact wrong. For each: write the correct fact and the contrast with what you had memorized. Then test recall 10 minutes later without looking at the correction.','GA almost-got-it examples: "India\'s rank in HDI is 132, not 130." "The Lokpal was established in 2014, not 2013." "The 101st Amendment introduced GST, not the 100th." These one-fact-off errors are the most painful — you studied but still got it wrong. Correct the specific fact, not the whole topic.',25),
        s('d129-ga2','Static GK Final Weak Points (20 min)','Any static GK topics identified as weak in the Week 18 rapid-fire tests: 20 minutes of focused review on those specific sub-topics only. Nothing else.','Week 19, Day 5: Only almost-got-it and confirmed weak points. Studying comfortable topics at this stage is a form of procrastination.',20),
      ]),
      WD_QR('d129','2026-09-11',[
        s('d129-qr1','Quant Almost-Got-It + Reasoning Weak Points Sprint (40 min)','From your Quant error log: identify all questions where the method was correct but a calculation error or formula step error caused the wrong answer. Reattempt these specific questions. Then identify your weakest Reasoning sub-type from the past week\'s mocks and do 10 questions from that type only. Nothing new. Only the precision correction of existing near-successes.','Quant almost-got-it types: (1) Got the equation right but arithmetic error in final step. (2) Applied the right formula but used wrong value (radius vs diameter confusion). (3) Right concept but forgot a constraint stated in the problem. (4) Correct method but made a sign error. All four are correctable with focused re-practice.',40),
        s('d129-qr2','DEST Final Practice + CKT Final Practice (15 min)','DEST: 10-minute session, sub-3% standard. Verify it is holding. CKT: 5-minute cold recall test — 10 questions, no reference. Score yourself. This is your final pre-exam CKT benchmark before the weekend.','Day 129 marks the last dedicated DEST+CKT session before the weekend mocks. By now, both should be at standard. Any deficit identified here must be addressed in the weekend.',15),
      ]),
    ],
  },
  {
    id:'2026-09-12', dayNumber:130, date:'2026-09-12', phase:6, tier:2, weekNumber:19,
    weekType:'weekend', totalHours:8, hasQuiz:false,
    title:'Day 130 — Triple Mock Day (All 3 Above 335/390) + Log Percentile + DEST Sub-2% Final Target + CKT 27+/30',
    promptBlock:`OPERATIVE BRIEFING — DAY 130 | PENULTIMATE WEEKEND — TRIPLE MOCK PROTOCOL

THE TARGET: All three mocks above 335 out of 390. Not one. Not two. All three.

Why 335? Because in the actual exam, unexpected difficulty, exam day nerves, and question selection pressure will subtract approximately 5-10 marks from your trained peak. If your trained peak is 335, the exam day floor is 325-330. If your trained peak is 340, the exam day floor is 330-335. Train high to perform comfortably.

PERCENTILE TRACKING:
Note your percentile on your mock platform after each mock. Three data points in one day. Are they consistent? Is your percentile matching the score? Is the mock difficulty calibrated appropriately?

BOTTLENECK IDENTIFICATION PROTOCOL:
If you are not hitting 335 in any mock today: stop after that mock and identify the exact bottleneck. Not "Quant was hard" — specifically: which topics in Quant? How many questions? What error type? Bottleneck identification must be surgical, not vague.

DEST SUB-2% FINAL TARGET:
This weekend, push DEST to sub-2% error rate in at least one session. This is the final stretch goal. Sub-2% means near-perfect typing under timed conditions — the DEST examiner will have nothing to mark down.

CKT MUST BE 27+/30:
By end of today, take a 30-question CKT test. Target: 27 or above. This is 90% accuracy. If not achieved: three days remain before exam — use them.`,
    tasks: [
      WE_DS('d130',[
        s('d130-ds1','Full Paper 1 Mock 1 — 2 Hours 15 Minutes (Target 335+) (135 min)','First mock of the final weekend. Full simulation, strict conditions. Section allocation: Maths (40 min) → Reasoning (40 min) → English (50 min) → GA (15 min). After completing: note percentile on platform. Is it in your target range? Does the score match expectations?','Mock 1 of the final weekend should be your highest-focus mock. You are fresh, the day is young, conditions are optimal. 335+ here is the baseline.',135),
        s('d130-ds2','Inter-Mock Analysis + Bottleneck Check (15 min)','15-minute analysis. If above 335: note the 3 questions you most regret — questions you should have gotten right. If below 335: identify the exact bottleneck. Which section? Which question type within that section? How many questions? Write it precisely.','Bottleneck formula: (Marks lost in section) ÷ (Section max marks) = Section loss rate. Highest loss rate = highest bottleneck. Address this in the next 15 minutes by mental recalibration, not by studying.',15),
        s('d130-ds3','Full Paper 1 Mock 2 — 2 Hours 15 Minutes (Target 335+) (135 min)','Second mock. Apply the bottleneck correction from Mock 1 analysis. If Mock 1 bottleneck was "skipped too many Quant questions" — in Mock 2, stay 5 minutes longer on Quant section. If bottleneck was "GA errors" — in Mock 2, approach GA with more deliberate 15-second-per-question pace.','Mock 2 adjustment is the highest-leverage action available between mocks. One tactical adjustment applied correctly can add 5-10 marks.',135),
        s('d130-ds4','Inter-Mock Analysis 2 + Percentile Log (15 min)','Log Mock 2 score and percentile. Compare with Mock 1. Is it above 335? Is the bottleneck from Mock 1 resolved or recurring? If recurring: this is your most critical exam day challenge. Prepare a mental protocol for it.','Recurring bottleneck principle: If the same section drops across multiple mocks, the solution is not more practice — it is a tactical adjustment in how you approach that section during the exam.',15),
        s('d130-ds5','Full Paper 1 Mock 3 — 2 Hours 15 Minutes (Target 335+) (135 min)','Third mock. This is the endurance test of the penultimate weekend. By now, you have done 8+ full mocks in 2 weeks. The fatigue you feel right now is the highest cognitive load you will face. The actual exam will feel easier. Score above 335 here and you are ready.','Mock 3 mantra: Trust the preparation, not the feeling. The exam does not care about fatigue. Your preparation is real. Execute it.',135),
      ]),
      WE_MT('d130',[
        s('d130-mt1','Three Mock Score and Percentile Summary (10 min)','Write all three scores, percentile, and section-wise breakdown for all three mocks. Calculate: average score, highest score, lowest score, range. Write a one-line assessment: "All 3 above 335" or "2 above 335, 1 below — bottleneck: [specific]."','Honest assessment at this stage determines the final 6 days\' strategy. Comfort with a wrong diagnosis wastes the last preparation days.',10),
      ]),
      WE_REV('d130',[
        s('d130-rev1','DEST Sub-2% Error Final Target (20 min)','Two DEST sessions: 10 minutes each. In the first session: type at your comfortable speed (sub-3% should be automatic). In the second session: attempt to push speed slightly while maintaining accuracy — aim for sub-2%. Measure both sessions separately. If sub-2% is achieved in session 2: this is your peak DEST performance. If not: sub-3% remains the exam target.','Sub-2% context: At 40 WPM over 15 minutes = 600 words. Sub-2% means fewer than 12 errors in 600 words. This is near-professional typing accuracy. Achievable if your comfortable speed is already producing sub-3%.',20),
        s('d130-rev2','CKT Final Test — 30 Questions (Target 27+) (25 min)','30-question CKT test from memory covering all topics: hardware components, software types, OS functions, DBMS concepts, networking protocols and topologies, number system conversions, cybersecurity malware types, keyboard shortcuts, programming language types, file systems. Target: 27+/30. Log score. If below 27: identify the specific topics causing failures and review them tonight.','CKT 27+/30 significance: 90% accuracy in CKT means this section contributes positively to your total score. Below 70% in CKT means it is a score drag that could be eliminated with 30 minutes of focused daily review.',25),
      ]),
    ],
  },
  {
    id:'2026-09-13', dayNumber:131, date:'2026-09-13', phase:6, tier:2, weekNumber:19,
    weekType:'weekend', totalHours:8, hasQuiz:false,
    title:'Day 131 — Final Weak Area Surgery + Formula Sheet Read + Post Preference Strategy Finalized + Confidence Mock (340+ Target) + Logistics Prepared',
    promptBlock:`OPERATIVE BRIEFING — DAY 131 | WEEK 19 FINAL DAY — THE WARRIOR'S FINAL PREPARATION

6 days to exam. Today is the last full preparation day before exam week.

This day has five missions, each distinct in purpose.

MISSION 1 — FINAL WEAK AREA SURGERY (2 hours):
Not revision — surgery. Identify the 3 remaining weak areas from all mocks this week. For each: spend 40 minutes in surgical correction. Do not approach broadly. Go directly to the specific question type, the specific formula, the specific rule that is causing errors. Fix it precisely.

MISSION 2 — FORMULA SHEET SLOW READ (1 hour):
Sit with your complete formula sheet. Read every formula slowly and deliberately. As you read each formula: visualize the question type it solves. Connect formula to application. This is the final encoding of your formula sheet into procedural memory.

MISSION 3 — POST PREFERENCE STRATEGY FINALIZED IN WRITING (1 hour):
Write your final post preference decision on paper. Not mental — written. With reasoning: "I am preferring ASO MEA as Post 1 because [salary, international posting opportunity, promotion pathway]. I am preferring IT Inspector as Post 2 because [field work, enforcement nature, promotion timeline]." Writing it makes it concrete and reduces decision anxiety during form filling.

MISSION 4 — CONFIDENCE-BUILDING EASY MOCK (1 hour):
One mock on an easier platform or an easier mock set. The purpose is pure confidence — you should score well above your usual range. This is not a diagnostic mock — it is a confidence anchoring session.

MISSION 5 — LOGISTICS PREPARED:
Documents list finalized, exam center location verified, travel time tested (or planned), morning routine for exam day decided.`,
    tasks: [
      WE_DS('d131',[
        s('d131-ds1','Final Weak Area Surgery — 3 Areas, 40 Minutes Each (120 min)','Identify the 3 remaining weak areas from Week 19 mock performance. For each: 40-minute surgical session. Protocol: (1) Open your error log for that topic. (2) Identify the specific failure mode (calculation error, formula gap, method confusion). (3) Solve 10 targeted questions with full focus. (4) After each question: verify the failure mode is corrected. (5) At the end of 40 minutes: solve 3 hard questions from this topic cold — if you get 2+/3 right, the surgery was successful.','Surgical correction vs broad revision: Broad revision of a topic you are 70% correct on increases your score by 1-2 marks. Surgical correction of the specific 30% failure mode increases your score by the same 1-2 marks in far less time. Precision is efficiency.',120),
        s('d131-ds2','Formula Sheet Slow Read — 1 Hour (60 min)','Sit comfortably. Open your complete formula sheet. Read each formula slowly — do not rush. For each formula: (1) Read it. (2) Visualize the SSC question type it applies to. (3) Mentally run through the solution steps. (4) Move to the next formula. This is the final encoding of your formula sheet from declarative memory (knowing the formula exists) to procedural memory (automatically applying it to question types).','Procedural memory encoding: When you can see a Quant question and immediately know which formula applies without conscious deliberation, the formula is in procedural memory. This slow read, with visualization of application, is the highest-efficiency way to achieve that.',60),
        s('d131-ds3','Post Preference Strategy — Write Final Decision in Detail (60 min)','Write your complete post preference analysis on paper. For each of the 4 posts (ASO MEA, IT Inspector, CBI SI, and one more of your choice): (1) Pay Level and approximate in-hand salary. (2) Posting type: All India / Regional / International. (3) Nature of work. (4) Promotion timeline to the next level. (5) Additional benefits (uniform, travel, medical). Then write your ordered preference from 1 to 4 with 2-sentence reasoning for each. This is your final preference list — you may adjust the order when the form opens, but having this written removes exam-period anxiety.','Post preference decision is a quality-of-life decision for the next 30+ years. The 1 hour invested today will feel well-spent when the form-filling window opens and you have clarity instead of confusion.',60),
        s('d131-ds4','Confidence-Building Easy Mock — 1 Hour (60 min)','Take one mock that you know will go well — either a previous mock you have seen before (different from your standard platforms) or an easier mock set. The purpose is not diagnostic: it is psychological. Score well. Experience the feeling of dominating the paper. This emotional state — confidence and fluency — is what you want to carry into September 19.','Confidence mock science: High-confidence performance 6 days before the actual exam anchors the belief "I am ready." This belief directly reduces exam anxiety, which directly improves actual exam performance.',60),
      ]),
      WE_MT('d131',[
        s('d131-mt1','Final Serious Mock — 2 Hours 15 Minutes (Target 340+) (135 min)','One final serious, full-difficulty mock. Target: 340+. Apply everything. This is the final performance measurement before the exam. Whatever score you achieve today is your Week 19 benchmark. Compare with Week 17 benchmark and Week 18 benchmark — the improvement graph tells you everything about your trajectory.','340 target context: If you hit 340 in a full difficulty mock today, you are in the top tier of Tier 2 candidates. The actual exam has additional pressure variables, but your floor is well above the safe threshold.',135),
      ]),
      WE_REV('d131',[
        s('d131-rev1','Logistics Preparation (20 min)','Complete logistics checklist: (1) Documents: Admit card printed (2 copies), Aadhar card, PAN card, 4 passport photos. (2) Exam center: Full address, Google Maps route, nearest landmark. (3) Travel: Confirm travel time from home — add 30 minutes buffer. Determine: drive, metro, or auto? (4) Morning routine: Wake time, breakfast plan, clothing (layers — exam halls are often cold), stationery (black/blue pen — verify what is allowed). (5) Night before: Electronics charged, bag packed, documents in bag.','Exam day logistics failure is the only thing that can prevent a well-prepared candidate from performing. It is 100% preventable. Do not leave it to the morning of the exam.',20),
        s('d131-rev2','Week 19 Summary + Final 6-Day Plan (25 min)','Write: (1) Week 19 mock scores — all of them. (2) DEST status: sub-2% achieved? Sub-3% consistent? (3) CKT: 27+/30 achieved? (4) Formula sheet: complete from memory? (5) Grammar rule sheet: finalized? (6) Vocabulary cold test: 50+/60? (7) Post preference: written decision completed? (8) Logistics: checklist completed? (9) 6-day plan for exam week: what specifically happens on each of the 6 days from Sep 14 to Sep 19. The plan for exam week should already be determined — review it now and confirm it.','The 6-day exam week plan is your most important strategic document. It eliminates decision fatigue during the most critical period. If it is planned now, you do not need to think during exam week — you only need to execute.',25),
      ]),
    ],
  },
]

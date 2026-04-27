// Week 20 — Sep 14 (Mon) to Sep 20 (Sun) — Phase 6: Tier 2 Final Sprint | Days 132-138
// Weekday: minimal / EXAM WEEK | hasQuiz: false
// EXAM DAY: Sep 19 (Friday)

const WD_ENG = (id, date, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Block (45 min)', subtasks })
const WD_GA  = (id, date, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA & Current Affairs (45 min)', subtasks })
const WD_QR  = (id, date, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Quant + Reasoning Sprint (60 min)', subtasks })
const WE_DS  = (id, subtasks) => ({ id:`${id}-ds`, subject:'Deep Study', icon:'🧠', color:'#8b5cf6', duration:300, title:'Deep Study Block (5 Hours)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`, subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:135, title:'Full Paper 1 Mock (2 hr 15 min)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Revision & Analysis', icon:'🔍', color:'#06b6d4', duration:45, title:'DEST Drill + Mock Analysis (45 min)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-09-14', dayNumber:132, date:'2026-09-14', phase:6, tier:2, weekNumber:20,
    weekType:'weekday', totalHours:1.5, hasQuiz:false,
    title:'Day 132 — LIGHT: Formula Sheet Read + Easy Vocab + Rest',
    promptBlock:`OPERATIVE BRIEFING — DAY 132 | EXAM WEEK BEGINS

5 days to exam. The preparation is done. What remains is not study — it is preservation.

TODAY'S DIRECTIVE: LIGHT.

Your brain needs to process and consolidate everything it has absorbed over the past 19 weeks. This consolidation happens during rest, not during study. The worst thing you can do today is introduce new information — it creates interference with existing, well-established knowledge.

WHAT YOU DO TODAY:
Formula sheet — read it once, slowly. Not to learn, not to memorize. You already know it. Just to see it and feel comfortable.
20 easy vocabulary words — words you already know well. This is not new learning. It is a gentle confirmation that your vocabulary is intact.
No mocks. No pressure drills. No performance measurement.

WHAT YOU DO NOT DO:
No new topics. No hard question sets. No performance anxiety-inducing challenges. No "just one more practice paper."

THE WARRIOR'S REST:
A sword that is sharpened endlessly becomes brittle. The final edge is set — now the sword must rest before the battle. You have done the work. Today you rest.

Mental state target: Calm, prepared, certain. You have 20 weeks of preparation behind you. That is real. That is yours. No exam can take it away.`,
    tasks: [
      WD_QR('d132','2026-09-14',[
        s('d132-qr1','Formula Sheet — Read Once, Slowly (30 min)','Open your complete formula sheet. Read every formula from beginning to end — one time, slowly. Do not drill, do not test yourself, do not cover and recall. Just read. Let each formula sit in your awareness. This is consolidation reading, not study. When done: close the formula sheet and do not open it again today.','Read the formula sheet the same way you would read a familiar story — not to learn it, but to be reminded of something you already know well. That feeling of familiarity is exactly what you want.',30),
        s('d132-qr2','20 Easy Vocabulary Words (15 min)','Select 20 vocabulary words that you know very well — your most confident OWS and idioms. Write them from memory with meanings. This is a confidence exercise, not a test. Seeing your own confident recall reinforces the mental state you need for exam day.','Confidence vocabulary exercise: Choose words you know well. The purpose is not to find gaps — it is to remind yourself of how much you know. On exam day, that knowledge will be there.',15),
      ]),
    ],
  },
  {
    id:'2026-09-15', dayNumber:133, date:'2026-09-15', phase:6, tier:2, weekNumber:20,
    weekType:'weekday', totalHours:1, hasQuiz:false,
    title:'Day 133 — LIGHT: Quant Formulas by Memory + GA Rapid Fire (10 min) + Mental Calm',
    promptBlock:`OPERATIVE BRIEFING — DAY 133 | 4 DAYS TO EXAM

4 days to exam. Even lighter than yesterday.

You will do two things today. Nothing more.

THING 1: 15 minutes. From memory, on blank paper, write the most important Quant formulas — not all of them, not in comprehensive order — just the ones that come to mind most naturally. This is not a gap-finding exercise. It is a confidence anchor. The formulas that surface easily are the formulas you own completely. Write them, put the paper down.

THING 2: 10 minutes. GA rapid fire — 10 questions from any topic. 30 seconds each. Answer aloud. This keeps the GA retrieval pathways warm without creating any new anxiety or pressure.

Nothing else academic.

WHAT MATTERS TODAY:
Sleep. Normal meals. A walk if possible. Conversation with family. Let your nervous system settle. The hyperactivation that comes from heavy study in exam week is actually harmful — it spikes cortisol, disrupts sleep, and impairs the very memory retrieval you need on exam day.

The exam is 4 days away. You are ready. Today is for being ready, not becoming ready.`,
    tasks: [
      WD_QR('d133','2026-09-15',[
        s('d133-qr1','15 min: Quant Formulas — Write What Comes to Mind','Blank paper. 15 minutes. Write the Quant formulas that come to mind most naturally — start with Percentage, then Profit/Loss, then SI/CI, then whatever surfaces next. Do not force comprehensive coverage. This is a confidence exercise. What comes easily is what you truly know. Stop after 15 minutes regardless.','Confidence formula write: The formulas that surface in 15 minutes without effort are the ones stored in procedural memory. These will surface automatically in the exam as well. Trust them.',15),
        s('d133-qr2','10 min: GA Rapid Fire — 10 Questions Aloud','Ask yourself 10 GA questions aloud — any topic, any order. Answer each one aloud within 30 seconds. This keeps the recall pathways active without any study pressure. If you cannot recall a fact: move on. Do not dwell. This is a warm-up, not a test.','GA warm-up purpose: Like an athlete warming up muscles before a match, this keeps your knowledge retrieval system active and responsive without fatiguing it.',10),
      ]),
    ],
  },
  {
    id:'2026-09-16', dayNumber:134, date:'2026-09-16', phase:6, tier:2, weekNumber:20,
    weekType:'weekday', totalHours:1, hasQuiz:false,
    title:'Day 134 — LIGHT: Grammar Rules Rapid Read + OWS+Idioms Recall + CKT Shortcuts List + Rest',
    promptBlock:`OPERATIVE BRIEFING — DAY 134 | 3 DAYS TO EXAM

3 days. The preparation phase is complete. What you have built over 19 weeks is real and it is yours.

Today's light academic activity has a very specific purpose: keeping your recall pathways warm. Not study. Not drilling. Just a brief activation of the knowledge systems you will use on exam day.

GRAMMAR RULES: Read your grammar rule sheet once — not aloud, not with flashcards, not with practice questions. Just read it the way you would read a checklist you already know by heart. Let each rule be familiar, not new.

OWS + IDIOMS: Recall 10 OWS and 10 idioms from memory — aloud. Say the word, say the meaning. Do not write. 10 minutes maximum.

CKT SHORTCUTS: Read your CKT shortcuts list once. Keyboard shortcuts, function keys, common software commands. One read-through only.

Then stop. Rest. Eat well. Sleep early.

MENTAL DIRECTIVE: Calm confidence. You have done the work. The exam is a performance, not a preparation session. And you are ready to perform.`,
    tasks: [
      WD_ENG('d134','2026-09-16',[
        s('d134-e1','Grammar Rules Rapid Read (20 min)','Read your complete grammar rule sheet once, cover to cover, without pausing to drill or test. Just read. 20 minutes maximum. When done: close it. Do not re-read.','Grammar rule sheet on Day 134 is a comfort read — not a study session. The rules are in your memory. This read just confirms their presence.',20),
        s('d134-e2','Top 10 OWS + Top 10 Idioms Recall (Aloud, No Writing) (10 min)','Recall aloud — not on paper — 10 OWS and 10 idioms from your master list. State the word, state the meaning, move to the next. No judgment if one does not surface immediately — move on and return. 10 minutes total.','Aloud recall is different from written recall — it activates the verbal memory system. Since the exam is a written test, this mode is less pressurizing than writing, making it ideal for the pre-exam days.',10),
      ]),
      WD_QR('d134','2026-09-16',[
        s('d134-qr1','CKT Key Shortcuts List — One Read-Through (15 min)','Read your CKT key shortcuts and facts list one time: keyboard shortcuts, function keys (F1-F12 functions), common MS Office commands, networking protocols, memory units, OS types. One read-through only — 15 minutes maximum. Do not test yourself. Just read.','CKT one-read-through: By this point, your CKT knowledge is either in memory or it is not. This read is a gentle reminder of what you know — not a last-minute cramming session.',15),
      ]),
    ],
  },
  {
    id:'2026-09-17', dayNumber:135, date:'2026-09-17', phase:6, tier:2, weekNumber:20,
    weekType:'weekday', totalHours:0.5, hasQuiz:false,
    title:'Day 135 — VERY LIGHT: Personal Formula Sheet Only (30 min) — Day Before Exam',
    promptBlock:`OPERATIVE BRIEFING — DAY 135 | THE DAY BEFORE

Tomorrow is the day. This is your last night.

ONE ACADEMIC TASK ONLY:
Read your personal formula sheet. 30 minutes. That is it. Not your textbooks, not your error log, not your mock analysis. Just the formula sheet you have built over 20 weeks — the one that has your handwriting, your highlights, your shortcut notes. Read it once. Then put it away.

EVERYTHING ELSE TODAY IS NON-ACADEMIC:

Pack your bag now, not tomorrow morning:
- Admit card (2 printed copies)
- Aadhar / Government Photo ID
- 2-4 passport size photographs
- Pen (black/blue — confirm what is allowed)
- A watch with no internet connection
- Water bottle, light snack
- Any permitted stationery

Check documents against the official admit card instructions. Everything in the bag tonight.

SLEEP IS THE MOST IMPORTANT THING:
Aim for 8+ hours. Sleep is when memory consolidation happens — the formulas you read today will solidify overnight. An under-slept brain is measurably less accurate and slower. This is documented in research. Sleeping well is as important as studying well.

Eat a good dinner. Avoid heavy or unfamiliar food tonight.

Know your exam center: Confirm the exact address, floor, room number if available. Know how long it takes to get there. Leave 30 minutes earlier than you think you need to.

You have done 20 weeks of preparation. You know what you know. Tomorrow you show it.

REST IS NOT IDLENESS. REST IS THE FINAL PREPARATION.`,
    tasks: [
      WD_QR('d135','2026-09-17',[
        s('d135-qr1','Personal Formula Sheet — Read Once (30 min)','Open only your personal formula sheet — the one you have built and annotated across 20 weeks. Read it from beginning to end, once, slowly. Do not test yourself. Do not drill. Just read it and feel the familiarity of everything you have built. When done: put it away. Do not look at any other study material today.','This 30-minute read is your final academic act before the exam. After this: only logistics, rest, and confidence. The preparation is complete.',30),
        s('d135-qr2','Logistics Checklist — Final Verification (no academic content) (20 min)', 'Check every item in your exam bag: Admit card (printed × 2), Government Photo ID, photographs (2-4), pen(s), watch, water bottle, snack. Verify the exam center address and travel route. Set your alarm for the required wake time plus 30-minute buffer. Eat a good dinner. Sleep at a regular time or slightly earlier.','Logistics night checklist is as important as any study session this week. Missing a document at the center can disqualify you despite perfect preparation. Prevent it tonight.',20, false),
      ]),
    ],
  },
  {
    id:'2026-09-18', dayNumber:136, date:'2026-09-18', phase:6, tier:2, weekNumber:20,
    weekType:'weekday', totalHours:0, hasQuiz:false,
    title:'Day 136 — TIER 2 EXAM DAY',
    promptBlock:`OPERATIVE BRIEFING — DAY 136 | TIER 2 EXAM DAY

This is it. Everything you have built over 20 weeks gets deployed today.

SECTION TIME ALLOCATION — COMMIT THIS TO MEMORY:
Mathematics: 40 minutes (target 28+ questions attempted, ~25+ correct)
Reasoning: 40 minutes (target 28+ questions attempted, ~26+ correct)
English: 50 minutes (target 43+ questions attempted, ~40+ correct)
General Awareness: 15 minutes (target all 25 attempted, ~21+ correct)
Total: 145 minutes out of 135 — which means you must enforce every section cut-off strictly.

THE TWO-PASS PROTOCOL:
FIRST PASS: Solve only questions you are 100% sure about. Mark uncertain ones, skip unclear ones. Move at speed.
SECOND PASS: Return to 80% sure questions. Apply elimination. Choose best answer.
THIRD PASS (if time): Address the remaining skipped questions. Apply best-guess from elimination. No blank answers if time permits.

THE NEGATIVE MARKING MATHEMATICS:
Every wrong answer costs you 0.5 marks in penalty + the 1 mark you missed = net 1.5-mark swing. A question skipped costs only 1 mark (the mark not gained). Therefore: skip > guess with <40% confidence. Attempt > skip with >60% confidence.

CARELESS ERROR PREVENTION:
Read every question twice before answering. Verify your calculation for any Quant question where the answer feels "too clean" or "too messy." Check whether you answered what was asked — not what you calculated.

DO NOT:
Do not start any section thinking "this section is hard today." Difficulty is relative to preparation — you have prepared more than most.
Do not abandon skip discipline because of time pressure in the final 10 minutes.
Do not change an answer unless you have a specific, articulable reason.

DISCIPLINE IS THE WEAPON. PREPARATION IS THE ARMOUR. TRUST IS THE MINDSET.

You are ready. Go get it.`,
    tasks: [],
  },
  {
    id:'2026-09-19', dayNumber:137, date:'2026-09-19', phase:6, tier:2, weekNumber:20,
    weekType:'weekend', totalHours:0, hasQuiz:false,
    title:'Day 137 — POST-EXAM: Answer Key Analysis + Post Preference Research + Rest',
    promptBlock:`OPERATIVE BRIEFING — DAY 137 | POST-EXAM DAY

The exam is done. You did it.

Whatever happened in that hall today — you gave it what you had. That is all any preparation can do. The next chapter begins now.

TODAY'S ACTIVITIES:

ANSWER KEY ANALYSIS (optional, if you feel up to it):
Many coaching platforms release answer keys within hours of the exam. Attempt a rough tally — not a precise score, just an estimate. This gives you an early indication of where you stand. Do not obsess over it. The official result will be definitive.

HOW TO ANALYZE HONESTLY:
Count only the questions you are certain about in your recall. Do not double-count. Do not convince yourself that your answer was right on unclear questions. Estimate conservatively — then add 5 marks for questions you do not remember clearly. This gives a realistic range.

POST PREFERENCE RESEARCH — BEGIN SERIOUSLY:
Now that the exam stress is behind you, this is the optimal time to do thorough post preference research. Revisit the comparison table you wrote on Day 131. Look for new information: salary in-hand calculations from SSC forums, actual job profiles from current officers (YouTube, Quora), promotion time frames in practice (not just policy). Build your final preference list.

REST AND RECOVER:
You have run a 20-week sprint. Your brain deserves recovery. Sleep as much as you want. Eat what you enjoy. Spend time with family. The recovery is real — not self-indulgence. You have earned every hour of rest.

MINDSET:
Whatever the score: you are a different person than you were 20 weeks ago. You have built discipline, knowledge, and resilience that will serve you regardless of this result. The preparation was not wasted — it was invested.`,
    tasks: [
      s('d137-postexam1', 'Rough Answer Key Tally (Optional)', 'If you feel ready and stable, attempt a rough answer key analysis using the keys released by platforms like Testbook, Oliveboard, or Career Power. Count only questions you remember clearly. Do not stress over borderline questions — estimate conservatively.', 'Conservative estimation: If your tally shows 320-330 range, your actual score is likely within 10 marks of that range. Official answer keys are usually within 2-3% of rough tallies for prepared candidates.', 45, false),
      s('d137-postexam2', 'Post Preference Serious Research', 'Deep-dive into all 4 posts: ASO MEA, IT Inspector, CBI SI, and any other top post on your list. Seek out real officer experiences on forums, YouTube channels run by SSC officers (search "ASO MEA work life" or "IT Inspector day in life"). Add what you find to your comparison table.', 'Real experience research: Policy documents say one thing. Actual officers experience something that may differ. Both are important — policy sets the floor, real experience sets your expectations.', 60, false),
    ],
  },
  {
    id:'2026-09-20', dayNumber:138, date:'2026-09-20', phase:6, tier:2, weekNumber:20,
    weekType:'weekend', totalHours:0, hasQuiz:false,
    title:'Day 138 — POST-EXAM FINAL: Post Preference Form Guidance + Decision Framework + Wait with Confidence',
    promptBlock:`OPERATIVE BRIEFING — DAY 138 | THE FINAL ENTRY

This is the last entry in your 20-week preparation log.

What you have accomplished over these 138 days is not measurable only in marks. You have built a habit of disciplined daily effort. You have learned how to learn under pressure. You have developed the ability to sit with difficult material and push through uncertainty. These skills do not expire when the exam ends.

TODAY'S AGENDA:

POST PREFERENCE FORM GUIDANCE:
When the SSC CGL 2026 post preference declaration form opens, you will need to make a final, binding decision on your post order. Use today to finalize the complete strategic decision:

ASO MEA: Grade Pay 4200 (Level 6), posting in MEA Delhi primarily, potential for international postings at embassies/consulates, non-field work (desk-based), promotion to Section Officer possible within 8-12 years. International lifestyle is the unique differentiator.

IT Inspector: Grade Pay 4600 (Level 7 — higher than ASO), posting in Income Tax Department, field + desk work (surveys, raids, assessments), All India Service Transfer, uniform allowance, faster promotion pathway in enforcement-focused departments.

CBI Sub-Inspector: Grade Pay 4200 (Level 6), Central Bureau of Investigation, criminal investigation field work, risk profile higher than IT Inspector, prestige of the CBI brand, All India posting, promotion based on performance and vacancies.

ASO CSS: Grade Pay 4200 (Level 6), Central Secretariat, desk work in various ministries, non-AIST (Delhi-based), stable work environment, good promotion trajectory within CSS.

THE DECISION FRAMEWORK:
Write down: What do you want from your career — stability, prestige, field excitement, international exposure, fastest promotion, highest early pay? Rank these 5 criteria by personal priority. Then map each post to these criteria. The post that scores highest on your highest-priority criteria is your Post 1.

WAITING WITH CONFIDENCE:
The SSC result takes time. Weeks to months. During this period: do not catastrophize. Do not obsessively refresh the SSC website. Use the time to read, rest, explore interests you set aside during preparation. If the result is positive: the post preference form opens and the next chapter begins. If the result requires another attempt: you now have a foundation that makes the next attempt dramatically more efficient.

You entered this preparation as a candidate. You exit it as a prepared professional.

Whatever the result — you are ready.`,
    tasks: [
      s('d138-final1', 'Post Preference Decision Framework — Write Final List', 'Write your final post preference order with full reasoning for each position. Format: Post 1: [Post Name] — Reason: [2-3 specific reasons]. Post 2: [Post Name] — Reason. Continue for all posts you are eligible for. This is the document you will refer to when the preference form opens.', 'Binding decision mindset: Once you write this with full reasoning, you are less likely to panic-change your preferences when the form opens. The written reasoning anchors you to a considered decision rather than an impulsive one.', 60, false),
      s('d138-final2', 'The 20-Week Reflection', 'Write a single page: What did you learn about yourself during these 20 weeks of preparation? What study habits worked? What did not? What would you do differently? What are you most proud of? This reflection has value regardless of the result — it is the manual for your next challenge, whatever that challenge turns out to be.', 'Reflection is not sentimentality — it is data collection for your future self. The person who prepared for SSC CGL Tier 2 for 20 weeks has valuable data about their own learning patterns. Document it.', 30, false),
    ],
  },
]

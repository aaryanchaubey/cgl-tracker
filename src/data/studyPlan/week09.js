// Week 9 — Jun 20 (Sat) to Jun 24 (Wed) — Phase 3: EXAM WEEK | Days 57-61
// FINAL DAYS BEFORE TIER 1. Zero new learning. Only consolidation and calm.
// Note: Jun 25 (Tier 1 exam day) is not a tracked study day.
const WD_ENG = (id, subtasks) => ({ id:`${id}-eng`, subject:'English', icon:'📖', color:'#6366f1', duration:45, title:'English Final Revision (45 min)', subtasks })
const WD_GA  = (id, subtasks) => ({ id:`${id}-ga`,  subject:'General Awareness', icon:'🌏', color:'#10b981', duration:45, title:'GA Final Recall (45 min)', subtasks })
const WD_QR  = (id, subtasks) => ({ id:`${id}-qr`,  subject:'Quant + Reasoning', icon:'🔢', color:'#f59e0b', duration:60, title:'Final Speed Drill (60 min)', subtasks })
const WE_MT  = (id, subtasks) => ({ id:`${id}-mt`,  subject:'Mock Test', icon:'⏱️', color:'#ef4444', duration:120, title:'Full Mock Test (2 Hours)', subtasks })
const WE_REV = (id, subtasks) => ({ id:`${id}-rev`, subject:'Final Review', icon:'🔍', color:'#06b6d4', duration:60, title:'Final Error Review (60 min)', subtasks })
const s = (id, title, desc, tip, mins, mandatory=true) => ({ id, title, description:desc, tip, estimatedMins:mins, mandatory })

export const DAYS = [
  {
    id:'2026-06-20',dayNumber:57,date:'2026-06-20',phase:3,tier:1,weekNumber:9,
    weekType:'weekend',totalHours:6,hasQuiz:false,
    title:'Day 57 — Penultimate Weekend Mock Marathon',
    promptBlock:`OPERATIVE BRIEFING — DAY 57 (EXAM IN 5 DAYS)

This is your last mock weekend before the real exam. Your goal is not to peak — it is to stabilize. Two full mocks today with complete analysis. By the end of today, you should know your average score with ±5 marks variance.

DO NOT attempt any new strategy today. Stick with the exact approach that has given you the best results over the past 8 weeks. Exam day is not the time to experiment.

PSYCHOLOGICAL PREP: After your mocks, spend 10 minutes visualizing the exam day. You walk in calm. You read the instructions. You begin with Reasoning. You maintain your pace. You exit knowing you did your best. Rehearse this mental sequence.`,
    tasks:[
      WE_MT('d57',[
        s('d57-m1','Full Mock Test — Time Trial (60 min)','Take 1 complete mock. Attempt at least 150 questions. Track your per-section time exactly: Reasoning ≤18min, English ≤15min, GA ≤8min, Quant ≤19min.','Keep a stopwatch visible. Note the exact time when you start and finish each section. If any section is going over, move to the next — do not sacrifice other sections.',60),
        s('d57-m2','Second Mock — Stamina Test','Take a second mock 30 minutes after the first. This simulates late-session fatigue. Your accuracy should drop by no more than 3-4% from mock 1.','Fatigue compensation: if you feel mentally tired, skip easier-looking questions first on your second pass. Preserve energy for the ones you know well.',60),
      ]),
      WE_REV('d57',[
        s('d57-r1','Analyze Both Mocks — Score Breakdown','Record: (a) attempts and accuracy per section, (b) total score, (c) topics with highest error frequency. Map these against your 8-week weak area list.','If your weak areas from week 1 are still appearing: accept them, don\'t fight them. Plan to strategically skip those 3-4 question types in the actual exam to save time.',45),
        s('d57-r2','GA Last-Minute Additions — High-Value Facts','Add any important GA facts from the past 2 weeks that you haven\'t covered. Focus on appointments, awards, and major schemes announced after Jun 1.','Rule: only add facts you are 100% sure about. Half-remembered facts cause you to pick wrong options with false confidence.',15),
      ]),
    ],
  },
  {
    id:'2026-06-21',dayNumber:58,date:'2026-06-21',phase:3,tier:1,weekNumber:9,
    weekType:'weekend',totalHours:6,hasQuiz:false,
    title:'Day 58 — Light Review Sunday + Mental Prep',
    promptBlock:`OPERATIVE BRIEFING — DAY 58 (4 DAYS TO EXAM)

This is a LIGHT day. The heavy work is done. Today is about maintaining sharpness without fatiguing yourself. Half your usual study load. The other half is for mental conditioning, sleep normalization, and exam logistics.

Confirm: (a) Exam hall location and travel time. (b) Admit card printed and ready. (c) Stationery prepared (pencils, pens, eraser). (d) Sleep schedule — start sleeping by 10 PM from tonight.

STUDY FOCUS: English vocabulary touch-up only. No new quant problems. 30-minute GA revision. 20 reasoning questions to keep the brain warm. Nothing more.`,
    tasks:[
      WD_ENG('d58',[
        s('d58-e1','Vocabulary Touch-Up — Circled Words Final Pass','Go through ONLY the words you circled in previous revisions. Test yourself: look at word → recall meaning. If you fail, write it once. If you fail again, accept it and move on.','At this stage, new vocabulary memorization is counterproductive. You are reinforcing existing memory, not building new ones.',20),
        s('d58-e2','30 Quick Grammar PYQs — Warm-Up Only','30 easy-medium grammar questions at a relaxed pace. Purpose: keeping your pattern recognition active, not intensive drilling.','Rule for today: if a question takes more than 20 seconds, skip it. Do not force. Your brain needs rest mode, not pressure mode.',20),
      ]),
      WD_QR('d58',[
        s('d58-qr1','GA Touch-Up — 20 Static GK Questions','20 static GK questions from your weakest GA domain. Calm revision, no time pressure.','The purpose: ensure you don\'t feel caught off-guard on exam day. One well-remembered static GK fact can save 2 marks.',20),
        s('d58-qr2','20 Reasoning Warm-Up Questions','20 straightforward reasoning questions — Analogy, Series, Classification. No time pressure. Just keep the mental gears turning.','Think of this as an athlete\'s light stretching day before a competition. Not the workout — the warm-up.',20),
      ]),
    ],
  },
  {
    id:'2026-06-22',dayNumber:59,date:'2026-06-22',phase:3,tier:1,weekNumber:9,
    weekType:'weekday',totalHours:2,hasQuiz:false,
    title:'Day 59 — Pre-Exam Formula Lock (3 Days Out)',
    promptBlock:`OPERATIVE BRIEFING — DAY 59 (3 DAYS TO EXAM)

Today: 2 hours maximum. No long sessions. Your job is to finalize your personal formula sheet and run one quick sectional drill.

FORMULA SHEET: Write all critical formulas on 1 A4 page in your own handwriting. You will not be allowed to take this into the exam, but the act of writing consolidates them in your memory. Cover: (a) Quant shortcuts (fractions, percentages, SI/CI), (b) Trig values, (c) Geometry formulas, (d) Grammar rules (voice, tense tables).

SLEEP: 8 hours mandatory. Reduce screen time after 9 PM.`,
    tasks:[
      WD_QR('d59',[
        s('d59-qr1','Personal Formula Sheet — Write by Hand','Create your 1-page formula cheat sheet (that you won\'t bring to exam but will mentally photograph). Cover all the formulas you\'ve been using. Write them clearly and neatly.','The physical act of handwriting activates different memory pathways than typing or reading. This single act improves recall by 25% during the exam.',30),
        s('d59-qr2','30 Mixed PYQs — Light Speed Drill','30 mixed PYQs from your strongest topics. Goal: build confidence, not fix weaknesses. Today is about feeling sharp and capable.','Strategy: pick topics you excel at. Exit today\'s session feeling confident, not stressed. Confidence is an exam-day performance multiplier.',30),
      ]),
      WD_ENG('d59',[
        s('d59-e1','English PYQ Sprint — 20 Questions Only','20 PYQ English questions — any type. Just to keep your English brain active. No analysis needed.','Rule: no more than 20 English questions today. Save energy for exam day.',20),
        s('d59-e2','Logistics Final Check','Confirm: admit card printed ✓, photo ID ready ✓, pencils and pens packed ✓, exam center visited/confirmed ✓, alarm set ✓, sleep by 10 PM planned ✓.','The most underrated exam preparation is logistics. A candidate who arrives late or stressed loses 10-15 marks to anxiety alone.',10),
      ]),
    ],
  },
  {
    id:'2026-06-23',dayNumber:60,date:'2026-06-23',phase:3,tier:1,weekNumber:9,
    weekType:'weekday',totalHours:1,hasQuiz:false,
    title:'Day 60 — EXAM EVE: Rest + Light Revision',
    promptBlock:`OPERATIVE BRIEFING — DAY 60 (EXAM TOMORROW)

This is the most important day for what you DON'T do. Do NOT take any full mocks. Do NOT study anything new. Do NOT stay up late. Do NOT doubt your preparation.

Today's study: 1 hour maximum. Light revision of formulas and 20-30 questions across all subjects. Then: good food, hydration, early sleep (target: 9:30-10 PM). You should aim for 8+ hours of sleep.

MINDSET: You have prepared for 9 weeks. The work is done. The exam is just the presentation. Walk in calm. Execute the plan. Trust the preparation.`,
    tasks:[
      WD_QR('d60',[
        s('d60-qr1','Formula Recall — 10-Minute Mental Test','Sit quietly. Close your eyes. Mentally recall: 5 quant formulas, 3 trig values, 2 English grammar rules, 3 GA facts. If you can recall them smoothly, you are ready.','This is a confidence check, not a study session. If recall feels smooth, trust it. If some gaps appear, accept them calmly — they were always there.',10),
        s('d60-qr2','20 Easy Questions — Confidence Builder','20 straightforward questions from topics you are strongest in. Solve them quickly. The goal: end today\'s session feeling capable and calm.','End on a winning note. Your last session before the exam should make you feel confident, not anxious.',20),
      ]),
      WD_ENG('d60',[
        s('d60-e1','EXAM DAY PROTOCOL — Mental Rehearsal','Close your eyes for 5 minutes. Visualize: (1) Walking into the exam hall calmly, (2) Reading instructions carefully, (3) Starting with Reasoning, (4) Maintaining steady pace, (5) Submitting with 5 minutes to spare. Do this visualization twice.','Visualization activates the same neural pathways as actual performance. Elite athletes use this before competitions. It works.',10),
        s('d60-e2','Early Sleep — Mandatory','Be in bed by 10 PM. Phone on silent, not in the room. This is a mandatory task. Sleep deprivation on exam night is the single most common reason for underperformance despite good preparation.','Research shows: 7+ hours sleep improves problem-solving speed by 15% and accuracy by 10% compared to 5-6 hours. This is not optional.',420,true),
      ]),
    ],
  },
  {
    id:'2026-06-24',dayNumber:61,date:'2026-06-24',phase:3,tier:1,weekNumber:9,
    weekType:'weekday',totalHours:0.5,hasQuiz:false,
    title:'Day 61 — EXAM DAY PREP (Morning of Jun 25)',
    promptBlock:`OPERATIVE BRIEFING — DAY 61 (EXAM DAY)

Wake up 2.5 hours before exam start. Light breakfast. Arrive at exam center 30 minutes early. You know what to do.

Section order: Reasoning → English → GA → Quant.
First pass: attempt what you're sure about. Second pass: attempt the 30-second questions. Do not guess on questions where you have no idea.

Your last 9 weeks have been preparation. This hour is execution. You are ready.`,
    tasks:[
      WD_QR('d61',[
        s('d61-qr1','Morning Formula Touch-Up (15 min)','Quick 15-minute review of your formula sheet. Just read it once, calmly. No drilling, no pressure.','Calm mind before the exam is worth more than 30 minutes of last-minute cramming. Trust your 9 weeks of preparation.',15),
        s('d61-qr2','TIER 1 EXAM — EXECUTE THE PLAN','This is it. Walk in. Breathe. Start Reasoning. Maintain pace. Trust the preparation. YOU ARE READY.','The exam is not the end of the journey — it is the beginning. After this, Tier 2 prep begins. One battle at a time.',60),
      ]),
    ],
  },
]

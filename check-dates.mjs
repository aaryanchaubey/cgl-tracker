const files = ['week01','week02','week03','week04','week05','week06','week07','week08','week09','week10','week11','week12','week13','week14','week17','week18','week19','week20'];
const DOW = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

for (const f of files) {
  try {
    const mod = await import('./src/data/studyPlan/' + f + '.js');
    const DAYS = mod.DAYS;
    if (!DAYS || DAYS.length === 0) { console.log(f + ': EMPTY'); continue; }
    const first = DAYS[0], last = DAYS[DAYS.length-1];
    const bugs = [];
    for (const d of DAYS) {
      const dt = new Date(d.date + 'T12:00:00');
      const dow = dt.getDay();
      const isWeekend = dow === 0 || dow === 6;
      const taggedWeekend = d.weekType === 'weekend';
      if (isWeekend !== taggedWeekend) {
        bugs.push(d.date + '(' + DOW[dow] + ' tagged=' + d.weekType + ')');
      }
    }
    const status = bugs.length ? ' BUGS: ' + bugs.join(', ') : ' OK';
    console.log(f + ': Days ' + first.dayNumber + '-' + last.dayNumber + ' (' + first.date + ' to ' + last.date + ')' + status);
  } catch(e) { console.log(f + ': ERROR ' + e.message); }
}

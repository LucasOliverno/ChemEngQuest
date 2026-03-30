// Weekly schedule starting 26/03/2026. Each week has tasks from all roadmaps.
// Tags: TEC = Formação Técnica, CON = Consultoria BH, VEN = Vendas
const CALENDAR_START = new Date('2026-03-26');

const WEEKLY_SCHEDULE = [
  { week: 1, tasks: ['t1_1', 'c1_1', 'c1_2', 'v1_1'] },
  { week: 2, tasks: ['t1_1', 'c1_3', 'v1_2'] },
  { week: 3, tasks: ['t1_2', 'c1_3', 'v1_3'] },
  { week: 4, tasks: ['t1_2', 'c1_4', 'v1_4'] },
  { week: 5, tasks: ['c1_5', 'c1_6'] },
  { week: 6, tasks: ['c2_1', 'c2_2'] },
  { week: 7, tasks: ['t1_3', 'c2_3'] },
  { week: 8, tasks: ['t1_3', 'c2_3'] },
  { week: 9, tasks: ['t1_4', 'c2_4', 'v2_1'] },
  { week: 10, tasks: ['t1_4', 'c2_5', 'v2_2'] },
  { week: 11, tasks: ['t1_5', 'c2_6', 'c3_1', 'v2_3'] },
  { week: 12, tasks: ['t1_6', 'c3_2', 'v2_4'] },
  { week: 13, tasks: ['c3_3', 'c3_4'] },
  { week: 14, tasks: ['c3_5', 'c3_6', 'c3_7'] },
  { week: 15, tasks: ['t2_1', 'c4_1', 'c4_2'] },
  { week: 16, tasks: ['t2_1', 'c4_3', 'c4_4'] },
  { week: 17, tasks: ['t2_2', 'c4_5', 'c4_6', 'v3_1'] },
  { week: 18, tasks: ['t2_2', 'c4_7', 'v3_2'] },
  { week: 19, tasks: ['t2_3', 'c5_1', 'v3_3'] },
  { week: 20, tasks: ['t2_3', 'c5_2', 'v3_4'] },
  { week: 21, tasks: ['t2_4', 'c5_3'] },
  { week: 22, tasks: ['t2_4', 'c5_4'] },
  { week: 23, tasks: ['t2_5', 'c5_5'] },
  { week: 24, tasks: ['t2_6', 'c5_6'] },
  { week: 25, tasks: ['c6_1'] },
  { week: 26, tasks: ['t3_1', 'c6_2', 'c6_3'] },
  { week: 27, tasks: ['t3_1'] },
  { week: 28, tasks: ['t3_2', 'c6_4'] },
  { week: 29, tasks: ['t3_2'] },
  { week: 30, tasks: ['t3_3'] },
  { week: 31, tasks: ['t3_3'] },
  { week: 32, tasks: ['t3_4', 'c6_5'] },
  { week: 33, tasks: ['t3_4'] },
  { week: 34, tasks: ['t3_5', 't3_6'] },
  { week: 35, tasks: ['c6_6'] },
  { week: 36, tasks: ['t4_1'] },
  { week: 37, tasks: ['t4_1'] },
  { week: 38, tasks: ['t4_2'] },
  { week: 39, tasks: ['t4_2'] },
  { week: 40, tasks: ['t4_3'] },
  { week: 41, tasks: ['t4_3', 'c6_7'] },
  { week: 42, tasks: ['t4_4'] },
  { week: 43, tasks: ['t4_4'] },
  { week: 44, tasks: ['t4_5', 't4_6'] },
  { week: 45, tasks: ['t5_1'] },
  { week: 46, tasks: ['t5_1'] },
  { week: 47, tasks: ['t5_2'] },
  { week: 48, tasks: ['t5_2', 't5_3'] },
  { week: 49, tasks: ['t5_3'] },
  { week: 50, tasks: ['t5_4'] },
  { week: 51, tasks: ['t5_4', 't5_5'] },
  { week: 52, tasks: ['t5_6'] },
  { week: 53, tasks: ['t6_1'] },
  { week: 54, tasks: ['t6_2'] },
  { week: 55, tasks: ['t6_3'] },
  { week: 56, tasks: ['t6_3', 't6_4'] },
  { week: 57, tasks: ['t6_4', 't6_5'] },
  { week: 58, tasks: ['t6_6'] },
];

function getWeekDates(weekNum) {
  const start = new Date(CALENDAR_START);
  start.setDate(start.getDate() + (weekNum - 1) * 7);
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const fmt = d => `${String(d.getDate()).padStart(2,'0')}/${String(d.getMonth()+1).padStart(2,'0')}`;
  return { start: fmt(start), end: fmt(end), startDate: new Date(start), endDate: new Date(end) };
}

function getTaskSource(taskId) {
  if (taskId.startsWith('c')) return 'consultoria';
  if (taskId.startsWith('v')) return 'vendas';
  return 'international';
}

function findTaskData(taskId) {
  const allPhases = [...PHASES, ...CONSULTORIA_PHASES, ...VENDAS_PHASES];
  for (const p of allPhases) {
    const t = p.tasks.find(t => t.id === taskId);
    if (t) return { task: t, phase: p, source: getTaskSource(taskId) };
  }
  return null;
}

function getCurrentWeek() {
  const now = new Date();
  const diff = Math.floor((now - CALENDAR_START) / (7 * 86400000));
  return Math.max(1, diff + 1);
}

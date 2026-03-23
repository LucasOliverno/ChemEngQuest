// ===== GAME DATA =====
const RANKS = [
  { title: 'Estagiário de Campo', emoji: '🔰', xp: 0 },
  { title: 'Operador Jr.', emoji: '🔧', xp: 500 },
  { title: 'Engenheiro de Planta', emoji: '⚙️', xp: 1500 },
  { title: 'Analista de Risco', emoji: '🛡️', xp: 3500 },
  { title: 'Especialista SIL', emoji: '🎯', xp: 6000 },
  { title: 'Cientista de Dados', emoji: '📊', xp: 9000 },
  { title: 'Consultor Sênior', emoji: '🏭', xp: 13000 },
  { title: 'Diretor Técnico', emoji: '👑', xp: 18000 },
];

const PHASES = [
  {
    id: 1, name: 'Hidráulica Industrial', months: 'Meses 1-2', icon: '⚙️', color: '#3b82f6',
    tasks: [
      { id: 't1_1', name: 'Estudar: Bernoulli, Darcy-Weisbach, NPSH, curvas de bomba', type: 'study', xp: 50 },
      { id: 't1_2', name: 'Estudar: API 610, P&ID, PFD, modos de falha', type: 'study', xp: 50 },
      { id: 't1_3', name: 'Projeto: Relatório Diagnóstico de Sistema Hidráulico', type: 'project', xp: 200 },
      { id: 't1_4', name: 'Vibe Coding: Calculadora Interativa de Pump System', type: 'tool', xp: 250 },
      { id: 't1_5', name: 'Cenário: Bomba petroquímica com -20% vazão', type: 'scenario', xp: 100 },
      { id: 't1_6', name: 'Entregável: Relatório + Calculadora + Matriz de Seleção', type: 'deliverable', xp: 150 },
      { id: 't1_7', name: 'Mercado: Enviar primeira proposta no Upwork', type: 'market', xp: 200 },
      { id: 't1_8', name: 'Ponte Financeira: Aplicação Scale AI / Outlier AI', type: 'market', xp: 300 },
    ]
  },
  {
    id: 2, name: 'Balanços de Massa & Energia', months: 'Meses 3-4', icon: '🔥', color: '#f59e0b',
    tasks: [
      { id: 't2_1', name: 'Estudar: Conservação, grau de liberdade, reciclo, purga', type: 'study', xp: 50 },
      { id: 't2_2', name: 'Estudar: KPIs, pinch analysis, SPC, benchmarking', type: 'study', xp: 50 },
      { id: 't2_3', name: 'Projeto: Auditoria Completa — Utilidades de Planta', type: 'project', xp: 200 },
      { id: 't2_4', name: 'Vibe Coding: Dashboard de Auditoria de Processos', type: 'tool', xp: 250 },
      { id: 't2_5', name: 'Cenário: Auditoria de vapor em planta de alimentos', type: 'scenario', xp: 100 },
      { id: 't2_6', name: 'Entregável: Relatório de Auditoria + Dashboard', type: 'deliverable', xp: 150 },
      { id: 't2_7', name: 'Mercado: Primeiro projeto pago ($50-$200)', type: 'market', xp: 500 },
    ]
  },
  {
    id: 3, name: 'HAZOP & Triagem de Risco', months: 'Meses 5-6', icon: '🛡️', color: '#ef4444',
    tasks: [
      { id: 't3_1', name: 'Estudar: HAZOP, guide words, causa-consequência-salvaguarda', type: 'study', xp: 50 },
      { id: 't3_2', name: 'Estudar: CCPS risk matrix, LOPA intro, ISD, PSM/SEVESO', type: 'study', xp: 50 },
      { id: 't3_3', name: 'Projeto: Estudo HAZOP — Alimentação de Reator (3 nós)', type: 'project', xp: 200 },
      { id: 't3_4', name: 'Vibe Coding: Gerador de Planilha HAZOP + Screener', type: 'tool', xp: 250 },
      { id: 't3_5', name: 'Cenário: PSSR de unidade de recuperação de solvente', type: 'scenario', xp: 100 },
      { id: 't3_6', name: 'Entregável: Template HAZOP + Relatório + Checklist', type: 'deliverable', xp: 150 },
      { id: 't3_7', name: 'Mercado: 2 propostas de segurança enviadas', type: 'market', xp: 200 },
    ]
  },
  {
    id: 4, name: 'LOPA, SIL & Incidentes', months: 'Meses 7-8', icon: '🎯', color: '#8b5cf6',
    tasks: [
      { id: 't4_1', name: 'Estudar: LOPA, IPLs, RRF, SIL, IEC 61511', type: 'study', xp: 50 },
      { id: 't4_2', name: 'Estudar: 5-Why, Bow-Tie, MOC, alarmes, BPCS vs SIS', type: 'study', xp: 50 },
      { id: 't4_3', name: 'Projeto: LOPA cenário alto risco + Investigação incidente', type: 'project', xp: 200 },
      { id: 't4_4', name: 'Vibe Coding: Calculadora LOPA + Banco de Lições', type: 'tool', xp: 250 },
      { id: 't4_5', name: 'Cenário: SIL assessment — tanque atmosférico', type: 'scenario', xp: 100 },
      { id: 't4_6', name: 'Entregável: Relatório LOPA + Template Investigação', type: 'deliverable', xp: 150 },
      { id: 't4_7', name: 'Mercado: Primeiro artigo publicado no LinkedIn', type: 'market', xp: 150 },
    ]
  },
  {
    id: 5, name: 'Dados & Detecção de Anomalias', months: 'Meses 9-10', icon: '📊', color: '#10b981',
    tasks: [
      { id: 't5_1', name: 'Estudar: Séries temporais, SPC, outliers, PCA', type: 'study', xp: 50 },
      { id: 't5_2', name: 'Estudar: Regressão, isolation forest, feature eng., digital twin', type: 'study', xp: 50 },
      { id: 't5_3', name: 'Projeto: Sistema Detecção Anomalias (Tennessee Eastman)', type: 'project', xp: 200 },
      { id: 't5_4', name: 'Vibe Coding: Dashboard de Monitoramento de Planta', type: 'tool', xp: 250 },
      { id: 't5_5', name: 'Cenário: Early warning degradação de compressor', type: 'scenario', xp: 100 },
      { id: 't5_6', name: 'Entregável: Demo Anomalias + Dashboard + Relatório', type: 'deliverable', xp: 150 },
      { id: 't5_7', name: 'Mercado: 2 projetos de análise de dados concluídos', type: 'market', xp: 300 },
    ]
  },
  {
    id: 6, name: 'Integração & Lançamento', months: 'Meses 11-12', icon: '🏭', color: '#f43f5e',
    tasks: [
      { id: 't6_1', name: 'Estudar: Troubleshooting, MOC, compliance, lifecycle cost', type: 'study', xp: 50 },
      { id: 't6_2', name: 'Estudar: Proposta, SoW, pricing, branding, LinkedIn', type: 'study', xp: 50 },
      { id: 't6_3', name: 'Capstone: Review integrado para planta química', type: 'project', xp: 300 },
      { id: 't6_4', name: 'Vibe Coding: Plataforma Integrada de Consultoria', type: 'tool', xp: 300 },
      { id: 't6_5', name: 'Cenário: Engajamento completo — pharma 200 funcionários', type: 'scenario', xp: 150 },
      { id: 't6_6', name: 'Entregável: Pacote completo de consultoria', type: 'deliverable', xp: 200 },
      { id: 't6_7', name: 'Mercado: Toptal application + outreach direto', type: 'market', xp: 300 },
    ]
  }
];

const ACHIEVEMENTS = [
  { id: 'a_first_task', name: 'Primeiro Passo', desc: 'Complete sua primeira tarefa', emoji: '🌱', check: s => s.totalCompleted >= 1 },
  { id: 'a_phase1', name: 'Domador de Fluidos', desc: 'Complete todas as tarefas da Fase 1', emoji: '💧', check: s => s.phaseComplete[1] },
  { id: 'a_phase2', name: 'Mestre do Balanço', desc: 'Complete todas as tarefas da Fase 2', emoji: '⚖️', check: s => s.phaseComplete[2] },
  { id: 'a_phase3', name: 'Olho do HAZOP', desc: 'Complete todas as tarefas da Fase 3', emoji: '⚠️', check: s => s.phaseComplete[3] },
  { id: 'a_phase4', name: 'Guardião SIL', desc: 'Complete todas as tarefas da Fase 4', emoji: '🏰', check: s => s.phaseComplete[4] },
  { id: 'a_phase5', name: 'Data Scientist', desc: 'Complete todas as tarefas da Fase 5', emoji: '🔮', check: s => s.phaseComplete[5] },
  { id: 'a_phase6', name: 'Consultor', desc: 'Complete todas as tarefas da Fase 6', emoji: '👔', check: s => s.phaseComplete[6] },
  { id: 'a_first_code', name: 'Primeiro Código', desc: 'Complete qualquer tarefa "Vibe Coding"', emoji: '🧬', check: s => s.toolsBuilt >= 1 },
  { id: 'a_3tools', name: 'Dashboard Master', desc: 'Construa 3 ferramentas com IA', emoji: '📊', check: s => s.toolsBuilt >= 3 },
  { id: 'a_all_tools', name: 'Arsenal Completo', desc: 'Construa todas as 6 ferramentas', emoji: '🚀', check: s => s.toolsBuilt >= 6 },
  { id: 'a_first_market', name: 'Primeira Proposta', desc: 'Complete qualquer tarefa de Mercado', emoji: '🎣', check: s => s.marketTasks >= 1 },
  { id: 'a_3market', name: 'Networker', desc: 'Complete 3 tarefas de Mercado', emoji: '🤝', check: s => s.marketTasks >= 3 },
  { id: 'a_streak7', name: 'Semana Perfeita', desc: 'Streak de 7 dias', emoji: '📅', check: s => s.streak >= 7 },
  { id: 'a_streak30', name: 'Mês de Ferro', desc: 'Streak de 30 dias', emoji: '🗓️', check: s => s.streak >= 30 },
  { id: 'a_halfxp', name: 'Meio Caminho', desc: 'Acumule 9.000 XP', emoji: '⚡', check: s => s.xp >= 9000 },
  { id: 'a_allcomplete', name: 'Diretor Técnico', desc: 'Complete TODAS as tarefas', emoji: '👑', check: s => s.totalCompleted >= 42 },
];

const QUOTES = [
  '"Build something real every month. Take every concept to market. Compound relentlessly." 🚀',
  '"The engineer who can calculate it, assess the risk, detect the anomaly, AND build the tool — that engineer is in a category of one." 🏭',
  '"Theory that is never tested in practice decays. Theory that is sold to a client compounds." 💰',
  '"You do not need to become a software engineer. You need to become the translator." 🔄',
  '"Your portfolio is not a list of credentials — it is a collection of proof." 📋',
  '"Interactive tools that a client can test are worth ten times more than reports they must read." 🛠️',
  '"The hardest job is the first one. After that, momentum takes over." 🎯',
  '"Consistency beats intensity. Show up every day." 🔥',
  '"The market is looking for specialists who can translate — between the plant floor and the boardroom." 🏢',
  '"Even one averted shutdown pays for months of consulting." 💎',
];

const TYPE_LABELS = {
  study: '📖 Estudo', project: '🔧 Projeto', tool: '🤖 IA',
  scenario: '🌋 Cenário', deliverable: '📄 Entrega', market: '💼 Freela'
};

// ===== STATE =====
let state = loadState();
let activePhase = 1;
let currentRoadmap = 'international'; // 'international' | 'consultoria'

function getActivePhases() {
  if (currentRoadmap === 'consultoria') return CONSULTORIA_PHASES;
  if (currentRoadmap === 'vendas') return VENDAS_PHASES;
  return PHASES;
}
function getActiveDetails() {
  if (currentRoadmap === 'vendas') return VENDAS_TASK_DETAILS;
  return currentRoadmap === 'international' ? TASK_DETAILS : CONSULTORIA_TASK_DETAILS;
}
function switchRoadmap(rm) {
  currentRoadmap = rm;
  activePhase = 1;
  render();
}

function defaultState() {
  return { completed: {}, streak: 0, lastDate: null, unlockedAchievements: {} };
}

function loadState() {
  try {
    const saved = localStorage.getItem('chemquest_state');
    return saved ? { ...defaultState(), ...JSON.parse(saved) } : defaultState();
  } catch { return defaultState(); }
}

function saveState() {
  localStorage.setItem('chemquest_state', JSON.stringify(state));
}

// ===== CALCULATIONS ====
function calcXP() {
  let xp = 0;
  PHASES.forEach(p => p.tasks.forEach(t => { if (state.completed[t.id]) xp += t.xp; }));
  CONSULTORIA_PHASES.forEach(p => p.tasks.forEach(t => { if (state.completed[t.id]) xp += t.xp; }));
  VENDAS_PHASES.forEach(p => p.tasks.forEach(t => { if (state.completed[t.id]) xp += t.xp; }));
  return xp;
}

function calcRank(xp) {
  let rank = 0;
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (xp >= RANKS[i].xp) { rank = i; break; }
  }
  return rank;
}

function calcStats() {
  const xp = calcXP();
  const rank = calcRank(xp);
  let totalCompleted = 0, totalTasks = 0, toolsBuilt = 0, marketTasks = 0;
  const phaseComplete = {};
  const allPhases = [...PHASES, ...CONSULTORIA_PHASES, ...VENDAS_PHASES];
  allPhases.forEach(p => {
    let pDone = 0;
    p.tasks.forEach(t => {
      totalTasks++;
      if (state.completed[t.id]) {
        totalCompleted++;
        pDone++;
        if (t.type === 'tool') toolsBuilt++;
        if (t.type === 'market') marketTasks++;
      }
    });
    let suffix = 'int';
    if (CONSULTORIA_PHASES.includes(p)) suffix = 'con';
    if (VENDAS_PHASES.includes(p)) suffix = 'ven';
    phaseComplete[p.id + '_' + suffix] = pDone === p.tasks.length;
  });
  // Also track per-roadmap phase completion for achievements
  PHASES.forEach(p => {
    const done = p.tasks.filter(t => state.completed[t.id]).length;
    phaseComplete[p.id] = done === p.tasks.length;
  });
  return { xp, rank, totalCompleted, totalTasks, toolsBuilt, marketTasks, phaseComplete, streak: state.streak };
}

// ===== STREAK =====
function updateStreak() {
  const today = new Date().toISOString().split('T')[0];
  if (state.lastDate === today) return;
  if (state.lastDate) {
    const last = new Date(state.lastDate);
    const diff = Math.floor((new Date(today) - last) / 86400000);
    state.streak = diff === 1 ? state.streak + 1 : 1;
  } else {
    state.streak = 1;
  }
  state.lastDate = today;
  saveState();
}

// ===== CONFETTI =====
function launchConfetti(duration = 1500) {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#00d4ff', '#7c3aed', '#f43f5e', '#f59e0b', '#10b981', '#3b82f6'];
  for (let i = 0; i < 80; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 200,
      y: canvas.height / 2,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -14 - 4,
      size: Math.random() * 6 + 3,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      life: 1,
    });
  }
  const start = Date.now();
  function animate() {
    const elapsed = Date.now() - start;
    if (elapsed > duration) { ctx.clearRect(0, 0, canvas.width, canvas.height); return; }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.3;
      p.rotation += p.rotSpeed;
      p.life = Math.max(0, 1 - elapsed / duration);
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation * Math.PI / 180);
      ctx.globalAlpha = p.life;
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
      ctx.restore();
    });
    requestAnimationFrame(animate);
  }
  animate();
}

// ===== XP POPUP =====
function showXPPopup(amount) {
  const popup = document.getElementById('xp-popup');
  popup.querySelector('.xp-amount').textContent = `+${amount}`;
  popup.classList.remove('show');
  void popup.offsetWidth;
  popup.classList.add('show');
}

// ===== RANK UP =====
function showRankUp(rank) {
  const overlay = document.getElementById('rank-up-overlay');
  overlay.querySelector('.rank-emoji').textContent = RANKS[rank].emoji;
  overlay.querySelector('h2').textContent = RANKS[rank].title;
  overlay.querySelector('p').textContent = `Rank ${rank} desbloqueado!`;
  overlay.classList.add('show');
  launchConfetti(3000);
  overlay.querySelector('.dismiss').onclick = () => overlay.classList.remove('show');
}

// ===== RENDER =====
function render() {
  const stats = calcStats();
  const nextRank = stats.rank < RANKS.length - 1 ? stats.rank + 1 : stats.rank;
  const xpForCurrent = RANKS[stats.rank].xp;
  const xpForNext = RANKS[nextRank].xp;
  const xpProgress = xpForNext > xpForCurrent ? ((stats.xp - xpForCurrent) / (xpForNext - xpForCurrent)) * 100 : 100;

  // Stats
  document.getElementById('stat-rank').textContent = `${RANKS[stats.rank].emoji} ${RANKS[stats.rank].title}`;
  document.getElementById('stat-rank').style.fontSize = '1.1rem';
  document.getElementById('stat-xp').textContent = stats.xp.toLocaleString();
  document.getElementById('stat-streak').textContent = `${stats.streak} 🔥`;
  document.getElementById('stat-tasks').textContent = `${stats.totalCompleted}/${stats.totalTasks}`;
  document.getElementById('stat-tasks-detail').textContent = `${Math.round(stats.totalCompleted / stats.totalTasks * 100)}% completo`;

  // XP Bar
  document.getElementById('current-rank-label').textContent = `${RANKS[stats.rank].emoji} ${RANKS[stats.rank].title}`;
  document.getElementById('next-rank-label').textContent = stats.rank < RANKS.length - 1
    ? `Próximo: ${RANKS[nextRank].emoji} ${RANKS[nextRank].title}`
    : '🎉 Rank Máximo!';
  document.getElementById('xp-numbers').textContent = `${stats.xp} / ${xpForNext} XP`;
  document.getElementById('xp-bar-fill').style.width = `${Math.min(xpProgress, 100)}%`;

  // Roadmap Tabs
  document.getElementById('roadmap-tabs').innerHTML = `
    <div class="roadmap-tab ${currentRoadmap === 'international' ? 'active' : ''}" onclick="switchRoadmap('international')">
      🌍 Roadmap Internacional
    </div>
    <div class="roadmap-tab ${currentRoadmap === 'consultoria' ? 'active' : ''}" onclick="switchRoadmap('consultoria')">
      🇧🇷 Consultoria BH
    </div>
    <div class="roadmap-tab ${currentRoadmap === 'vendas' ? 'active' : ''}" onclick="switchRoadmap('vendas')">
      🗣️ Vendas & Coragem
    </div>
    <div class="roadmap-tab ${currentRoadmap === 'calendario' ? 'active' : ''}" onclick="switchRoadmap('calendario')">
      📅 Calendário
    </div>
  `;

  // Calendar vs Phase view
  if (currentRoadmap === 'calendario') {
    document.getElementById('phase-tabs').innerHTML = '';
    document.getElementById('phase-content').innerHTML = renderCalendar();
  } else {
  // Phase Tabs
  const phases = getActivePhases();
  const tabsContainer = document.getElementById('phase-tabs');
  tabsContainer.innerHTML = phases.map(p => {
    const done = p.tasks.filter(t => state.completed[t.id]).length;
    const pct = (done / p.tasks.length) * 100;
    return `<div class="phase-tab ${activePhase === p.id ? 'active' : ''}" data-phase="${p.id}" onclick="setPhase(${p.id})">
      ${p.icon} Fase ${p.id}
      <div class="tab-progress" style="width: ${pct}%"></div>
    </div>`;
  }).join('');

  // Phase Content
  const phase = phases.find(p => p.id === activePhase);
  const phaseDone = phase.tasks.filter(t => state.completed[t.id]).length;
  const phasePct = (phaseDone / phase.tasks.length) * 100;

  document.getElementById('phase-content').innerHTML = `
    <div class="phase-header">
      <div class="phase-icon" style="background: ${phase.color}22; color: ${phase.color}">${phase.icon}</div>
      <div class="phase-info" style="flex:1">
        <h2>${phase.name}</h2>
        <p>${phase.months} · ${phaseDone}/${phase.tasks.length} tarefas</p>
        <div class="phase-progress-bar">
          <div class="phase-progress-fill" style="width: ${phasePct}%; background: ${phase.color}"></div>
        </div>
      </div>
    </div>
    <div class="task-list">
      ${phase.tasks.map(t => {
        const done = !!state.completed[t.id];
        return `<div class="task-item ${done ? 'completed' : ''}" id="task-${t.id}">
          <div class="task-checkbox" onclick="event.stopPropagation(); toggleTask('${t.id}', ${t.xp})">${done ? '✓' : ''}</div>
          <div class="task-body" onclick="openTaskDetail('${t.id}')">
            <span class="task-type ${t.type}">${TYPE_LABELS[t.type]}</span>
            <span class="task-name">${t.name}</span>
          </div>
          <span class="task-xp">+${t.xp} XP</span>
        </div>`;
      }).join('')}
    </div>
  `;
  } // end of else (phase view)

  // Achievements
  document.getElementById('achievements-grid').innerHTML = ACHIEVEMENTS.map(a => {
    const unlocked = !!state.unlockedAchievements[a.id];
    return `<div class="achievement ${unlocked ? 'unlocked' : 'locked'}" id="ach-${a.id}">
      <span class="achievement-icon">${a.emoji}</span>
      <div class="achievement-info">
        <div class="name">${a.name}</div>
        <div class="desc">${a.desc}</div>
      </div>
    </div>`;
  }).join('');

  // Quote
  const quoteIdx = Math.floor(Date.now() / 86400000) % QUOTES.length;
  document.getElementById('daily-quote-text').textContent = QUOTES[quoteIdx];
}

// ===== CALENDAR RENDER =====
function renderCalendar() {
  const curWeek = getCurrentWeek();
  return `
    <div class="cal-header">
      <div class="cal-icon">📅</div>
      <div class="cal-info">
        <h2>Calendário Semanal</h2>
        <p>Início: 26/03/2026 · Semana atual: ${curWeek} · ${WEEKLY_SCHEDULE.length} semanas no total</p>
      </div>
    </div>
    <div class="cal-weeks">
      ${WEEKLY_SCHEDULE.map(w => {
        const dates = getWeekDates(w.week);
        const allDone = w.tasks.every(tid => state.completed[tid]);
        const someDone = w.tasks.some(tid => state.completed[tid]);
        const isCurrent = w.week === curWeek;
        const isPast = w.week < curWeek;
        let cls = 'cal-week';
        if (isCurrent) cls += ' current';
        if (allDone) cls += ' all-done';
        else if (isPast && !allDone) cls += ' overdue';
        return `<div class="${cls}" id="cal-week-${w.week}">
          <div class="cal-week-header">
            <span class="cal-week-num">Semana ${w.week}</span>
            <span class="cal-week-dates">${dates.start} – ${dates.end}</span>
            ${isCurrent ? '<span class="cal-badge-current">ESTA SEMANA</span>' : ''}
            ${allDone ? '<span class="cal-badge-done">✓ COMPLETA</span>' : ''}
            ${isPast && !allDone ? '<span class="cal-badge-overdue">ATRASADA</span>' : ''}
          </div>
          <div class="cal-tasks">
            ${w.tasks.map(tid => {
              const td = findTaskData(tid);
              if (!td) return '';
              const done = !!state.completed[tid];
              let src = '🌍';
              if (td.source === 'consultoria') src = '🇧🇷';
              if (td.source === 'vendas') src = '🗣️';
              return `<div class="task-item ${done ? 'completed' : ''}" id="task-${tid}">
                <div class="task-checkbox" onclick="event.stopPropagation(); toggleTask('${tid}', ${td.task.xp})">${done ? '✓' : ''}</div>
                <div class="task-body" onclick="openTaskDetailCal('${tid}')">
                  <span class="cal-source">${src}</span>
                  <span class="task-type ${td.task.type}">${TYPE_LABELS[td.task.type]}</span>
                  <span class="task-name">${td.task.name}</span>
                </div>
                <span class="task-xp">+${td.task.xp} XP</span>
              </div>`;
            }).join('')}
          </div>
        </div>`;
      }).join('')}
    </div>
  `;
}

function openTaskDetailCal(taskId) {
  const detail = TASK_DETAILS[taskId] || CONSULTORIA_TASK_DETAILS[taskId] || VENDAS_TASK_DETAILS[taskId];
  if (!detail) return;
  const done = !!state.completed[taskId];
  const td = findTaskData(taskId);
  if (!td) return;
  const modal = document.getElementById('task-detail-modal');
  modal.querySelector('.detail-title').textContent = detail.title;
  modal.querySelector('.detail-what').textContent = detail.what;
  modal.querySelector('.detail-todo').innerHTML = detail.todo.map(item => `<li>${item}</li>`).join('');
  modal.querySelector('.detail-resources').textContent = detail.resources;
  modal.querySelector('.detail-criteria').textContent = detail.criteria;
  modal.querySelector('.detail-xp-value').textContent = `+${td.task.xp} XP`;
  const btn = modal.querySelector('.detail-complete-btn');
  btn.textContent = done ? '↩ Desmarcar como Concluída' : '✓ Marcar como Concluída';
  btn.className = 'detail-complete-btn ' + (done ? 'undo' : '');
  btn.onclick = () => { toggleTask(taskId, td.task.xp); openTaskDetailCal(taskId); };
  modal.classList.add('show');
}

// ===== ACTIONS =====
function setPhase(id) {
  activePhase = id;
  render();
}

function toggleTask(taskId, xp) {
  const prevStats = calcStats();
  if (state.completed[taskId]) {
    delete state.completed[taskId];
  } else {
    state.completed[taskId] = true;
    updateStreak();
    showXPPopup(xp);
    launchConfetti(800);
  }
  saveState();
  const newStats = calcStats();

  // Check rank up
  if (newStats.rank > prevStats.rank) {
    setTimeout(() => showRankUp(newStats.rank), 600);
  }

  // Check new achievements
  ACHIEVEMENTS.forEach(a => {
    if (!state.unlockedAchievements[a.id] && a.check(newStats)) {
      state.unlockedAchievements[a.id] = true;
      saveState();
      setTimeout(() => {
        const el = document.getElementById(`ach-${a.id}`);
        if (el) { el.classList.remove('locked'); el.classList.add('unlocked', 'just-unlocked'); }
      }, 800);
    }
  });

  // Animate task
  const taskEl = document.getElementById(`task-${taskId}`);
  if (taskEl && state.completed[taskId]) {
    taskEl.classList.add('just-completed');
    setTimeout(() => taskEl.classList.remove('just-completed'), 500);
  }

  render();
}

// ===== TASK DETAIL MODAL =====
function openTaskDetail(taskId) {
  const detail = getActiveDetails()[taskId];
  if (!detail) return;
  const done = !!state.completed[taskId];
  const task = getActivePhases().flatMap(p => p.tasks).find(t => t.id === taskId);
  const modal = document.getElementById('task-detail-modal');
  modal.querySelector('.detail-title').textContent = detail.title;
  modal.querySelector('.detail-what').textContent = detail.what;
  modal.querySelector('.detail-todo').innerHTML = detail.todo.map(item =>
    `<li>${item}</li>`
  ).join('');
  modal.querySelector('.detail-resources').textContent = detail.resources;
  modal.querySelector('.detail-criteria').textContent = detail.criteria;
  modal.querySelector('.detail-xp-value').textContent = `+${task.xp} XP`;
  const btn = modal.querySelector('.detail-complete-btn');
  btn.textContent = done ? '↩ Desmarcar como Concluída' : '✓ Marcar como Concluída';
  btn.className = 'detail-complete-btn ' + (done ? 'undo' : '');
  btn.onclick = () => { toggleTask(taskId, task.xp); openTaskDetail(taskId); };
  modal.classList.add('show');
}

function closeDetail() {
  document.getElementById('task-detail-modal').classList.remove('show');
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('task-detail-modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('task-detail-modal')) closeDetail();
  });
});

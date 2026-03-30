// ===== GAME DATA =====
const RANKS = [
  { title: 'Estagiário de Engenharia', icon: '<i class="ph ph-shield-check"></i>', xp: 0 },
  { title: 'Técnico de Processos', icon: '<i class="ph ph-wrench"></i>', xp: 400 },
  { title: 'Auditor Energético', icon: '<i class="ph ph-lightning"></i>', xp: 1200 },
  { title: 'Especialista em Processos', icon: '<i class="ph ph-gear"></i>', xp: 2800 },
  { title: 'Engenheiro de Dados', icon: '<i class="ph ph-chart-bar"></i>', xp: 5000 },
  { title: 'Consultor Independente', icon: '<i class="ph ph-briefcase"></i>', xp: 7500 },
  { title: 'Especialista Industrial', icon: '<i class="ph ph-factory"></i>', xp: 10000 },
  { title: 'Sócio-Fundador', icon: '<i class="ph ph-crown"></i>', xp: 13000 },
];

const PHASES = [
  {
    id: 1, name: 'Hidráulica Industrial', months: 'Meses 1-2', icon: '<i class="ph ph-drop"></i>', color: '#10b981',
    tasks: [
      { id: 't1_1', name: 'Estudar: Bernoulli, Darcy-Weisbach, NPSH, curvas de bomba', type: 'study', xp: 50 },
      { id: 't1_2', name: 'Estudar: API 610, P&ID, PFD, modos de falha', type: 'study', xp: 50 },
      { id: 't1_3', name: 'Projeto: Relatório Diagnóstico de Sistema Hidráulico', type: 'project', xp: 200 },
      { id: 't1_4', name: 'Vibe Coding: Calculadora Interativa de Pump System', type: 'tool', xp: 250 },
      { id: 't1_5', name: 'Cenário: Bomba petroquímica com -20% vazão', type: 'scenario', xp: 100 },
      { id: 't1_6', name: 'Entregável: Relatório + Calculadora + Matriz de Seleção', type: 'deliverable', xp: 150 }
    ]
  },
  {
    id: 2, name: 'Balanços de Massa & Energia', months: 'Meses 3-4', icon: '<i class="ph ph-fire"></i>', color: '#10b981',
    tasks: [
      { id: 't2_1', name: 'Estudar: Conservação, grau de liberdade, reciclo, purga', type: 'study', xp: 50 },
      { id: 't2_2', name: 'Estudar: KPIs, pinch analysis, SPC, benchmarking', type: 'study', xp: 50 },
      { id: 't2_3', name: 'Projeto: Auditoria Completa — Utilidades de Planta', type: 'project', xp: 200 },
      { id: 't2_4', name: 'Vibe Coding: Dashboard de Auditoria de Processos', type: 'tool', xp: 250 },
      { id: 't2_5', name: 'Cenário: Auditoria de vapor em planta de alimentos', type: 'scenario', xp: 100 },
      { id: 't2_6', name: 'Entregável: Relatório de Auditoria + Dashboard', type: 'deliverable', xp: 150 }
    ]
  },
  {
    id: 3, name: 'HAZOP & Triagem de Risco', months: 'Meses 5-6', icon: '<i class="ph ph-warning"></i>', color: '#10b981',
    tasks: [
      { id: 't3_1', name: 'Estudar: HAZOP, guide words, causa-consequência-salvaguarda', type: 'study', xp: 50 },
      { id: 't3_2', name: 'Estudar: CCPS risk matrix, LOPA intro, ISD, PSM', type: 'study', xp: 50 },
      { id: 't3_3', name: 'Projeto: Estudo HAZOP — Alimentação de Reator (3 nós)', type: 'project', xp: 200 },
      { id: 't3_4', name: 'Vibe Coding: Gerador de Planilha HAZOP + Screener', type: 'tool', xp: 250 },
      { id: 't3_5', name: 'Cenário: PSSR de unidade de recuperação de solvente', type: 'scenario', xp: 100 },
      { id: 't3_6', name: 'Entregável: Template HAZOP + Relatório + Checklist', type: 'deliverable', xp: 150 }
    ]
  },
  {
    id: 4, name: 'LOPA, SIL & Incidentes', months: 'Meses 7-8', icon: '<i class="ph ph-target"></i>', color: '#10b981',
    tasks: [
      { id: 't4_1', name: 'Estudar: LOPA, IPLs, RRF, SIL, IEC 61511', type: 'study', xp: 50 },
      { id: 't4_2', name: 'Estudar: 5-Why, Bow-Tie, MOC, alarmes', type: 'study', xp: 50 },
      { id: 't4_3', name: 'Projeto: LOPA cenário alto risco + Investigação', type: 'project', xp: 200 },
      { id: 't4_4', name: 'Vibe Coding: Calculadora LOPA + Banco de Lições', type: 'tool', xp: 250 },
      { id: 't4_5', name: 'Cenário: SIL assessment — tanque atmosférico', type: 'scenario', xp: 100 },
      { id: 't4_6', name: 'Entregável: Relatório LOPA + Template Investigação', type: 'deliverable', xp: 150 }
    ]
  },
  {
    id: 5, name: 'Dados & Detecção de Anomalias', months: 'Meses 9-10', icon: '<i class="ph ph-chart-line"></i>', color: '#10b981',
    tasks: [
      { id: 't5_1', name: 'Estudar: Séries temporais, SPC, outliers, PCA', type: 'study', xp: 50 },
      { id: 't5_2', name: 'Estudar: Regressão, isolation forest, digital twin', type: 'study', xp: 50 },
      { id: 't5_3', name: 'Projeto: Sistema Detecção Anomalias (Tennessee Eastman)', type: 'project', xp: 200 },
      { id: 't5_4', name: 'Vibe Coding: Dashboard de Monitoramento de Planta', type: 'tool', xp: 250 },
      { id: 't5_5', name: 'Cenário: Early warning degradação de compressor', type: 'scenario', xp: 100 },
      { id: 't5_6', name: 'Entregável: Demo Anomalias + Dashboard + Relatório', type: 'deliverable', xp: 150 }
    ]
  },
  {
    id: 6, name: 'Integração & Lançamento', months: 'Meses 11-12', icon: '<i class="ph ph-rocket"></i>', color: '#10b981',
    tasks: [
      { id: 't6_1', name: 'Estudar: Troubleshooting, compliance, lifecycle cost', type: 'study', xp: 50 },
      { id: 't6_2', name: 'Estudar: Proposta, SoW, pricing, branding, LinkedIn', type: 'study', xp: 50 },
      { id: 't6_3', name: 'Capstone: Review integrado para planta', type: 'project', xp: 300 },
      { id: 't6_4', name: 'Vibe Coding: Plataforma Integrada de Consultoria', type: 'tool', xp: 300 },
      { id: 't6_5', name: 'Cenário: Engajamento completo — pharma', type: 'scenario', xp: 150 },
      { id: 't6_6', name: 'Entregável: Pacote completo de consultoria', type: 'deliverable', xp: 200 }
    ]
  }
];

const ACHIEVEMENTS = [
  { id: 'a_first_task', name: 'Primeiro Passo', desc: 'Complete sua primeira tarefa', icon: '<i class="ph ph-plant"></i>', check: s => s.totalCompleted >= 1 },
  { id: 'a_phase1', name: 'Domador de Fluidos', desc: 'Complete Fase 1', icon: '<i class="ph ph-drop"></i>', check: s => s.phaseComplete[1] },
  { id: 'a_phase2', name: 'Mestre do Balanço', desc: 'Complete Fase 2', icon: '<i class="ph ph-scales"></i>', check: s => s.phaseComplete[2] },
  { id: 'a_phase3', name: 'Olho do HAZOP', desc: 'Complete Fase 3', icon: '<i class="ph ph-warning-circle"></i>', check: s => s.phaseComplete[3] },
  { id: 'a_phase4', name: 'Guardião SIL', desc: 'Complete Fase 4', icon: '<i class="ph ph-shield"></i>', check: s => s.phaseComplete[4] },
  { id: 'a_phase5', name: 'Cientista de Dados', desc: 'Complete Fase 5', icon: '<i class="ph ph-magic-wand"></i>', check: s => s.phaseComplete[5] },
  { id: 'a_phase6', name: 'Consultor Completo', desc: 'Complete Fase 6', icon: '<i class="ph ph-tie"></i>', check: s => s.phaseComplete[6] },
  { id: 'a_first_code', name: 'Primeiro Código', desc: 'Construa uma ferramenta', icon: '<i class="ph ph-terminal-window"></i>', check: s => s.toolsBuilt >= 1 },
  { id: 'a_3tools', name: 'Dashboard Master', desc: 'Construa 3 ferramentas', icon: '<i class="ph ph-chart-line-up"></i>', check: s => s.toolsBuilt >= 3 },
  { id: 'a_all_tools', name: 'Arsenal Completo', desc: 'Construa 6 ferramentas', icon: '<i class="ph ph-rocket-launch"></i>', check: s => s.toolsBuilt >= 6 },
  { id: 'a_first_market', name: 'Primeiro Contato', desc: 'Completo tarefa comercial', icon: '<i class="ph ph-handshake"></i>', check: s => s.marketTasks >= 1 },
  { id: 'a_3market', name: 'Networker', desc: 'Complete 3 tarefas comerciais', icon: '<i class="ph ph-users-three"></i>', check: s => s.marketTasks >= 3 },
  { id: 'a_streak7', name: 'Semana Perfeita', desc: 'Sequência de 7 dias', icon: '<i class="ph ph-calendar-check"></i>', check: s => s.streak >= 7 },
  { id: 'a_streak30', name: 'Mês de Ferro', desc: 'Sequência de 30 dias', icon: '<i class="ph ph-calendar-star"></i>', check: s => s.streak >= 30 },
  { id: 'a_halfxp', name: 'Meio Caminho', desc: 'Acumule 6.500 XP', icon: '<i class="ph ph-lightning"></i>', check: s => s.xp >= 6500 },
  { id: 'a_allcomplete', name: 'Sócio-Fundador', desc: 'Complete TODAS as tarefas', icon: '<i class="ph ph-crown"></i>', check: s => s.totalCompleted >= 87 },
];

const QUOTES = [
  '"Build something real every month. Take every concept to market. Compound relentlessly."',
  '"The engineer who can calculate it, assess the risk, detect the anomaly, AND build the tool — that engineer is in a category of one."',
  '"Theory that is never tested in practice decays. Theory that is sold to a client compounds."',
  '"You do not need to become a software engineer. You need to become the translator."',
  '"Your portfolio is not a list of credentials — it is a collection of proof."',
  '"Interactive tools that a client can test are worth ten times more than reports they must read."',
  '"The hardest job is the first one. After that, momentum takes over."',
  '"Consistency beats intensity. Show up every day."',
  '"The market is looking for specialists who can translate — between the plant floor and the boardroom."',
  '"Even one averted shutdown pays for months of consulting."',
];

const TYPE_LABELS = {
  study: 'Estudo', project: 'Projeto', tool: 'Form. IA',
  scenario: 'Cenário', deliverable: 'Entrega', market: 'Comercial'
};

// ===== HÁBITOS SEMANAIS =====
const WEEKLY_HABITS = [
  { id: 'h_outreach', name: 'Fazer 5 abordagens (e-mail/visita)', icon: '<i class="ph ph-envelope-simple"></i>', category: 'outreach' },
  { id: 'h_followup', name: 'Follow-up em todos os contatos', icon: '<i class="ph ph-arrows-clockwise"></i>', category: 'outreach' },
  { id: 'h_build', name: 'Avançar na ferramenta (min 2h)', icon: '<i class="ph ph-wrench"></i>', category: 'velocity' },
  { id: 'h_task', name: 'Completar 1 tarefa do roadmap', icon: '<i class="ph ph-check-circle"></i>', category: 'velocity' },
  { id: 'h_ship', name: 'Mostrar progresso para um lead/mentor', icon: '<i class="ph ph-rocket"></i>', category: 'ship' },
  { id: 'h_content', name: 'Postar conteúdo técnico (LinkedIn)', icon: '<i class="ph ph-files"></i>', category: 'ship' },
];

let state = loadState();
let activePhase = 1;
let currentRoadmap = 'international'; 

function getActivePhases() {
  if (currentRoadmap === 'consultoria') return typeof CONSULTORIA_PHASES !== 'undefined' ? CONSULTORIA_PHASES : PHASES;
  if (currentRoadmap === 'vendas') return typeof VENDAS_PHASES !== 'undefined' ? VENDAS_PHASES : PHASES;
  return PHASES;
}
function getActiveDetails() {
  if (currentRoadmap === 'vendas') return typeof VENDAS_TASK_DETAILS !== 'undefined' ? VENDAS_TASK_DETAILS : {};
  return currentRoadmap === 'international' ? (typeof TASK_DETAILS !== 'undefined' ? TASK_DETAILS : {}) : (typeof CONSULTORIA_TASK_DETAILS !== 'undefined' ? CONSULTORIA_TASK_DETAILS : {});
}
function switchRoadmap(rm) {
  currentRoadmap = rm;
  activePhase = 1;
  render();
}

function defaultState() {
  return { completed: {}, streak: 0, lastDate: null, unlockedAchievements: {}, habits: {}, habitsWeek: null };
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

function calcXP() {
  let xp = 0;
  PHASES.forEach(p => p.tasks.forEach(t => { if (state.completed[t.id]) xp += t.xp; }));
  if (typeof CONSULTORIA_PHASES !== 'undefined') CONSULTORIA_PHASES.forEach(p => p.tasks.forEach(t => { if (state.completed[t.id]) xp += t.xp; }));
  if (typeof VENDAS_PHASES !== 'undefined') VENDAS_PHASES.forEach(p => p.tasks.forEach(t => { if (state.completed[t.id]) xp += t.xp; }));
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
  const allPhases = [...PHASES];
  if (typeof CONSULTORIA_PHASES !== 'undefined') allPhases.push(...CONSULTORIA_PHASES);
  if (typeof VENDAS_PHASES !== 'undefined') allPhases.push(...VENDAS_PHASES);
  
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
    if (typeof CONSULTORIA_PHASES !== 'undefined' && CONSULTORIA_PHASES.includes(p)) suffix = 'con';
    if (typeof VENDAS_PHASES !== 'undefined' && VENDAS_PHASES.includes(p)) suffix = 'ven';
    phaseComplete[p.id + '_' + suffix] = pDone === p.tasks.length;
  });
  
  PHASES.forEach(p => {
    const done = p.tasks.filter(t => state.completed[t.id]).length;
    phaseComplete[p.id] = done === p.tasks.length;
  });
  return { xp, rank, totalCompleted, totalTasks, toolsBuilt, marketTasks, phaseComplete, streak: state.streak };
}

function getCurrentISOWeek() {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = Math.floor((now - start) / 86400000);
  return `${now.getFullYear()}-W${Math.ceil((diff + start.getDay() + 1) / 7)}`;
}

function getHabitsForWeek() {
  const week = getCurrentISOWeek();
  if (state.habitsWeek !== week) {
    state.habits = {};
    state.habitsWeek = week;
    saveState();
  }
  return state.habits;
}

function toggleHabit(habitId) {
  getHabitsForWeek();
  if (state.habits[habitId]) {
    delete state.habits[habitId];
  } else {
    state.habits[habitId] = true;
  }
  saveState();
  renderHabits();
}

function renderHabits() {
  const container = document.getElementById('weekly-habits');
  if (!container) return;
  const habits = getHabitsForWeek();
  const done = WEEKLY_HABITS.filter(h => habits[h.id]).length;
  const total = WEEKLY_HABITS.length;
  const pct = Math.round((done / total) * 100);

  const categoryLabels = {
    outreach: 'Prospecção',
    velocity: 'Velocidade',
    ship: 'Publicação'
  };

  const grouped = {};
  WEEKLY_HABITS.forEach(h => {
    if (!grouped[h.category]) grouped[h.category] = [];
    grouped[h.category].push(h);
  });

  container.innerHTML = `
    <div class="habits-header" style="margin-bottom: 24px; display:flex; gap:16px;">
      <div class="habits-title" style="flex:1;">
        <h3 style="font-size:1.1rem; color:var(--text-primary);"><i class="ph ph-repeat"></i> Hábitos Semanais</h3>
        <p style="color:var(--text-secondary); font-size:0.85rem;">Consistência: ${done}/${total} hábitos · ${pct}% efetivo</p>
      </div>
    </div>
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap:16px;">
      ${Object.entries(grouped).map(([cat, items]) => `
        <div style="border: 1px solid var(--border); background: var(--bg-glass); border-radius: 8px; padding: 16px;">
          <div style="font-size:0.65rem; text-transform:uppercase; letter-spacing:0.1em; font-family:'JetBrains Mono', monospace; color:var(--text-muted); margin-bottom:12px;">${categoryLabels[cat]}</div>
          ${items.map(h => {
            const checked = !!habits[h.id];
            return `<div style="display:flex; align-items:center; gap:8px; margin-bottom:8px; cursor:pointer; opacity:${checked ? '0.5':'1'}" onclick="toggleHabit('${h.id}')">
              <div style="width:18px;height:18px;border:1px solid ${checked?'var(--text-secondary)':'var(--text-muted)'}; background:${checked?'var(--text-secondary)':'transparent'};border-radius:4px;"></div>
              <span style="font-size:1rem;color:var(--text-primary);">${h.icon}</span>
              <span style="font-size:0.85rem;">${h.name}</span>
            </div>`;
          }).join('')}
        </div>
      `).join('')}
    </div>
  `;
}

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

function launchConfetti(duration = 1500) {
  const canvas = document.getElementById('confetti-canvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#10b981', '#34d399', '#6ee7b7', '#f8fafc', '#94a3b8']; // Emerald/slate
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

function showXPPopup(amount) {
  const popup = document.getElementById('xp-popup');
  if(!popup) return;
  popup.querySelector('.xp-amount').textContent = `+${amount}`;
  popup.classList.remove('show');
  void popup.offsetWidth;
  popup.classList.add('show');
}

function showRankUp(rank) {
  const overlay = document.getElementById('rank-up-overlay');
  if(!overlay) return;
  overlay.querySelector('.rank-emoji').innerHTML = RANKS[rank].icon;
  overlay.querySelector('h2').textContent = RANKS[rank].title;
  overlay.querySelector('p').textContent = `Nível ${rank} desbloqueado!`;
  overlay.classList.add('show');
  launchConfetti(3000);
  overlay.querySelector('.dismiss').onclick = () => overlay.classList.remove('show');
}

function render() {
  const stats = calcStats();
  const nextRank = stats.rank < RANKS.length - 1 ? stats.rank + 1 : stats.rank;
  const xpForCurrent = RANKS[stats.rank].xp;
  const xpForNext = RANKS[nextRank].xp;
  const xpProgress = xpForNext > xpForCurrent ? ((stats.xp - xpForCurrent) / (xpForNext - xpForCurrent)) * 100 : 100;

  document.getElementById('stat-rank').innerHTML = `${RANKS[stats.rank].icon} <span style="font-size: 1rem; margin-left: 6px;">${RANKS[stats.rank].title}</span>`;
  document.getElementById('stat-xp').textContent = stats.xp.toLocaleString();
  document.getElementById('stat-streak').textContent = `${stats.streak}x`;
  document.getElementById('stat-tasks').textContent = `${stats.totalCompleted}/${stats.totalTasks}`;
  document.getElementById('stat-tasks-detail').textContent = `${Math.round(stats.totalCompleted / stats.totalTasks * 100)}% completo`;

  document.getElementById('current-rank-label').innerHTML = `${RANKS[stats.rank].title}`;
  document.getElementById('next-rank-label').textContent = stats.rank < RANKS.length - 1 ? `Próximo: ${RANKS[nextRank].title}` : 'Nível Máximo!';
  document.getElementById('xp-numbers').textContent = `${stats.xp} / ${xpForNext} XP`;
  document.getElementById('xp-bar-fill').style.width = `${Math.min(xpProgress, 100)}%`;

  renderHabits();

  document.getElementById('roadmap-tabs').innerHTML = `
    <div class="roadmap-tab ${currentRoadmap === 'international' ? 'active' : ''}" onclick="switchRoadmap('international')">
      <i class="ph ph-books"></i> Formação Técnica
    </div>
    <div class="roadmap-tab ${currentRoadmap === 'consultoria' ? 'active' : ''}" onclick="switchRoadmap('consultoria')">
      <i class="ph ph-briefcase"></i> Consultoria
    </div>
    <div class="roadmap-tab ${currentRoadmap === 'vendas' ? 'active' : ''}" onclick="switchRoadmap('vendas')">
      <i class="ph ph-handshake"></i> Vendas
    </div>
    <div class="roadmap-tab ${currentRoadmap === 'calendario' ? 'active' : ''}" onclick="switchRoadmap('calendario')">
      <i class="ph ph-calendar"></i> Calendário
    </div>
  `;

  if (currentRoadmap === 'calendario') {
    document.getElementById('phase-tabs').innerHTML = '';
    document.getElementById('phase-content').innerHTML = typeof renderCalendar !== 'undefined' ? renderCalendar() : '<p>Nenhuma configuração de calendário encontrada.</p>';
  } else {
    const phases = getActivePhases();
    const tabsContainer = document.getElementById('phase-tabs');
    tabsContainer.innerHTML = phases.map(p => {
      const done = p.tasks.filter(t => state.completed[t.id]).length;
      return `<div class="phase-tab ${activePhase === p.id ? 'active' : ''}" data-phase="${p.id}" onclick="setPhase(${p.id})">
        0${p.id} ${p.name.split(' ')[0]}
      </div>`;
    }).join('');

    const phase = phases.find(p => p.id === activePhase);
    if(phase) {
        const phaseDone = phase.tasks.filter(t => state.completed[t.id]).length;
        document.getElementById('phase-content').innerHTML = `
          <div class="phase-header">
            <div class="phase-icon">${phase.icon || '<i class="ph ph-folder"></i>'}</div>
            <div class="phase-info">
              <h2>${phase.name}</h2>
              <p>${phase.months} · ${phaseDone}/${phase.tasks.length} tarefas completas</p>
            </div>
          </div>
          <div class="task-list">
            ${phase.tasks.map(t => {
              const done = !!state.completed[t.id];
              return `<div class="task-item ${done ? 'completed' : ''}" id="task-${t.id}">
                <div class="task-checkbox" onclick="event.stopPropagation(); toggleTask('${t.id}', ${t.xp})">${done ? '<i class="ph ph-check"></i>' : ''}</div>
                <div class="task-body" onclick="openTaskDetail('${t.id}')">
                  <span class="task-type ${t.type}">${TYPE_LABELS[t.type] || t.type}</span>
                  <span class="task-name">${t.name}</span>
                </div>
                <span class="task-xp">+${t.xp} XP</span>
              </div>`;
            }).join('')}
          </div>
        `;
    }
  }

  const el = document.getElementById('achievements-grid');
  if(el) {
      el.innerHTML = ACHIEVEMENTS.map(a => {
        const unlocked = !!state.unlockedAchievements[a.id];
        return `<div class="achievement ${unlocked ? 'unlocked' : 'locked'}" id="ach-${a.id}">
          <span class="achievement-icon" style="color:var(--text-primary);">${a.icon}</span>
          <div class="achievement-info">
            <div class="name">${a.name}</div>
            <div class="desc">${a.desc}</div>
          </div>
        </div>`;
      }).join('');
  }

  const quoteEl = document.getElementById('daily-quote-text');
  if(quoteEl) {
      const quoteIdx = Math.floor(Date.now() / 86400000) % QUOTES.length;
      quoteEl.textContent = QUOTES[quoteIdx];
  }
}

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

  if (newStats.rank > prevStats.rank) {
    setTimeout(() => showRankUp(newStats.rank), 600);
  }

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

  const taskEl = document.getElementById(`task-${taskId}`);
  if (taskEl && state.completed[taskId]) {
    taskEl.classList.add('just-completed');
    setTimeout(() => taskEl.classList.remove('just-completed'), 500);
  }

  render();
}

function openTaskDetail(taskId) {
  const detail = getActiveDetails()[taskId];
  if (!detail) return;
  const done = !!state.completed[taskId];
  const phases = getActivePhases();
  let task = null;
  phases.forEach(p => { p.tasks.forEach(t => { if(t.id === taskId) task = t; }); });
  if(!task) return;
  
  const modal = document.getElementById('task-detail-modal');
  modal.querySelector('.detail-title').textContent = detail.title;
  modal.querySelector('.detail-what').textContent = detail.what;
  modal.querySelector('.detail-todo').innerHTML = detail.todo.map(item => `<li>${item}</li>`).join('');
  modal.querySelector('.detail-resources').textContent = detail.resources;
  modal.querySelector('.detail-criteria').textContent = detail.criteria;
  modal.querySelector('.detail-xp-value').textContent = `+${task.xp} XP`;
  const btn = modal.querySelector('.detail-complete-btn');
  btn.innerHTML = done ? 'DESMARCAR <i class="ph ph-x"></i>' : 'CONCLUIR <i class="ph ph-check"></i>';
  btn.className = 'detail-complete-btn ' + (done ? 'undo' : '');
  btn.onclick = () => { toggleTask(taskId, task.xp); openTaskDetail(taskId); };
  modal.classList.add('show');
}

function closeDetail() {
  document.getElementById('task-detail-modal').classList.remove('show');
}

document.addEventListener('DOMContentLoaded', () => {
  render();
  document.getElementById('task-detail-modal').addEventListener('click', (e) => {
    if (e.target.classList.contains('task-detail-modal')) closeDetail();
  });
});

// ===== CALENDAR RENDER =====
function renderCalendar() {
  if (typeof WEEKLY_SCHEDULE === 'undefined' || typeof getCurrentWeek === 'undefined') return '<p>Calendário não encontrado.</p>';
  const curWeek = getCurrentWeek();
  return `
    <div class="cal-header">
      <div class="cal-icon"><i class="ph ph-calendar"></i></div>
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
              let src = '<i class="ph ph-books"></i>';
              if (td.source === 'consultoria') src = '<i class="ph ph-briefcase"></i>';
              if (td.source === 'vendas') src = '<i class="ph ph-handshake"></i>';
              return `<div class="task-item ${done ? 'completed' : ''}" id="task-${tid}">
                <div class="task-checkbox" onclick="event.stopPropagation(); toggleTask('${tid}', ${td.task.xp})">${done ? '<i class="ph ph-check"></i>' : ''}</div>
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
  btn.innerHTML = done ? 'DESMARCAR <i class="ph ph-x"></i>' : 'CONCLUIR <i class="ph ph-check"></i>';
  btn.className = 'detail-complete-btn ' + (done ? 'undo' : '');
  btn.onclick = () => { toggleTask(taskId, td.task.xp); openTaskDetailCal(taskId); };
  modal.classList.add('show');
}

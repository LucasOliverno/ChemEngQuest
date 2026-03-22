// ===== VENDAS & CORAGEM: PHASES & TASKS =====
const VENDAS_PHASES = [
  {
    id: 1, name: 'Mindset & Rejeição', months: 'Meses 1-2', icon: '🧠', color: '#8b5cf6',
    tasks: [
      { id: 'v1_1', name: 'Estudo: SPIN Selling (Neil Rackham)', type: 'study', xp: 100 },
      { id: 'v1_2', name: 'Estudo: Fanatical Prospecting (Jeb Blount)', type: 'study', xp: 100 },
      { id: 'v1_3', name: 'Prática: Tomar 10 "Nãos" intencionais', type: 'scenario', xp: 200 },
      { id: 'v1_4', name: 'Prática: Gravar 5 vídeos do Elevator Pitch', type: 'deliverable', xp: 150 },
    ]
  },
  {
    id: 2, name: 'Cara de Pau Estratégica', months: 'Meses 3-4', icon: '🗣️', color: '#f59e0b',
    tasks: [
      { id: 'v2_1', name: 'Estudo: Copywriting B2B (AIDA, PAS)', type: 'study', xp: 100 },
      { id: 'v2_2', name: 'Prática: Convidar 2 decisores para um café virtual', type: 'market', xp: 250 },
      { id: 'v2_3', name: 'Prática: Ir a 1 evento focado só em networking', type: 'market', xp: 200 },
      { id: 'v2_4', name: 'Desafio: 10 Cold Calls no mesmo dia', type: 'scenario', xp: 300 },
    ]
  },
  {
    id: 3, name: 'Negociação & Fechamento', months: 'Meses 5-6', icon: '🤝', color: '#10b981',
    tasks: [
      { id: 'v3_1', name: 'Estudo: Never Split the Difference (Chris Voss)', type: 'study', xp: 100 },
      { id: 'v3_2', name: 'Prática: Matriz de Objeções (Criar documento)', type: 'deliverable', xp: 150 },
      { id: 'v3_3', name: 'Simulação: Role-play de Reunião com amigo', type: 'scenario', xp: 150 },
      { id: 'v3_4', name: 'Mercado: Proposta focada 100% no ROI financeiro', type: 'market', xp: 300 },
    ]
  }
];

// ===== VENDAS: TASK DETAILS =====
const VENDAS_TASK_DETAILS = {
  v1_1: { title: 'Livro: SPIN Selling', what: 'O modelo definitivo para vendas B2B. Ensina a parar de vender produto e começar a investigar o problema do cliente através de perguntas de Situação, Problema, Implicação e Necessidade de Solução.', todo: ['Ler/ouvir o livro SPIN Selling de Neil Rackham', 'Anotar 5 exemplos de perguntas de Implicação para cervejarias', 'Mudar o foco da sua primeira reunião: de "falar de mim" para "ouvir o cliente"'], resources: 'Livro SPIN Selling (Neil Rackham)', criteria: 'Leitura concluída e 5 perguntas formuladas.' },
  
  v1_2: { title: 'Livro: Fanatical Prospecting', what: 'Um soco no estômago sobre a importância de prospectar todos os dias. Ajuda a curar a procrastinação em vendas e ensina a ser imune à rejeição.', todo: ['Ler/ouvir o livro Fanatical Prospecting de Jeb Blount', 'Entender a "Regra dos 30 dias" em vendas', 'Anotar as táticas de cold calling e interrupção de padrão'], resources: 'Livro Fanatical Prospecting (Jeb Blount)', criteria: 'Resumo de 1 página com os principais aprendizados.' },
  
  v1_3: { title: 'Terapia da Rejeição: 10 Nãos', what: 'O medo do "Não" paralisa engenheiros. O objetivo aqui é falhar de propósito para dessensibilizar o cérebro à rejeição comercial.', todo: ['Buscar proativamente receber 10 respostas negativas (pode ser pedir desconto na padaria, mandar cold e-mails agressivos, ou fazer ligações difíceis)', 'O sucesso da tarefa é tomar o "Não"', 'Anotar como você se sentiu após o 5º não (geralmente fica mais fácil)'], resources: 'Conceito: Rejection Therapy (Jia Jiang)', criteria: 'Planilha com 10 "Nãos" recebidos e registrados.' },
  
  v1_4: { title: 'Elevator Pitch (Gravação)', what: 'Se você não consegue explicar o que faz de forma atraente em 60 segundos gravado, você não fará isso ao vivo.', todo: ['Escrever um script de 60 segundos focado na dor do cliente ("Ajudo indústrias a pararem de queimar dinheiro com energia...")', 'Gravar no celular olhando para a câmera', 'Fazer isso 5 vezes até soar natural', 'Analisar e corrigir linguagem corporal e impostação vocal'], resources: 'Câmera do celular', criteria: 'Ter 1 vídeo de 60s onde a mensagem está clara, fluida e natural.' },
  
  v2_1: { title: 'Estudo em Copywriting B2B', what: 'Entender como escrever textos (e-mails, propostas, LinkedIn) que as pessoas realmente queiram ler e responder.', todo: ['Estudar framework AIDA (Atenção, Interesse, Desejo, Ação)', 'Estudar framework PAS (Problema, Agitação, Solução)', 'Reescrever seu template principal de Cold E-mail usando o PAS'], resources: 'Artigos sobre Copywriting para Vendas B2B', criteria: 'Novo script de cold e-mail pronto usando PAS.' },
  
  v2_2: { title: 'Café Virtual com Decisor', what: 'Prática pura de networking. Convidar alguém para um café rápido online apenas para "aprender sobre os desafios da indústria", sem vender nada.', todo: ['Selecionar 5 gerentes ou diretores no LinkedIn', 'Mandar mensagem sincera: "Estudando engenharia e transição para o mercado. Gostaria de 15 min do seu tempo para ouvir sobre sua trajetória"', 'Executar 2 reuniões (calls) com o único objetivo de ouvir ativamente'], resources: 'LinkedIn, plataforma de vídeo', criteria: '2 conversas realizadas sem qualquer pitch de venda.' },
  
  v2_3: { title: 'Evento Só Para Networking', what: 'Sair da zona de conforto. Ir a um ambiente físico para puxar conversa e exercitar soft skills.', todo: ['Achar 1 evento na sua cidade (Meetup, evento na FIEMG, feira de cerveja)', 'Meta: Entrar, cumprimentar as pessoas, trocar cartões/LinkedIn com no mínimo 3 desconhecidos', 'Manter o foco em fazer as pessoas falarem sobre os negócios delas'], resources: 'Meetup, Sympla, LinkedIn', criteria: 'Conectar com 3 desconhecidos pessoalmente.' },
  
  v2_4: { title: 'Desafio: 10 Cold Calls', what: 'O monstro final: a ligação fria. Ligar interrompendo alguém e tentando engajar. É a forma mais rápida de criar "casca" emocional.', todo: ['Selecionar 10 leads da sua planilha (pode ser leads de menor prioridade ou mais longe)', 'Reservar 1 hora fixa na agenda', 'Pegar o telefone e ligar 10 vezes em sequência (batching)', 'Mesmo que tome 10 foras ou caia em secretárias, o fluxo não pode parar'], resources: 'Telefone, Lista de 10 leads, Script de ligação', criteria: '10 números discados no mesmo dia.' },
  
  v3_1: { title: 'Livro: Never Split the Difference', what: 'O guia mestre de negociação escrito por um ex-negociador de reféns do FBI (Chris Voss).', todo: ['Ler/ouvir Never Split the Difference', 'Aprender técnicas de "Mirroring" (espelhamento) e "Labeling" (rotulagem)', 'Aprender a buscar o "That\'s right" (Isso mesmo) em vez de um simples "Sim"'], resources: 'Livro Never Split the Difference (Chris Voss)', criteria: 'Resumo com as 5 principais técnicas aprendidas.' },
  
  v3_2: { title: 'Matriz de Objeções', what: 'Um bom consultor comercial já sabe as 5 respostas de "não" que o cliente vai dar, e já sabe como contornar.', todo: ['Listar as objeções comuns: "Não tenho orçamento", "Já temos equipe interna", "Agora não é o momento", "Está muito caro"', 'Para cada objeção, escrever um script de resposta que não seja confronto, mas sim entendimento (Labeling)', 'Memorizar essas respostas'], resources: 'Seu conhecimento do mercado + técnicas de negociação', criteria: 'Documento pronto com 5+ objeções documentadas e com script de contorno.' },
  
  v3_3: { title: 'Role-play de Reunião de Vendas', what: 'Treinar em ambiente seguro. Reunião simulada onde o prospect dificulta o fechamento.', todo: ['Pedir a um amigo/colega para agir como um "dono de fábrica cético"', 'Fazer uma reunião falsa de 20 minutos', 'O amigo deve apresentar as objeções da sua matriz ("Está muito caro, vou pensar")', 'Praticar o contorno sob pressão', 'Pedir feedback sincero'], resources: 'Um amigo disposto a atuar, Zoom ou presencial', criteria: 'Sessão de prática realizada com feedback recebido.' },
  
  v3_4: { title: 'Proposta Focada em ROI', what: 'Propostas de engenheiros geralmente focam no método ("Vou usar Python, equações diferenciais, análises termodinâmicas"). O cliente não liga. Ele liga para o Retorno Financeiro.', todo: ['Transformar sua proposta padrão.', 'Regra: para cada termo técnico (ex: análise de fator de potência), deve haver um impacto em R$ associado.', 'A página 1 (Sumário Executivo) da sua proposta deve ter apenas o Problema, o Valor Investido, e o Valor Economizado (ROI)', 'Enviar essa proposta para o próximo lead quente'], resources: 'Templates de propostas baseadas em valor', criteria: 'Proposta reescrita e template salvo como "Value-Based Proposal".' }
};

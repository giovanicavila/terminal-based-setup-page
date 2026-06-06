export const pt = {
  common: {
    pageTitle: "Terminal Dev Stack",
    pageSubtitle:
      "Tmux + Neovim/LazyVim + Yazi + OpenCoder — Terminal como ambiente completo de desenvolvimento",
    themeToggle: "Alternar tema",
    languageToggle: "Alternar idioma",
    navigation: "Navegação",
    onThisPage: "Nesta página",
    overview: "Visão geral",
    installation: "Instalação",
    configuration: "Configuração",
    usage: "Uso",
    shortcuts: "Atalhos",
    troubleshooting: "Troubleshooting",
    copyCode: "Copiar código",
    copied: "Copiado!",
    macOS: "macOS",
    ubuntu: "Ubuntu/Debian",
    verify: "Verificar instalação",
    prerequisites: "Pré-requisitos",
    setupScript: "Script de setup automático",
    githubSetup: "Conectando ao GitHub",
    recommendedOrder: "Ordem de instalação recomendada",
    workflow: "Fluxo de trabalho",
  },

  hero: {
    title: "Stack de Desenvolvimento no Terminal",
    subtitle:
      "Um ambiente de desenvolvimento completo e rápido, sem IDE pesada, sem mouse obrigatório, sem Electron. Tudo no terminal.",
    ctaText: "Começar a instalação",
    ctaText2: "Ver stack completa",
  },

  why: {
    title: "Por que essa stack?",
    tool: "Ferramenta",
    role: "Papel",
    advantage: "Vantagem principal",
    tmuxRole: "Window manager do terminal",
    tmuxAdvantage: "Sessões persistentes, múltiplos painéis, multiplexação",
    neovimRole: "Editor de código",
    neovimAdvantage: "Extensível, rápido, LSP nativo, ecossistema enorme",
    yaziRole: "File manager no terminal",
    yaziAdvantage: "Navegação visual com preview, integra com nvim",
    opencodeRole: "Coding agent no terminal",
    opencodeAdvantage: "IA no contexto do projeto, sem sair do terminal",
  },

  features: {
    tmuxTitle: "tmux — Multiplexador de terminal",
    tmuxDesc:
      "Sessões persistentes, painéis independentes e amigável para remote work",
    tmuxFeatures: [
      "Sessões persistentes: fecha o terminal, reconecta depois exatamente de onde parou",
      "Painéis independentes: editor, file manager e agente de IA lado a lado na mesma tela",
      "Remote-friendly: perfeito para trabalhar via SSH — a sessão continua mesmo se a conexão cair",
      "Scriptável: automatiza a abertura do ambiente com um único comando",
      "Sem overhead: consome praticamente zero de CPU/RAM comparado a qualquer IDE",
    ],

    neovimTitle: "Neovim + LazyVim",
    neovimDesc:
      "Editor extensível com LSP nativo, fuzzy finder e git integration",
    neovimFeatures: [
      "LazyVim é uma 'distro' do Neovim: vem configurado com LSP, syntax highlighting, fuzzy finder, git integration — tudo funcionando no primeiro nvim .",
      "LSP nativo: autocompletion, go-to-definition, diagnostics em tempo real para Python, TypeScript, Lua, Go, Rust...",
      "Lazy loading: plugins carregam sob demanda — inicialização em ~50ms mesmo com 60+ plugins",
      "Telescope: fuzzy finder para arquivos, grep, buffers, símbolos — substitui o file explorer tradicional",
      "Modal editing: curva de aprendizado real, mas produtividade muito maior depois de interiorizado",
    ],

    yaziTitle: "Yazi — File manager moderno",
    yaziDesc: "Navegação visual com previews nativos, escrito em Rust",
    yaziFeatures: [
      "Previews nativos: imagens, PDFs, vídeos, syntax highlighting de código diretamente no terminal",
      "Navegação tri-pane: diretório pai | diretório atual | preview do arquivo selecionado",
      "Escrito em Rust: extremamente rápido mesmo em diretórios com milhares de arquivos",
      "Integração com nvim: plugin yazi.nvim abre o arquivo direto no buffer atual ao pressionar Enter",
      "Operações em lote: renomear, mover, copiar múltiplos arquivos com seleção visual",
    ],

    opencodeTitle: "OpenCoder — Coding agent no terminal",
    opencodeDesc:
      "Agente de IA que entende o contexto do projeto e edita arquivos diretamente",
    opencodeFeatures: [
      "Contexto completo do projeto: lê arquivos, entende a estrutura, edita diretamente — não é um chat que copia e cola",
      "Multi-provider: funciona com OpenRouter (modelos gratuitos), Anthropic, OpenAI, Ollama (local)",
      "Dentro do tmux: fica num pane ao lado do editor, sem trocar de janela",
      "Modo agente: pode rodar comandos, criar arquivos, fazer refatorações multi-arquivo",
    ],
  },

  install: {
    title: "Instalação",
    step: "Passo",
    description: "Descrição",
    command: "Comando",
    configFile: "Arquivo de configuração",
    verifyInstall: "Verificar instalação",
    tmuxInstall: "Instalar tmux",
    tmuxConfig: "Configurar ~/.tmux.conf",
    tpmInstall: "Instalar TPM (Plugin Manager)",
    neovimInstall: "Instalar Neovim",
    lazyvimDeps: "Instalar dependências do LazyVim",
    lazyvimInstall: "Instalar LazyVim starter",
    pythonExtras: "Extras para Python e Data Science",
    yaziRust: "Instalar Rust (necessário para compilar o Yazi)",
    yaziDeps: "Instalar dependências de preview",
    yaziInstall: "Instalar Yazi via Cargo",
    yaziConfig: "Configurar ~/.config/yazi/yazi.toml",
    yaziNvim: "Plugin de integração com Neovim",
    opencodeInstall: "Instalar OpenCoder",
    opencodeConfig: "Configurar OpenCoder",
    opencodeOllama: "Com Ollama (100% local, sem API key)",
  },

  config: {
    tmuxTitle: "Configuração do tmux",
    tmuxDesc:
      "O arquivo ~/.tmux.conf na raiz do seu home configura prefixo, navegação, mouse e mais",
    tmuxContent: `# Troca o prefix de Ctrl+b para Ctrl+a (mais ergonômico)
set -g prefix C-a
unbind C-b
bind C-a send-prefix

# Navegar entre panes com Alt + setas
bind -n M-Left  select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up    select-pane -U
bind -n M-Down  select-pane -D

# Redimensionar panes com prefix + H/J/K/L
bind -r H resize-pane -L 5
bind -r L resize-pane -R 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5

# Habilita mouse (scroll, clique em panes)
set -g mouse on

# True color — necessário para temas do Neovim
set -g default-terminal "tmux-256color"
set -ag terminal-overrides ",xterm-256color:RGB"

# Indexa janelas e panes a partir de 1
set -g base-index 1
set -g pane-base-index 1
set-window-option -g pane-base-index 1
set-option -g renumber-windows on

# Status bar minimalista
set -g status-position bottom
set -g status-style "fg=colour244,bg=colour233"
set -g status-left " #[bold]#S#[nobold]  "
set -g status-right " %a %H:%M "
set -g window-status-current-style "fg=colour255,bold"`,

    yaziTitle: "Configuração do Yazi",
    yaziDesc:
      "Arquivo ~/.config/yazi/yazi.toml define layout, preview e integração com nvim",
    yaziContent: `[manager]
ratio          = [1, 3, 4]  # largura: pai | atual | preview
sort_by        = "natural"
sort_sensitive = false
sort_reverse   = false
show_hidden    = false

[preview]
image_filter = "triangle"
image_quality = 75

[opener]
edit = [
  { run = 'nvim "$@"', desc = "Neovim", block = true },
]`,

    opencodeTitle: "Configuração do OpenCoder",
    opencodeDesc:
      "Arquivo ~/.config/opencode/config.json define modelo e provedor de IA",
    opencodeContent: `{
  "model": "openrouter/google/gemini-2.0-flash-exp:free",
  "provider": {
    "openrouter": {
      "apiKey": "sk-or-SUA_CHAVE_AQUI"
    }
  }
}`,
    lazyvimExtras: `return {
  -- Linguagens
  { import = "lazyvim.plugins.extras.lang.python" },
  { import = "lazyvim.plugins.extras.lang.json" },
  { import = "lazyvim.plugins.extras.lang.markdown" },
  { import = "lazyvim.plugins.extras.lang.typescript" },

  -- Ferramentas
  { import = "lazyvim.plugins.extras.editor.telescope" },
  { import = "lazyvim.plugins.extras.util.mini-hipatterns" },

  -- Git
  { import = "lazyvim.plugins.extras.editor.git" },
}`,
    yaziNvimPlugin: `return {
  "mikavilpas/yazi.nvim",
  event = "VeryLazy",
  keys = {
    { "<leader>fy", "<cmd>Yazi<cr>", desc = "Yazi (diretório do buffer)" },
    { "<leader>fY", "<cmd>Yazi cwd<cr>", desc = "Yazi (diretório de trabalho)" },
    { "<c-up>", "<cmd>Yazi toggle<cr>", desc = "Yazi (abre/fecha)" },
  },
  opts = {
    open_for_directories = true,
    keymaps = { show_help = "<f1>" },
  },
}`,
  },

  usage: {
    title: "Como usar no dia a dia",
    firstTime: "Primeiro uso — sequência de abertura",
    firstTimeDesc:
      "Ao abrir o terminal pela primeira vez, você está fora do tmux. O fluxo é:",
    reconnect: "Para reconectar depois de fechar o terminal:",
    reconnectDesc:
      "A sessão continua rodando em background mesmo depois de fechar o terminal.",
    typicalFlow: "Fluxo típico de trabalho",
    typicalFlowDesc: `Terminal
  └── tmux (sessão "dev")
        ├── Janela 1: nvim .          ← edição de código
        ├── Janela 2: yazi            ← navegação de arquivos
        │            opencode         ← agente de IA (pane do lado)
        └── Janela 3: shell livre     ← rodar comandos, git, testes`,

    windowManagement: "Gerenciando janelas (tabs do tmux)",
    paneManagement: "Dividindo a tela em painéis (panes)",
    paneNav: "Navegação entre panes (configurado no .tmux.conf)",
    paneResize: "Redimensionar panes (prefix + letra)",

    neovimUsage: "Usando o Neovim (LazyVim)",
    neovimNav: "Navegação básica",
    neovimEdit: "Edição",
    neovimSplit: "Dividir o editor internamente",
    neovimGit: "Git com lazygit",

    yaziUsage: "Usando o Yazi",
    yaziNav: "Navegação no Yazi",
    yaziOps: "Operações com arquivos",

    opencodeUsage: "Usando o OpenCoder",
    opencodeDesc:
      "Sempre inicia na raiz do projeto para que ele tenha o contexto completo:",
    opencodeExamples: `> explica o que a função main faz
> refatora utils.py para usar dataclasses
> cria um arquivo de testes para o módulo X
> qual é o bug nessa função?
> adiciona type hints em todos os arquivos Python`,

    lazygitUsage: "Usando o lazygit — Git com interface visual",
    lazygitDesc:
      "Interface TUI completa para Git: commitar, push, pull, branches, stash, resolver conflitos — tudo sem digitar comandos git.",
    lazygitLayout: "Layout da interface",
    lazygitBasic: "Fluxo básico: stage → commit → push",
    lazygitBranches: "Branches",
    lazygitCommits: "Commits",
    lazygitStash: "Stash",
    lazygitConflicts: "Resolver conflitos de merge",
    lazygitOther: "Outros atalhos úteis",

    sessions: "Sessões tmux",
    scroll: "Scroll e copy mode",
  },

  setupScript: {
    title: "Script de setup automático da sessão",
    desc: "Crie um script que automatiza a abertura do ambiente completo com um único comando:",
    scriptContent: `#!/usr/bin/env bash
# Uso: ./dev.sh [caminho-do-projeto]
# Exemplo: ./dev.sh ~/projects/meu-rag

SESSION="dev"
PROJECT="$\\{1:-$HOME}"

# Não cria sessão duplicada
if tmux has-session -t "$SESSION" 2>/dev/null; then
  tmux attach -t "$SESSION"
  exit 0
fi

# Cria sessão detachada
tmux new-session -d -s "$SESSION" -x "$(tput cols)" -y "$(tput lines)"

# Janela 1: editor principal (nvim)
tmux rename-window -t "$SESSION:1" "editor"
tmux send-keys -t "$SESSION:1" "cd $PROJECT && nvim ." Enter

# Janela 2: yazi + opencode lado a lado
tmux new-window -t "$SESSION" -n "tools"
tmux send-keys -t "$SESSION:2" "cd $PROJECT && yazi" Enter
tmux split-window -t "$SESSION:2" -h -p 50
tmux send-keys -t "$SESSION:2" "cd $PROJECT && opencode" Enter

# Janela 3: shell livre
tmux new-window -t "$SESSION" -n "shell"
tmux send-keys -t "$SESSION:3" "cd $PROJECT" Enter

# Foca na janela do editor
tmux select-window -t "$SESSION:1"

# Abre a sessão
tmux attach -t "$SESSION"`,
    aliasSetup: "echo 'alias dev=\"~/scripts/dev.sh\"' >> ~/.zshrc",
    usage: "dev ~/projects/meu-projeto",
  },

  troubleshooting: {
    title: "Troubleshooting",
    invalidStyle: "invalid style: fg=#888,bg=#111",
    invalidStyleDesc:
      "O tmux não aceita hex curto (3 dígitos). Usa colour em vez de hex:",
    wrongColors: "Cores incorretas no Neovim dentro do tmux",
    wrongColorsDesc:
      "Confirma que tem no ~/.tmux.conf as configs de true color:",
    cargoNotFound: "cargo: command not found",
    cargoNotFoundDesc: "Adiciona o Rust ao PATH permanentemente no ~/.zshrc:",
    yaziNoPreview: "Yazi não mostra preview de imagens",
    yaziNoPreviewDesc:
      "Instala um backend de imagem compatível com seu terminal (Kitty, iTerm2, WezTerm) ou configura o protocolo no yazi.toml",
    opencodeContext: "OpenCoder não encontra contexto do projeto",
    opencodeContextDesc:
      "Sempre inicia o OpenCoder na raiz do projeto com cd ~/projects/meu-projeto && opencode",
  },

  shortcuts: {
    tmuxWindows: "Gerenciamento de janelas (tabs)",
    tmuxPanes: "Gerenciamento de painéis (panes)",
    tmuxSessions: "Gerenciamento de sessões",
    tmuxScroll: "Scroll e copy mode",
    neovimBasic: "Navegação básica no Neovim",
    neovimFiles: "Busca de arquivos (Telescope)",
    neovimEditing: "Edição",
    neovimSplits: "Splits do editor",
    lazygitFiles: "Files (arquivos modificados)",
    lazygitBranches: "Branches",
    lazygitCommits: "Commits",
    lazygitStash: "Stash",
    lazygitGeneral: "Gerais",
    yaziNav: "Navegação",
    yaziOps: "Operações",
    openNvim: "Abrir no nvim",
    close: "Fechar",
  },
};

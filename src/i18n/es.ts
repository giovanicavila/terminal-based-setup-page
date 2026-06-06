import type { TranslationKeys } from "./index";

export const es: TranslationKeys = {
  common: {
    pageTitle: "Terminal Dev Stack",
    pageSubtitle:
      "Tmux + Neovim/LazyVim + Yazi + OpenCoder — Terminal como entorno completo de desarrollo",
    themeToggle: "Cambiar tema",
    languageToggle: "Cambiar idioma",
    navigation: "Navegación",
    onThisPage: "En esta página",
    overview: "Visión general",
    installation: "Instalación",
    configuration: "Configuración",
    usage: "Uso",
    shortcuts: "Atajos",
    troubleshooting: "Solución de problemas",
    copyCode: "Copiar código",
    copied: "¡Copiado!",
    macOS: "macOS",
    ubuntu: "Ubuntu/Debian",
    verify: "Verificar instalación",
    prerequisites: "Requisitos previos",
    setupScript: "Script de configuración automática",
    githubSetup: "Conectando a GitHub",
    recommendedOrder: "Orden de instalación recomendado",
    workflow: "Flujo de trabajo",
  },

  hero: {
    title: "Stack de Desarrollo en Terminal",
    subtitle:
      "Un entorno de desarrollo completo y rápido, sin IDE pesada, sin mouse obligatorio, sin Electron. Todo en la terminal.",
    ctaText: "Comenzar instalación",
    ctaText2: "Ver stack completo",
  },

  why: {
    title: "¿Por qué este stack?",
    tool: "Herramienta",
    role: "Rol",
    advantage: "Ventaja principal",
    tmuxRole: "Window manager de terminal",
    tmuxAdvantage: "Sesiones persistentes, múltiples paneles, multiplexación",
    neovimRole: "Editor de código",
    neovimAdvantage: "Extensible, rápido, LSP nativo, ecosistema enorme",
    yaziRole: "File manager en terminal",
    yaziAdvantage: "Navegación visual con preview, integra con nvim",
    opencodeRole: "Coding agent en terminal",
    opencodeAdvantage: "IA en contexto del proyecto, sin salir de la terminal",
  },

  features: {
    tmuxTitle: "tmux — Multiplexador de terminal",
    tmuxDesc:
      "Sesiones persistentes, paneles independientes y amigable para trabajo remoto",
    tmuxFeatures: [
      "Sesiones persistentes: cierra la terminal, reconecta después exactamente donde lo dejaste",
      "Paneles independientes: editor, file manager y agente de IA lado a lado en la misma pantalla",
      "Remote-friendly: perfecto para trabajar via SSH — la sesión continúa incluso si la conexión cae",
      "Scriptable: automatiza la apertura del entorno con un solo comando",
      "Sin overhead: consume prácticamente cero de CPU/RAM comparado con cualquier IDE",
    ],

    neovimTitle: "Neovim + LazyVim",
    neovimDesc:
      "Editor extensible con LSP nativo, fuzzy finder e integración git",
    neovimFeatures: [
      "LazyVim es una 'distro' de Neovim: viene configurado con LSP, syntax highlighting, fuzzy finder, git integration — todo funcionando en el primer nvim .",
      "LSP nativo: autocompletado, go-to-definition, diagnósticos en tiempo real para Python, TypeScript, Lua, Go, Rust...",
      "Lazy loading: los plugins cargan bajo demanda — inicio en ~50ms incluso con 60+ plugins",
      "Telescope: fuzzy finder para archivos, grep, buffers, símbolos — reemplaza el file explorer tradicional",
      "Modal editing: curva de aprendizaje real, pero productividad mucho mayor después de interiorizado",
    ],

    yaziTitle: "Yazi — File manager moderno",
    yaziDesc: "Navegación visual con previews nativos, escrito en Rust",
    yaziFeatures: [
      "Previews nativos: imágenes, PDFs, vídeos, syntax highlighting de código directamente en la terminal",
      "Navegación tri-pane: directorio padre | directorio actual | preview del archivo seleccionado",
      "Escrito en Rust: extremadamente rápido incluso en directorios con miles de archivos",
      "Integración con nvim: plugin yazi.nvim abre el archivo directo en el buffer actual al presionar Enter",
      "Operaciones en lote: renombrar, mover, copiar múltiples archivos con selección visual",
    ],

    opencodeTitle: "OpenCoder — Coding agent en terminal",
    opencodeDesc:
      "Agente de IA que entiende el contexto del proyecto y edita archivos directamente",
    opencodeFeatures: [
      "Contexto completo del proyecto: lee archivos, entiende la estructura, edita directamente — no es un chat que copia y pega",
      "Multi-provider: funciona con OpenRouter (modelos gratuitos), Anthropic, OpenAI, Ollama (local)",
      "Dentro de tmux: se queda en un pane al lado del editor, sin cambiar de ventana",
      "Modo agente: puede ejecutar comandos, crear archivos, hacer refactorizaciones multi-archivo",
    ],
  },

  install: {
    title: "Instalación",
    step: "Paso",
    description: "Descripción",
    command: "Comando",
    configFile: "Archivo de configuración",
    verifyInstall: "Verificar instalación",
    tmuxInstall: "Instalar tmux",
    tmuxConfig: "Configurar ~/.tmux.conf",
    tpmInstall: "Instalar TPM (Plugin Manager)",
    neovimInstall: "Instalar Neovim",
    lazyvimDeps: "Instalar dependencias de LazyVim",
    lazyvimInstall: "Instalar LazyVim starter",
    pythonExtras: "Extras para Python y Data Science",
    yaziRust: "Instalar Rust (necesario para compilar Yazi)",
    yaziDeps: "Instalar dependencias de preview",
    yaziInstall: "Instalar Yazi via Cargo",
    yaziConfig: "Configurar ~/.config/yazi/yazi.toml",
    yaziNvim: "Plugin de integración con Neovim",
    opencodeInstall: "Instalar OpenCoder",
    opencodeConfig: "Configurar OpenCoder",
    opencodeOllama: "Con Ollama (100% local, sin API key)",
  },

  config: {
    tmuxTitle: "Configuración de tmux",
    tmuxDesc:
      "El archivo ~/.tmux.conf en la raíz de tu home configura prefijo, navegación, mouse y más",
    tmuxContent: `# Cambia el prefix de Ctrl+b a Ctrl+a (más ergonómico)
set -g prefix C-a
unbind C-b
bind C-a send-prefix

# Navegar entre panes con Alt + flechas
bind -n M-Left  select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up    select-pane -U
bind -n M-Down  select-pane -D

# Redimensionar panes con prefix + H/J/K/L
bind -r H resize-pane -L 5
bind -r L resize-pane -R 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5

# Habilita mouse (scroll, clic en panes)
set -g mouse on

# True color — necesario para temas de Neovim correctos
set -g default-terminal "tmux-256color"
set -ag terminal-overrides ",xterm-256color:RGB"

# Indexa ventanas y panes desde 1
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

    yaziTitle: "Configuración de Yazi",
    yaziDesc:
      "El archivo ~/.config/yazi/yazi.toml define layout, preview e integración con nvim",
    yaziContent: `[manager]
ratio          = [1, 3, 4]  # ancho: padre | actual | preview
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

    opencodeTitle: "Configuración de OpenCoder",
    opencodeDesc:
      "El archivo ~/.config/opencode/config.json define el modelo y proveedor de IA",
    opencodeContent: `{
  "model": "openrouter/google/gemini-2.0-flash-exp:free",
  "provider": {
    "openrouter": {
      "apiKey": "sk-or-TU_CLAVE_AQUI"
    }
  }
}`,
    lazyvimExtras: `return {
  -- Lenguajes
  { import = "lazyvim.plugins.extras.lang.python" },
  { import = "lazyvim.plugins.extras.lang.json" },
  { import = "lazyvim.plugins.extras.lang.markdown" },
  { import = "lazyvim.plugins.extras.lang.typescript" },

  -- Herramientas
  { import = "lazyvim.plugins.extras.editor.telescope" },
  { import = "lazyvim.plugins.extras.util.mini-hipatterns" },

  -- Git
  { import = "lazyvim.plugins.extras.editor.git" },
}`,
    yaziNvimPlugin: `return {
  "mikavilpas/yazi.nvim",
  event = "VeryLazy",
  keys = {
    { "<leader>fy", "<cmd>Yazi<cr>", desc = "Yazi (directorio del buffer)" },
    { "<leader>fY", "<cmd>Yazi cwd<cr>", desc = "Yazi (directorio de trabajo)" },
    { "<c-up>", "<cmd>Yazi toggle<cr>", desc = "Yazi (abrir/cerrar)" },
  },
  opts = {
    open_for_directories = true,
    keymaps = { show_help = "<f1>" },
  },
}`,
  },

  usage: {
    title: "Cómo usar en el día a día",
    firstTime: "Primer uso — secuencia de apertura",
    firstTimeDesc:
      "Al abrir la terminal por primera vez, estás fuera de tmux. El flujo es:",
    reconnect: "Para reconectar después de cerrar la terminal:",
    reconnectDesc:
      "La sesión continúa ejecutándose en segundo plano incluso después de cerrar la terminal.",
    typicalFlow: "Flujo de trabajo típico",
    typicalFlowDesc: `Terminal
  └── tmux (sesión "dev")
        ├── Ventana 1: nvim .          ← edición de código
        ├── Ventana 2: yazi            ← navegación de archivos
        │            opencode         ← agente de IA (pane lateral)
        └── Ventana 3: shell libre     ← ejecutar comandos, git, tests`,

    windowManagement: "Gestionando ventanas (tabs de tmux)",
    paneManagement: "Dividiendo la pantalla en paneles (panes)",
    paneNav: "Navegación entre panes (configurado en .tmux.conf)",
    paneResize: "Redimensionar panes (prefix + letra)",

    neovimUsage: "Usando Neovim (LazyVim)",
    neovimNav: "Navegación básica",
    neovimEdit: "Edición",
    neovimSplit: "Dividiendo el editor internamente",
    neovimGit: "Git con lazygit",

    yaziUsage: "Usando Yazi",
    yaziNav: "Navegación en Yazi",
    yaziOps: "Operaciones con archivos",

    opencodeUsage: "Usando OpenCoder",
    opencodeDesc:
      "Siempre inicia en la raíz del proyecto para que tenga contexto completo:",
    opencodeExamples: `> explica lo que hace la función main
> refactoriza utils.py para usar dataclasses
> crea un archivo de tests para el módulo X
> ¿cuál es el bug en esta función?
> agrega type hints a todos los archivos Python`,

    lazygitUsage: "Usando lazygit — Git con interfaz visual",
    lazygitDesc:
      "Interfaz TUI completa para Git: commit, push, pull, branches, stash, resolver conflictos — todo sin escribir comandos git.",
    lazygitLayout: "Layout de la interfaz",
    lazygitBasic: "Flujo básico: stage → commit → push",
    lazygitBranches: "Branches",
    lazygitCommits: "Commits",
    lazygitStash: "Stash",
    lazygitConflicts: "Resolver conflictos de merge",
    lazygitOther: "Otros atajos útiles",

    sessions: "Sesiones tmux",
    scroll: "Scroll y copy mode",
  },

  setupScript: {
    title: "Script de configuración automática de la sesión",
    desc: "Crea un script que automatiza la apertura del entorno completo con un solo comando:",
    scriptContent: `#!/usr/bin/env bash
# Uso: ./dev.sh [ruta-del-proyecto]
# Ejemplo: ./dev.sh ~/projects/mi-proyecto

SESSION="dev"
PROJECT="$\\{1:-$HOME}"

# No crea sesión duplicada
if tmux has-session -t "$SESSION" 2>/dev/null; then
  tmux attach -t "$SESSION"
  exit 0
fi

# Crea sesión separada
tmux new-session -d -s "$SESSION" -x "$(tput cols)" -y "$(tput lines)"

# Ventana 1: editor principal (nvim)
tmux rename-window -t "$SESSION:1" "editor"
tmux send-keys -t "$SESSION:1" "cd $PROJECT && nvim ." Enter

# Ventana 2: yazi + opencode lado a lado
tmux new-window -t "$SESSION" -n "tools"
tmux send-keys -t "$SESSION:2" "cd $PROJECT && yazi" Enter
tmux split-window -t "$SESSION:2" -h -p 50
tmux send-keys -t "$SESSION:2" "cd $PROJECT && opencode" Enter

# Ventana 3: shell libre
tmux new-window -t "$SESSION" -n "shell"
tmux send-keys -t "$SESSION:3" "cd $PROJECT" Enter

# Enfoca la ventana del editor
tmux select-window -t "$SESSION:1"

# Abre la sesión
tmux attach -t "$SESSION"`,
    aliasSetup: "echo 'alias dev=\"~/scripts/dev.sh\"' >> ~/.zshrc",
    usage: "dev ~/projects/mi-proyecto",
  },

  troubleshooting: {
    title: "Solución de problemas",
    invalidStyle: "invalid style: fg=#888,bg=#111",
    invalidStyleDesc:
      "tmux no acepta hex corto (3 dígitos). Usa colour en lugar de hex:",
    wrongColors: "Colores incorrectos en Neovim dentro de tmux",
    wrongColorsDesc:
      "Confirma que ~/.tmux.conf tenga las configuraciones de true color:",
    cargoNotFound: "cargo: command not found",
    cargoNotFoundDesc: "Agrega Rust al PATH permanentemente en ~/.zshrc:",
    yaziNoPreview: "Yazi no muestra preview de imágenes",
    yaziNoPreviewDesc:
      "Instala un backend de imagen compatible con tu terminal (Kitty, iTerm2, WezTerm) o configura el protocolo en yazi.toml",
    opencodeContext: "OpenCoder no encuentra contexto del proyecto",
    opencodeContextDesc:
      "Siempre inicia OpenCoder en la raíz del proyecto con cd ~/projects/mi-proyecto && opencode",
  },

  shortcuts: {
    tmuxWindows: "Gestión de ventanas (tabs)",
    tmuxPanes: "Gestión de paneles (panes)",
    tmuxSessions: "Gestión de sesiones",
    tmuxScroll: "Scroll y copy mode",
    neovimBasic: "Navegación básica en Neovim",
    neovimFiles: "Búsqueda de archivos (Telescope)",
    neovimEditing: "Edición",
    neovimSplits: "Splits del editor",
    lazygitFiles: "Files (archivos modificados)",
    lazygitBranches: "Branches",
    lazygitCommits: "Commits",
    lazygitStash: "Stash",
    lazygitGeneral: "Generales",
    yaziNav: "Navegación",
    yaziOps: "Operaciones",
    openNvim: "Abrir en nvim",
    close: "Cerrar",
  },
};

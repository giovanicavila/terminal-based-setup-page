import type { TranslationKeys } from "./index";

export const en: TranslationKeys = {
  common: {
    pageTitle: "Terminal Dev Stack",
    pageSubtitle:
      "Tmux + Neovim/LazyVim + Yazi + OpenCoder — Terminal as a complete development environment",
    themeToggle: "Toggle theme",
    languageToggle: "Toggle language",
    navigation: "Navigation",
    onThisPage: "On this page",
    overview: "Overview",
    installation: "Installation",
    configuration: "Configuration",
    usage: "Usage",
    shortcuts: "Shortcuts",
    troubleshooting: "Troubleshooting",
    copyCode: "Copy code",
    copied: "Copied!",
    macOS: "macOS",
    ubuntu: "Ubuntu/Debian",
    verify: "Verify installation",
    prerequisites: "Prerequisites",
    setupScript: "Auto setup script",
    githubSetup: "Connecting to GitHub",
    recommendedOrder: "Recommended installation order",
    workflow: "Workflow",
  },

  hero: {
    title: "Terminal Development Stack",
    subtitle:
      "A complete and fast development environment, no heavy IDE, no mandatory mouse, no Electron. All in the terminal.",
    ctaText: "Start installation",
    ctaText2: "View full stack",
  },

  why: {
    title: "Why this stack?",
    tool: "Tool",
    role: "Role",
    advantage: "Main advantage",
    tmuxRole: "Terminal window manager",
    tmuxAdvantage: "Persistent sessions, multiple panels, multiplexing",
    neovimRole: "Code editor",
    neovimAdvantage: "Extensible, fast, native LSP, huge ecosystem",
    yaziRole: "Terminal file manager",
    yaziAdvantage: "Visual navigation with preview, integrates with nvim",
    opencodeRole: "Terminal coding agent",
    opencodeAdvantage: "AI in project context, without leaving the terminal",
  },

  features: {
    tmuxTitle: "tmux — Terminal multiplexer",
    tmuxDesc: "Persistent sessions, independent panels, and remote-friendly",
    tmuxFeatures: [
      "Persistent sessions: close the terminal, reconnect later exactly where you left off",
      "Independent panels: editor, file manager, and AI agent side by side on the same screen",
      "Remote-friendly: perfect for SSH work — session continues even if connection drops",
      "Scriptable: automate environment setup with a single command",
      "Zero overhead: consumes virtually no CPU/RAM compared to any IDE",
    ],

    neovimTitle: "Neovim + LazyVim",
    neovimDesc:
      "Extensible editor with native LSP, fuzzy finder, and git integration",
    neovimFeatures: [
      "LazyVim is a Neovim 'distro': comes configured with LSP, syntax highlighting, fuzzy finder, git integration — everything working on first nvim .",
      "Native LSP: autocompletion, go-to-definition, real-time diagnostics for Python, TypeScript, Lua, Go, Rust...",
      "Lazy loading: plugins load on demand — starts in ~50ms even with 60+ plugins",
      "Telescope: fuzzy finder for files, grep, buffers, symbols — replaces the traditional file explorer",
      "Modal editing: real learning curve, but much higher productivity once internalized",
    ],

    yaziTitle: "Yazi — Modern file manager",
    yaziDesc: "Visual navigation with native previews, written in Rust",
    yaziFeatures: [
      "Native previews: images, PDFs, videos, syntax highlighting directly in the terminal",
      "Tri-pane navigation: parent directory | current directory | file preview",
      "Written in Rust: extremely fast even in directories with thousands of files",
      "nvim integration: yazi.nvim plugin opens files directly in the current buffer on Enter",
      "Batch operations: rename, move, copy multiple files with visual selection",
    ],

    opencodeTitle: "OpenCoder — Coding agent in the terminal",
    opencodeDesc:
      "AI agent that understands project context and edits files directly",
    opencodeFeatures: [
      "Complete project context: reads files, understands structure, edits directly — not a chat that copy-pastes",
      "Multi-provider: works with OpenRouter (free models), Anthropic, OpenAI, Ollama (local)",
      "Inside tmux: stays in a pane next to the editor, no window switching",
      "Agent mode: can run commands, create files, do multi-file refactorings",
    ],
  },

  install: {
    title: "Installation",
    step: "Step",
    description: "Description",
    command: "Command",
    configFile: "Configuration file",
    verifyInstall: "Verify installation",
    tmuxInstall: "Install tmux",
    tmuxConfig: "Configure ~/.tmux.conf",
    tpmInstall: "Install TPM (Plugin Manager)",
    neovimInstall: "Install Neovim",
    lazyvimDeps: "Install LazyVim dependencies",
    lazyvimInstall: "Install LazyVim starter",
    pythonExtras: "Extras for Python and Data Science",
    yaziRust: "Install Rust (required to compile Yazi)",
    yaziDeps: "Install preview dependencies",
    yaziInstall: "Install Yazi via Cargo",
    yaziConfig: "Configure ~/.config/yazi/yazi.toml",
    yaziNvim: "Neovim integration plugin",
    opencodeInstall: "Install OpenCoder",
    opencodeConfig: "Configure OpenCoder",
    opencodeOllama: "With Ollama (100% local, no API key)",
  },

  config: {
    tmuxTitle: "tmux Configuration",
    tmuxDesc:
      "The ~/.tmux.conf file in your home directory configures prefix, navigation, mouse, and more",
    tmuxContent: `# Change prefix from Ctrl+b to Ctrl+a (more ergonomic)
set -g prefix C-a
unbind C-b
bind C-a send-prefix

# Navigate between panes with Alt + arrows
bind -n M-Left  select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up    select-pane -U
bind -n M-Down  select-pane -D

# Resize panes with prefix + H/J/K/L
bind -r H resize-pane -L 5
bind -r L resize-pane -R 5
bind -r J resize-pane -D 5
bind -r K resize-pane -U 5

# Enable mouse (scroll, click on panes)
set -g mouse on

# True color — needed for proper Neovim themes
set -g default-terminal "tmux-256color"
set -ag terminal-overrides ",xterm-256color:RGB"

# Index windows and panes starting from 1
set -g base-index 1
set -g pane-base-index 1
set-window-option -g pane-base-index 1
set-option -g renumber-windows on

# Minimal status bar
set -g status-position bottom
set -g status-style "fg=colour244,bg=colour233"
set -g status-left " #[bold]#S#[nobold]  "
set -g status-right " %a %H:%M "
set -g window-status-current-style "fg=colour255,bold"`,

    yaziTitle: "Yazi Configuration",
    yaziDesc:
      "The ~/.config/yazi/yazi.toml file defines layout, preview, and nvim integration",
    yaziContent: `[manager]
ratio          = [1, 3, 4]  # width: parent | current | preview
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

    opencodeTitle: "OpenCoder Configuration",
    opencodeDesc:
      "The ~/.config/opencode/config.json file defines the model and AI provider",
    opencodeContent: `{
  "model": "openrouter/google/gemini-2.0-flash-exp:free",
  "provider": {
    "openrouter": {
      "apiKey": "sk-or-YOUR_KEY_HERE"
    }
  }
}`,
    lazyvimExtras: `return {
  -- Languages
  { import = "lazyvim.plugins.extras.lang.python" },
  { import = "lazyvim.plugins.extras.lang.json" },
  { import = "lazyvim.plugins.extras.lang.markdown" },
  { import = "lazyvim.plugins.extras.lang.typescript" },

  -- Tools
  { import = "lazyvim.plugins.extras.editor.telescope" },
  { import = "lazyvim.plugins.extras.util.mini-hipatterns" },

  -- Git
  { import = "lazyvim.plugins.extras.editor.git" },
}`,
    yaziNvimPlugin: `return {
  "mikavilpas/yazi.nvim",
  event = "VeryLazy",
  keys = {
    { "<leader>fy", "<cmd>Yazi<cr>", desc = "Yazi (buffer directory)" },
    { "<leader>fY", "<cmd>Yazi cwd<cr>", desc = "Yazi (working directory)" },
    { "<c-up>", "<cmd>Yazi toggle<cr>", desc = "Yazi (toggle)" },
  },
  opts = {
    open_for_directories = true,
    keymaps = { show_help = "<f1>" },
  },
}`,
  },

  usage: {
    title: "Daily Usage",
    firstTime: "First time — opening sequence",
    firstTimeDesc:
      "When opening the terminal for the first time, you're outside tmux. The flow is:",
    reconnect: "To reconnect after closing the terminal:",
    reconnectDesc:
      "The session continues running in the background even after closing the terminal.",
    typicalFlow: "Typical workflow",
    typicalFlowDesc: `Terminal
  └── tmux (session "dev")
        ├── Window 1: nvim .          ← code editing
        ├── Window 2: yazi            ← file navigation
        │            opencode         ← AI agent (side pane)
        └── Window 3: free shell      ← running commands, git, tests`,

    windowManagement: "Managing windows (tmux tabs)",
    paneManagement: "Splitting screen into panels (panes)",
    paneNav: "Navigation between panes (configured in .tmux.conf)",
    paneResize: "Resizing panes (prefix + letter)",

    neovimUsage: "Using Neovim (LazyVim)",
    neovimNav: "Basic navigation",
    neovimEdit: "Editing",
    neovimSplit: "Splitting the editor internally",
    neovimGit: "Git with lazygit",

    yaziUsage: "Using Yazi",
    yaziNav: "Navigation in Yazi",
    yaziOps: "File operations",

    opencodeUsage: "Using OpenCoder",
    opencodeDesc: "Always start in the project root so it has full context:",
    opencodeExamples: `> explain what the main function does
> refactor utils.py to use dataclasses
> create a test file for module X
> what is the bug in this function?
> add type hints to all Python files`,

    lazygitUsage: "Using lazygit — Git with visual interface",
    lazygitDesc:
      "Complete TUI interface for Git: commit, push, pull, branches, stash, resolve conflicts — all without typing git commands.",
    lazygitLayout: "Interface layout",
    lazygitBasic: "Basic flow: stage → commit → push",
    lazygitBranches: "Branches",
    lazygitCommits: "Commits",
    lazygitStash: "Stash",
    lazygitConflicts: "Resolving merge conflicts",
    lazygitOther: "Other useful shortcuts",

    sessions: "tmux sessions",
    scroll: "Scroll and copy mode",
  },

  setupScript: {
    title: "Auto setup script",
    desc: "Create a script that automates opening the complete environment with a single command:",
    scriptContent: `#!/usr/bin/env bash
# Usage: ./dev.sh [project-path]
# Example: ./dev.sh ~/projects/my-project

SESSION="dev"
PROJECT="$\\{1:-$HOME}"

# Don't create duplicate sessions
if tmux has-session -t "$SESSION" 2>/dev/null; then
  tmux attach -t "$SESSION"
  exit 0
fi

# Create detached session
tmux new-session -d -s "$SESSION" -x "$(tput cols)" -y "$(tput lines)"

# Window 1: main editor (nvim)
tmux rename-window -t "$SESSION:1" "editor"
tmux send-keys -t "$SESSION:1" "cd $PROJECT && nvim ." Enter

# Window 2: yazi + opencode side by side
tmux new-window -t "$SESSION" -n "tools"
tmux send-keys -t "$SESSION:2" "cd $PROJECT && yazi" Enter
tmux split-window -t "$SESSION:2" -h -p 50
tmux send-keys -t "$SESSION:2" "cd $PROJECT && opencode" Enter

# Window 3: free shell
tmux new-window -t "$SESSION" -n "shell"
tmux send-keys -t "$SESSION:3" "cd $PROJECT" Enter

# Focus on editor window
tmux select-window -t "$SESSION:1"

# Open the session
tmux attach -t "$SESSION"`,
    aliasSetup: "echo 'alias dev=\"~/scripts/dev.sh\"' >> ~/.zshrc",
    usage: "dev ~/projects/my-project",
  },

  troubleshooting: {
    title: "Troubleshooting",
    invalidStyle: "invalid style: fg=#888,bg=#111",
    invalidStyleDesc:
      "tmux doesn't accept short hex (3 digits). Use colour instead of hex:",
    wrongColors: "Incorrect colors in Neovim inside tmux",
    wrongColorsDesc: "Make sure ~/.tmux.conf has the true color configs:",
    cargoNotFound: "cargo: command not found",
    cargoNotFoundDesc: "Add Rust to PATH permanently in ~/.zshrc:",
    yaziNoPreview: "Yazi doesn't show image previews",
    yaziNoPreviewDesc:
      "Install a compatible image backend for your terminal (Kitty, iTerm2, WezTerm) or configure the protocol in yazi.toml",
    opencodeContext: "OpenCoder can't find project context",
    opencodeContextDesc:
      "Always start OpenCoder in the project root with cd ~/projects/my-project && opencode",
  },

  shortcuts: {
    tmuxWindows: "Window management (tabs)",
    tmuxPanes: "Panel management (panes)",
    tmuxSessions: "Session management",
    tmuxScroll: "Scroll and copy mode",
    neovimBasic: "Basic Neovim navigation",
    neovimFiles: "File search (Telescope)",
    neovimEditing: "Editing",
    neovimSplits: "Editor splits",
    lazygitFiles: "Files (modified files)",
    lazygitBranches: "Branches",
    lazygitCommits: "Commits",
    lazygitStash: "Stash",
    lazygitGeneral: "General",
    yaziNav: "Navigation",
    yaziOps: "Operations",
    openNvim: "Open in nvim",
    close: "Close",
  },
};

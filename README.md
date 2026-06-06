# Terminal Dev Stack

A comprehensive web-based setup guide for a terminal-focused development environment using tmux, Neovim/LazyVim, Yazi, and OpenCoder.

## Overview

This project provides an interactive, multi-language guide to help developers set up a complete development workflow entirely within the terminal -- without heavy IDEs, mandatory mouse usage, or Electron-based tools.

## Tools Covered

| Tool | Role |
|---|---|
| **tmux** | Terminal multiplexer with persistent sessions and split panes |
| **Neovim + LazyVim** | Extensible code editor with native LSP and plugin ecosystem |
| **Yazi** | Modern terminal file manager with visual previews |
| **OpenCoder** | AI coding agent that works directly in the terminal |

## Features

- Interactive step-by-step installation guide
- Code blocks with copy functionality
- Dark/light theme support
- Multi-language support (Portuguese, English, Spanish)
- Configuration examples for each tool
- Setup automation script
- Usage guides and shortcut references
- Troubleshooting section

## Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI library |
| TypeScript | Static type checking |
| Vite 8 | Build tool and dev server |
| React Router 7 | Client-side routing |
| TanStack Query v5 | Server state management |
| Tailwind CSS 4 | Utility-first styling |
| shadcn/ui + Radix UI | Accessible component primitives |
| Motion + Animate UI | Animations |
| Vitest | Unit testing |
| Biome + Ultracite | Linting and formatting |

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Run tests
bun test
```

## Project Structure

```
src/
├── @types/           # TypeScript type declarations
├── api/              # API layer organized by feature
├── components/       # Shared UI components
│   ├── ui/           # shadcn/ui primitives
│   └── animate-ui/   # Animated components
├── contexts/         # React contexts (theme, translation)
├── hooks/            # Custom React hooks
├── i18n/             # Translation files (pt, en, es)
├── layout/           # Root layout
├── lib/              # Utility functions
├── pages/            # Route-level pages
├── providers/        # App-wide providers
├── routes/           # Route definitions
└── tests/            # Vitest test files
```

## License

MIT

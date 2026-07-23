<div align="center">

# Interview Prep Studio

### AI-Powered Interview Preparation — Questions, Flashcards, Mock Interviews & More

A comprehensive interview preparation platform built with Next.js 16, featuring tri-provider AI coaching (OpenAI, Anthropic, Gemini), spaced repetition flashcards, mock interviews, coding challenges, progress analytics, and a gamification system — all organized by company and learning track.

[![Live Demo](https://img.shields.io/badge/Live_Demo-Coming_Soon-0a0a0a?style=for-the-badge&labelColor=0a0a0a&color=3b82f6)](#)
[![License: MIT](https://img.shields.io/badge/License-MIT-0a0a0a?style=for-the-badge&labelColor=0a0a0a&color=22c55e)](#)

</div>

---

## Overview

Interview Prep Studio is a Duolingo-style learning platform for software engineering interviews. It combines a massive question bank, AI-powered coaching and evaluation, spaced repetition flashcards, mock interview simulations, and gamified progress tracking — all accessible through a polished dashboard with command palette navigation.

---

## Features

| Feature | Description |
|:--------|:------------|
| **Tri-Provider AI** | OpenAI, Anthropic Claude, and Google Gemini with unified abstraction layer |
| **AI Coach** | Interactive interview coaching with real-time AI feedback |
| **AI Evaluator** | Automated answer scoring and improvement suggestions |
| **AI Generator** | Dynamic question and quiz generation on any topic |
| **Question Bank** | 5 categories: Frontend, Backend, Fullstack, CS Fundamentals, Web Fundamentals |
| **Spaced Repetition** | Anki-style flashcard review with optimal scheduling algorithm |
| **Mock Interviews** | AI-simulated interview sessions with per-question evaluation |
| **Coding Challenges** | Browser-based coding challenge browser |
| **Quiz System** | AI-generated quizzes with scoring and tracking |
| **Company Profiles** | Company-specific preparation with targeted question filtering |
| **Learning Tracks** | Structured learning paths organized by role and skill level |
| **Knowledge Graph** | Visual topic relationship mapping |
| **Progress Analytics** | Readiness scores, streak calendars, weekly charts, weak topic identification |
| **Gamification** | XP system, daily streaks, achievement tracking |
| **Command Palette** | Cmd+K navigation across the entire app |
| **Dark/Light Theme** | System-aware theme switching |
| **NextAuth** | Authentication with session management |

---

## Tech Stack

| Layer | Technologies |
|:------|:-------------|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript 5 |
| **React** | React 19 |
| **Styling** | Tailwind CSS 4, shadcn/ui |
| **State** | Zustand 5 (8 stores) |
| **Auth** | NextAuth v5 (beta) |
| **AI** | OpenAI, Anthropic Claude, Google Gemini |
| **Animation** | Motion (Framer Motion) 12 |
| **Charts** | Recharts 3 |
| **Validation** | Zod 4 |
| **Icons** | Lucide React |
| **Command Palette** | cmdk |

---

## Project Structure

```
interview-prep-studio/
├── src/
│   ├── app/
│   │   ├── (auth)/              # Login, register
│   │   ├── (marketing)/         # Landing page
│   │   ├── (dashboard)/         # 15+ app pages
│   │   │   ├── dashboard/
│   │   │   ├── questions/
│   │   │   ├── flashcards/
│   │   │   ├── quiz/
│   │   │   ├── mock-interview/
│   │   │   ├── coding/
│   │   │   ├── companies/
│   │   │   ├── tracks/
│   │   │   ├── knowledge-graph/
│   │   │   ├── notes/
│   │   │   ├── bookmarks/
│   │   │   ├── progress/
│   │   │   ├── analytics/
│   │   │   └── settings/
│   │   └── api/
│   │       ├── auth/[...nextauth]/
│   │       ├── ai/coach/         # AI coaching
│   │       ├── ai/evaluate/      # Answer evaluation
│   │       ├── ai/generate/      # Content generation
│   │       └── questions/        # Question REST API
│   ├── components/
│   │   ├── dashboard/           # Progress ring, charts, streaks
│   │   ├── landing/             # Hero, features, testimonials
│   │   ├── shared/              # Sidebar, topbar, command palette
│   │   ├── providers/           # Auth, store, theme providers
│   │   └── ui/                  # 19 shadcn/ui components
│   ├── data/
│   │   ├── companies.ts         # Company profiles
│   │   ├── tracks.ts            # Learning tracks
│   │   └── questions/           # 5 question categories
│   ├── lib/
│   │   ├── ai/                  # Provider abstraction (OpenAI, Anthropic, Gemini)
│   │   ├── spaced-repetition.ts # SRS algorithm
│   │   └── auth.ts              # NextAuth config
│   ├── stores/                  # 8 Zustand stores
│   ├── hooks/                   # 5 custom hooks
│   └── types/                   # 7 type definition files
├── components.json
├── next.config.ts
└── package.json
```

---

## AI Architecture

```
User Input → Provider Abstraction Layer
    ├── OpenAI (gpt-4o, gpt-4o-mini)
    ├── Anthropic Claude (claude-sonnet)
    └── Google Gemini (gemini-2.0-flash)
    ↓
Unified Response → Coach / Evaluator / Generator
```

The `lib/ai/provider.ts` abstraction layer allows seamless switching between providers with a unified interface, enabling fallback logic and provider-specific optimizations.

---

## Quick Start

### Prerequisites

- **Node.js** >= 18.0.0

### Installation

```bash
git clone https://github.com/mohammadhossein-asadi/interview-prep-studio.git
cd interview-prep-studio
npm install
```

### Environment Configuration

Create a `.env.local` file:

```env
NEXTAUTH_SECRET="your-secret"
NEXTAUTH_URL="http://localhost:3000"
OPENAI_API_KEY="sk-..."
ANTHROPIC_API_KEY="sk-ant-..."
GOOGLE_GEMINI_API_KEY="..."
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
npm run start
```

---

## Scripts

| Command | Description |
|:--------|:------------|
| `npm run dev` | Start Next.js dev server |
| `npm run build` | Production build |
| `npm run start` | Run production server |
| `npm run lint` | ESLint |

---

## Author

**Mohammadhossein Asadi** — Frontend & Full-Stack Engineer

[![GitHub](https://img.shields.io/badge/GitHub-mohammadhossein--asadi-0a0a0a?style=flat-square&logo=github)](https://github.com/mohammadhossein-asadi)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-mohammadhossein--asadi-0a66c2?style=flat-square&logo=linkedin)](https://linkedin.com/in/mohammadhossein-asadi)

---

## License

This project is licensed under the [MIT License](LICENSE).

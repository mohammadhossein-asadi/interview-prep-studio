# Interview Prep Studio

<div align="center">

![Interview Prep Studio Logo](public/logo.png)

**AI-Powered Interview Preparation Platform**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-Latest-2D3748?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![NextAuth.js](https://img.shields.io/badge/NextAuth.js-Latest-FF6F61?logo=nextauth&logoColor=white)](https://next-auth.js.org/)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[🇬🇧 English](#-interview-prep-studio) • [🇮🇷 فارسی](README.fa.md) • [📖 Documentation](#-documentation) • [🚀 Quick Start](#-quick-start) • [🤝 Contributing](#-contributing)

</div>

---

## 🌟 Overview

**Interview Prep Studio** is a comprehensive, AI-powered **interview preparation platform** that helps candidates practice, improve, and ace technical and behavioral interviews. Features **AI mock interviews**, **question banks**, **progress tracking**, **peer practice**, and **personalized feedback**.

### 🎯 Why Interview Prep Studio?

| Problem | Solution |
|---------|----------|
| Scattered resources (LeetCode, blogs, YouTube) | **Unified platform** — questions, mock interviews, feedback |
| No realistic practice | **AI interviewer** with voice/video, follow-up questions |
| Hard to track progress | **Analytics dashboard** — strengths, weaknesses, trends |
| No Persian content | **Full Persian support** — questions, UI, RTL |
| Expensive coaching | **Affordable AI** + peer practice |

---

## ✨ Features

### 🤖 **AI Mock Interviews**
- **Voice/Video calls** — WebRTC with AI interviewer (GPT-4/Claude)
- **Role-specific** — Frontend, Backend, Fullstack, DevOps, Data, Mobile, QA, PM
- **Difficulty levels** — Junior, Mid, Senior, Staff, Principal
- **Question types** — Coding, System Design, Behavioral, SQL, Architecture
- **Real-time feedback** — Strengths, improvements, score, detailed analysis
- **Recording** — Replay your session, share with mentors

### 📚 **Question Bank**
- **10,000+ questions** — Curated from top companies (Google, Meta, Amazon, etc.)
- **Categories** — Algorithms, Data Structures, System Design, Databases, Networks, OS, Security, Cloud, Testing
- **Tags** — Company, role, difficulty, frequency, topics
- **Solutions** — Multiple approaches, time/space complexity, explanations
- **Persian translations** — Questions, solutions, explanations in Persian
- **User submissions** — Community solutions with voting

### 📈 **Progress Tracking**
- **Skill radar** — Visual strengths/weaknesses by topic
- **Streak tracking** — Daily practice streak, calendar heatmap
- **Mock interview history** — Scores, trends, comparison
- **Time spent** — By category, difficulty, mode
- **Goal setting** — Target score, target date, daily targets
- **Export reports** — PDF for mentors, sharing

### 👥 **Peer Practice**
- **Matchmaking** — Find partners by role, level, timezone, language
- **Scheduled sessions** — Calendar integration, reminders
- **Pair programming** — Shared editor (CodeMirror/Monaco)
- **Feedback exchange** — Structured rubric, anonymous option
- **Study groups** — Create/join, shared resources, discussions

### 🎯 **Personalized Learning Path**
- **Assessment quiz** — Determine level, gaps, priorities
- **Adaptive recommendations** — Next questions based on performance
- **Spaced repetition** — Review schedule for retention
- **Weakness targeting** — Focus on lowest-scoring areas
- **Company-specific prep** — Target company question patterns

### 🌍 **Persian-First Experience**
| Feature | Implementation |
|---------|----------------|
| **RTL Layouts** | Tailwind RTL + CSS logical properties |
| **Typography** | Vazirmatn for Persian |
| **Calendar** | Jalali with Gregorian sync |
| **Numerals** | Persian digits (۱۲۳) |
| **Content** | Questions, solutions, UI in Persian |
| **Voice** | Persian TTS/STT for mock interviews |

---

## 🏗️ Architecture

### Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js (App Router) |
| **Runtime** | React 19 |
| **Language** | TypeScript 5 (Strict) |
| **Styling** | Tailwind CSS v4 |
| **Database** | PostgreSQL + Prisma ORM |
| **Auth** | NextAuth.js |
| **AI** | OpenAI GPT-4 / Anthropic Claude |
| **Real-time** | LiveKit / Daily.co / WebRTC |
| **Code Editor** | Monaco Editor / CodeMirror |
| **Charts** | Recharts |
| **Deployment** | Vercel + PostgreSQL |

### Project Structure

```
interview-prep-studio/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── public/
├── src/
│   ├── app/
│   │   ├── (auth)/
│   │   ├── (dashboard)/
│   │   │   ├── practice/
│   │   │   │   ├── questions/
│   │   │   │   ├── mock-interview/
│   │   │   │   └── peer/
│   │   │   ├── progress/
│   │   │   ├── learning-path/
│   │   │   └── settings/
│   │   ├── api/
│   │   │   ├── questions/
│   │   │   ├── mock-interview/
│   │   │   ├── ai-feedback/
│   │   │   ├── peer/
│   │   │   └── progress/
│   │   ├── globals.css
│   │   └── layout.tsx
│   ├── components/
│   │   ├── ui/
│   │   ├── interview/
│   │   ├── editor/
│   │   ├── charts/
│   │   └── practice/
│   ├── hooks/
│   ├── lib/
│   │   ├── prisma.ts
│   │   ├── auth.ts
│   │   ├── ai/
│   │   ├── questions/
│   │   └── utils.ts
│   ├── store/
│   └── types/
├── .env.example
├── package.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 20+
- **PostgreSQL** 15+
- **OpenAI/Claude** API key
- **LiveKit/Daily.co** for WebRTC

### Installation

```bash
git clone https://github.com/mohammadhossein-asadi/interview-prep-studio.git
cd interview-prep-studio
npm install
cp .env.example .env.local
# Edit .env.local
npm run db:generate
npm run db:push
npm run db:seed
npm run dev
```

### Environment Variables

```env
DATABASE_URL=postgresql://...
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000

# AI
OPENAI_API_KEY=...
ANTHROPIC_API_KEY=...

# Real-time (LiveKit)
LIVEKIT_API_KEY=...
LIVEKIT_API_SECRET=...
LIVEKIT_URL=wss://...

# OAuth
GITHUB_CLIENT_ID=...
GOOGLE_CLIENT_ID=...
```

---

## 🛠️ Development

```bash
npm run dev          # Dev server
npm run build        # Production build
npm run start        # Production server
npm run db:studio    # Prisma Studio
npm run lint         # ESLint
npm test             # Vitest
```

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [Architecture](docs/ARCHITECTURE.md) | System design |
| [Database](docs/DATABASE.md) | Prisma schema |
| [AI Integration](docs/AI_INTEGRATION.md) | Mock interview AI |
| [WebRTC](docs/WEBRTC.md) | Real-time setup |
| [Deployment](docs/DEPLOYMENT.md) | Vercel guide |

---

## 🚀 Deployment

### Vercel + Neon

```bash
vercel --prod
# Add env vars
# Connect Neon PostgreSQL
```

---

## 🔒 Security

- **NextAuth.js** sessions
- **Prisma** SQL injection prevention
- **Zod** validation
- **Rate limiting** on AI endpoints
- **WebRTC** encryption (DTLS-SRTP)
- **CSP** headers

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📋 Roadmap

- [x] Question bank + solutions
- [x] AI mock interviews (text)
- [x] Progress tracking
- [x] Peer practice matching
- [ ] Voice/video AI interviews
- [ ] Persian content expansion
- [ ] Company-specific packs
- [ ] Mobile app (React Native)
- [ ] White-label for bootcamps
- [ ] Certifications

---

## 📄 License

**MIT License** — See [LICENSE](LICENSE)

---

## 🙏 Acknowledgments

- **Next.js**, **Prisma**, **NextAuth.js**, **Tailwind CSS**
- **OpenAI**, **Anthropic** — AI models
- **LiveKit**, **Daily.co** — WebRTC infrastructure
- **Vazirmatn Font** — Persian typography

---

<div align="center">

**Built with ❤️ for candidates who want to ace their interviews**

[🇬🇧 English](README.md) • [🇮🇷 فارسی](README.fa.md) • [⭐ Star us on GitHub](https://github.com/mohammadhossein-asadi/interview-prep-studio)

</div>
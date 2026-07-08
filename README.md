# Playpen School Website

A modern, content-managed school website built with Next.js 16 and React 19.

This project presents Playpen School's public website (academics, admissions, student life, gallery, careers, alumni) and includes a custom admin portal for non-technical staff to manage live content.

## Project Snapshot

- **Type:** Production-style full-stack web application
- **Domain:** Education / School website
- **Primary Goal:** Deliver a polished public website with a simple internal CMS experience
- **Architecture:** App Router + server routes + JSON-backed CMS
- **Design Language:** Playpen brand system (maroon, dark maroon, gold), responsive, content-first layouts

## Core Features

### Public Website

- Multi-section website: Home, About, Academics, Admissions, Student Life, Gallery, Parent/Student portal
- Rich overview pages for About, Academics, Admissions, and Student Life
- Detailed content pages for school programmes, policies, and services
- Careers page with publish-controlled vacancies and application flow
- Student achievements section with category-based, ordered entries
- Alumni association section with registration workflow
- Responsive UI optimized for desktop and mobile
- GSAP-enhanced interactions for selected homepage sections

### Admin Portal (CMS)

- Auth-protected admin area with recruiter-friendly and non-technical UX
- Section-based content management:
  - Hero slides
  - Announcements ticker
  - Notices
  - Events
  - Gallery
  - Teachers
  - Vacancies
  - Student achievements
  - Alumni requests
- Published/unpublished toggles for controlled content visibility
- Sticky save workflow and immediate website updates after save
- Guided UI labels and contextual help for content editors

### Data & Workflow

- Local JSON-backed CMS store (`data/cms.json`)
- Server route handlers for read/write updates (`/api/admin/cms`)
- Normalization + defaults to keep content consistent
- Separate content modules for static editorial pages

## Technology Stack

### Frontend

- **Next.js 16.2.10** (App Router)
- **React 19.2.4**
- **TypeScript 5**
- **Tailwind CSS 4**
- **Lucide React** (icons)
- **GSAP** (scroll/animation effects)

### Backend / Data Layer

- Next.js Route Handlers (`src/app/api/**`)
- File-based JSON persistence via Node `fs/promises`
- Typed CMS models for consistent data contracts

### Tooling

- ESLint 9 + `eslint-config-next`
- Built-in Next.js production build pipeline

## High-Level Architecture

```text
src/app
  ├─ (public routes)           -> Website pages
  ├─ portal/admin/**           -> Admin UI
  └─ api/**                    -> Route handlers (auth, CMS, forms)

src/components
  ├─ home / about / academics / admissions / student-life / gallery
  ├─ admin                     -> Reusable admin shell + form UI
  └─ ui                        -> Shared primitives

src/lib
  ├─ cms/**                    -> Types, defaults, auth, persistence
  └─ section content files     -> Structured page content modules

data/cms.json                  -> CMS content store
```

## Recruiter-Relevant Highlights

- Built a complete **content platform**, not just static pages
- Designed a custom CMS for **non-technical users**
- Implemented **typed domain models** across frontend + backend
- Delivered **feature-rich information architecture** across multiple school domains
- Balanced **brand consistency**, **UX accessibility**, and **editor productivity**
- Maintained production quality with successful type checks and optimized builds

## Local Development

### Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

### Run Locally

```bash
npm install
npm run dev
```

Open: [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run start
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run linting checks

## Security & Privacy Notes

- This README intentionally excludes any sensitive credentials, private keys, or internal secrets.
- Admin and API auth mechanisms exist in code, but deployment secrets should be injected through secure environment/config management.
- Keep `data/cms.json` handling and backup strategy aligned with your deployment environment.

## Future Enhancements

- Database-backed CMS storage (PostgreSQL / MongoDB)
- Role-based admin permissions
- Media upload manager with CDN integration
- Audit logs / content history
- End-to-end tests for critical publishing flows

---

If you are reviewing this project as a recruiter or engineering lead, this repository demonstrates practical full-stack skills: product-oriented UI development, CMS architecture, typed data modeling, and deploy-ready Next.js implementation.

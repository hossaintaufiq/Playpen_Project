# Playpen School Website

A modern, high-fidelity, content-managed school website and admin portal built with Next.js 16 (App Router) and React 19.

This project presents Playpen School's public website (academics, admissions, student life, gallery, careers, alumni) and features a bespoke, premium Admin CMS Dashboard designed for non-technical administrators to manage all live aspects of the school's digital presence.

---

## 🚀 High-Level Architecture & Technical Highlights

This project is built to demonstrate production-grade full-stack architecture, featuring:

- **Next.js 16 (Turbopack) & React 19:** Utilizing App Router, dynamic server routes, and optimized pre-rendering models.
- **Tailwind CSS 4:** Modern CSS engine powering a custom obsidian-maroon design tokens system.
- **Full-Stack CMS Engine:** A custom-designed file-based JSON CMS (`data/cms.json`) with unified server route handlers (`/api/admin/cms`).
- **Fully Typed Domain Models:** End-to-end type safety across the frontend, CMS store, forms, and API layers.
- **Production Build Pipeline:** Zero lint errors or TypeScript compilation warnings, fully validated.

---

## 💎 Core Features

### 1. Re-Designed Admin Dashboard CMS
- **Modern Obsidian-Maroon Layout:** Inspired by premium developer tool design languages, featuring a deep crimson-chocolate sidebar (`bg-[#240606]`), micro-transitions, active-border gold indicators, and live session status alerts.
- **School Logo Integration:** Built-in branding header showcasing the official Playpen school logo card.
- **Top-Right Profile Module:** Custom user avatar (`AD`) with dropdown menu displaying the current role (`Admin`) and clean **Sign Out** triggers.
- **Quick Live Site Link:** Direct "View Live Site" header button side-by-side with the profile card.
- **Dynamic Metrics Overview:** A 4-column statistical counter displaying active Notices, Calendar Events, Pending Alumni requests, and Pending Admission applications.
- **Compact SaaS Spacing:** Tightened margins, compact list heights, and clean sans-serif typography matching modern enterprise CMS systems.

### 2. Admissions Desk & PDF Assets Manager (New!)
- **Online Applications Desk:** Complete review portal for student applications submitted online.
  - Interactive filter status states (`Pending`, `Approved`, `Rejected`, `All`).
  - Student name query search filter.
  - High-fidelity detail panels formatting Student info, Gender, Birth dates, previous schools, selected O/A-level subjects, Parent contact details & occupations, and emergency contact card structures.
  - Quick action controls to **Approve**, **Reject**, or **Delete** applications.
- **Downloadable PDF Assets Manager:**
  - Lists printable form files (`Playgroup - Class IX` and `A' Level`) with file size and upload timestamps.
  - Allows administrators to drag-and-drop or select new PDF forms to override the public files instantly.

### 3. Alumni Request Desk
- **Request review queue:** Allows review of registrations for the Playpen Alumni Association.
- **Detailed cards:** Displays profile pictures, graduation years, batches, contact information, and current occupations.
- **Review workflow:** Approve or reject actions that instantly publish approved alumni to the public site.

### 4. Integrated Publishing Header
- **Top-Right Action Dock:** Deleted heavy, distracting sticky bottom save bars. Integrated save state loaders, success/error feedback messages, and **Publish changes** button directly into page headers.

---

## 📁 Repository Directory Structure

```text
Playpen_Project/
  ├─ backend/                  -> Server backend modules
  └─ frontend/                 -> Next.js Web App
       ├─ public/              -> Static assets (logos, images, forms)
       │    └─ forms/          -> Downloadable admission form PDFs
       ├─ scripts/             -> Automation & data index generators
       ├─ src/
       │    ├─ app/
       │    │    ├─ portal/    -> Admin portal pages & dashboards
       │    │    ├─ api/       -> Next.js Server Route Handlers
       │    │    └─ (public)   -> User-facing public routes (Home, About, etc.)
       │    ├─ components/
       │    │    ├─ admin/     -> Shells, sidebar, page headers, reusable components
       │    │    └─ ui/        -> Primitive UI buttons, inputs, toggles
       │    └─ lib/
       │         ├─ cms/       -> Authentication, store interfaces, IDs
       │         └─ config/    -> Navigation item arrays & types
       └─ data/
            └─ cms.json        -> CMS persistence store
```

---

## 🛠️ Local Development & Scripts

### Prerequisites
- Node.js 20+
- npm 10+

### Step-by-Step Setup
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the portal at: `http://localhost:3000`
   - **Admin portal path:** `/portal/admin`
   - **Local credentials:** Password is defined in `.env` (Defaults to `playpen123`).

### Production Deployment
To generate an optimized build:
```bash
npm run build
npm run start
```

---

## 📬 Recruiter Evaluation Highlights

If you are reviewing this repository for an engineering or product-oriented role, it demonstrates:
- **Full-Stack Product Thinking:** Building a complete end-to-end publishing pipeline rather than static pages.
- **Design Literacy:** Executing on rich aesthetics (Obsidian-Maroon layout, glassmorphism breadcrumbs, tight SaaS grid alignment, and pixel-perfect responsiveness).
- **Clean Architecture:** Keeping components decoupled, types strictly defined, and APIs clean.
- **Deployment Readiness:** Success-verified compilation pipelines (Turbo + TypeScript).

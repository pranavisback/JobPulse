# 🚀 JobPulse — Next-Gen Job Tracking & Discovery

[![Angular](https://img.shields.io/badge/Angular-17+-DD0031?style=flat-square&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![RxJS](https://img.shields.io/badge/RxJS-7+-B7178C?style=flat-square&logo=reactivex)](https://rxjs.dev/)
[![Express](https://img.shields.io/badge/Backend-Express-000000?style=flat-square&logo=express)
](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?style=flat-square&logo=mongodb)](https://mongodb.com/)

> **Track your job search, discover opportunities, and manage your career pipeline—all in one sleek, modern Angular app.**

---

## 🌐 Live Demo

<div align="center">
  <a href="https://your-jobpulse-demo-url.com" target="_blank">
    <img src="https://img.shields.io/badge/🚀_Try_JobPulse_Live-4CAF50?style=for-the-badge&logoColor=white&labelColor=2E7D32&logo=angular" alt="Live Demo"/>
  </a>
</div>

---

## 🎥 Preview

[![JobPulse Preview](https://img.youtube.com/vi/your-video-id/maxresdefault.jpg)](https://youtu.be/your-video-id)

---

## ✨ Key Features

- **📊 Job Application Tracker:** Seamlessly manage and categorize all your job applications.
- **🔎 Smart Search & Filters:** Quickly find jobs by status, company, title, or custom tags.
- **📅 Interview Scheduler:** Keep up with interviews, reminders, and notes.
- **📈 Analytics Dashboard:** Visualize your job search journey with charts and stats.
- **👤 Secure Authentication:** Modern login experience (OAuth-ready).
- **📝 Notes & Attachments:** Add notes, upload resumes, and track feedback for each job.
- **⚡ Super Fast & Responsive:** Built with Angular 17, optimized for all devices.

---

## 🛠️ Tech Stack Used

| Frontend        | Backend         | Database   | Utilities  |
|-----------------|----------------|------------|------------|
| ![Angular](https://img.shields.io/badge/-Angular-DD0031?logo=angular&logoColor=white&style=flat) | ![Node.js](https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white&style=flat) | ![MongoDB](https://img.shields.io/badge/-MongoDB-47A248?logo=mongodb&logoColor=white&style=flat) | ![RxJS](https://img.shields.io/badge/-RxJS-B7178C?logo=reactivex&logoColor=white&style=flat) |
| TypeScript      | Express.js      |            | JWT Auth   |
| Angular Material| REST API        |            | NgRx (state mgmt) |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+
- **npm** v9+
- **MongoDB** (Cloud or Local)
- **Git**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/pranavisback/JobPulse.git
cd JobPulse

# 2. Install frontend
cd frontend
npm install

# 3. Install backend
cd ../backend
npm install

# 4. Environment variables
cp .env.example .env
# Edit .env with your DB and secret config

# 5. Start backend (in backend/)
npm run dev

# 6. Start frontend (in frontend/)
npm start
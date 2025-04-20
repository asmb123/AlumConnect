# 🎓 AlumConnect – Rebuilding Alumni Relations

**A secure platform to connect college students with verified alumni.**  
Created to foster real mentorship, meaningful opportunities, and strong campus communities.

---

![Built with DevRhylme](https://img.shields.io/badge/Powered%20By-DevRhylme%20Foundation-blue?style=for-the-badge)
![Crafted by Iron Industry](https://img.shields.io/badge/Crafted%20By-Iron%20Industry-black?style=for-the-badge)

---

## 🚀 About the Project

**AlumConnect** is the flagship project born out of a collaboration between the **DevRhylme open-source community** and the product vision of **Iron Industry**.

> This platform is built to solve a real-world problem—helping students get authentic guidance, internships, and network access through verified alumni from their own institutions.

- 🛡️ **Secure**: Only verified college members & alumni
- 💬 **Connect**: Messaging, mentorship requests, Q&A
- 📁 **Opportunities**: Internships, job referrals, campus events

---

## 🔍 Why AlumConnect?

Most alumni platforms are outdated, cluttered, or filled with spam.  
AlumConnect is designed to be **lightweight**, **secure**, and **student-first** — with actual use cases collected from engineering colleges across India.

We’re building this in public, open source, and with real feedback.

---

## 🛠️ Tech Stack

| Layer      | Stack                                               |
|------------|-----------------------------------------------------|
| Frontend   | Next.js (React) + Tailwind CSS + TypeScript         |
| UI Library | ShadCN UI                                           |
| Backend    | Next.js API Routes + Prisma ORM                     |
| Auth       | NextAuth.js or Clerk (Google / Email)               |
| Database   | PostgreSQL (via Supabase or Railway)                |
| Dev Tools  | ESLint, Prettier, GitHub Actions (optional)         |
| Deployment | Vercel                                              |
| Design     | Figma (open to contributors)                        |

---

## 📁 Project Structure

```
/app
  ├── (routes like landing, login, signup, dashboard)
  └── layout.tsx

/components/
  └── Navbar.tsx, Button.tsx, AuthForm.tsx

/prisma/
  └── schema.prisma

/lib/
  └── auth.ts, db.ts

/public/
  └── logo.png

/styles/
  └── tailwind.config.ts

.env.local
README.md
```

---

## 🧪 Project Status

> 🎉 Currently in **Alpha Phase** — actively under development.

### ✅ Roadmap

- [x] Public Landing Page
- [x] Auth System (Google / Email)
- [x] Role-based Dashboard (Student / Alumni)
- [x] Profile & Connect System
- [ ] Admin Verification System
- [ ] Messaging (Phase 2)
- [ ] Internship/Event Listings
- [ ] SEO, Analytics, Mobile Polish

---

## 👨‍💻 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/DEVRhylme-Foundation/AlumConnect.git
cd AlumConnect
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create `.env.local`

```env
DATABASE_URL=your_postgres_url
NEXTAUTH_SECRET=generate_one
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=your_id
GOOGLE_CLIENT_SECRET=your_secret
```

### 4. Setup database

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 5. Start dev server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## 🤝 Collaboration Model

This project is powered by the **DevRhylme Foundation**, with direction, vision, and long-term product growth managed by **Iron Industry**.

We believe in **open contribution** and **shared growth**.  
All contributors, designers, and developers are welcome — credit is shared transparently.

> 🧭 Strategic direction by: [Iron Industry](https://github.com/IronIndustry)  
> 🛠️ Community powered by: [DevRhylme Foundation](https://github.com/DEVRhylme-Foundation)

---

## 🧑‍🤝‍🧑 How to Contribute

We need help with:
- Frontend (Next.js, Tailwind, TypeScript)
- Backend (Next API, Prisma)
- Auth Integration (NextAuth / Clerk)
- UI/UX Design (Figma)
- Testing & Docs
- Campus Outreach

Join us via [DevRhylme Discord](https://discord.gg/your-invite) to get started or explore issues on GitHub.

---

## ✨ Credits

Huge thanks to every contributor building this platform!  
Special mention to [Ghanshyam Singh](https://github.com/ghanshyam2005singh) for initiating and shaping the vision of **AlumConnect** under the Iron Industry ecosystem.

---

## 📄 License

This project is under the [MIT License](./LICENSE). Feel free to use, fork, contribute, and build. Just don’t forget to credit the community ❤️

---

> _“Built by students, for students. Driven by the community. Forged by Iron.”_
```

---

### ✅ Next Steps You Can Take:

- Add `CONTRIBUTING.md` with your Git workflow
- Setup GitHub Project Board: `To Do / In Progress / Done`
- Link Discord and Figma from the repo
- Generate `.env.example` file
- Deploy first version to Vercel
- Use this README as the **main pitch doc** for colleges and hackathons

```markdown
# 🚀 AI Career Helper

An **AI-powered career coaching platform** built with **Next.js, TailwindCSS, ShadCN UI, Prisma, PostgreSQL, and Gemini API**.  
It helps users with **industry insights, CV/resume building, and interview preparation quizzes** — all in one place.

---

## ✨ Features

- 📊 **Industry Insights** – AI-driven analysis of career trends and job markets.  
- 📄 **CV & Resume Builder** – Generate polished resumes with export to PDF.  
- 🎯 **Interview Preparation** – Practice quizzes and mock interview questions.  
- 🔐 **Authentication** – Secure login/signup powered by [Clerk](https://clerk.com).  
- 🎨 **Modern UI** – Styled with **TailwindCSS** + **ShadCN UI** + **Radix UI** components.  
- 🛠️ **Database Layer** – **Prisma ORM** with **PostgreSQL** backend.  
- 🤖 **AI Integration** – Powered by **Google Gemini API** for smart responses.  
- 📈 **Charts & Analytics** – Visualize progress with **Recharts**.  
- 📝 **Markdown Editor** – Rich text editing using `react-md-editor`.  
- ⚡ **Performance** – Built with **Next.js 15 + Turbopack** for blazing-fast dev experience.

---

## 🛠️ Tech Stack

| Layer              | Technology |
|--------------------|------------|
| Frontend Framework | Next.js 15 |
| Styling            | TailwindCSS, ShadCN UI, Radix UI |
| Authentication     | Clerk |
| Database           | PostgreSQL |
| ORM                | Prisma |
| AI Integration     | Google Gemini API |
| Visualization      | Recharts |
| Utilities          | Zod, React Hook Form, Date-fns |

---

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/ai-career-coach.git
cd ai-career-coach
npm install
```

---

## ⚙️ Environment Setup

Create a `.env` file in the root directory:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/ai-career-coach"
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your-clerk-publishable-key"
CLERK_SECRET_KEY="your-clerk-secret-key"
GEMINI_API_KEY="your-gemini-api-key"
```

---

## 🚀 Development

Run the app locally:

```bash
npm run dev
```

Build for production:

```bash
npm run build
npm start
```

Run lint checks:

```bash
npm run lint
```

---

## 🗄️ Database

Prisma is used as the ORM. After setting up your database:

```bash
npx prisma migrate dev
npx prisma generate
```

---

## 📚 Scripts

- `dev` → Start development server with Turbopack  
- `build` → Build production bundle  
- `start` → Run production server  
- `lint` → Lint codebase  
- `postinstall` → Auto-generate Prisma client  

---

## 🤝 Contributing

1. Fork the repo  
2. Create a new branch (`feature/awesome-feature`)  
3. Commit changes (`git commit -m "Add awesome feature"`)  
4. Push to branch (`git push origin feature/awesome-feature`)  
5. Open a Pull Request  

---

## 📜 License

This project is licensed under the **MIT License**.  
Feel free to use, modify, and distribute with attribution.

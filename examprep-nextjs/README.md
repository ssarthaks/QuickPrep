# Quickie - Tech Interview Prep (Next.js)

This is the migrated Next.js version of the Quickie exam prep application.

## Features

- 🧠 **MCQ Quizzes** - Interactive quizzes with multiple technologies and difficulty levels
- 📄 **PDF Generator** - Generate and download revision notes
- 💡 **Guidelines** - Expert interview tips and tricks
- 🎨 **Modern UI** - Built with shadcn/ui and Tailwind CSS
- ⚡ **Fast** - Powered by Next.js 16 with Turbopack

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI + shadcn/ui
- **Animations**: Framer Motion
- **PDF Generation**: jsPDF

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
examprep-nextjs/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   ├── quiz/              # Quiz page
│   ├── pdf-generator/     # PDF Generator page
│   ├── guidelines/        # Guidelines page
│   └── not-found.tsx      # 404 page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Footer
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── data/                 # Data and content
└── public/               # Static files
```

## Migration from Vite

This project has been migrated from a React + Vite application to Next.js. Key changes include:

- React Router → Next.js App Router
- `Link` from `react-router-dom` → `Link` from `next/link`
- `useLocation` → `usePathname`
- Added "use client" directives to interactive components
- Updated layouts to use Next.js layout system

## License

MIT

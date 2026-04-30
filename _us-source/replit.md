# Project Overview

This is a React + TypeScript + Vite frontend application, originally built on Lovable and migrated to Replit.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM v6
- **State/Data**: TanStack React Query
- **Forms**: React Hook Form + Zod
- **Animations**: Framer Motion
- **Charts**: Recharts

## Project Structure

```
src/
  App.tsx          - Main app component with routing
  main.tsx         - Entry point
  pages/           - Page components (Index, NotFound)
  components/      - UI components (Hero, Navbar, Footer, etc.)
  hookslib/        - Custom hooks
  assets/          - Static assets
  test/            - Test files
public/            - Public static files
```

## Running the App

- **Dev**: `npm run dev` (runs on port 5000)
- **Build**: `npm run build`
- **Preview**: `npm run preview`

## Migration Notes

- Migrated from Lovable to Replit
- Removed `lovable-tagger` Lovable-specific dev tool from vite config
- Updated Vite server config to use port 5000 and host `0.0.0.0` for Replit compatibility
- HMR configured with `clientPort: 443` and `protocol: wss` for Replit's proxy

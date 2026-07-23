<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Frontend Guidelines

This is the Next.js frontend for **Desgin my Plot**, connected to the InsForge backend.

## Architecture & Structure
- **App Router**: Root `app/` directory (no `src/` directory used).
- **InsForge SDK Client**: Initialized in `lib/insforge.ts` and imported via `@/lib/insforge`.
- **Environment Variables**: Local secrets in `.env.local` (`NEXT_PUBLIC_INSFORGE_URL` and `NEXT_PUBLIC_INSFORGE_ANON_KEY`).

## InsForge Integration
- Access database, auth, storage, AI, realtime, and edge functions via `insforge` client from `@/lib/insforge`.
- Backend settings, RLS policies, and project metadata are located in `../Backend/.insforge`.
- Never hardcode API keys or sensitive credentials in frontend code.

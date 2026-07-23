import { insforge } from "@/lib/insforge";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-900 text-zinc-100 font-sans">
      <div className="max-w-md w-full rounded-xl border border-zinc-800 bg-zinc-950 p-6 shadow-xl text-center space-y-4">
        <h1 className="text-2xl font-bold tracking-tight text-white">
          Desgin my Plot
        </h1>
        <p className="text-sm text-zinc-400">
          Next.js App initialized with TypeScript & Tailwind CSS 3.4
        </p>

        <div className="p-4 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-mono text-emerald-400 text-left overflow-x-auto space-y-1">
          <p className="text-zinc-500">// InsForge SDK Backend Connected</p>
          <p>
            <span className="text-zinc-400">URL:</span> {insforge.baseUrl || "https://guu2p5v2.ap-southeast.insforge.app"}
          </p>
          <p>
            <span className="text-zinc-400">Status:</span> Client Configured
          </p>
        </div>
      </div>
    </main>
  );
}

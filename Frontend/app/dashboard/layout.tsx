"use client";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/shadcn-space/blocks/sidebar-06/app-sidebar";
import { UserButton } from "@clerk/nextjs";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider className="p-4 bg-muted min-h-screen" style={{ "--sidebar-width": "300px" } as React.CSSProperties}>
      <AppSidebar />
      <div className="flex flex-1 flex-col gap-4">
        <header className="flex h-14 shrink-0 items-center gap-2 rounded-xl bg-background px-4 shadow-sm">
          <SidebarTrigger className="cursor-pointer" />
          <div className="ml-auto">
            <UserButton />
          </div>
        </header>
        <main className="flex flex-1 items-center justify-center rounded-xl bg-background p-4">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}

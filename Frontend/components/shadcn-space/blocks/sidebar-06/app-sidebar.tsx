"use client";

import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavItem, NavMain } from "@/components/shadcn-space/blocks/sidebar-06/nav-main";
import { CircleUserRound, ClipboardList, Table } from "lucide-react";

export const navData: NavItem[] = [
  // Pages Section
  { label: "Lands", isSection: true },
  { title: "Tables", icon: Table, href: "/dashboard" },
  { title: "Forms", icon: ClipboardList, href: "/dashboard/forms" },
  { title: "User Profile", icon: CircleUserRound, href: "/dashboard/user-profile" },
];

export function AppSidebar() {
  return (
    <Sidebar variant="floating" className="p-4 h-full [&_[data-slot=sidebar-inner]]:h-full">
      <div className="flex flex-col gap-6 overflow-hidden">
        {/* ---------------- Header ---------------- */}
        <SidebarHeader className="px-4">
          <SidebarMenu>
            <SidebarMenuItem>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>

        {/* ---------------- Content ---------------- */}
        <SidebarContent className="overflow-hidden">
          <ScrollArea className="h-[calc(100vh-100px)]">
            <div className="px-4">
              <NavMain items={navData} />
            </div>
          </ScrollArea>
        </SidebarContent>
      </div>
    </Sidebar>
  );
}

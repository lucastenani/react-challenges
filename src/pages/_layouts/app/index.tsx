import "@/index.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-90 flex min-h-[calc(100vh-57px-97px)] w-full flex-1 flex-col px-10 py-6">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

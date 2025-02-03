import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="min-h-[calc(100vh-57px-97px)] flex-1 px-10 py-6 w-90 flex w-full flex-col ">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

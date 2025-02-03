import "@/index.css";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-90 mx-auto my-0 flex min-h-[calc(100vh-57px-97px)] w-full flex-1 flex-col gap-6 px-10 py-6 md:container">
        <SidebarTrigger />
        <Outlet />
      </main>
    </SidebarProvider>
  );
}

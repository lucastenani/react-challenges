import { Home, Atom, Rows3 } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "States",
    url: "/states",
    icon: Atom,
  },
  {
    title: "Lists and conditionals",
    url: "/lists-and-conditionals",
    icon: Rows3,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <ModeToggle />
      </SidebarHeader>
      <SidebarSeparator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

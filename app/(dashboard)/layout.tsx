import React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSideBar from "@/components/layouts/AppSideBar";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import UserNavigation from "@/components/layouts/UserNavigation";
import { Bell } from "lucide-react";
import { SearchDialog } from "@/components/layouts/SearchDialog";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider className=" relative">
      <AppSideBar variant="sidebar" collapsible="icon" />
      <SidebarInset
        data-content-layout={"centered"}
        className={cn(
          "bg-[#ebebeb] data-[content-layout=centered]:!mx-auto data-[content-layout=centered]:max-w-screen-2xl",
          // Adds right margin for inset sidebar in centered layout up to 113rem.
          // On wider screens with collapsed sidebar, removes margin and sets margin auto for alignment.
          "max-[113rem]:peer-data-[variant=inset]:!mr-2 min-[101rem]:peer-data-[variant=inset]:peer-data-[state=collapsed]:!mr-auto"
        )}
      >
        <header
          // data-navbar-style={navbarStyle}
          className={cn(
            " sticky top-0 backdrop-blur-3xl bg-[#ebebeb] z-10 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12",
            // Handle sticky navbar style with conditional classes so blur, background, z-index, and rounded corners remain consistent across all SidebarVariant layouts.
            "data-[navbar-style=sticky]:bg-background/50 data-[navbar-style=sticky]:sticky data-[navbar-style=sticky]:top-0 data-[navbar-style=sticky]:z-50 data-[navbar-style=sticky]:overflow-hidden data-[navbar-style=sticky]:rounded-t-[inherit] data-[navbar-style=sticky]:backdrop-blur-md"
          )}
        >
          <div className="flex w-full items-center justify-between px-4 lg:px-6">
            <div className="flex items-center gap-1 lg:gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator
                orientation="vertical"
                className="mx-2 data-[orientation=vertical]:h-4"
              />
              <SearchDialog />
            </div>
            <div className="flex items-center gap-5">
              <div className=" relative">
                <span className="bg-primary text-white -top-2.5 -right-2.5 h-5 w-5 absolute text-center rounded-full flex justify-center items-center">
                  5
                </span>
                <Bell className=" size-4" />
              </div>
              <UserNavigation />
            </div>
          </div>
        </header>
        <div className="h-full p-4 md:p-6">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
};

export default layout;

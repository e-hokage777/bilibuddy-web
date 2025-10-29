"use client";
import { Hospital, User } from "lucide-react";
import Sidebar, { SidebarItem } from "./_components/sidebar";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import DashboardSectionHeader from "./_components/dashboard_section_header";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  const pathName = usePathname();

  let title = "Title";
  let description = "Description";

  if (pathName.startsWith("/facility/dashboard/facility")) {
    title = "Facility";
    description = "Manager your facility";
  } else if (pathName.startsWith("/facility/dashboard/personnel")) {
    title = "Personnel";
    description = "Manager your facility's personnel";
  }

  return (
    <main className="bg-gray-300 w-screen h-screen overflow-hidden flex gap-8">
      <div className="w-[270px] ps-5 pt-5 ">
        <div className=" border-gray-400 pb-10 border-b">
          <Image src="/logo.svg" alt="logo" width={163} height={39} />
        </div>

        <Sidebar>
          <SidebarItem
            label="Facility"
            href="/facility/dashboard/facility"
            prefixIcon={<Hospital className="stroke-1" />}
          />
          <SidebarItem
            label="Personnel"
            href="/facility/dashboard/personnel"
            prefixIcon={<User className="stroke-1" />}
          />
        </Sidebar>
      </div>
      <div className="pt-5 flex-1 h-full">
        <div className="flex flex-col h-full">
          <DashboardSectionHeader title={title} description={description} />
          <div className="p-5 ps-0 flex-1">
            <Card className="bg-white h-full px-8">{children}</Card>
          </div>
        </div>
      </div>
    </main>
  );
}

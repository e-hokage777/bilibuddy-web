import { Hospital, User } from "lucide-react";
import Sidebar, { SidebarItem } from "./_components/sidebar";
import Image from "next/image";

export default function DashboardLayout({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
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
            prefixIcon={<Hospital className="stroke-1"/>}
          />
          <SidebarItem
            label="Personnel"
            href="/facility/dashboard/personnel"
            prefixIcon={<User className="stroke-1" />}
          />
        </Sidebar>
      </div>
      <div className="pt-5 flex-1 h-full">{children}</div>
    </main>
  );
}

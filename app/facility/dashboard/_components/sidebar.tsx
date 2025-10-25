"use client";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Sidebar({
  children,
}: {
  children: Readonly<React.ReactNode>;
}) {
  return (
    <aside className="flex flex-col gap-4  pt-8">
      {children}
    </aside>
  );
}

export function SidebarItem({
  label,
  href,
  prefixIcon,
}: {
  label: string;
  href: string;
  prefixIcon?: React.ReactNode;
}) {
  const active = usePathname() === href;
  return (
    <Link
      href={href}
      className={cn(
        "flex flex-row gap-4 py-1 px-2 rounded-md stroke-1",
        active ? "bg-primary text-primary-foreground" : "bg-transparent"
      )}
    >
      {prefixIcon} <span>{label}</span>
    </Link>
  );
}

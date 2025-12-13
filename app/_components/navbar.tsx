import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Navbar({ className }: { className?: string }) {
    const linkStyles = cn("text-xl text-white font-light")
  return (
    <div className={cn("p-6 absolute flex justify-between items-center z-[1000] w-full", className)}>
      <Link href="/">
        <Image src="logo.svg" alt="logo" width={163} height={39} />
      </Link>
      <nav>
        <ul className="flex items-center gap-4">
            <li>
                <Link className={linkStyles} href="#hero">Home</Link>
            </li>
            <li>
                <Link className={linkStyles} href="#how-it-works">How it Works</Link>
            </li>
            <li>
                <Link className={linkStyles} href="#our-mission">Our Mission</Link>
            </li>
            <li>
                <Link className={linkStyles} href="#contact">Contact Us</Link>
            </li>
        </ul>
      </nav>
    </div>
  );
}

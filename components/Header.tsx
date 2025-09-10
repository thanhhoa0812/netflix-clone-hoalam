"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-gradient-to-b from-black/80 to-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href={{ pathname: "/" }}
          className="text-2xl font-extrabold tracking-tight"
        >
          <span className="text-brand-red">Net</span>flix Clone
        </Link>
        <nav className="flex gap-6 text-sm text-white/80">
          {["/", "/movies", "/series"].map((p) => (
            <Link
              key={p}
              href={{ pathname: p }}
              className={pathname === p ? "text-white" : "hover:text-white"}
            >
              {p === "/" ? "Home" : p.replace("/", "").toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

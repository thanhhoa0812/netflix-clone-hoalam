"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur" : "bg-gradient-to-b from-black/80 to-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href={{ pathname: "/" }}
          className="text-xl md:text-2xl font-extrabold tracking-tight"
        >
          <span className="text-red-600">Netflix Clone</span>
        </Link>
        <nav className="flex gap-6 text-base md:text-lg font-semibold text-blue-800">
          {["/", "/movies", "/series"].map((p) => (
            <Link
              key={p}
              href={{ pathname: p }}
              className={pathname === p ? "text-blue-800" : "hover:text-red-500"}
            >
              {p === "/" ? "Home" : p.replace("/", "").toUpperCase()}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

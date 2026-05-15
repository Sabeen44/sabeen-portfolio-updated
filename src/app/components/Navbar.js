'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const navLinks = ["Services", "Process", "About", "Contact", "Resume"];
const sectionIds = ["about", "contact"];
const pageRoutes = { services: "/services", process: "/process", contact: "/contact" };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();

  const handleAbout = (e) => {
    if (pathname === "/") {
      e.preventDefault();
      document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Clear active when user is back near the top (hero visible)
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActive('');
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { rootMargin: '-35% 0px -35% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  const linkClass = (id) => {
    const isActive = active === id;
    return `relative text-xs font-dm tracking-[0.14em] uppercase transition-all duration-200
      after:absolute after:left-0 after:-bottom-1 after:h-px after:transition-all after:duration-300
      ${isActive
        ? 'text-[#E84545] after:w-full after:bg-[#E84545]'
        : 'text-gray-700 hover:text-[#E84545] after:w-0 after:bg-[#E84545] hover:after:w-full'
      }`;
  };

  return (
    <nav className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 relative z-10 bg-[#F8F6F0]">
      <Link href="/" className="font-dm font-medium tracking-widest text-[#111111] text-xs uppercase hover:text-[#E84545] transition-colors duration-200">
        Portfolio.
      </Link>

      {/* Desktop links */}
      <ul className="hidden sm:flex items-center gap-8 md:gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link}>
            {link === "Resume" ? (
              <a
                href="/resume.html"
                target="_blank"
                rel="noopener noreferrer"
                className="relative text-xs font-dm tracking-[0.14em] uppercase text-gray-700
                  transition-all duration-200 hover:text-[#E84545]
                  after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0
                  after:bg-[#E84545] after:transition-all after:duration-300
                  hover:after:w-full"
              >
                Resume
              </a>
            ) : link === "About" ? (
              <Link
                href="/#about"
                onClick={handleAbout}
                className={linkClass("about")}
              >
                {link}
              </Link>
            ) : pageRoutes[link.toLowerCase()] ? (
              <Link
                href={pageRoutes[link.toLowerCase()]}
                className={linkClass(link.toLowerCase())}
              >
                {link}
              </Link>
            ) : (
              <Link
                href={`#${link.toLowerCase()}`}
                className={linkClass(link.toLowerCase())}
              >
                {link}
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="sm:hidden flex flex-col gap-1.5 p-1"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-px bg-[#111111] transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-6 h-px bg-[#111111] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-px bg-[#111111] transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {open && (
        <ul className="sm:hidden absolute top-full left-0 right-0 bg-[#F8F6F0] border-t border-[#DEDAD2] flex flex-col list-none z-20">
          {navLinks.map((link) => (
            <li key={link} className="border-b border-[#DEDAD2]">
              {link === "Resume" ? (
                <a
                  href="/resume.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-6 py-4 text-xs font-dm tracking-[0.14em] uppercase text-gray-700 hover:text-[#E84545] transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Resume
                </a>
              ) : link === "About" ? (
                <Link
                  href="/#about"
                  onClick={(e) => { handleAbout(e); setOpen(false); }}
                  className={`block px-6 py-4 text-xs font-dm tracking-[0.14em] uppercase transition-colors ${
                    active === "about" ? 'text-[#E84545]' : 'text-gray-700 hover:text-[#E84545]'
                  }`}
                >
                  {link}
                </Link>
              ) : pageRoutes[link.toLowerCase()] ? (
                <Link
                  href={pageRoutes[link.toLowerCase()]}
                  className={`block px-6 py-4 text-xs font-dm tracking-[0.14em] uppercase transition-colors ${
                    active === link.toLowerCase() ? 'text-[#E84545]' : 'text-gray-700 hover:text-[#E84545]'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </Link>
              ) : (
                <Link
                  href={`#${link.toLowerCase()}`}
                  className={`block px-6 py-4 text-xs font-dm tracking-[0.14em] uppercase transition-colors ${
                    active === link.toLowerCase() ? 'text-[#E84545]' : 'text-gray-700 hover:text-[#E84545]'
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link}
                </Link>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
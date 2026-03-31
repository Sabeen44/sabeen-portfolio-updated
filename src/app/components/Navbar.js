import Link from "next/link";

const navLinks = ["Projects", "Skills", "About", "Resume"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-fluid py-7 border-b border-ivory-faint relative z-10">
      <span className="font-sans font-medium tracking-widest text-ink text-fluid-label uppercase">
        Portfolio.
      </span>

      <ul className="flex items-center gap-8 md:gap-10 list-none">
        {navLinks.map((link) => (
          <li key={link}>
            <Link
              href={`#${link.toLowerCase()}`}
              className="text-fluid-nav font-sans tracking-[0.14em] uppercase text-ink-muted hover:text-ink transition-colors duration-200"
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

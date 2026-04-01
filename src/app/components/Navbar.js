import Link from "next/link";

const navLinks = ["Projects", "Skills", "About", "Resume"];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-15 py-6 border-b border-ivory-faint relative z-10 bg-stone-50">
      <span className="font-sans font-medium tracking-widest text-ink text-fluid-label uppercase">
        Portfolio.
      </span>

     <ul className="flex items-center gap-8 md:gap-10 list-none">
  {navLinks.map((link) => (
    <li key={link}>
      {link === "Resume" ? (
        <a
          href="/resume.html"
          target="_blank"
          rel="noopener noreferrer"
          className="
            relative text-fluid-nav font-sans tracking-[0.14em] uppercase text-gray-700
            transition-all duration-200 hover:text-red-500
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
            after:bg-red after:transition-all after:duration-300
            hover:after:w-full
          "
        >
          Resume
        </a>
      ) : (
        <Link
          href={`#${link.toLowerCase()}`}
          className="
            relative text-fluid-nav font-sans tracking-[0.14em] uppercase text-gray-700
            transition-all duration-200 hover:text-red-500
            after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
            after:bg-red after:transition-all after:duration-300
            hover:after:w-full
          "
        >
          {link}
        </Link>
      )}
    </li>
  ))}
</ul>

    </nav>
  );
}

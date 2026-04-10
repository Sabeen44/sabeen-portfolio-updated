export default function Footer() {
  return (
    <footer className="border-t border-ivory-faint py-40 px-fluid text-ink-muted bg-red-500">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Left side — copyright */}
        <p
          className="font-dm tracking-widest uppercase text-[10px]"
        >
          © {new Date().getFullYear()} Sabeen — All Rights Reserved
        </p>

        {/* Right side — links */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:sabeen@example.com"
            className="
              font-dm uppercase tracking-widest text-[11px]
              hover:text-ink transition-colors
            "
          >
            Email
          </a>

          <a
            href="https://github.com/Sabeen44"
            target="_blank"
            className="
              font-dm uppercase tracking-widest text-[11px]
              hover:text-ink transition-colors
            "
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/your-link"
            target="_blank"
            className="
              font-dm uppercase tracking-widest text-[11px]
              hover:text-ink transition-colors
            "
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

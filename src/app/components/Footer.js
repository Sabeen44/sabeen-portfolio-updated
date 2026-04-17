export default function Footer() {
  return (
    <footer className="border-t border-[#DEDAD2] py-10 px-6 sm:px-10 lg:px-20 bg-[#F8F6F0] text-[#888880]">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">

        {/* Left side — copyright */}
        <p className="font-dm tracking-widest uppercase text-[10px]">
          © {new Date().getFullYear()} Sabeen — All Rights Reserved
        </p>

        {/* Right side — links */}
        <div className="flex items-center gap-8">
          <a
            href="mailto:craftedstack@gmail.com"
            className="font-dm uppercase tracking-widest text-[11px] hover:text-[#111111] transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/Sabeen44"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm uppercase tracking-widest text-[11px] hover:text-[#111111] transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sabeen-chaudhry/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm uppercase tracking-widest text-[11px] hover:text-[#111111] transition-colors"
          >
            LinkedIn
          </a>
        </div>

      </div>
    </footer>
  );
}

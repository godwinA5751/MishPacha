import { useState, useEffect } from "react";
import Logo from "../assets/navLogo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  const handleNavClick = (id) => {
    setOpen(false);

    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[rgba(13,27,42,0.96)] backdrop-blur-md border-b border-[rgba(201,168,76,0.3)] flex items-center justify-between px-6 md:px-15 py-4">

      {/* LOGO */}
      <a href="#" className="text-[#C9A84C] tracking-[0.15em] font-bold flex items-center gap-2">
        <img src={Logo} alt="Mishpacha Logo" className="h-10" />
        <span>
          <span>MISHPACHA</span>
          <span className="block text-[0.62rem] text-[#E8C97A] tracking-[0.3em]">
            A Rada Global Family
          </span>
        </span>
      </a>

      {/* DESKTOP MENU */}
      <ul className="hidden md:flex gap-9 uppercase text-[0.82rem] tracking-[0.12em]">
        <li><a href="#vision" className="text-white/70 hover:text-[#C9A84C]">Vision</a></li>
        <li><a href="#values" className="text-white/70 hover:text-[#C9A84C]">Values</a></li>
        <li><a href="#community" className="text-white/70 hover:text-[#C9A84C]">Community</a></li>
        <li><a href="#mandate" className="text-white/70 hover:text-[#C9A84C]">Mandate</a></li>
        <li>
          <a href="#join" className="bg-[#C9A84C] text-[#0D1B2A] px-5 py-2 font-bold hover:bg-[#E8C97A]">
            Join Us
          </a>
        </li>
      </ul>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-white text-2xl cursor-pointer"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div className={
          `absolute top-full left-0 w-60 h-screen
          bg-[#0d1b2a]/90 backdrop-blur-md
          border-r border-white/20
          shadow-lg shadow-black/30
          flex flex-col items-start gap-6 py-6 md:hidden
          transform transition-all duration-300 ease-in
          ${open ? "translate-x-0 translate-y-0" : "-translate-x-full"}
          z-40`
        }>

          <button
            onClick={() => handleNavClick("#vision")}
            className="cursor-pointer text-white/80 hover:text-[#C9A84C] ml-5 border border-[#C9A84C]/40 w-52 border-r-0 py-3 pl-2 rounded-l-3xl text-left backdrop-blur-sm bg-white/5"
          >
            📖 Vision
          </button>

          <button
            onClick={() => handleNavClick("#values")}
            className="cursor-pointer text-white/80 hover:text-[#C9A84C] ml-5 border border-[#C9A84C]/40 w-52 border-r-0 py-3 pl-2 rounded-l-3xl text-left backdrop-blur-sm bg-white/5"
          >
            💰 Values
          </button>

          <button
            onClick={() => handleNavClick("#community")}
            className="cursor-pointer text-white/80 hover:text-[#C9A84C] ml-5 border border-[#C9A84C]/40 w-52 border-r-0 py-3 pl-2 rounded-l-3xl text-left backdrop-blur-sm bg-white/5"
          >
            👥 Community
          </button>

          <button
            onClick={() => handleNavClick("#mandate")}
            className="cursor-pointer text-white/80 hover:text-[#C9A84C] ml-5 border border-[#C9A84C]/40 w-52 border-r-0 py-3 pl-2 rounded-l-3xl text-left backdrop-blur-sm bg-white/5"
          >
            📜 Mandate
          </button>

          <button
            onClick={() => handleNavClick("#join")}
            className="cursor-pointer bg-[#C9A84C] text-[#0D1B2A] ml-5 px-5 py-3 rounded-l-3xl font-bold w-52 text-left"
          >
            Join Us
          </button>

        </div>
      )}

    </nav>
  );
}
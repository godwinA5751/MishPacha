import Logo from "../assets/navLogo.png";

export default function Hero() {
  const values = [
    { icon: "📖", name: "VISION", ref: "Building values through virtues" },
    { icon: "🎯", name: "MISSION", ref: "Immortalizing impacts across generations" },
    { icon: "🧭", name: "PURPOSE", ref: "Leadership & Dominion — Gen 1:26–28" }
  ];
  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-br from-[#0D1B2A] via-[#112240] to-[#1A2E4A] flex items-center px-5 pt-30 pb-20"
    >

      <div className=" mx-auto grid md:grid-cols-2 grid-cols-1 gap-20 items-center">

        <div>

          <div className="text-[#C9A84C] tracking-[0.4em] text-xs mb-6">
            ✦ A Rada Global Family
          </div>

          <img src={Logo} alt="Mishpacha Logo" className="h-16 " />

          <p className="text-white/60 tracking-[0.25em] uppercase mt-4 mb-6">
            Teaching · Community · Transformation
          </p>

          <p className="italic text-[#C9A84C] border-l-2 border-[#8B6914] pl-4 mb-8">
            "Where there is no vision, the people perish..." <br />
            — Proverbs 29:18
          </p>

          <div className="flex gap-4 flex-wrap">

            <a
              href="#community"
              className="bg-[#C9A84C] rounded-3xl text-[#0D1B2A] px-8 py-4 uppercase tracking-[0.2em] border-2 border-[#C9A84C] hover:bg-transparent hover:text-[#C9A84C] transition-all"
            >
              Explore Our Work
            </a>

            <a
              href="#join"
              className="border-2 rounded-3xl border-white/30 text-white px-8 py-4 uppercase tracking-[0.2em] hover:border-[#C9A84C] hover:text-[#C9A84C]"
            >
              Join the Family
            </a>

          </div>

        </div>

        {/* Hero Panel */}

        <div className="md:mt-40 lg:mt-23 rounded-3xl bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.25)] p-10">

          <div className="text-center text-[#C9A84C] tracking-[0.3em] text-xs mb-7">
            ✦ Our Motto ✦
          </div>

          <div className="text-white text-3xl text-center font-black">
            Your
            <em className="block italic text-[#C9A84C] text-xl">
              Solution Hub!
            </em>
          </div>

          <div className="text-center text-white/40 mt-2 mb-8">
            Matthew 25:29
          </div>

          {values.map((v, i) => (
            <div
              key={i}
              className="text-center text-white/60 mb-4 p-2 border border-[rgba(201,168,76,0.25)] flex items-center gap-2 transition transform hover:-translate-y-1 hover:bg-[rgba(201,168,76,0.15)] rounded-2xl cursor-pointer"
            >
              <div className="rounded-full bg-[#C9A84C] p-0.5">
                {v.icon}
              </div>
              <div className="text-left">
                <div className="text-[#C9A84C] tracking-[0.2em]">
                  {v.name}
                </div>
                <div className="text-sm">
                  {v.ref}
                </div>
              </div>
            </div>
          ))}


        </div>

      </div>

    </section>
  )
}
import useInView from "../hooks/useInView";

export default function Mandate() {
  const [ref, isVisible] = useInView();

  return (
    <section id="mandate" className="bg-linear-to-br from-[#0D1B2A] to-[#1e3a5f] py-24 px-6">

      <div className="max-w-6xl mx-auto">
        <div className="text-[#C9A84C] tracking-[0.4em] text-xs mb-10 uppercase">
          What Drives Us
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-8">

          {[
            {
              num: "01",
              label: "Mandate",
              title: "Total Equipping for Kingdom Work",
              body: `We are called to equip every member totally — for the ideal work of the Kingdom,
              the family, and the economy. No one is left behind, and every hand is raised to build.`,
              verse: "Nehemiah 4:6"
            },
            {
              num: "02",
              label: "Work Ethics",
              title: "Capacity & Balance in All Things",
              body: `Excellence demands both capacity and balance. We work diligently while we have daylight,
              stewarding every gift, resource, and opportunity entrusted to us with intentionality.`,
              verse: "John 9:4"
            },
            {
              num: "03",
              label: "Purpose",
              title: "Leadership & Dominion",
              body: `From the very beginning, humanity was created to lead, to steward, and to have dominion.
              MISHPACHA raises up leaders who govern with wisdom, integrity, and love.`,
              verse: "Genesis 1:26–28"
            }
          ].map((item, i) => (
            <div
              key={i}
              className={`
                border rounded-3xl backdrop-blur-md border-[#C9A84C]/20 p-8 cursor-pointer bg-white/5 hover:bg-[#C9A84C]/10 transition 
                ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"}
                `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl font-black text-[#C9A84C]/20">{item.num}</div>
              <div className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase mt-2">
                {item.label}
              </div>
              <div className="text-white text-xl font-bold mt-3">
                {item.title}
              </div>
              <p className="text-white/60 mt-3 leading-7">{item.body}</p>
              <div className="text-[#8B6914] text-xs mt-4 tracking-[0.2em]">
                {item.verse}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
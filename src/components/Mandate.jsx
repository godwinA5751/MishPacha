import Reveal from "./Reveal"
export default function Mandate() {

  return (
    <section id="mandate" className="lg:h-screen py-20 px-6">

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-blue-900 text-3xl md:text-4xl tracking-widest font-extrabold mb-10">
            What <span className="text-yellow-500">Drives Us</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">

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
          ].map((item) => (
            <Reveal>
              <div
                key={item.num}
                className={`
                 rounded-3xl p-6 cursor-pointer shadow-xl bg-white hover:bg-white/50 hover:backdrop-blur-md transition 
                `}
              >
                <div className="text-5xl font-black text-blue-900/70">{item.num}</div>
                <div className="text-yellow-500 text-xl tracking-widest font-bold mt-2">
                  {item.label}
                </div>
                <div className="text-blue-900 text-xl font-bold mt-3">
                  {item.title}
                </div>
                <p className="text-blue-900/80 mt-3 leading-7">{item.body}</p>
                <div className="text-yellow-500 font-bold text-xs mt-4 tracking-[0.2em]">
                  {item.verse}
                </div>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}
import Reveal from "./Reveal";

export default function VisionMission() {
  return (
    <section id="vision" className="p-6 py-24 scroll-mt-32">
      <Reveal>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl text-blue-900 p-8">
            <div className="text-yellow-500 tracking-[0.2em] text-sm mb-2 font-bold font-serif">
              Our Vision
            </div>

            <h2 className="text-3xl font-bold mb-5 font-serif">
              Building Values <br /> <span className="text-yellow-500">Through Virtues</span>
            </h2>

            <p className="text-blue-900/70 leading-8 font-serif">
              At MISHPACHA, we believe that lasting change begins with character. Every teaching, every initiative,
              every community project flows from the pursuit of virtue — the kind that shapes families,
              communities, and nations for generations to come.
            </p>

            <span className="inline-block mt-6 border border-yellow-500 px-4 py-2 text-yellow-500 text-xs tracking-[0.2em] font-bold">
              Proverbs 29:18
            </span>
          </div>

          <div className="bg-white/20 backdrop-blur-xl shadow-2xl rounded-3xl text-blue-900 p-8">
            <div className="text-yellow-500 tracking-[0.2em] text-sm mb-2 font-bold font-serif">
              Our Mission
            </div>

            <h2 className="text-3xl font-bold mb-5 font-serif">
              Immortalizing <br />
              <span className="text-yellow-500">Impacts</span>
            </h2>

            <p className="text-blue-900/70 leading-8 font-serif">
              We go beyond moments — we create movements. Through discipleship, education, and community
              transformation, MISHPACHA equips every member to carry the Kingdom's mandate into their
              world: their family, their workplace, and their nation.
            </p>

            <span className="inline-block mt-6 border border-yellow-500 px-4 py-2 text-yellow-500 text-xs tracking-[0.2em] font-bold">
              Matthew 28:18–20
            </span>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
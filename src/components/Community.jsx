import Reveal from "./Reveal"

export default function Community() {
  return (
    <section id="community" className=" py-20 px-6">

      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-yellow-500/80 tracking-widest text-2xl font-bold mb-4">
            Community Projects
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-blue-900">
            Impact You Can <span className="text-yellow-500">See & Feel</span>
          </h2>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">

          {[
            {
              icon: "📚",
              title: "Kingdom Teaching",
              body: `In-depth Bible-based seminars, discipleship programs, and leadership training that
              transform lives from the inside out. We equip believers to understand and walk in
              their full Kingdom identity.`
            },
            {
              icon: "🏘️",
              title: "Family Restoration",
              body: `The family is the first institution of God. We run counseling, parenting workshops,
              and marriage enrichment programs designed to rebuild and strengthen families
              across every community we serve.`
            },
            {
              icon: "🌱",
              title: "Economic Empowerment",
              body: `valuess acquisition, entrepreneurship mentoring, and financial literacy training
              that unlock the economic potential of every individual — aligning vocation with Kingdom purpose.`
            },
            {
              icon: "🤝",
              title: "Youth & Next Gen",
              body: `The next generation carries tomorrow's destiny. Our youth programs, camps, and
              mentorship networks are raising a generation of leaders anchored in faith, virtue,
              and purpose — ready to take dominion.`
            }
          ].map((item, i) => (
            <Reveal>
              <div
                key={i}
                style={{ transitionDelay: `${i * 100}ms` }}
                className={`
                  p-6 rounded-2xl bg-white hover:bg-white/60 hover:backdrop-blur-md shadow-xl cursor-pointer transition
              `}
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-xl font-bold mb-3 text-blue-900">{item.title}</div>
                <p className="leading-7 text-blue-900/70">{item.body}</p>
                <a href="#" className="inline-block mt-6 text-xs md:text-sm tracking-[0.2em] border-b border-yellow-600 text-yellow-600">
                  Learn More →
                </a>
              </div>
            </Reveal>
          ))}

        </div>
      </div>
    </section>
  )
}
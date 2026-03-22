import useInView from "../hooks/useInView";

export default function Community() {
  const [ref, isVisible] = useInView(0.3);
  return (
    <section id="community" className="bg-white py-24 px-6">

      <div className="max-w-6xl mx-auto">
        <div className="text-[#C9A84C] tracking-[0.4em] text-xs uppercase mb-4">
          Community Projects
        </div>

        <h2 className="text-3xl font-bold mb-12">
          Impact You Can <span className="text-[#8B6914]">See & Feel</span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-2 gap-5">

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
              body: `Skills acquisition, entrepreneurship mentoring, and financial literacy training
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
            <div
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`
                p-10 border rounded-2xl border-[#C9A84C]/20 hover:bg-[#f9f5ec] cursor-pointer transition
                ${isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
                }
              `}
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <div className="text-xl font-bold mb-3">{item.title}</div>
              <p className="text-gray-600 leading-7">{item.body}</p>
              <a href="#" className="inline-block mt-6 text-sm tracking-[0.2em] uppercase border-b border-[#8B6914] text-[#8B6914]">
                Learn More →
              </a>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
import useInView from "../hooks/useInView"
import Banner from "./Banner"
import Reveal from "./Reveal"
const principles = [
  {
    title: "Capacity",
    description: "Developing and deploying every God-given gift to its fullest potential"
  },
  {
    title: "Balance",
    description: "Stewarding strength without burning out — sustainable for a lifetime"
  }
]
export default function Ethics() {
  const [ref, isVisible] = useInView(0.3);
  return (
    <section id="ethics" className="lg:h-screen pt-24 scroll-mt-32 px-6 flex flex-col justify-center items-center">

      <div className="max-w-6xl my-10 mx-auto grid md:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div>
            <div className="text-yellow-500/60 tracking-widest text-xl font-bold mb-4">
              Work Ethics
            </div>

            <h2 className="text-3xl font-bold mb-4 text-blue-900">
              How <span className="text-yellow-500">We Work</span>
            </h2>

            <p className="text-blue-900/60 leading-8">
              Everything we do is governed by two powerful principles: Capacity and Balance.
              We maximize every gift and every opportunity while maintaining the spiritual,
              mental, and relational equilibrium that sustains long-term impact.
            </p>

            <p className="mt-6 text-xs tracking-[0.2em] uppercase text-yellow-500">
              John 9:4
            </p>
          </div>
        </Reveal>
          <div className="grid grid-cols-2 gap-6">

            {principles.map((p, i) => (
              <div ref={ref} key={i}
                className={`
                bg-white shadow-xl p-6 rounded-b-3xl text-center
                  border-t-4 border-yellow-500
                  origin-top
                  transition-all duration-700 ease-out
                  ${isVisible
                    ? "opacity-100 translate-y-0 scale-y-100"
                    : "opacity-0 -translate-y-10 scale-y-75"
                  }
                `}>
                <div className="text-yellow-400 text-xl font-bold mb-2">{p.title}</div>
                <div className="text-blue-900/60 text-sm">{p.description}
                </div>
              </div>
            ))}

            <div className="col-span-2 text-center text-sm tracking-[0.2em] text-yellow-600 mt-4">
              ✦ Our commitment to excellence is both a calling and a standard ✦
            </div>

          </div>
      </div>
      <Banner />
    </section>
  )
}
import Reveal from "./Reveal"
export default function CTA() {
  return (
    <section id="cta" className="text-center py-24 px-6 scroll-mt-32 relative overflow-hidden">
      <Reveal>
        <div className="text-yellow-500 tracking-[0.4em] text-xs mb-5 uppercase font-serif">
          ✦ Join the Family ✦
        </div>

        <h2 className="text-blue-900 text-[clamp(2rem,5vw,4rem)] font-bold mb-4 font-serif">
          Become Part of <br />
          <em className="text-yellow-500 italic">Something Eternal</em>
        </h2>

        <p className="text-blue-900/60 max-w-xl mx-auto leading-8 mb-10 text-lg font-serif">
          MISHPACHA — A Rada Global Family — is more than an organization. It's a covenant
          community of believers building together, growing together, and transforming the world
          together. Your seat at the table is ready.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a href="#cta" className="bg-blue-500 shadow-lg text-white rounded-3xl px-8 py-4 font-bold hover:bg-transparent hover:border hover:border-blue-500 hover:text-blue-500 transition-all delay-200">
            Connect With Us
          </a>
          <a href="#cta" className="bg-white shadow-lg text-blue-500 font-bold px-8 py-4 rounded-3xl">
            Our Programs
          </a>
        </div>
      </Reveal>
    </section>
  )
}
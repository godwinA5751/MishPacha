export default function CTA() {
  return (
    <section id="join" className="bg-[#0D1B2A] text-center py-28 px-6 relative overflow-hidden">
      
      <div className="text-[#C9A84C] tracking-[0.4em] text-xs mb-5 uppercase font-serif">
        ✦ Join the Family ✦
      </div>

      <h2 className="text-white text-[clamp(2rem,5vw,4rem)] font-bold mb-4 font-serif">
        Become Part of <br />
        <em className="text-[#C9A84C] italic">Something Eternal</em>
      </h2>

      <p className="text-white/60 max-w-xl mx-auto leading-8 mb-10 text-lg font-serif">
        MISHPACHA — A Rada Global Family — is more than an organization. It's a covenant
        community of believers building together, growing together, and transforming the world
        together. Your seat at the table is ready.
      </p>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="bg-[#C9A84C] text-[#0D1B2A] rounded-3xl px-8 py-4 font-bold tracking-[0.2em] uppercase border-2 border-[#C9A84C] hover:bg-transparent hover:text-[#C9A84C] transition">
          Connect With Us
        </a>

        <a href="#" className="text-white px-8 py-4 rounded-3xl border-2 border-white/30 tracking-[0.2em] uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition">
          Our Programs
        </a>
      </div>
    </section>
  )
}
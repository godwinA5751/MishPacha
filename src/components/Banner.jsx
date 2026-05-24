import Reveal from "./Reveal"
export default function Banner() {
  return (
    <Reveal>
      <div className="bg-white/20 backdrop-blur-lg max-w-6xl mt-10 pt-8 pb-3 px-3 md:px-6 text-center rounded-3xl shadow-2xl">
        <div className="text-blue-900 font-black tracking-widest md:tracking-[0.08em] text-[clamp(1.2rem,4vw,2.5rem)] font-serif">
          ✦ YOUR SOLUTION HUB ✦
        </div>
        <div className="text-blue-900/60 italic tracking-[0.15em] text-lg mt-5 font-serif">
          For everyone who has, more will be given — Matthew 25:29
        </div>
      </div>
    </Reveal>
  )
}
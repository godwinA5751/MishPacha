import Logo from "../assets/navLogo.png";
import { Target, Eye, Compass, Quote } from "lucide-react";
import Reveal from "./Reveal"

export default function Hero() {
  const motto = <Quote className="w-8 h-8 text-yellow-500" />
  const vision = <Eye className="w-8 h-8 text-blue-600" />
  const mission = <Target className="w-8 h-8 text-yellow-500" />
  const purpose = <Compass className="w-8 h-8 text-blue-600" />

  const values = [
    { icon: motto, name: "Motto", ref: "Solution Hub! Matthew 25:29", rank: "odd" },
    { icon: vision, name: "Vision", ref: "Building values through virtues", rank: "even" },
    { icon: mission, name: "Mission", ref: "Immortalizing impacts across generations", rank: "odd" },
    { icon: purpose, name: "Purpose", ref: "Leadership & Dominion — Gen 1:26–28", rank: "even" }
  ];
  return (
    <div>
      <section
        id="home"
        className="min-h-screen flex items-center pt-25 md:pt-15 lg:pt-5 font-sans"
      >

        <div className=" mx-auto items-center">
          <div className="flex justify-between">
            <Reveal>
              <div className="px-6 md:mt-10">
                <div className="bg-white w-60 flex items-center gap-2 px-4 py-2 rounded-3xl">
                  <div className="border-7 border-amber-300 rounded-full"></div>
                  <div className="text-blue-600 font-bold">Welcome to Mishpacha</div>
                </div>

                <div className="flex flex-col mt-8 font-extrabold">
                  <span className="text-blue-900 text-3xl">✦ A Rada</span>
                  <span className="text-4xl">
                    <span className="text-blue-600">Global</span>
                    <span className="text-amber-300"> Family</span></span>
                </div>

                <p className="text-blue-950 tracking-[0.25em] uppercase mt-4 mb-2">
                  Teaching · Community · Transformation
                </p>

                <p className="italic text-blue-950 border-l-2 border-blue-900 pl-4 mb-8">
                  "Where there is no vision, the people perish..." <br />
                  — Proverbs 29:18
                </p>

                <div className="flex gap-4 flex-wrap">

                  <a
                    href="#community"
                    className="bg-blue-600 rounded-4xl shadow-2xl text-white font-bold px-8 py-4 tracking-widest hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600 transition-all"
                  >
                    Our Work
                  </a>

                  <a
                    href="https://chat.whatsapp.com/F8BY1nT4VSe8zQmeBL6ZGd"
                    className="bg-white rounded-4xl shadow-2xl text-blue-600 font-bold px-8 py-4 tracking-wider"
                  >
                    Join the Family
                  </a>

                </div>
              </div>
            </Reveal>
            <div className="image hidden md:block">
              <img src={Logo} alt="Mishpacha Logo" loading="lazy" className="" />
            </div>
          </div>
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 px-6 mt-10 md:-mt-10 pt-0 md:pt-20">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="bg-white mb-4 p-2 md:px-1 md:py-5 lg:p-7 flex gap-2 flex-col shadow-2xl transition transform hover:-translate-y-1 rounded-2xl cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    <div className={` 
                    rounded-full p-3
                    ${v.rank === "odd" ? "bg-yellow-100" : "bg-blue-100"}  
                  `}
                    >
                      {v.icon}
                    </div>
                    <div className={`
                      ${v.rank === "odd" ? "text-yellow-500" : "text-blue-600"}
                    `}
                    >
                      {v.name}
                    </div>
                  </div>
                  <div className="text-sm text-blue-900 py-2 pl-1 mb-1">
                    {v.ref}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

      </section>
    </div>
  )
}

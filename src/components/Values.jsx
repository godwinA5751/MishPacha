import useInView from "../hooks/useInView";

export default function Values() {
  const values = [
    { icon: "❤️", name: "Love", ref: "Agápē" },
    { icon: "😊", name: "Joy", ref: "Chará" },
    { icon: "🕊️", name: "Peace", ref: "Eirḗnē" },
    { icon: "⏳", name: "Long-Suffering", ref: "Makrothymía" },
    { icon: "🌿", name: "Gentleness", ref: "Chrēstotēs" },
    { icon: "✨", name: "Goodness", ref: "Agathōsýnē" },
    { icon: "🙏", name: "Faith", ref: "Pístis" },
    { icon: "🌾", name: "Meekness", ref: "Praýtēs" },
    { icon: "⚖️", name: "Self-Control", ref: "Egkráteia" }
  ];

  const [ref, isVisible] = useInView();

  return (
    <section id="values" className="py-24 px-4">
      <div className="max-w-300 mx-auto">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          The Fruit That <span className="text-[#8B6914]">Defines Us</span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-3 grid-cols-2 gap-3">

          {values.map((v, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 100}ms` }}
              className={`
                p-10 text-center rounded-3xl cursor-pointer
                transform transition-all duration-700
                bg-white hover:bg-[#18324e]

                ${isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-10"}
              `}
            >
              <div className="text-3xl mb-3">{v.icon}</div>

              <div className="font-bold text-sky-700 tracking-[0.15em]">
                {v.name}
              </div>

              <div className="text-sm text-gray-500 mt-2">
                {v.ref}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
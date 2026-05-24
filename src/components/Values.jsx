import Reveal from "./Reveal";
import MultiRowCarousel from './MultiRowCarousel'
export default function Values() {
  // const values = [
  //   { icon: "❤️", name: "Love", ref: "Agápē" },
  //   { icon: "😊", name: "Joy", ref: "Chará" },
  //   { icon: "🕊️", name: "Peace", ref: "Eirḗnē" },
  //   { icon: "⏳", name: "Long-Suffering", ref: "Makrothymía" },
  //   { icon: "🌿", name: "Gentleness", ref: "Chrēstotēs" },
  //   { icon: "✨", name: "Goodness", ref: "Agathōsýnē" },
  //   { icon: "🙏", name: "Faith", ref: "Pístis" },
  //   { icon: "🌾", name: "Meekness", ref: "Praýtēs" },
  //   { icon: "⚖️", name: "Self-Control", ref: "Egkráteia" }
  // ];

  return (
    <section id="values" className="py-24 px-6 scroll-mt-32">
      <div className="max-w-300 mx-auto">
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-blue-900">
            The Fruit That <span className="text-yellow-500">Defines Us</span>
          </h2>
        </Reveal>
        <MultiRowCarousel />
      </div>
    </section>
  );
}
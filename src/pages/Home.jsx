import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import VisionMission from "../components/VisionMission"
import Values from "../components/Values"
import Mandate from "../components/Mandate"
import Community from "../components/Community"
import Ethics from "../components/Ethics"
import Banner from "../components/Banner"
import CTA from "../components/CTA"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-[#FAF6EF] text-[#2C2C2C] overflow-x-hidden">
      <Navbar />
      <Hero />
      <VisionMission />
      <Values />
      <Mandate />
      <Community />
      <Ethics />
      <Banner />
      <CTA />
      <Footer />
    </div>
  )
}
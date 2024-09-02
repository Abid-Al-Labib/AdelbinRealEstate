import { useEffect } from "react"
import Nav from "../components/Nav"
import FindHomeSection from "../sections/FindHomeSection"
import Footer from "../sections/Footer"
import HomeWorthSection from "../sections/HomeWorthSection"
import RealEstateHero from "../sections/RealEstateHero"

const SalesPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <RealEstateHero/>
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <FindHomeSection/>
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <HomeWorthSection/>
      </section>
      <section className="padding-y bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default SalesPage
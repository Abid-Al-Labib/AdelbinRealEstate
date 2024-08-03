import Nav from "../components/Nav"
import FindHomeSection from "../sections/FindHomeSection"
import Footer from "../sections/Footer"
import HomeWorthSection from "../sections/HomeWorthSection"
import RealEstateHero from "../sections/RealEstateHero"

const SalesPage = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="padding-x pb-8">
        <RealEstateHero/>
      </section>
      <section className="padding-x pb-8">
        <HomeWorthSection/>
      </section>
      <section className="padding-y padding-x padding-t pb-8">
        2 CARDS FOR COMMERCIAL AND PRIVATE
      </section>
      <section className="padding-x pb-8">
        <FindHomeSection/>
      </section>
      <section className="padding-y bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default SalesPage
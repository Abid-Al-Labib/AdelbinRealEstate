import Nav from "../components/Nav"
import ConstructionHero from "../sections/ConstructionHero"
import ConstructionInfo from "../sections/ConstructionInfo"
import Footer from "../sections/Footer"

const ConstructionPage = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <ConstructionHero/>
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <ConstructionInfo/>
      </section>
      <section className="padding-y bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default ConstructionPage
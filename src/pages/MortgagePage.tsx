import Nav from "../components/Nav"
import Footer from "../sections/Footer"
import MortgageCalculator from "../sections/MortgageCalculator"
import MortgageHero from "../sections/MortgageHero"
import MortgageInfo from "../sections/MortgageInfo"
import MortgageSteps from "../sections/MortgageSteps"

const MortgagePage = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r">
        <MortgageHero/>
      </section>
      <section className="xl:padding-l wide:padding-r">
        <MortgageSteps/>
      </section>
      <section className="xl:padding-l wide:padding-r">
        <MortgageCalculator/>
      </section>
      <section>
        <MortgageInfo/>
      </section>
      <section className="padding-y bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default MortgagePage
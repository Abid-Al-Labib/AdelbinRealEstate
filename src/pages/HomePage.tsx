import Hero from "../sections/Hero"
import Nav from "../components/Nav"
import Services from "../sections/Services"
import Footer from "../sections/Footer"
import Reviews from "../sections/Reviews"
function HomePage() {
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Services/>
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero/>
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Reviews/>
      </section>
      <section className="padding-y bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}
export default HomePage

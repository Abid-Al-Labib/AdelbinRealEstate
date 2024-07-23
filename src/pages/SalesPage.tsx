import Nav from "../components/Nav"
import Footer from "../sections/Footer"

const SalesPage = () => {
  return (
    <main className="relative">
      <Nav/>
      <section className="padding-y padding-x padding-t pb-8">
        Sales - break it into corporate and private
      </section>
      <section className="padding-y padding-x padding-t pb-8">
        idx map
      </section>
      <section className="padding-y bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default SalesPage
import Nav from "../components/Nav"
import Services from "../sections/Services"
import Footer from "../sections/Footer"
import Reviews from "../sections/Reviews"
import HomeAbout from "../sections/HomeAbout"
import { useEffect } from "react"
function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  
  return (
    <main className="relative">
      <Nav/>
      <section className="xl:padding-l wide:padding-r padding-b">
        <Services/>
      </section>
      <section className="xl:padding-l wide:padding-r padding-b">
        <HomeAbout/>
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

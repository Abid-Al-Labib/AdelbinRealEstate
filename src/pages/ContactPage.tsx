import ContactForm from "../components/ContactForm"
import Nav from "../components/Nav"
import Footer from "../sections/Footer"

const ContactPage = () => {
  return (
    <main className="relative">
      <Nav/>
      <section>
        <div className="isolate bg-white px-6 py-16 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                
            </div>
        </div>
      </section>
      <section>
        <ContactForm/>
      </section>
      <section className="padding-y bg-black padding-x padding-t pb-8">
        <Footer/>
      </section>
    </main>
  )
}

export default ContactPage
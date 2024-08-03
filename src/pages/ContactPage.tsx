import ContactForm from "../components/ContactForm"
import ContactInfo from "../sections/ContactInfo"
import Nav from "../components/Nav"
import Footer from "../sections/Footer"

const ContactPage = () => {
  return (
    <main className="relative">
      <Nav/>
      <section>
        <div className="isolate bg-white px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
                <ContactInfo/>
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
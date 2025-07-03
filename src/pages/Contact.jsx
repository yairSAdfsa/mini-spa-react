import { ToastContainer } from 'react-toastify'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <section className="container-fluid px-4">
      <div className="mx-auto" style={{ maxWidth: '700px' }}>
        <h2 className="mb-4 text-center">Contáctanos</h2>
        <ContactForm />
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </section>
  )
}

export default Contact

import { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      toast.error('Por favor completa todos los campos')
      return
    }

    if (!validateEmail(form.email)) {
      toast.error('Correo inválido')
      return
    }

    toast.success('Mensaje enviado correctamente ✅')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="card shadow-sm border-0 p-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control rounded-3 bg-light border-0 py-2"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo</label>
          <input
            type="email"
            className="form-control rounded-3 bg-light border-0 py-2"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            autoComplete="on"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Mensaje</label>
          <textarea
            className="form-control rounded-3 bg-light border-0 py-2"
            id="message"
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-success px-4">
          Enviar ✉️
        </button>
      </form>
    </div>
  )
}

export default ContactForm

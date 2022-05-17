import { FormEvent, useState } from "react"
import toast, { Toaster } from 'react-hot-toast';
import { inputStates } from '../../Services/inputStates'

function Newsletter() {
  const NEWSLETTER_URL = process.env.REACT_APP_NEWSLETTER_URL
  // logic could be moved to hooks
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [nameError, setNameError] = useState(inputStates.BLANK)
  const [emailError, setEmailError] = useState(inputStates.BLANK)

  const handleNotification = (text: string, error = false) => {
    error ?
      toast.error(text, { position: 'bottom-right' }) :
      toast.success(text, { position: 'bottom-right' });
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (name.length < 3) {
      handleNotification('La longitud del nombre debe ser mayor a 3', true)
      return
    }
    if (email.length === 0) {
      handleNotification('Email en blanco', true)
      return
    }

    if (!validateEmail(email)) {
      handleNotification('Email incorrecto', true)
      return
    }

    const sendSubscribe = async () => {
      if (!NEWSLETTER_URL) return

      const res = await fetch(NEWSLETTER_URL, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email })
      })
      return res.status === 200
    }
    const isAproved = await sendSubscribe()

    if (isAproved) {
      handleNotification('Ya estas suscrito!')
      setEmail('')
      setName('')
      setEmailError(inputStates.BLANK)
      setNameError(inputStates.BLANK)
      e.currentTarget.reset()
      return
    }

    handleNotification('Error al enviar la subscripción', true)
  }

  const handleSetName = (name: string) => {
    setName(name)
    if (name.length === 0) {
      setNameError(inputStates.BLANK)
      return
    }
    setNameError(name.length < 3 ? inputStates.ERROR : inputStates.SUCCESS)
  }

  const handleSetMail = (email: string) => {
    setEmail(email)
    if (email.length === 0) {
      setEmailError(inputStates.BLANK)
      return
    }
    setEmailError(validateEmail(email) ? inputStates.SUCCESS : inputStates.ERROR)
  }

  function validateEmail(email: string) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  return (
    <section className="bg-ligthterGray flex flex-col items-center">
      <div className="flex flex-col items-center w-3/4 lg:w-auto">
        <div>
          <h1 className="text-xl font-bold text-left mt-8 mb-6">¡Únete a nuestras novedades y promociones!</h1>
        </div>
        <form className="flex flex-col w-full lg:flex-row lg:items-center lg:mb-10" onSubmit={handleSubmit} noValidate>
          <input type="text"
            className={`newsletter-input ${nameError}`}
            name="name"
            id="name"
            placeholder="Ingresa tu nombre"
            minLength={3}
            onChange={(e) => handleSetName(e.target.value)}
            title="Tu nombre"
            value={name}
            required />

          <input type="email" className={`newsletter-input ${emailError}`}
            name="email"
            id="email"
            placeholder="Ingresa tu email"
            onChange={(e) => handleSetMail(e.target.value)}
            title="Tu email"
            value={email}
            required />
          <button type="submit" className="subcribirme-btn">Suscribirme</button>
        </form>
      </div>
      <Toaster />
    </section>
  )
}

export default Newsletter
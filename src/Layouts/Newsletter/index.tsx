function Newsletter() {
  return (
    <section className="bg-ligthterGray flex flex-col my-10 items-center">
      <div className="flex flex-col items-center w-3/4">
        <h1 className="text-xl font-bold text-left mt-8 mb-6">¡Únete a nuestras novedades y promociones!</h1>
        <form className="flex flex-col w-full">
          <input type="text" className="p-4 mb-4 w-full rounded-md" name="name" id="name" placeholder="Ingresa tu nombre" />
          <input type="email" className="p-4 mb-4 w-full rounded-md" name="email" id="email" placeholder="Ingresa tu email" />
          <button type="submit" className="text-white bg-black p-4 w-full rounded-md mb-8">Suscribirme</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
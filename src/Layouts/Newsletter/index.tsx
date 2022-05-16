function Newsletter() {
  return (
    <section className="bg-ligthterGray flex flex-col items-center">
      <div className="flex flex-col items-center w-3/4 lg:w-auto">
        <div>
          <h1 className="text-xl font-bold text-left mt-8 mb-6">¡Únete a nuestras novedades y promociones!</h1>
        </div>
        <form className="flex flex-col w-full lg:flex-row lg:items-center lg:mb-10">
          <input type="text" className="p-4 mb-4 w-full rounded-md h-14 focus-visible:outline-none lg:mb-0 lg:mr-3 lg:w-fit lg:rounded-none" name="name" id="name" placeholder="Ingresa tu nombre" />
          <input type="email" className="p-4 mb-4 w-full rounded-lg h-14 focus-visible:outline-none lg:mb-0 lg:mr-3 lg:w-fit lg:rounded-none" name="email" id="email" placeholder="Ingresa tu email" />
          <button type="submit" className="text-white bg-black p-4 w-full rounded-lg font-subscribe font-bold mb-8 h-14 lg:mb-0 lg:rounded-none">Suscribirme</button>
        </form>
      </div>
    </section>
  )
}

export default Newsletter
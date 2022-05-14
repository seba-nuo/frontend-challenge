import hero from '../../Assets/img/hero.webp'

function Hero() {
  return (
    <header className="relative mt-6">
      <img className="w-full" src={hero} alt="hero" />
      <div className='absolute bg-black top-0 left-0 w-full h-full opacity-50'>
      </div>
      <div className='flex flex-col justify-center absolute top-0 left-0 px-6 w-full h-full'>
        <h1 className="text-white text-2xl font-bold">¡Hola! ¿Qué es lo que buscas?</h1>
        <div className='h-2'></div>
        <h2 className="text-white text-3xl font-extrabold">Crear o migrar tu comercio electrónico?</h2>
        <div className='flex absolute bottom-0 left-0 w-full justify-center'>
          <div className='bg-orange w-4 h-4 m-2 rounded-full'></div>
          <div className='bg-ligthGray w-4 h-4 m-2 rounded-full'></div>
          <div className='bg-ligthGray w-4 h-4 m-2 rounded-full'></div>
          <div className='bg-ligthGray w-4 h-4 m-2 rounded-full'></div>
        </div>
      </div>
    </header>
  )
}

export default Hero
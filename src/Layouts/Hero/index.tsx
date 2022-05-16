import hero from '../../Assets/img/hero.webp'
import { ReactComponent as Wave } from '../../Assets/img/wave.svg'

function Hero() {
  return (
    <header className="relative mt-6 h-[300px]">
      <div className='relative'>
        <Wave className='hidden absolute w-full z-10 lg:block' />
        <img className="absolute right-0 w-full h-[300px] lg:w-1/2" src={hero} alt="hero" />
      </div>
      <div className='hidden absolute bg-black w-1/2 h-full lg:block' >
      </div>
      <div className='absolute bg-black top-0 left-0 w-full h-full opacity-50'>
      </div>
      <div className='flex flex-col justify-center absolute top-0 left-0 px-6 w-full h-full z-20 lg:p-32'>
        <div className='lg:w-1/2'>
          <h1 className="text-white text-2xl font-bold mb-2">¡Hola! ¿Qué es lo que buscas?</h1>
          <h2 className="text-white text-3xl font-extrabold">Crear o migrar tu comercio electrónico?</h2>
        </div>
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
import mail from '../../Assets/img/mail.svg'
import headset from '../../Assets/img/headset.svg'
import vtex from '../../Assets/img/vtex.svg'
import corebizBlack from '../../Assets/img/corebizBlack.svg'
import vtex_v from '../../Assets/img/vtex_v.svg'
import vtex_t from '../../Assets/img/vtex_t.svg'
import vtex_e from '../../Assets/img/vtex_e.svg'
import vtex_x from '../../Assets/img/vtex_x.svg'

function Footer() {
  return (
    <footer className="bg-black flex flex-col">
      <div className='p-10 flex flex-col gap-3'>
        <h1 className="text-white text-2xl">Ubicación</h1>
        <div className="bg-white w-16 h-1 mb-4"></div>
        <p className='text-white'>Avenida Andrômeda, 2000. Bloco 6 e 8</p>
        <p className='text-white'>Alphavile SP</p>
        <p className='text-white'>brasil@corebiz.ag</p>
        <p className='text-white'>+55 11 3090 1039</p>
        <div className='flex flex-col w-1/2 m-auto my-10'>
          <button type="button" className="bg-white text-black rounded-md flex p-2 mb-4">
            <img src={mail} alt="contáctanos" className='ml-6' /> <h1 className='text-center w-full'>CONTÁCTANOS</h1>
          </button>
          <button type="button" className="bg-white text-black rounded-md flex p-2 justify-center mb-4">
            <img src={headset} alt="consultor" className='ml-6' /> <h1 className='text-center w-full'>HABLA CON UN CONSULTOR</h1>
          </button>
        </div>
        <div className='flex justify-around'>
          <div>
            <p className='text-white'>Desarrollado por</p>
            <img src={corebizBlack} alt="corebiz." />
          </div>
          <div>
            <p className='text-white'>Powered by</p>
            <div className='flex gap-0.5'>
            <img src={vtex} alt="Vtex" />
              <img src={vtex_v} alt="v" />
              <img src={vtex_t} alt="t" />
              <img src={vtex_e} alt="e" />
              <img src={vtex_x} alt="x" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
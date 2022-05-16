import { ReactComponent as Mail } from '../../Assets/img/mail.svg'
import { ReactComponent as Headset } from '../../Assets/img/headset.svg'
import { ReactComponent as CorebizBlack } from '../../Assets/img/corebizBlack.svg'
import { ReactComponent as Vtex } from '../../Assets/img/vtex.svg'
import { ReactComponent as VTEX_V } from '../../Assets/img/vtex_v.svg'
import { ReactComponent as VTEX_T } from '../../Assets/img/vtex_t.svg'
import { ReactComponent as VTEX_E } from '../../Assets/img/vtex_e.svg'
import { ReactComponent as VTEX_X } from '../../Assets/img/vtex_x.svg'

function Footer() {
  return (
    <footer className="bg-black flex flex-col">
      <div className='p-10 flex flex-col gap-3 lg:flex-row lg:justify-between lg:mx-32'>
        <div>
          <h1 className="text-white text-2xl">Ubicación</h1>
          <div className="bg-white w-16 h-1 mb-4"></div>
          <a href='https://goo.gl/maps/FnvWBiRGvMoQftP27' className='text-white text-sm w-fit'>Avenida Andrômeda, 2000. Bloco 6 e 8</a>
          <p className='text-white text-sm w-fit'>Alphavile SP</p>
          <a href='mailto:brasil@corebiz.ag' className='text-white text-sm w-fit'>brasil@corebiz.ag</a>
          <a href='tel:+55 11 3090 1039' className='text-white text-sm w-fit'>+55 11 3090 1039</a>
        </div>
        <div className='flex flex-col my-10 items-center lg:my-auto'>
          <button type="button" className="bg-white text-black rounded-md flex p-2 mb-4 items-center h-14 w-5/6 lg:w-64 lg:h-8">
            <Mail className='ml-2' />
            <h1 className='text-center w-full text-xs font-semibold'>CONTÁCTANOS</h1>
          </button>
          <button type="button" className="bg-white text-black rounded-md flex p-2 mb-4 items-center h-14 w-5/6 lg:w-64 lg:h-8">
            <Headset className='ml-2' />
            <h1 className='text-center w-full text-xs font-semibold'>HABLA CON UN CONSULTOR</h1>
          </button>
        </div>
        <div className='flex justify-around items-center lg:w-48 lg:justify-between'>
          <div>
            <p className='text-white text-xs'>Desarrollado por</p>
            <CorebizBlack />
          </div>
          <div>
            <p className='text-white text-xs'>Powered by</p>
            <div className='flex gap-0.5'>
              <Vtex />
              <VTEX_V />
              <VTEX_T />
              <VTEX_E />
              <VTEX_X />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
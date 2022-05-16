import { ReactComponent as Corebiz } from '../../Assets/img/corebiz.svg'
import { ReactComponent as Menu } from '../../Assets/img/menu.svg'
import { ReactComponent as Cart } from '../../Assets/img/cart.svg'
import { ReactComponent as Person } from '../../Assets/img/person.svg'
import { ReactComponent as SVGSearch } from '../../Assets/img/search.svg'

// import Search from '../Search'

function Nav() {
  return (
    <nav className='flex flex-col my-4 mx-6 lg:mx-32'>
      <div className='flex justify-between'>
        <Menu className='mt-1 cursor-pointer md:hidden' />
        <a href="/" title='corebiz'><Corebiz /></a>
        <form className='hidden justify-center w-3/5 md:flex'>
          <div className='flex border-b-2 border-ligthGray w-full mx-6 justify-between'>
            <input type="text" className='text-sm px-1 focus-visible:outline-none' name="search" id="search" placeholder="¿Qué estás buscando?" />
            <button type="submit" title='Search'><SVGSearch /></button>
          </div>
        </form>
        <div className='flex'>
          <div className='hidden items-center cursor-pointer mr-3 md:flex'>
            <Person />
            <h1 className='text-sm'>Mi Cuenta</h1>
          </div>
          <Cart className='cursor-pointer' />
          <p className='text-white bg-orange rounded-full text-center h-4 w-4 text-xs'>
            1
          </p>
        </div>
      </div>
      <form className='flex justify-center w-full m-auto md:hidden'>
        <div className='flex border-b-2 border-ligthGray w-full mt-3 justify-between'>
          <input type="text" className='text-sm px-1 focus-visible:outline-none' name="search1" id="search1" placeholder="¿Qué estás buscando?" />
          <button type="submit" title='Search'><SVGSearch /></button>
        </div>
      </form>
    </nav>
  )
}

export default Nav
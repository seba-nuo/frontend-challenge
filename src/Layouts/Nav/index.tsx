import { ReactComponent as Corebiz } from '../../Assets/img/corebiz.svg'
import { ReactComponent as Menu } from '../../Assets/img/menu.svg'
import { ReactComponent as Cart } from '../../Assets/img/cart.svg'

function Nav() {
  return (
    <nav className='flex justify-between my-4 mx-6'>
      <Menu />
      <Corebiz />
      <div className='flex'>
        <Cart />
        <p className='text-white bg-orange rounded-full text-center h-4 w-4 text-xs'>
          1
        </p>
      </div>
    </nav>
  )
}

export default Nav
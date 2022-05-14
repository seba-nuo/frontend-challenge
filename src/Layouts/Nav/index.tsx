import logo from '../../Assets/img/logo.svg'
import menu from '../../Assets/img/menu.svg'
import cart from '../../Assets/img/cart.svg'

function Nav() {
  return (
    <nav className='flex justify-between my-4 mx-6'>
      <img src={menu} alt="menu" />
      <img src={logo} alt="logo" />
      <div className='flex'>
        <img src={cart} alt="cart" />
        <p className='text-white bg-orange rounded-full text-center h-4 w-4 text-xs'>
          1
        </p>
      </div>
    </nav>
  )
}

export default Nav
import { createContext, useState } from 'react'
import { ChildrenProps } from '../../types'
import { useCookies } from 'react-cookie'

export const CartContext = createContext<number>(0)
export const UpdateCartContext = createContext<() => void>(() => { })

export function CartQuantityProvider({ children }: ChildrenProps) {
  const [cookie, setCookie] = useCookies(['cartProducts']);
  
  const [productQuantity, setProductQuantity] = useState(cookie.cartProducts || 0)
  
  function increaseCartProducts() {
    setProductQuantity(productQuantity + 1)
    setCookie('cartProducts', productQuantity + 1)
  }

  return (
    <CartContext.Provider value={productQuantity}>
      <UpdateCartContext.Provider value={increaseCartProducts}>
        {children}
      </UpdateCartContext.Provider>
    </CartContext.Provider>
  )
}

export default CartContext
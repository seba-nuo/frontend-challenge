import { createContext, useState } from 'react'
import { ChildrenProps } from '../../types'
import { useCookies } from 'react-cookie'

export const CartContext = createContext<number[]>([])
export const UpdateCartContext = createContext<(id: number) => void>(() => { })

export function CartQuantityProvider({ children }: ChildrenProps) {
  const [cookie, setCookie] = useCookies(['cartProducts']);

  const [cartProducts, setCartProducts] = useState<number[]>(cookie.cartProducts || [])

  function addCartProducts(id: number) {
    setCartProducts([...cartProducts, id])
    setCookie('cartProducts', [...cartProducts, id])
  }

  return (
    <CartContext.Provider value={cartProducts}>
      <UpdateCartContext.Provider value={addCartProducts}>
        {children}
      </UpdateCartContext.Provider>
    </CartContext.Provider>
  )
}

export default CartContext
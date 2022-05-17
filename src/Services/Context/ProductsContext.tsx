import { createContext, useState } from 'react'
import { ChildrenProps, productsProps } from '../../../types'
import { useCookies } from 'react-cookie'

export const ProductsContext = createContext<productsProps[]>([])
export const UpdateProductsContext = createContext<(products: productsProps[]) => void>(() => { })
export const CartContext = createContext<number[]>([])
export const UpdateCartContext = createContext<(id: number) => void>(() => { })

export function ProductsProvider({ children }: ChildrenProps) {
  const [cookie, setCookie] = useCookies(['cartProducts']);

  const [products, setProducts] = useState<productsProps[]>([])
  const [cartProducts, setCartProducts] = useState<number[]>(cookie.cartProducts || [])

  function addCartProducts(id: number) {
    setCartProducts([...cartProducts, id])
    setCookie('cartProducts', [...cartProducts, id])
  }

  const updateProducts = (products: productsProps[]) => setProducts(products)

  return (
    <ProductsContext.Provider value={products}>
      <UpdateProductsContext.Provider value={updateProducts}>
        <CartContext.Provider value={cartProducts}>
          <UpdateCartContext.Provider value={addCartProducts}>
            {children}
          </UpdateCartContext.Provider>
        </CartContext.Provider>
      </UpdateProductsContext.Provider>
    </ProductsContext.Provider>
  )
}
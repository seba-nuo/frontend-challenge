import { useContext } from "react"
import { productsProps } from "../../../types"
import { Stars, valueToPrice } from "../../Services/utils"
import { UpdateCartContext } from './../../Services/CartContext'
import { toast } from 'react-hot-toast'

function Card(product: productsProps) {
  const updateCart = useContext(UpdateCartContext)
  const hasInstallments = product.installments.length > 0

  const addToCart = () => {
    updateCart(product.productId)
    toast.success(`El producto ${product.productName} ha sido agregado a su carrito`, { position: "bottom-right", duration: 1300 })
  }

  return (
    <li className="flex justify-center container mt-6">
      <div className="relative flex flex-col items-center w-36">
        <img className="h-32" src={product.imageUrl} alt={product.productName} />
        {
          product.listPrice &&
          <div className="absolute top-0 right-0 bg-orange">
            <h1 className="absolute text-white p-2 z-10 top-0 right-0">OFF</h1>
            <div className=" absolute w-24 overflow-hidden inline-block top-0 right-0">
              <div className=" h-44 bg-orange -rotate-45 transform origin-top-left"></div>
            </div>
          </div>
        }
        <p className="text-xs text-darkGray font-semibold overflow-hidden whitespace-nowrap w-36 block">{product.productName}</p>
        <Stars stars={product.stars} />
        {product.listPrice && <p className="line-through text-ligthGray">de {valueToPrice(product.listPrice)}</p>}
        <p className="font-bold text-xl">por {valueToPrice(product.price)}</p>
        {
          hasInstallments &&
          <p className="text-xs text-darkGray">
            o por {product.installments[0].quantity} cuotas de {valueToPrice(product.installments[0].value)}
          </p>
        }
        <button
          type="button"
          onClick={addToCart}
          className="bg-black text-white rounded-md h-10 w-full mt-3">
          COMPRAR
        </button>
      </div>
    </li>
  )
}


export default Card
import { productsProps } from "../../../types"
import star from '../../Assets/img/star.svg'
import starBorder from '../../Assets/img/star-border.svg'

function Card(product: productsProps) {

  const hasInstallments = product.installments.length > 0

  return (
    <li className="flex justify-center container mx-6 mt-6">
      <div className="relative flex flex-col items-center w-44">
        <img className="h-40" src={product.imageUrl} alt={product.productName} />
        {
          product.listPrice &&
          <div className="absolute top-0 right-0 bg-orange">
            <h1 className="absolute text-white p-2 z-10 top-0 right-0">OFF</h1>
            <div className=" absolute w-24 overflow-hidden inline-block top-0 right-0">
              <div className=" h-44 bg-orange -rotate-45 transform origin-top-left"></div>
            </div>
          </div>
        }
        <p className="text-sm text-darkGray font-semibold">{product.productName}</p>
        <Stars stars={product.stars} />
        {product.listPrice && <p className="line-through text-ligthGray">de {valueToPrice(product.listPrice)}</p>}
        <p className="font-bold text-xl">por {valueToPrice(product.price)}</p>
        {
          hasInstallments &&
          <p className="text-xs text-darkGray">
            o por {product.installments[0].quantity} cuotas de {valueToPrice(product.installments[0].value)}
          </p>
        }
        <button type="button" className="bg-black text-white rounded-md h-10 w-full mt-3">COMPRAR</button>
      </div>

    </li>
  )
}

//TODO refactor functions to a separate file

/**
 * transform a integer value to a string representing the price with two decimals
 * @param value {Number} 
 * @example 
 * returns $125.00
 * valueToPrice(12500)
 */
const valueToPrice = (value: number) => {
  const stringOfNum = String(value)
  const numLength = stringOfNum.length
  if (numLength < 3) return `$0.${stringOfNum}`

  return `$${stringOfNum.substring(0, numLength - 2)}.${stringOfNum.substring(numLength - 2)}`
}

/**
 * function that take a number of stars of a product and return jsx representing the quantity of stars
 * @param stars {Number} 
 * @returns {JSX.Element} 
 */

const Stars = ({ stars }: { stars: number }) => {
  const isOutOfRange = stars < 0 || stars > 5
  if (isOutOfRange) return <p>out of range</p>

  let starsDisplay = []
  for (let index = 0; index < stars; index++) {
    starsDisplay.push(star)
  }

  for (let index = stars; index < 5; index++) {
    starsDisplay.push(starBorder)
  }

  return (
    <div className="flex">
      {
        starsDisplay.map((star, index) => {
          return (
            <img src={star} alt="star" key={index}></img>
          )
        })
      }
    </div>
  )
}


export default Card
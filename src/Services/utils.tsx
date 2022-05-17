import star from '../Assets/img/star.svg'
import starBorder from '../Assets/img/star-border.svg'
import { productsProps } from '../../types'


/**
 * transform a integer value to a string representing the price with two decimals
 * @param value {Number} 
 * @example 
 * returns $125.00
 * valueToPrice(12500)
 */
 export const valueToPrice = (value: number) => {
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
 export const Stars = ({ stars }: { stars: number }): JSX.Element => {
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

/**
 * given a number create dots to bestSeller component
 * @param numberOfDots quantity of dots of the slider
 * @param dotPosition actual position of slider
 * @param setDotPosition to update the position of the dot
 * @returns 
 */
export const Dots = (numberOfDots: number, dotPosition: number, setDotPosition: React.Dispatch<React.SetStateAction<number>>) => {

  let dots = []
  for (let index = 0; index < numberOfDots; index++) {
    dots.push(
      <div
        className={`${dotPosition === index ? "bg-orange" : "bg-ligthGray"} w-4 h-4 m-2 rounded-full cursor-pointer my-10`}
        id={`${index}`}
        key={index}
        onClick={() => setDotPosition(index)}>
      </div>
    )
  }
  return dots
}

/**
 * define how many products the slider will show
 * @param dotPosition actual position of slider
 * @param products products that will be shown
 * @param numberOfDots quantity of dots of the slider
 * @returns a part of products that will show in a slider page defined in dotPosition
 */
 export const showProducts = (dotPosition: number, products: productsProps[], numberOfDots: number) => {

  let productsInPage = 2

  if (numberOfDots === products.length / 3) {
    productsInPage = 3
  }

  if (numberOfDots === products.length / 4) {
    productsInPage = 4
  }

  return products.slice(dotPosition * productsInPage, (dotPosition * productsInPage) + productsInPage)
}
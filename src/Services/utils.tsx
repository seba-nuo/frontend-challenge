import star from '../Assets/img/star.svg'
import starBorder from '../Assets/img/star-border.svg'


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
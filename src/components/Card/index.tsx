import { productsProps } from "../../../types"
import star from '../../Assets/img/star.svg'
import starBorder from '../../Assets/img/star-border.svg'

function Card(product: productsProps) {

  const isOff = product.installments[0]?.quantity > 0

  return (
    <li className="flex justify-center container mx-6 mt-6">
      <div className="relative flex flex-col items-center">
        <img className="h-40" src={product.imageUrl} alt={product.productName} />
        {
          !isOff &&
          <div className="absolute top-0 right-0 bg-orange">
            <h1 className="absolute text-white p-2 z-10 top-0 right-0">OFF</h1>
            <div className=" absolute w-24 overflow-hidden inline-block top-0 right-0">
              <div className=" h-44 bg-orange -rotate-45 transform origin-top-left"></div>
            </div>
          </div>
        }
        <p>{product.productName}</p>
        <Stars stars={product.stars} />
        <p className="font-bold">por ${product.price}</p>
        <button type="button" className="bg-black text-white rounded-md h-10 w-full mt-2">COMPRAR</button>
      </div>

    </li>
  )
}

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
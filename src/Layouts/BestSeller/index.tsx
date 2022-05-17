import { useEffect, useState } from "react"
import { productsProps } from '../../../types'
import Card from "../../components/Card";

function BestSeller() {
  const PRODUCTS_URL = process.env.REACT_APP_PRODUCTS_URL

  const [products] = useState<productsProps[]>([
    {
      "productId": 1,
      "productName": "SAPATO FLOATER PRETO",
      "stars": 1,
      "imageUrl": "https://corebiz-test.herokuapp.com/images/product-1.png",
      "listPrice": null,
      "price": 25990,
      "installments": [
        {
          "quantity": 9,
          "value": 2887
        }
      ]
    },
    {
      "productId": 2,
      "productName": "SANDÁLIA LINHO BROWN",
      "stars": 4,
      "imageUrl": "https://corebiz-test.herokuapp.com/images/product-2.png",
      "listPrice": 29900,
      "price": 19900,
      "installments": [
        {
          "quantity": 4,
          "value": 4975
        }
      ]
    },
    {
      "productId": 3,
      "productName": "BOTA MUSTANG PRETO",
      "stars": 2,
      "imageUrl": "https://corebiz-test.herokuapp.com/images/product-3.png",
      "listPrice": 32900,
      "price": 29900,
      "installments": [
        {
          "quantity": 10,
          "value": 2990
        }
      ]
    },
    {
      "productId": 4,
      "productName": "CINTO SEMICROMO PRETO 40MM",
      "stars": 3,
      "imageUrl": "https://corebiz-test.herokuapp.com/images/product-4.png",
      "listPrice": null,
      "price": 7990,
      "installments": []
    },
    {
      "productId": 5,
      "productName": "MEIA SPORTWEAR PRETA",
      "stars": 5,
      "imageUrl": "https://corebiz-test.herokuapp.com/images/product-5.png",
      "listPrice": null,
      "price": 1400,
      "installments": []
    }
  ])
  // const [products, setProducts] = useState<productsProps[]>()
  const [error, setErrors] = useState(false)
  const [productsShown, setProductShown] = useState<number[]>([])
  const numberOfDots = Math.ceil(products.length / 2)

  // useEffect(() => {
  //   PRODUCTS_URL && fetch(PRODUCTS_URL)
  //     .then(data => data.json())
  //     .then(setProducts)
  //     .catch(() => setErrors(true))
  // }, [PRODUCTS_URL])

  return (
    <main className="flex flex-col">
      <div className="my-6 mx-10 lg:mx-32">
        <h1 className="text-2xl font-black">Más Vendidos</h1>
        <div className="bg-ligthGray w-16 h-1"></div>
      </div>
      <div className="overflow-x-scroll whitespace-nowrap md:overflow-auto lg:mx-32">
        {
          <ul className="flex items-end">
            {
              error && (
                <li className="m-auto p-10">
                  <p className="text-orange text-lg">Error al consultar productos</p>
                </li>
              )
            }
            {
              products &&
              products.map(product => <Card key={product.productId} {...product} />)
            }
          </ul>
        }
      </div>
      <div className='flex w-full justify-center'>
        { Dots(numberOfDots) }
      </div>
    </main>
  )
}

const Dots = (numberOfDots: number) => {

  const [dotPosition, setDotPosition] = useState<number>(0)

  let dots = []
  for (let index = 0; index < numberOfDots; index++) {
    dots.push(
      <div
        className={`${dotPosition === index ? "bg-orange" : "bg-ligthGray"} w-4 h-4 m-2 rounded-full cursor-pointer`}
        id={`${index}`}
        key={index}
        onClick={() => setDotPosition(index)}>
      </div>
    )
  }

  return dots
}

export default BestSeller
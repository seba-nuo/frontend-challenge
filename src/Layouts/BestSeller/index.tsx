import { useEffect, useRef, useState } from "react"
import { productsProps } from '../../../types'
import Card from "../../components/Card";
import { Dots, showProducts } from "../../Services/utils";

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
    },
  ])
  // const [products, setProducts] = useState<productsProps[]>()
  const [error, setErrors] = useState(false)
  const [dotPosition, setDotPosition] = useState<number>(0)
  const [numberOfDots, setNumberOfDots] = useState(0)
  const [componentWidth, setComponentWidth] = useState(0)

  const mainRef = useRef<HTMLElement>(null);

  const productsShown = showProducts(dotPosition, products, numberOfDots)

  const handleResize = () => {
    if (mainRef.current) {
      setComponentWidth(mainRef.current.offsetWidth)
      setDotPosition(0)
    }
  }

  useEffect(() => {
    if (mainRef.current) {
      window.addEventListener('resize', handleResize)
      const width = mainRef.current ? mainRef.current.offsetWidth : 0
      setComponentWidth(width)

      const twoProductPage = products.length / 2
      const threeProductPage = products.length / 3
      const fourProductPage = products.length / 4

      if (componentWidth < 640) {
        setNumberOfDots(twoProductPage)
      }

      if (componentWidth < 768 && componentWidth > 640) {
        setNumberOfDots(threeProductPage)
      }

      if (componentWidth >= 1024) {
        setNumberOfDots(fourProductPage)
      }
    }
    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [componentWidth, products.length])


  // useEffect(() => {
  //   PRODUCTS_URL && fetch(PRODUCTS_URL)
  //     .then(data => data.json())
  //     .then(setProducts)
  //     .catch(() => setErrors(true))
  // }, [PRODUCTS_URL])

  return (
    <main className="flex flex-col" ref={mainRef}>
      <div className="my-6 mx-10 lg:mx-32">
        <h1 className="text-2xl font-black">Más Vendidos</h1>
        <div className="bg-ligthGray w-16 h-1"></div>
      </div>
      <div className="whitespace-nowrap md:overflow-auto lg:mx-32">
        {
          <ul className="flex items-end transition-all">
            {
              error && (
                <li className="m-auto p-10">
                  <p className="text-orange text-lg">Error al consultar productos</p>
                </li>
              )
            }
            {
              products &&
              productsShown.map(product => <Card key={product.productId} {...product} />)
            }
          </ul>
        }
      </div>
      <div className='flex w-full justify-center'>
        {Dots(numberOfDots, dotPosition, setDotPosition)}
      </div>
    </main>
  )
}


export default BestSeller
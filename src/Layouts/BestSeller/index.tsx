import { useEffect, useRef, useState } from "react"
import { productsProps } from '../../../types'
import Card from "../../components/Card";
import { Dots, showProducts } from "../../Services/utils";

function BestSeller() {
  const PRODUCTS_URL = process.env.REACT_APP_PRODUCTS_URL

  const [products, setProducts] = useState<productsProps[]>([])
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
    PRODUCTS_URL && fetch(PRODUCTS_URL)
      .then(data => data.json())
      .then(setProducts)
      .catch(() => setErrors(true))
  }, [PRODUCTS_URL])

  // to update items displayed in the slider based on the screen size
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
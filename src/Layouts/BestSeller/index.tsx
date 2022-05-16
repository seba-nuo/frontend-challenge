import { useState } from "react"
import { productsProps } from '../../../types'
import Card from "../../components/Card";

function BestSeller() {
  // const PRODUCTS_URL = process.env.REACT_APP_PRODUCTS_URL

  // TODO: now using template object of products, update to use products url

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
  // useEffect(() => {
  //   // URL && fetch(URL).then(data => data.json()).then(setProducts)    
  // }, [])
  // console.log(products);

  return (
    <main>
      <div className="my-6 mx-10">
        <h1 className="text-2xl font-black">Más Vendidos</h1>
        <div className="bg-ligthGray w-16 h-1"></div>
      </div>
      <div className="overflow-x-scroll whitespace-nowrap md:overflow-auto">
        {
          <ul className="flex items-end">
            {products && products.map(product => <Card key={product.productId} {...product} />)}
          </ul>
        }
      </div>
    </main>
  )
}

export default BestSeller
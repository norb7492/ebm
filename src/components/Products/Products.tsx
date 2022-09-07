import { useEffect, useState } from 'react'
import { getProducts } from './products.service'
import { ProductType } from '../../types/product.type'

export const Products = () => {
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const [description, setDescription] = useState('')
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const productsSubscription = getProducts().subscribe((products) => setProducts(products))

    return () => productsSubscription.unsubscribe()
  }, [])

  return (
    <>
      <div>
        <ul>
          {products.map((product: ProductType) => {
            let id = 1
            id++
            return (
              <div key={id}>
                <li>Produto:{product.productName}</li>
                <li>Valor: R${product.price}</li>
                <li>Em estoque:{product.quantity}</li>
                <li>Descrição:{product.description}</li>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
}

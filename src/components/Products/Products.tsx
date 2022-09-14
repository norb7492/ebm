
import SearchBar from '../../layout/search-bar.layout'
import ProductCardItem from './product-card/product-card-item'
import { getProducts } from './products.service'
import { ProductType } from '../../types/product.type'
import { useEffect, useState } from 'react'


export default function Products() {
  const [productID, setProductID] = useState('')
  const [productName, setProductName] = useState('')
  const [productColor, setProductColor] = useState('')
  const [price, setPrice] = useState()
  const [quantity, setQuantity] = useState()
  const [description, setDescription] = useState('')
  const [products, setProducts] = useState<ProductType[]>([])

  useEffect(() => {
    const productSubscription = getProducts().subscribe((products) => setProducts(products))
    return () => productSubscription.unsubscribe()


  return (
    <>

      <SearchBar />
      <ul>
        {products.map((product: ProductType) => {
          return (
            <li><ProductCardItem
              productID={product.productID}
              productName={product.productName}
              price={product.price}
              quantity={product.quantity}
              color={product.productColor}
            />

            </li>
          )
        })
        }
      </ul>
    </>
  )
}

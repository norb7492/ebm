
import { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { getProducts } from '../components/Products/Products.services'
import { ProductType } from '../types/product.type'

export const ProductCard = () => {

    const [productName, setProductName] = useState('')
    const [price, setPrice] = useState()
    const [quantity, setQuantity] = useState()
    const [description, setDescription] = useState('')
    const [products, setProducts] = useState<ProductType[]>([])

    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef)

            setProducts((data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))))

        };
        getProducts();
    }, [products])

    return
    (
        <div>
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {products.map((product) => (
                    <div key={product.id} className="group relative">
                        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                            <img
                                src={product.imageSrc}
                                alt={product.imageAlt}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-between">
                            <div>
                                <h3 className="text-sm text-gray-700">
                                    <a href={product.href}>
                                        <span aria-hidden="true" className="absolute inset-0" />
                                        {product.name}
                                    </a>
                                </h3>
                                <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                            </div>
                            <p className="text-sm font-medium text-gray-900">{product.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

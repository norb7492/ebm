import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';

export const Products = () => {
    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState();
    const [quantity, setQuantity] = useState();
    const [description, setDescription] = useState('')
    const [products, setProducts] = useState<any[]>([])
    const productsCollectionRef = collection(db, 'products')


    useEffect(() => {
        const getProducts = async () => {
            const data = await getDocs(productsCollectionRef)

            setProducts((data.docs.map((doc: any) => ({ ...doc.data(), id: doc.id }))))

        };
        getProducts();
    }, [products])
    return (
        <>
            <div>
                <ul>
                    {products.map((product: any) => {
                        return (
                            <div key={product.id}>
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
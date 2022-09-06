import { Observable, take, map } from 'rxjs'
import { collection, DocumentData } from 'firebase/firestore'
import { collectionData } from 'rxfire/firestore'
import { db } from '../../firebase'
import { ProductType } from '../../types/product.type'

const COLLECTIONS = {
  products: 'products',
}

export const getProducts = (): Observable<ProductType[]> => {
  const productsCollectionRef = collection(db, COLLECTIONS.products)

  return collectionData(productsCollectionRef).pipe(
    map((products: DocumentData[]) => products as ProductType[]),
    take(1),
  )
}

import { of } from 'rxjs'

const firebaseGetResponseMock = [{description: 'Televisão marca sumsang', quantity: 5, price: 4500.34, productName: 'Tv'}];

const mockCollectionData = () => of(firebaseGetResponseMock);

jest.mock('rxfire/firestore', () => ({
  collectionData: mockCollectionData,
}))

const { getProducts } = require ('.././products.service');

describe('tests getProducts functin', () => {
  test('should return firebase date when method is called', async () => {
    let result
    getProducts().subscribe((products: any) => {
      result = products;
    })
  
    expect(firebaseGetResponseMock).toEqual(result)
  })
})

afterEach(() => {
  jest.clearAllMocks();
});

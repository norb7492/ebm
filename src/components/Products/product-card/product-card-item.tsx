function ProductCardItem(productID: string, productName: string, price: number,
    quantity: number, productColor: string) {

    return(
        <div>
            <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                <div key={productID} className='group relative'>
                    <div className='min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80'>
                    </div>
                    <div className='mt-4 flex justify-between'>
                        <div>
                            <h3 className='text-sm text-gray-700'>
                                <a href='#'>
                                    <span aria-hidden='true' className='absolute inset-0' />
                                    {productName}
                                </a>
                            </h3>
                            <p className='mt-1 text-sm text-gray-500'>Color:{productColor}</p>
                            <p className='mt-1 text-sm text-gray-500'>Stock:{quantity}</p>
                        </div>
                        <p className='text-sm font-medium text-gray-900'>{price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ProductCardItem;

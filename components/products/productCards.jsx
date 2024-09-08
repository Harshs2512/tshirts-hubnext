import Link from 'next/link'
import React, { useState } from 'react'
import { UilHeartAlt } from '@iconscout/react-unicons';

const ProductCards = ({ product, index }) => {
    const handleAddToWishlist = (p) => {
        setLiked(!liked)
        setWishlist([...wishlist, p]);
    };
    const [wishlist, setWishlist] = useState([]);
    const [liked, setLiked] = useState(false);
    return (
        <div
            key={index} className="block bg-gray-100/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden overflow-y-hidden rounded-sm">
            <button disabled={!wishlist?.find((item) => item._id === product._id) ? false : true} className="relative rounded-full w-10 h-10 p-2 bg-gray-200/70 top-[2%] xs:left-[72%] sm:left-[78%] left-[70%] hover:bg-white duration-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] z-10"
                onClick={() => { handleAddToWishlist(product) }}>
                <UilHeartAlt className={`${wishlist.find((item) => item._id === product._id) ? 'text-red-500 animate-jump-in animate-delay-300 animate-once ' : 'text-gray-500'} `} />
            </button>
            <Link href={`/product/${product.slug}`}>
                <img
                    className="object-cover transition-transform duration-300 transform hover:scale-125 hover:rotate-6 -mt-10 w-80 h-80 bg-gray-500"
                    src={`/images/shirt.webp`}
                    alt="" />
                <div className='overflow-hidden bg-white relative'>
                    <div className='px-2 mt-1'>
                        <h5 className='mb-1 md:text-lg text-md font-medium leading-tight text-neutral-800'>
                            {product && product.title}
                        </h5>
                        <p className='mb-2 md:text-sm text-sm text-neutral-600'>
                            {product && product.category.catName}
                        </p>
                    </div>
                    <div className='flex px-2'>
                        {product.size.map((size, index) => (
                            <p key={index} className='mb-1 text-base text-neutral-600'>
                                {size}
                            </p>
                        ))}
                    </div>
                    <div className='flex px-2'>
                        <p className='mb-2 text-base font-semibold text-neutral-900'>
                            ₹ 599
                        </p>
                        <p className='mt-1 ml-4 font-semibold text-sm line-through text-gray-400'>
                            ₹ 999
                        </p>
                        <p className='ml-4 font-semibold text-base text-green-500'>
                            20%
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductCards
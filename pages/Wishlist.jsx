import { PaymentProvider, usePayment } from '../../context/RazorpayContext'
import React, { useState, useEffect } from 'react';
import { UilTimes, UilHeartAlt, UilShoppingCart, UilRedo, UilDropbox, UilTruck, UilProcess } from '@iconscout/react-unicons';
import Layout from '../../components/Layout/Layout';
import { Link, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Select } from 'antd';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useWishlist } from '../../context/wishlist';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import cartimg from './cart.webp'
import { useCart } from '../../context/cart';
import API_URL from '../../constants';
const { Option } = Select;

const WishlistPage = () => {
    const { Option } = Select
    const navigate = useNavigate()
    const params = useParams();
    const [sizeselect, setSizeselect] = useState();
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [wishlist, setWishlist] = useWishlist();
    const [product, setProduct] = useState();
    const [coupon, setCoupon] = useState();
    const [couponCheck, setCouponCheck] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cart, setCart] = useCart();
    const [newquantity, setNewquantity] = useState()
    const [newcategory, setNewcategory] = useState()
    const [newtitle, setNewtitle] = useState()
    const [newcolor, setNewcolor] = useState()
    const [newsize, setNewsize] = useState([])
    const [newid, setNewid] = useState()
    const [newselling_price, setNewsetSelli] = useState()
    const [newdescription, setNewdescription] = useState()
    const [newdicounted_price, setNewdicounted_price] = useState()
    const [quantity, setQuantity] = useState([]);

    console.log(quantity)

    useEffect(() => {
        // Initialize the quantity state with default values
        const initialQuantity = wishlist.map(() => ({ quantity: 1, size: null }));
        setQuantity(initialQuantity);
    }, [wishlist]);

    const decreaseQuantity = (index) => {
        setQuantity((prevQuantity) => {
            const updatedQuantity = [...prevQuantity];
            if (updatedQuantity[index].quantity > 1) {
                updatedQuantity[index].quantity -= 1;
            }
            return updatedQuantity;
        });
    };

    const increaseQuantity = (index) => {
        setQuantity((prevQuantity) => {
            const updatedQuantity = [...prevQuantity];
            updatedQuantity[index].quantity += 1;
            return updatedQuantity;
        });
    };

    //getProduct
    const getProduct = async () => {
        try {
            const { data } = await axios.get(`${API_URL}/products`);
            setProduct(data.products);
        } catch (error) {
            console.log(error);
        }
    };

    //initalp details
    useEffect(() => {
        getProduct();
    }, []);

    //detele item
    const removeCartItem = (pid) => {
        try {
            let myWish = [...wishlist];
            let index = myWish.findIndex((item) => item._id === pid);
            myWish.splice(index, 1);
            setWishlist(myWish);
            toast.success("Item Removed")
            localStorage.setItem("wishlist", JSON.stringify(myWish));
        } catch (error) {
            console.log(error);
        }
    };

    const updatedProduct = {
        category: newcategory,
        color: newcolor,
        description: newdescription,
        discounted_price: newdicounted_price,
        selling_price: newselling_price,
        quantity: quantity,
        size: newsize,
        title: newtitle,
        _id: newid
    }

    console.log(updatedProduct)

    const handleSizeSelect = (index, size) => {
        console.log(size)
        setNewquantity((prevQuantity) => {
            const updatedQuantity = [...prevQuantity];
            updatedQuantity[index].size = size;
            console.log(updatedQuantity)
            return updatedQuantity;

        });
    };

    const handleAddToCart = () => {
        console.log("afdadadfasdads ")
        if (!newsize) {
            toast.error('Please select a size');
            return;
        }
        setCart([...cart, updatedProduct]);
        localStorage.setItem(
            "cart",
            JSON.stringify([...cart, updatedProduct])
        );
        toast.success("Item Added to cart");
        const updatedWishlist = wishlist.filter(item => item._id !== newid);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));

        setTimeout(() => {
            navigate('/cart');
        }, 100);

    };

    useEffect(() => {
        wishlist.forEach((item) => {
            setNewcategory(item.category)
            setNewcolor(item.color)
            setNewquantity(quantity)
            setNewsize(sizeselect)
            setNewtitle(item.title)
            setNewdescription(item.description)
            setNewsetSelli(item.selling_price)
            setNewdicounted_price(item.discounted_price)
            setNewid(item._id)
        });
    }, [cart]);

    return (
        <Layout title="wishlist-Page">
            <ToastContainer />
            <div className='pt-20 py-5'>
                {wishlist.length ? (
                    <div className='grid lg:grid-cols-4 grid-cols-2 py-2 md:px-5 px-2 md:gap-x-10 gap-x-2 '>
                        {wishlist && wishlist.map((p, index) => (
                            <div className='overflow-hidden overflow-y-hidden'>
                                <div className='border border-gray-300 mb-1 shadow-[0_4px_9px_-4px_#3b71ca]'>
                                    <button className="relative rounded-full w-9 h-9 p-1.5 bg-gray-200/50 top-[10%] xs:left-[72%] sm:left-[78%] left-[70%] hover:bg-white duration-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] z-10 "
                                        onClick={() => { removeCartItem(p._id) }}
                                    >
                                        <UilTimes />
                                    </button>
                                    <img
                                        className="object-cover transition-transform duration-300 transform hover:scale-125 hover:rotate-6 -mt-10 w-80 h-80 bg-gray-500"
                                        src={`http://localhost:8000/api/v1/product-photo/${p._id}`}
                                        alt="" />
                                    <div className='p-2 bg-white overflow-hidden relative'>
                                        <div className='grid grid-cols-2'>
                                            <p className='text-stone-800 font-bold md:text-lg text-xs'>{p.title}</p>
                                            <p className='text-blue-800 font-medium text-right '>₹{p.selling_price}</p>
                                        </div>
                                        <p className='text-gray-400 font-semibold mb-1 md:text-lg text-xs'>{p.category.catName}</p>
                                        <hr />
                                        <div className='mt-3 grid grid-cols-2'>
                                            <div>
                                                <h1 className='font-bold md:text-sm text-xs text-gray-600 '>Quantity</h1>
                                                <div className="flex items-center mt-1">
                                                    <button
                                                        className="px-2 rounded-l bg-gray-200 hover:bg-gray-300 md:text-lg text-xs"
                                                        onClick={() => decreaseQuantity(index)}>-
                                                    </button>
                                                    <span className="md:px-3 px-1 py-1 md:text-lg text-xs">{quantity[index]?.quantity || 1}</span>
                                                    <button
                                                        className="px-2 rounded-r md:text-lg text-xs bg-gray-200 hover:bg-gray-300"
                                                        onClick={() => increaseQuantity(index)}>+
                                                    </button>
                                                </div>
                                            </div>
                                            <div className='text-right'>
                                                <h1 className='font-bold md:text-lg text-xs text-gray-600 mb-2'>Size</h1>
                                                <Select value={newsize === '.......' ? undefined : newsize} onChange={(size) => handleSizeSelect(index, size)} defaultValue={undefined} className='w-20'>
                                                    {p.size[0].split(',').map((size) => (
                                                        <Option key={size}>{size}</Option>
                                                    ))}
                                                </Select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <Link to='/cart'> */}
                                <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm md:px-20 px-8 py-2 text-center mt-3 ml-2"
                                    onClick={handleAddToCart}
                                >Move to Cart</button>
                                {/* </Link> */}
                            </div>
                        ))}
                    </div>
                )
                    :
                    (
                        <div className='text-center md:-mt-10'>
                            <img className='w-88 h-auto lg:ml-[26rem] xs:ml-0 md:ml-44' src={cartimg} />
                            <div className='block'>
                                <h1 className='md:text-4xl text-2xl font-semibold md:font-bold tracking-wider'>Your Wishlist Is Empty!</h1>
                                <h1 className='text-lg text-gray-500 tracking-wider mt-3'>We are vaiting for you</h1>
                                <Link to='/collections'>
                                    <button type="button" class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-lg px-10 lg:px-10 md:px-20 py-2.5 text-center lg:mt-3 mt-10 mx-auto mb-10">Shop Now</button>
                                </Link>
                            </div>
                        </div>
                    )
                }

            </div>
        </Layout>
    );
};

export default WishlistPage;
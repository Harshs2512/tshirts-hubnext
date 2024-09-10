
const Collections = () => {
    const Prices = [
        {
            _id: 0,
            name: "100 to 300",
            array: [100, 300],
        },
        {
            _id: 1,
            name: "300 to 500",
            array: [300, 500],
        },
        {
            _id: 2,
            name: "500 to 700",
            array: [500, 700],
        },
        {
            _id: 3,
            name: "700 to 900",
            array: [700, 900],
        },
        {
            _id: 4,
            name: "100 or more",
            array: [100, 9999],
        }
    ];
    const pathname = usePathname();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isClosetheme, setIsClosetheme] = useState(false);
    const [isClosecolor, setIsClosecolor] = useState(false);
    const [isClosesize, setIsClosesize] = useState(false);
    const [isCloseprice, setIsCloseprice] = useState(false);
    const [products, setProducts] = useState();
    const [categories, setCategories] = useState('');
    const [checked, setChecked] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [radio, setRadio] = useState([]);
    const [filterList, setFilter1] = useState([]);
    const [filterCheck, setFilterCheck] = useState(false);
    const [wishlist, setWishlist] = useState([]);
    const [liked, setLiked] = useState(false);
    const [isFilter, setIsFilter] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const handleClosetheme = () => {
        setIsClosetheme(!isClosetheme)
    };
    const handleClosecolor = () => {
        setIsClosecolor(!isClosecolor)
    }
    const handleClosesize = () => {
        setIsClosesize(!isClosesize)
    }
    const handleCloseprice = () => {
        setIsCloseprice(!isCloseprice)
    }

    //Products
    const getAllProducts = async () => {
        try {
            const res = await axios.get("/api/products/getRecord");
            if (res.status === 200) {
                setProducts(res.data)
            }
            setFilterCheck(true);
        }
        catch (error) {
            console.log(error)

        }
    };


    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/category/show_category/");
            if (data.success) {
                setCategories(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);


    // filter by cat
    const handleFilter = (value, id, catName, c, isColor) => {
        let all = [...checked];
        let filter1 = [...filterList];

        if (isColor) {
            // Handle color checkboxes
            if (value) {
                all.push(id);
                filter1.push(catName);
                setSelectedColors([...selectedColors, c]);
            } else {
                all = all.filter((c) => c !== id);
                filter1 = filter1.filter((c) => c !== catName);
                setSelectedColors(selectedColors.filter((color) => color !== c));
            }
        } else {
            // Handle other filters
            if (value) {
                all.push(id);
                filter1.push(catName);
            } else {
                all = all.filter((c) => c !== id);
                filter1 = filter1.filter((c) => c !== catName);
            }
        }

        setChecked(all);
        setFilter1(filter1);
    };

    const handleSizeFilter = (value, id, sz, isSize) => {
        let all = [...checked];
        let filter1 = [...filterList];
        console.log(sz)

        if (isSize) {
            // Handle color checkboxes
            if (value) {
                all.push(id);
                filter1.push(sz);
                setSelectedSizes([...selectedSizes, sz]);
            } else {
                all = all.filter((c) => c !== id);
                filter1 = filter1.filter((c) => c !== sz);
                setSelectedSizes(selectedSizes.filter((s) => s !== sz));
            }
        } else {
            // Handle other filters
            if (value) {
                all.push(id);
                filter1.push(sz);
            } else {
                all = all.filter((c) => c !== id);
                filter1 = filter1.filter((c) => c !== size);
            }
        }

        setChecked(all);
        setFilter1(filter1);
    };

    useEffect(() => {
        if (checked.length === 0) {
            getAllProducts();
        } else {
            filterProduct();
        }
    }, [checked]);

    useEffect(() => {
        if (radio.length === 0) {
            getAllProducts();
        } else {
            filterProduct();
        }
        window.scrollTo(0, 0);
    }, [radio]);


    //get filterd product
    const filterProduct = async () => {
        setLoading(true)
        try {
            const { data } = await axios.post("/api/v1/product-filters", {
                checked,
                radio,
                selectedColors,
                selectedSizes
            });
            setProducts(data?.products);
            setFilterCheck(false);
            console.log(products)
            setLoading(false)
        } catch (error) {
            console.log(error);
        }
    };

    const removeSingleFilter = (filter) => {
        const updatedChecked = checked.splice(filter)
        setChecked(updatedChecked);
        const updatedFilter = filterList.filter((f) => f !== filter);
        setFilter1(updatedFilter);
        filterProduct();
    };

    const handleAddToWishlist = (p) => {
        setLiked(!liked)
        console.log(liked)
        setWishlist([...wishlist, p]);
        localStorage.setItem(
            "wishlist",
            JSON.stringify([...wishlist, p])
        );
        toast.success("Item Added to Wishlist");
    };

    const color = {
        colors: ['red', 'yellow']
    }
    const size = {
        sizes: ['S', 'M', 'L', 'XL', 'XXL']
    }
    return (
        <>
            <ToastContainer />
            <div className='grid grid-cols-7 pt-20 w-full z-20 px-5 fixed bg-white shadow-lg py-2'>
                <div className='col-span-2 grid grid-rows-2'>
                    <div><Link href="/">Home</Link><Link href={pathname}>{pathname}</Link></div>
                    <div>(200) Products</div>
                </div>
                {/* <div className='col-span-4 grid grid-cols-7'>
                    {filterList?.map((f, index) => (

                        <div
                            className="[word-wrap: break-word] w-20 my-[5px] flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-[#eceff1] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none active:bg-[#cacfd1]"
                            key={index}
                        >
                            {f}
                            <button onClick={() => removeSingleFilter(f)}>
                                <span
                                    data-te-chip-close
                                    className="float-right w-4 cursor-pointer pl-[8px] text-[16px] text-[#afafaf] opacity-[.53] transition-all duration-200 ease-in-out hover:text-[#8b8b8b]"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="h-3 w-3"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                            </button>
                        </div>
                    ))}
                </div > */}
                <div className='col-span-1'>
                    <div className="relative" data-te-dropdown-ref>
                        <button
                            className="flex items-center whitespace-nowrap rounded bg-primary px-7 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                            type="button"
                            id="dropdownMenuButton1"
                            data-te-dropdown-toggle-ref
                            aria-expanded={isDropdownOpen}
                            onClick={handleDropdownToggle}
                        >
                            Categories
                            <span className="ml-2 w-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </button>
                        <ul
                            className={`absolute z-[1000] w-36 float-left m-0 list-none overflow-hidden rounded-lg border-none  bg-white bg-clip-padding text-left text-base shadow-lg ${isDropdownOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} transition-opacity duration-200 `}
                        >
                            {/* {categories?.map((c, index) => (
                                <li key={index}>
                                    <Link href={`/search/category/${c.slug}`}
                                        className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-800 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:text-neutral-400"
                                    >
                                        {c && c.catName}
                                    </Link>
                                </li>
                            ))} */}
                        </ul>
                    </div>
                </div>
            </div >
            {/* <div className="lg:grid lg:grid-cols-10 py-36">
                <div className='lg:col-span-2'>
                    <nav
                        id="sidenav-2"
                        className="hidden lg:block lg:top-36 lg:bottom-0 lg:left-0 w-60 overflow-hidden translate-x-0 "
                        data-te-sidenav-init
                        data-te-sidenav-hidden="false"
                        data-te-sidenav-mode="side"
                        data-te-sidenav-content="#content"
                    >
                        <div className=' m-0 list-none px-[0.2rem] flex border-b-2 border-stone-300 bg-white'>
                            <h1 className='text-center mt-3 m-2 flex'>FILLTERS
                            </h1>
                            <button class="bg-transparent hover:bg-purple-300 text-purple-700 font-semibold hover:text-white py-1 px-4 border border-purple-500 hover:border-transparent rounded ml-20 m-2" onClick={() => window.location.reload()}>
                                Clear
                            </button>
                        </div>
                        <div className="h-[calc(100vh-200px)] overflow-y-auto scrollbar-hide">
                            <ul className=" m-0 list-none bg-white">
                                <li className="relative border-b-2 border-stone-300 h-full">

                                    <div
                                        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-3 py-4 text-lg text-gray-900 outline-none transition duration-300 ease-linear hover:bg-slate-50 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:text-inherit active:outline-none motion-reduce:transition-none "
                                        onClick={handleClosetheme}
                                    >
                                        <span>Theme</span>


                                        <span className="ml-32 w-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={`px-10 py-2 grid grid-flow-row gap-3 transition-[opacity,margin] duration-100 ${isClosetheme ? 'opacity-100' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                                        {categories?.map((c, index) => (
                                            <Checkbox key={index}
                                                onChange={(e) => handleFilter(e.target.checked, c._id, c.catName,)} id='check'>
                                                {c.catName}
                                            </Checkbox>
                                        ))}
                                    </div>
                                </li>
                                <li className="border-b-2 border-stone-300">
                                    <div
                                        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-3 py-4 text-lg text-gray-900 outline-none transition duration-300 ease-linear hover:bg-slate-100 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:text-inherit active:outline-none motion-reduce:transition-none"
                                        onClick={handleClosecolor}
                                    >
                                        <span>Colors</span>
                                        <span className="ml-[132px] w-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={`px-10 py-2 grid grid-flow-row gap-3 transition-[opacity,margin] duration-100 ${isClosecolor ? 'opacity-100' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                                        {color &&
                                            color?.colors?.map((c, index) => (
                                                <Checkbox
                                                    key={index}
                                                    onChange={(e) =>
                                                        handleFilter(e.target.checked, c, c, c, true)
                                                    }
                                                    checked={selectedColors.includes(c)}
                                                >
                                                    {c}
                                                </Checkbox>
                                            ))}
                                    </div>
                                </li>
                                <li className="relative border-b-2 border-stone-300">
                                    <div
                                        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-3 py-4 text-lg text-gray-900 outline-none transition duration-300 ease-linear hover:bg-slate-100 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:text-inherit active:outline-none motion-reduce:transition-none"
                                        onClick={handleClosesize}
                                    >
                                        <span>Size</span>
                                        <span className="ml-[150px] w-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={`px-10 py-2 grid grid-flow-row gap-3 transition-[opacity,margin] duration-100 ${isClosesize ? 'opacity-100' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                                        {size &&
                                            size?.sizes?.map((sz, index) => (
                                                <Checkbox
                                                    key={index}
                                                    onChange={(e) =>
                                                        handleSizeFilter(e.target.checked, sz, sz, sz, true)
                                                    }
                                                    checked={selectedSizes.includes(sz)}
                                                >
                                                    {sz}
                                                </Checkbox>
                                            ))}
                                    </div>
                                </li>
                                <li className="relative border-b-2 border-stone-300">
                                    <div
                                        className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-3 py-4 text-lg text-gray-900 outline-none transition duration-300 ease-linear hover:bg-slate-100 hover:text-inherit hover:outline-none focus:bg-slate-50 focus:text-inherit focus:outline-none active:text-inherit active:outline-none motion-reduce:transition-none"
                                        onClick={handleCloseprice}
                                    >
                                        <span>Price</span>
                                        <span className="ml-36 w-2">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                                className="h-5 w-5"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                    <div className={`px-10 py-2 grid grid-flow-row gap-3 transition-[opacity,margin] duration-100 ${isCloseprice ? 'opacity-100' : 'opacity-0 max-h-0 pointer-events-none'}`}>
                                        <Radio.Group onChange={(e) => setRadio(e.target.value)}>
                                            {Prices?.map((p, index) => (
                                                <div key={index}>
                                                    <Radio value={p.array}>{p.name}</Radio>
                                                </div>
                                            ))}
                                        </Radio.Group>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
                 <div className="lg:col-span-8 px-1 text-center" id="content">
                    <div className="flex text-start">
                        <div>
                            <div className='grid lg:grid-cols-4 xs:grid-cols-2 gap-2'>
                                {loading ? ( // Render loading indicator when loading is true
                                    <div className="flex ml-[25rem] mt-40 h-screen">
                                        <Spin size="large" />
                                    </div>
                                ) : (<>
                                    {products?.map((p, index) => (
                                        <div
                                            key={index} className="block bg-gray-100/50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] overflow-hidden overflow-y-hidden">
                                            <Link href={`/product/${p.slug}`}>
                                                <button disabled={!wishlist.find((item) => item._id === p._id) ? false : true} className="relative rounded-full w-10 h-10 p-2 bg-gray-200/50 top-[2%] xs:left-[72%] sm:left-[78%] left-[70%] hover:bg-white duration-200 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] z-10"
                                                    onClick={() => { handleAddToWishlist(p) }}>
                                                    <UilHeartAlt className={`${wishlist.find((item) => item._id === p._id) ? 'text-red-500 animate-jump-in animate-delay-300 animate-once ' : 'text-gray-500'} `} />
                                                </button>
                                                <img
                                                    className="object-cover transition-transform duration-300 transform hover:scale-125 hover:rotate-6 -mt-10 w-80 h-80 bg-gray-500"
                                                    src={`http://localhost:8000/api/v1/product-photo/${p._id}`}
                                                    alt="" />
                                                <div className='px-2 py-3 mt-1 overflow-hidden relative bg-white'>
                                                    <h5 className='mb-1 md:text-lg text-md font-medium leading-tight text-neutral-800'>
                                                        {p && p.title}
                                                    </h5>
                                                    <p className='mb-1 md:text-sm text-sm text-neutral-600'>
                                                        {p && p.category.catName}
                                                    </p>
                                                    <hr />
                                                </div>
                                                <div className='flex px-2'>
                                                    <p className='mb-2 text-base font-bold text-neutral-900'>
                                                        ₹ 599
                                                    </p>
                                                    <p className='mt-1 ml-4 font-semibold text-sm line-through text-gray-400'>
                                                        ₹ 999
                                                    </p>
                                                    <p className='ml-4 font-semibold text-base text-green-500'>
                                                        20%
                                                    </p>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}</>)}
                            </div>
                        </div>
                    </div>
                    <div className="fixed bottom-0 left-0 right-0 bg-white py-1 lg:hidden z-50 grid grid-cols-2">
                        <button type="button" className="text-gray-800 hover:text-blue-700 border-r border-gray-900 hover:bg-gray-900 font-medium text-sm px-10  text-center py-1 flex justify-center" onClick={setIsFilter}><span className="mr-3 "><UilFilter /></span> FILTER</button>
                        <button type="button" className="text-gray-800 hover:text-blue-700 border-l border-gray-900 hover:bg-gray-900 font-medium text-sm px-10  text-center py-1 flex justify-center"><span className="mr-3"><UilSort /></span> SORT</button>
                    </div>
                </div>
            </div> */}
            {/* {isFilter && <div
                id="defaultModal"
                tabIndex="-1"
                aria-hidden="true"
                className="fixed top-0 left-0 right-0 z-[200] w-full max-h-full lg:hidden">
                <div className="relative w-full md:max-w-4xl max-w-2xl max-h-full mx-auto">
                    <div className="relative shadow bg-white">
                        <div className="flex items-start justify-between p-4 border-b rounded-t">
                            <h3 className="text-xl font-semibold text-gray-900 ">
                                FILLTER
                            </h3>
                            <button
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                                data-modal-hide="defaultModal"
                                onClick={((e) => { setIsFilter(false) })}
                            >
                                <span className="text-xl text-red-400 -mt-1.5">RESET</span>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <hr />

                        <div className="lg:hidden grid grid-cols-2 p-6 space-x-2 border-t border-gray-600 rounded-b">
                            <button
                                data-modal-hide="defaultModal"
                                type="submit"
                                className="text-gray-700 bg-white hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center"
                            // onClick={hideModal}
                            >
                                Apply
                            </button>
                            <button
                                data-modal-hide="defaultModal"
                                type="submit"
                                className="text-gray-700 bg-white hover:bg-gray-200 focus:ring-1 focus:outline-none focus:ring-gray-300 text-lg font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 rounded-lg"
                            // onClick={hideModal}  
                            >
                                Cencel
                            </button>
                        </div>
                    </div>
                </div>
            </div>} */}
        </>
    )
}

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';
import ProductCards from '@/components/products/productCards';

const ProductsPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [priceRange, setPriceRange] = useState([0, 1000]);

    useEffect(() => {
        // Fetch all products from the API
        axios.get('/api/products/getRecord')
            .then(response => {
                setProducts(response.data);
                setFilteredProducts(response.data);
            })
            .catch(error => console.error('Error fetching products:', error));
    }, []);

    //get all cat
    const getAllCategory = async () => {
        try {
            const { data } = await axios.get("/api/category/getCategories/");
            if (data) {
                setCategory(data);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllCategory();
    }, []);

    useEffect(() => {
        // Filter products based on selected category and price range
        let filtered = products;

        // if (category) {
        //     filtered = filtered.filter(product => product.category === '6496c9f064e83bb98c9c3318');
        // }
        console.log(category)
        // filtered = filtered.filter(product =>
        //     product.price >= priceRange[0] && product.price <= priceRange[1]
        // );

        setFilteredProducts(filtered);
    }, [category, priceRange, products]);

    console.log(category)
    return (
        <div className="container mx-auto py-20">
            {/* Filter Section */}
            <div className="flex flex-col md:flex-row md:space-x-3">
                <div className="w-full md:w-1/4 bg-white p-4 rounded shadow">
                    <h2 className="font-bold text-lg mb-4">Filters</h2>

                    {/* Category Filter */}
                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Category</h3>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full p-2 border rounded"
                        >
                            <option value="">All</option>
                            {category?.map((item, index) => (
                                <option value={item.catName} key={index}>{item.catName}</option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range Filter */}
                    <div className="mb-4">jjheduemjhjuajudjkjdhufsfahjhfbsadjfbhjsdfhgfjaeyf jasfhhasdjf ajdhhvas
                        <h3 className="font-semibold mb-2">Price Range</h3>
                        <input
                            type="range"
                            min="0"
                            max="1000"
                            value={priceRange[1]}
                            onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                            className="w-full"
                        />
                        <div className="flex justify-between text-sm mt-1">
                            <span>$0</span>
                            <span>${priceRange[1]}</span>
                        </div>
                    </div>
                </div>
                {/* Products Section */}
                <div className="w-full md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {filteredProducts.map((product, index) => (
                        <ProductCards product={product} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductsPage;

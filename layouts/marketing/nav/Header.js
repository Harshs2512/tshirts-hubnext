import React, { useState } from "react";
import Link from "next/link";
import SearchBar from "@/components/searchbar/SearchBar";

import {
    UilUserCircle,
    UilCreateDashboard,
    UilUsersAlt,
    UilSignOutAlt,
    UilSetting,
    UilFolderQuestion,
    UilUser,
    UilHeart,
    UilShoppingCartAlt,
    UilSearch,
    UilBars
} from "@iconscout/react-unicons";
// import { useWishlist } from "../../context/wishlist";


// const user1 = admin;

const Header = () => {
    //   const navigate = useNavigate();
    //   const [cart] = useCart();
    //   const [wishlist] = useWishlist();
    //   var mobileNav = document.getElementById("mobileNav");
    //   const [search, setSearch] = useState("");
    //   const [isOpen, setIsOpen] = useState(false);
    //   //   const history = useNavigate()
    //   const [toggle, setToggle] = useState(false);
    //   const toggleClose = () => { setToggle(false) }
      const [auth, setAuth] = useState(false);
    //   const toggleMenu = () => {
    //     setIsOpen(!isOpen);
    //   };
    const openmobile = () => {
        let icon = document.getElementById("mobile_menu");
        if (icon.style.marginTop === "-100%") {
            icon.style.marginTop = "0%";
        } else {
            icon.style.marginTop = "-100%";
        }
    };
    //   const handleLogout = async (e) => {  
    //     e.preventDefault();
    //     try {
    //       await axios.get("http://localhost:8000/api/v1/logout");
    //       setAuth({
    //         ...auth,
    //         user: null,
    //         token: null,
    //       });
    //       localStorage.clear("token");
    //       navigate(location.state || "/");
    //     }

    //     catch (error) {
    //       console.log(error);
    //       toast.error("Something went wrong");
    //     }
    //   };


    return (
        <>
            <nav className="fixed z-50 w-full">
                <div className="w-full bg-[#7570ff] px-2 sm:px-1 lg:px-8">
                    <div className="relative h-16 grid grid-cols-3">
                        <div className="flex">
                            {/* <!-- Mobile menu button--> */}
                            <button
                                type="button"
                                id="openmenue"
                                onClick={openmobile}
                                className="-mt-2"
                                aria-controls="mobile-menu"
                                aria-expanded="false">
                                <UilBars className="text-white" />
                            </button>
                            <div className="flex ml-6 sm:ml-1">
                                <Link href="/">

                                    <img
                                        className="h-10 my-5 w-auto lg:hidden mt-3 lg:mt-3 md:ml-6"
                                        src="https://static.businessworld.in/article/article_extra_large_image/1658825089_3Aa6Ht_Untitled_design_2022_07_26T141419_811.png"
                                        alt="Cybrom"
                                    />
                                    <img
                                        className="hidden h-10 my-5 w-auto lg:block mt-0 lg:mt-3"
                                        src="https://cdn.shopify.com/s/files/1/0420/7073/7058/files/Untitled_design_4_b9722293-e450-46e8-b3a7-831120ba3755_200x@2x.png?v=1659015863"
                                        alt="Cybrom"
                                    />
                                </Link>
                            </div>
                        </div>
                        <div className="mt-3">
                            <SearchBar />
                        </div>
                        <div className="flex sm:gap-48">
                            <div className="block 2xl:ml-96 xl:ml-72 lg:ml-64 md:ml-32 xs:-ml-2 -ml-7 mt-3 justify-end items-end">
                                {!auth?.user ? (
                                    <ul className="flex space-x-4">
                                        <>
                                            <li className="shadow-2xl">
                                                <Link href={'/cart'}>
                                                    <UilShoppingCartAlt
                                                        className="cursor-pointer text-white w-8 h-8 shadow-2xl"
                                                    />
                                                </Link>
                                            </li>
                                            <li className="sm:ml-10">
                                                <Link href="/mywishlist">
                                                    <UilHeart
                                                        className="cursor-pointer text-white w-8 h-8"
                                                    />
                                                </Link>
                                            </li>
                                            <li className="sm:ml-20 float-left">
                                                <Link href="/account/profile">
                                                    <UilUser className="cursor-pointer text-white w-8 h-8" />
                                                </Link>
                                            </li>
                                        </>
                                    </ul>

                                ) : (
                                    <ul className="flex sm:space-x-4 space-x-3">
                                        {
                                            auth.user && auth.user.role === "admin" && <>
                                                <li className="text-white hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                    <Link onClick={toggleClose} href="/account/admin/profile">Dashboard</Link>
                                                </li>
                                                <li className="text-white hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                    <NavLink onClick={toggleClose} href="/admin/course-info">Course-Info</NavLink>
                                                </li>
                                                <li className="text-white hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                    <NavLink onClick={toggleClose} href="/admin/student-info">Student-Info</NavLink>
                                                </li>
                                                <li className="text-white hover:bg-white hover:text-white rounded-md px-3 py-2 text-sm font-medium">
                                                    <NavLink onClick={toggleClose} href="/admin/teacher-info">Teacher-Info</NavLink>
                                                </li>
                                                <li className="">
                                                    <button
                                                        className="bg-blue-500 px-8 tracking-widest py-1 md:py-2 text-sm font-medium rounded-md text-white" //onClick={handleLogout}
                                                    ><Link href="/Login">Logout</Link></button>
                                                </li>
                                                {/* <Search /> */}
                                            </>
                                        }
                                        {
                                            auth.user && auth.user.role === "user" && <>
                                                <NavLink href={'/cart'}>
                                                    <li className="shadow-2xl">
                                                        {cart.length ?
                                                            <>
                                                                <div class="absolute animate-ping  inline-flex items-center pulse  justify-center w-3.5 h-3.5 text-xs font-medium text-white bg-red-600 rounded-full ml-6 mt-1"></div>
                                                                <div class="absolute inline-flex items-center pulse  justify-center w-5 h-5 text-xs font-medium text-white bg-red-600 rounded-full ml-5">
                                                                    {cart?.length}
                                                                </div></>
                                                            :
                                                            ''
                                                        }
                                                        <UilShoppingCartAlt
                                                            className="cursor-pointer text-white w-8 h-8 shadow-2xl"
                                                        />
                                                    </li>
                                                </NavLink>
                                                <NavLink href={'/mywishlist'}>
                                                    <li>
                                                        {wishlist.length ? <>
                                                            <div class="absolute animate-ping  inline-flex items-center pulse  justify-center w-3.5 h-3.5 text-xs font-medium text-white bg-red-600 rounded-full ml-6 mt-1"></div>
                                                            <div class="absolute inline-flex items-center pulse  justify-center w-5 h-5 text-xs font-medium text-white bg-red-600 rounded-full ml-5">
                                                                {wishlist?.length}
                                                            </div></> :
                                                            ''
                                                        }
                                                        <UilHeart
                                                            className="cursor-pointer text-white w-8 h-8 "
                                                        />
                                                    </li>
                                                </NavLink>
                                                <li className="sm:ml-20">
                                                    <Link href="/account/profile">
                                                        <UilUser className="cursor-pointer text-white w-8 h-8" />
                                                    </Link>
                                                    <div className="relative" id="userPopup">
                                                        {isOpen && (
                                                            <div className="absolute bg-gradient-href-tr from-blue-100 href-blue-900 p-2 w-64 text-[#0f0333]  top-full -left-52 py-6  mt-4 rounded-md shadow-xl">
                                                                <div class="max-w-xs">
                                                                    <div class=" bg-transparent shadow-xl rounded-lg py-3">
                                                                        <div class="photo-wrapper p-2">
                                                                            <img
                                                                                class="w-32 h-32 rounded-full mx-auto"
                                                                                src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp"
                                                                                alt="John Doe"
                                                                            />
                                                                        </div>
                                                                        <div class="p-2">
                                                                            <div class="text-center text-gray-900 text-xs font-semibold">
                                                                                <p className="text-white">Web Developer</p>
                                                                            </div>
                                                                            <h3 class="text-center text-sm text-white font-medium leading-8">
                                                                                Suresh Kumar Ji
                                                                            </h3>
                                                                            <h2 class="text-center text-sm text-white font-medium leading-8">
                                                                                sureshkumar@gmail.com
                                                                            </h2>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-2 border-b border-black">
                                                                    <a
                                                                        href="Profile"
                                                                        className=" gap-2 py-1 flex  hover:bg-gray-200 "
                                                                    >
                                                                        <UilUserCircle /> Profile
                                                                    </a>
                                                                    <a
                                                                        href="Setting"
                                                                        className="gap-2 py-1 flex  hover:bg-gray-200 "
                                                                    >
                                                                        <UilCreateDashboard />
                                                                        Go href Dashboard
                                                                    </a>
                                                                    <a
                                                                        href="/signout"
                                                                        className="gap-2 py-1 flex hover:bg-gray-200 "
                                                                    >
                                                                        <UilUsersAlt /> Switch Account
                                                                    </a>
                                                                    <Link href="/Login" className="gap-2 py-1 flex hover:bg-gray-200">
                                                                        <UilSignOutAlt /> Sign Out
                                                                    </Link>
                                                                </div>
                                                                <div className="border-b border-black">
                                                                    <a
                                                                        href="/help"
                                                                        className="gap-2 py-1 flex hover:bg-gray-200 "
                                                                    >
                                                                        <UilFolderQuestion /> Help
                                                                    </a>
                                                                    <a
                                                                        href="/help"
                                                                        className="gap-2 py-1 flex hover:bg-gray-200 "
                                                                    >
                                                                        <UilSetting /> Setting
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </li>
                                            </>
                                        }
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Header;
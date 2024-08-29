import Image from "next/image";
import { Montserrat } from "next/font/google";
import { Fragment } from "react";
import { NextSeo } from "next-seo";
import { usePathname } from "next/navigation";
import { UilHeartAlt, UilSearchAlt, UilShoppingCartAlt, UilTruck, UilCheckCircle } from '@iconscout/react-unicons'
import Link from "next/link";
import Hero from "@/components/landing/Hero";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import ImageGallery from "@/components/landing/ImageGallery";
import Categories from "@/components/landing/CategoryCarousel";

const inter = Montserrat({ subsets: ["latin"], weight: ['500'] });

const Home = () => {
  const router = usePathname();
  const pageURL = process.env.baseURL + router.pathname;
  const title = "Tshirts hub Indias favirut brand";
  const description = "Upgrade your wardrobe with our Classic Cotton T-Shirt, Link staple for any occasion. Crafted from 100% soft, breathable cotton, this tee ensures all-day comfort and durability. Featuring Link timeless design and available in various colors, it's perfect for layering or wearing on its own. Whether you're heading to Link casual outing or relaxing at home, this t-shirt is your go-to choice for effortless style.";
  const keywords = "T-shirts for men, T-shirts for women, Cotton t-shirts, Graphic tees, Casual t-shirts, Comfortable t-shirts, Affordable t-shirts, Trendy t-shirts Stylish t-shirts High-quality t-shirts Summer t-shirts Soft cotton tees Unisex t-shirts V-neck t-shirts Crew neck t-shirts Plain t-shirts Printed t-shirts Fashionable t-shirts Everyday t-shirts Eco-friendly t-shirts";
  const scrollLeft = () => {
    document.getElementById("img").scrollLeft -= 440;
  };
  const scrollRight = () => {
    document.getElementById("img").scrollLeft += 440;
  };
  return (
    <Fragment>
      <NextSeo
        title={title}
        description={description}
        canonical={pageURL}
        openGraph={{
          url: pageURL,
          title: title,
          description: description,
          site_name: process.env.siteName,
          images: [
            {
              url: '/images/og/geeks-ui-next-js-default-og-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Cybrom design',
            },
          ],
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: keywords,
          },
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        ]}
      />
      <main
        className={`flex min-h-screen flex-col py-3 ${inter.className} bg-white`}
      >
        <Hero />

        {/* New Arrivals */}
        <div className="max-w-[1800px] mt-4 md:mt-10 lg:mt-20 px-0 md:px-5 lg:px-10">
          {/* NEW ARRIVALS */}
          <h1 className='text-3xl font-bold tracking-widest text-center py-10 text-[#7570ff] mt-9 uppercase'>New Arrivals</h1>
          <div className='grid md:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 md:gap-7 gap-1 gap-y-5 px-5'>
            {[1, 2, 3, 4].map((item, index) =>
              <Link href="#" key={index}>
                <div className='block bg-slate-50 shadow-sm rounded p-0 border border-1 border-dark-300 relative'>
                  <Image src='/images/3.jpg' alt='' width={400} height={200} className="transition" />
                  <div className='px-2 py-3 mt-1'>
                    <h1 className='te mb-2 md:text-lg text-md font-medium leading-tight text-neutral-800'>
                      Tshirt title
                    </h1>
                    <p className='mb-1 text-sm text-neutral-600'>
                      TShirt
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
                </div>
              </Link>
            )}
          </div>
          <div className='text-center py-16'>
            <Link href="/collections" className="relative shadow-xl rounded-sm inline-flex items-center px-9 py-1 overflow-hidden text-lg font-medium text-[#7570ff] border-2 border-[#7570ff] hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#7570ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative">View All</span>
            </Link>
          </div>
        </div>

        {/* CATEGORIES CARD BANNER*/}
        <ImageGallery mlenght={[1, 1, 1, 1, 1, 1, 1, 1, 1]} />

        {/* Best Selling */}
        <div className="max-w-[1800px] mt-4 md:mt-10 lg:mt-20 px-0 md:px-5 lg:px-10">
          {/* NEW ARRIVALS */}
          <h1 className='text-3xl font-bold tracking-widest text-center py-10 text-[#7570ff] mt-9 uppercase'>Best Selling</h1>
          <div className='grid md:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 md:gap-7 gap-1 gap-y-5 px-5'>
            {[1, 2, 3, 4].map((item, index) =>
              <Link href="#" key={index}>
                <div className='block bg-slate-50 shadow-sm rounded p-0 border border-1 border-dark-300 relative'>
                  <Image src='/images/3.jpg' alt='' width={400} height={200} className="transition" />
                  <div className='px-2 py-3 mt-1'>
                    <h1 className='te mb-2 md:text-lg text-md font-medium leading-tight text-neutral-800'>
                      Tshirt title
                    </h1>
                    <p className='mb-1 text-sm text-neutral-600'>
                      TShirt
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
                </div>
              </Link>
            )}
          </div>
          <div className='text-center py-16'>
            <Link href="/collections" className="relative shadow-xl rounded-sm inline-flex items-center px-9 py-1 overflow-hidden text-lg font-medium text-[#7570ff] border-2 border-[#7570ff] hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#7570ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative">View All</span>
            </Link>
          </div>
        </div>

        {/* trending section */}
        <div className="mt-4 md:mt-7 lg:mt-10 max-w-[1800px] px-2 md:px-5 lg:px-10">
          <h1 className='text-3xl font-bold tracking-widest text-center py-10 text-[#7570ff] mt-9 uppercase'>TRENDING NOW</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {[1, 2, 3, 4].map((item, index) => (
              <div
                key={index}
                className="max-w-sm bg-center rounded-lg bg-cover bg-no-repeat bg-[url('/images/1_Tees.webp')] bg-gray-700 transform transition-transform duration-500 hover:scale-105 hover:shadow-xl"
              >
                <div className="px-1 max-w-screen-xl text-center py-1 lg:py-2">
                  <div className="flex py-24 lg:py-48 flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <Link
                      href="#"
                      className="inline-flex justify-center items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white
                         rounded-lg border border-white hover:bg-gray-100 hover:text-gray-900 focus:ring-4 focus:ring-gray-400 
                         transition-colors duration-300"
                    >
                      View All
                    </Link>
                  </div>
                  <h1 className="mb-4 text-xl font-extrabold tracking-tight leading-none text-white md:text-1xl lg:text-2xl">
                    Goku Tshirt
                  </h1>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* banner for ad */}
        <div className="mt-4 md:mt-10 lg:mt-20 max-w-[1800px] px-2 md:px-5 lg:px-10">
          <Link href={"#"}>
            <div
              className="max-h-xl bg-gray-700 hover:shadow-xl rounded-xl"
            >
              <Image src={'/images/1.jpg'} width={1800} height={100} className="rounded-xl" />
            </div>
          </Link>
        </div>

        {/* all categories */}
        <Categories />

        {/* Recent */}
        <div className="max-w-[1800px] mt-4 md:mt-10 lg:mt-20 px-0 md:px-5 lg:px-10">
          {/* NEW ARRIVALS */}
          <h1 className='text-3xl font-bold tracking-widest text-center py-10 text-[#7570ff] mt-9 uppercase'>Recent Search</h1>
          <div className='grid md:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 md:gap-7 gap-1 gap-y-5 px-5'>
            {[1, 2, 3, 4].map((item, index) =>
              <Link href="#" key={index}>
                <div className='block bg-slate-50 shadow-sm rounded p-0 border border-1 border-dark-300 relative'>
                  <Image src='/images/3.jpg' alt='' width={400} height={200} className="transition" />
                  <div className='px-2 py-3 mt-1'>
                    <h1 className='te mb-2 md:text-lg text-md font-medium leading-tight text-neutral-800'>
                      Tshirt title
                    </h1>
                    <p className='mb-1 text-sm text-neutral-600'>
                      TShirt
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
                </div>
              </Link>
            )}
          </div>
          <div className='text-center py-16'>
            <Link href="/collections" className="relative shadow-xl rounded-sm inline-flex items-center px-9 py-1 overflow-hidden text-lg font-medium text-[#7570ff] border-2 border-[#7570ff] hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#7570ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative">View All</span>
            </Link>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

export default Home;
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

const inter = Montserrat({ subsets: ["latin"], weight: ['500'] });

export default function Home() {
  const router = usePathname();
  const pageURL = process.env.baseURL + router.pathname;
  const title = "Tshirts hub Indias favirut brand";
  const description = "Upgrade your wardrobe with our Classic Cotton T-Shirt, a staple for any occasion. Crafted from 100% soft, breathable cotton, this tee ensures all-day comfort and durability. Featuring a timeless design and available in various colors, it's perfect for layering or wearing on its own. Whether you're heading to a casual outing or relaxing at home, this t-shirt is your go-to choice for effortless style.";
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
        className={`flex min-h-screen flex-col px-10 py-3 ${inter.className}`}
      >
        <Hero />
        <div>
          {/* NEW ARRIVALS */}
          <h1 className='text-3xl font-bold tracking-widest text-center py-10 text-[#7570ff] mt-9 uppercase'>New Arrivals</h1>
          <div className='grid md:grid-cols-3 xs:grid-cols-2 lg:grid-cols-4 md:gap-7 gap-1 gap-y-5 px-5'>
            <div className='block bg-white rounded p-0 border border-1 border-dark-300 relative'>
              <Image src='/images/3.jpg' alt='' width={400} height={200} />
              <div className='rounded-full absolute top-[4%] left-[85%] transform -translate-x-1/2 md:top-[4%] md:left-[85%] md:transform md:-translate-x-1/2 lg:top-[4%] lg:left-[85%] lg:transform lg:-translate-x-1/2 md:w-10 md:h-10 w-9 h-9 p-1.5 md:p-2 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
                <UilHeartAlt />
              </div>
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
          </div>
          <div className='text-center py-16'>
            <Link href="/collections" className="relative shadow-xl rounded-sm inline-flex items-center px-9 py-1 overflow-hidden text-lg font-medium text-[#7570ff] border-2 border-[#7570ff] hover:text-white group hover:bg-gray-50">
              <span className="absolute left-0 block w-full h-0 transition-all bg-[#7570ff] opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
              <span className="absolute right-0 flex items-center justify-start w-8 h-8 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
              </span>
              <span className="relative">View All</span>
            </Link>
          </div>
        </div>

        {/* CATEGORIES CARD BANNER*/}
        <div>
          <h1 className='text-3xl font-bold tracking-widest text-center py-6 text-[#7570ff] md:mt-9  uppercase'>categories</h1>
          <div className='grid grid-rows-3 px-5 md:gap-5 gap-2'>
            <div className='grid md:grid-cols-3 md:gap-x-7'>
              <div className='col-span-2'>
                <Image className='h-96' src='/images/1.jpg' alt='' width={500} height={500} />
              </div>
              <div className='md:grid md:grid-rows-2 hidden'>
                <div className='h-auto max-w-full'>
                  <Image className='h-auto max-w-full' src='/images/cropbanner1.png' alt='' width={500} height={500} />
                </div>
                <div className='mt-6'>
                  <Image className='h-auto max-w-full' src='/images/cropbanner1.png' alt='' width={500} height={500} />
                </div>
              </div>
            </div>
            <div className=' h-80 grid md:grid-cols-3 grid-cols-2 md:gap-x-7 gap-x-2'>
              <div className='bg-gray-600 '>
                <Image className='h-80 w-full' src='/images/cropbanner3.jpg' alt='' width={500} height={500} />
              </div>
              <div className='bg-gray-200 md:col-span-2'>
                <Image className='h-80 w-full' src='/images/1.jpg' alt='' width={500} height={500} />
              </div>
            </div>
            <div className='h-60 grid md:grid-cols-3 -mt-16 gap-x-7'>
              <div className='bg-yellow-800'>
                <Image className='h-80 w-full' src='/images/cropbanner4.jpg' alt='' width={500} height={500} />
              </div>
              <div className='hidden md:block bg-yellow-600'>
                <Image className='h-80 w-full' src='/images/cropbanner5.jpg' alt='' width={500} height={500} />
              </div>
              <div className='hidden md:block bg-yellow-400'>
                <Image className='h-80 w-full' src='/images/cropbanner4.jpg' alt='' width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
        <ImageGallery mlenght={[1,1,1,1,1,1,1,1,1]}/>
        <div className="flex justify-center items-center">
          <div className="">
            {/* circle design */}
            <h1 className="text-3xl font-bold tracking-widest text-center md:pt-10 text-[#7570ff] uppercase">our service</h1>
            <section className="mt-20">
              <div className="flex flex-wrap justify-center items-center gap-20">
                <div className="gap-y-10 justify-center rounded-full md:w-[200px] md:h-[200px] border-solid border-[15px] w-[10rem] h-[10rem] mb-3">
                  <div className="rounded-full bg-white w-[8.5rem] h-[8.5rem] md:w-[170px] md:h-[170px] flex justify-center shadow-2xl xs:-mt-1 xs:-ml-1 md:mt-[0.1em]">
                    <div className="rounded-full rotate-[0deg] md:rotate-[0deg] bg-white md:w-[150px] md:h-[150px] w-[7.5rem] h-[7.5rem] flex justify-center md:mt-[10px] xs:mt-2 shadow-[inset_0_-2px_6px_0px_rgba(0,0,0,0.6)]">
                      <p className="font-bold bg-white md:mt-8 mt-5 mb-5 md:text-[17px] text-md">
                        SELECT <UilSearchAlt className="w-9 h-9 xs:ml-2.5 md:ml-4 mt-5 text-[#5c58e0]" />
                      </p>
                    </div>
                  </div>
                </div>

                {/* CIRCUL SECTION-2 */}

                <div className="gap-y-10 justify-center rounded-full md:w-[200px] md:h-[200px] border-solid border-[15px] w-[10rem] h-[10rem] mb-3">
                  <div className="rounded-full bg-white w-[8.5rem] h-[8.5rem] md:w-[170px] md:h-[170px] flex justify-center shadow-2xl xs:-mt-1 xs:-ml-1 md:-ml-1 md:mt-[0.1em]">
                    <div className="rounded-full rotate-[0deg] md:rotate-[0deg] bg-white md:w-[150px] md:h-[150px] w-[7.5rem] h-[7.5rem] flex justify-center md:mt-[10px] xs:mt-2 shadow-[inset_0_-2px_6px_0px_rgba(0,0,0,0.6)]">
                      <p className="font-bold bg-white md:mt-8 mt-5 mb-5 md:text-[17px] text-md">
                        CART <UilShoppingCartAlt className="w-9 h-9 xs:ml-1 md:ml-2 mt-5 text-[#5c58e0]" />
                      </p>
                    </div>
                  </div>
                </div>

                {/* CIRCUL SECTION-3  */}

                <div className="gap-y-10 justify-center rounded-full md:w-[200px] md:h-[200px] border-solid border-[15px] w-[10rem] h-[10rem] mb-3">
                  <div className="rounded-full bg-white w-[8.5rem] h-[8.5rem] md:w-[170px] md:h-[170px] flex justify-center shadow-2xl xs:-mt-1 xs:-ml-1 md:-ml-1 md:mt-[0.1em]">
                    <div className="rounded-full rotate-[0deg] md:rotate-[0deg] bg-white md:w-[150px] md:h-[150px] w-[7.5rem] h-[7.5rem] flex justify-center md:mt-[10px] xs:mt-2 shadow-[inset_0_-2px_6px_0px_rgba(0,0,0,0.6)]">
                      <p className="font-bold bg-white md:mt-8 mt-5 mb-5 md:text-[17px] text-md">
                        CHECKOUT <UilCheckCircle className="w-9 h-9 xs:ml-6 md:ml-8 md:mt-5 mt-3 text-[#5c58e0]" />
                      </p>
                    </div>
                  </div>
                </div>

                {/* CIRCUL SECTION-4 */}

                <div className="gap-y-10 justify-center rounded-full md:w-[200px] md:h-[200px] border-solid border-[15px] w-[10rem] h-[10rem] mb-3">
                  <div className="rounded-full bg-white w-[8.5rem] h-[8.5rem] md:w-[170px] md:h-[170px] flex justify-center shadow-2xl xs:-mt-1 xs:-ml-1 md:-ml-1 md:mt-[0.1em]">
                    <div className="rounded-full rotate-[0deg] md:rotate-[0deg] bg-white md:w-[150px] md:h-[150px] w-[7.5rem] h-[7.5rem] flex justify-center md:mt-[10px] xs:mt-2 shadow-[inset_0_-2px_6px_0px_rgba(0,0,0,0.6)]">
                      <p className="font-bold bg-white md:mt-8 mt-5 mb-5 md:text-[17px] text-md">
                        DELIVERED <UilTruck className="w-9 h-9 xs:ml-6 md:ml-9 md:mt-5 mt-3 text-[#5c58e0]" />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
        <div className='mt-20'>
          <h1 className='text-3xl font-bold tracking-widest text-center py-10 text-[#7570ff] mt-9 uppercase'>categories</h1>
          <div className="grid place-items-center grid-cols-8">
            <button onClick={scrollLeft} className="p-2 m-2 bg-white rounded-full" >
              <FiChevronLeft />
            </button>
            <div id="img" className="flex content-center w-[80%] h-80 p-4 gap-10 overflow-x-auto scroll-smooth scrollbar-hide col-span-6">
              <img src="https://img.freepik.com/free-vector/recruit-agent-analyzing-candidates_74855-4565.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais" className="h-60" />
              <img src="https://img.freepik.com/premium-vector/online-cv-application-job-search-concept-with-people-applying-resume-flat-vector_125133-1603.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais" className="h-60  w-[100%]" />
              <img src="https://img.freepik.com/premium-vector/job-interview-online-service-platform-candidate-hr-manager-business-man-woman-table-vector-illustration-conversation-career-human-resource-concept_2175-919.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais" className="h-60" />
              <img src="https://img.freepik.com/free-vector/choice-worker-concept_23-2148626348.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais" className="h-60 w-[100%]" />
              <img src="https://img.freepik.com/free-vector/recruitment-agency-searching-job-applicants_1262-19873.jpg?size=626&ext=jpg&ga=GA1.2.1812261131.1679748520&semt=ais" className="h-60  w-[100%]" />
              <img src="https://img.freepik.com/free-vector/personal-site-concept-illustration_114360-2577.jpg?size=626&ext=jpg&ga=GA1.1.1812261131.1679748520&semt=ais" className="h-60" />
            </div>
            <button onClick={scrollRight} className="p-2 m-2 bg-white rounded-full"  >
              <FiChevronRight />
            </button>
          </div>
        </div>
      </main>
    </Fragment>
  );
}

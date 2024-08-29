import Image from "next/image";
import Link from "next/link";

const { Fragment } = require("react");

const ImageGallery = ({ mlenght }) => {
    return (
        <Fragment>
            <h1 className='text-3xl font-bold tracking-widest text-center text-[#7570ff] uppercase'>Categories</h1>
            <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-2 max-w-[1800px] mt-4 md:mt-10 lg:mt-20 px-2 md:px-5 lg:px-10">
                {mlenght.map((item, index) => (
                    <Link href={'item'} key={index}>
                        <div className="after:content group relative block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight justify-center align-center">
                            <Image
                                alt="Next.js Conf photo"
                                className="rounded-xl transform brightness-90 transition will-change-auto group-hover:brightness-110"
                                style={{ transform: "translate3d(0, 0, 0)" }}
                                src='/images/cropbanner4.jpg'
                                width={720}
                                height={480}
                                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, (max-width: 1536px) 33vw, 25vw"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </Fragment>
    );
};

export default ImageGallery;
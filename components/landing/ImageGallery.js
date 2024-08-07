import Image from "next/image";
import Link from "next/link";

const { Fragment } = require("react");

const ImageGallery = ({mlenght}) => {
    console.log(mlenght)
    return (
        <Fragment>
            <div className="grid grid-cols-3 gap-3">
                {mlenght.map((item, index) => (
                    <Link href={'item'}>
                        <div className="after:content group relative block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight justify-center align-center">
                            <Image
                                alt="Next.js Conf photo"
                                className="rounded-xl transform brightness-90 transition will-change-auto group-hover:brightness-110"
                                style={{ transform: "translate3d(0, 0, 0)" }}
                                src='/images/cropbanner4.jpg'
                                width={720}
                                height={480}
                                sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </Fragment>
    );
};

export default ImageGallery;
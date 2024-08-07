// import node module librariesimport { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

const GeeksSEO = props => {
  const router = useRouter()
  const pageURL = process.env.baseURL + router.pathname;
  const { title, description } = props;
  return (
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
            alt: 'Cybrom Technology Pvt. Ltd.',
          },
        ],
      }}
    />
  )
}
export default GeeksSEO;
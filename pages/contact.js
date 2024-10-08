// import node module libraries
import { Fragment } from 'react';
import { GeeksSEO } from '@/widgets';

const Contact = () => {
	return (
		<Fragment>
			{/* Geeks SEO settings  */}
			<GeeksSEO title="Contact | Cybrom Technology Pvt. Ltd." />
			{/*  */}
		</Fragment>
	);
};

export default Contact;
{/* <main>
				<section className="bg-white container-fluid">
					<Row className="align-items-center min-vh-100">
						<Col lg={6} md={12} sm={12}>
							<div className="px-xl-20 px-md-8 px-4 py-8 py-lg-0">
								<div className="d-flex justify-content-between mb-7 align-items-center">
									<Link href="/">
										<Image src="/images/brand/logo/cybrom_long.png" alt="" className='logo-inverse' />
									</Link>
								</div>
								<div className="text-dark">
									<h1 className="display-4 fw-bold">Get In Touch.</h1>
									<p className="lead text-dark">
										Fill in the form to the right to get in touch with someone on
										our team, and we will reach out shortly.
									</p>

									<div className="mt-8">
										<p className="fs-4 mb-4">
											If you are seeking support please visit our{' '}
											<Link href="#">support portal</Link> before reaching out
											directly.
										</p>
										<p className="fs-4">
											<Telephone size={16} className="text-primary me-2" /> 
											(+91)-9755996968
										</p>
										<p className="fs-4">
											<EnvelopeOpen size={16} className="text-primary me-2" />{' '}
											hr@cybrom.com
										</p>
										<p className="fs-4 ">
											<GeoAlt size={17} className="text-primary me-2" /> 
											185, 3rd Floor, Zone-I, Maharana Pratap Nagar, Bhopal, Madhya Pradesh
										</p>
									</div>

									<div className="mt-10">
										<Link href="#" className="text-muted me-3">
											<Icon path={mdiFacebook} size={1} />
										</Link>
										<Link href="#" className="text-muted me-3">
											<Icon path={mdiTwitter} size={1} />
										</Link>
										<Link href="#" className="text-muted ">
											<Icon path={mdiGithub} size={1} />
										</Link>
									</div>
								</div>
							</div>
						</Col>

						<Col
							lg={6}
							className="d-lg-flex align-items-center w-lg-50 min-vh-lg-100 position-fixed-lg bg-cover bg-light top-0 right-0"
						>
							<ContactForm />
						</Col>
					</Row>
				</section>
			</main> */}
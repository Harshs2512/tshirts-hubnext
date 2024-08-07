// import node module libraries
import React, { Fragment } from 'react';
import { GeeksSEO } from '@/widgets';

const About = () => {
	return (
		<Fragment>
			{/* Geeks SEO settings  */}
			<GeeksSEO title="About us | Cybrom Technology Pvt. Ltd." />
			{/* Default Navbar */}
			{/* <NavbarDefault login />
			<main>
				<section className="py-6 bg-white">
					<Container>
						<HeroContent />
						<JustifiedGallery />
						<Stat />
					</Container>
				</section>
				<FeaturesList />
				<TeamGridRoundImages />
				<CTAButton />
			</main>
			<FooterWithLinks /> */}
		</Fragment>
	);
};

// About.Layout = BlankLayout;

export default About;

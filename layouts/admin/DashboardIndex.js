// import node module libraries
import React, { useState } from 'react';
// import Auth from 'utils/Auth';

const DashboardIndex = (props) => {
	const [showMenu, setShowMenu] = useState(true);
	const ToggleMenu = () => {
		return setShowMenu(!showMenu);
	};
	return (
			// <Auth>
				<div id="db-wrapper" className={`${showMenu ? '' : 'toggled'}`}>
					<div className="navbar-vertical navbar">
						{/* <NavbarVertical
							showMenu={showMenu}
							onClick={(value) => setShowMenu(value)}
						/> */}
					</div>
					<main id="page-content">
						<header className="header">
							{/* <NavbarTop
								data={{
									showMenu: showMenu,
									SidebarToggleMenu: ToggleMenu
								}}
							/> */}
						</header>
						<section className="container-fluid p-4">{props.children}</section>
					</main>
				</div>
			// </Auth>
	);
};

export default DashboardIndex;
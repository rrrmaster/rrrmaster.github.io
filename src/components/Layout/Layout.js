import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header'
import Footer from './Footer'
import useTheme from '../../hooks/use-dark-mode';

const Layout = ({ children, title, description, socialImage = '' }) => {
	const [theme, themeToggler] = useTheme();
	
	return (
		<div>
			<Helmet>
				<html lang="ko" />
				<title>{title}</title>
			</Helmet>
			<Header/>
			<section >
				<div>
					{children}
				</div>
			</section>
            <Footer/>

	
		</div>
	)
}
export default Layout;
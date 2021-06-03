import React from 'react';
import Helmet from 'react-helmet';
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, title, description, socialImage = '' }) => {
	
	return (
		<div>
			<Helmet>
				<html lang="ko" />
				<title>{title}</title>
			</Helmet>
			<Header/>
			<section >
				<div className= "container min-h-screen md:mx-10">
					{children}
				</div>
			</section>
            <Footer/>

	
		</div>
	)
}
export default Layout;
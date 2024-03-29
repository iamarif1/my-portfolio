import React from 'react';
import { Helmet } from 'react-helmet';

import { About, Achievement, Blog, Contacts, Education, Footer, Landing, Navbar, Projects, Services, Skills, Testimonials } from '../../components';
import { headerData } from '../../data/headerData';

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Porfolio</title>
            </Helmet>

            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education />            
            <Projects />
            <Achievement />
            <Services/>
            <Testimonials/>
            <Blog />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main

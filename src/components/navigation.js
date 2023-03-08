import React, { useState, useEffect } from 'react';
import Header from './header';
import Footer from './footer';
import AboutMe from './aboutMe';
import Resume from './resume';
import Portfolio from './portfolio';
import Contact from './contact';

export default function PortfolioContainer() {

    const portfolioStyle = {
        padding: "20px",
    }
    const [currentPage, setCurrentPage] = useState('About');

    useEffect(() => {
        document.title = `${currentPage}`;
    });

    const renderPage = () => {
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        return <AboutMe />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={portfolioStyle}>
            
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    );
}
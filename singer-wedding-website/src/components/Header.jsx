import { useState } from 'react';
import Navigation from './Navigation';
import Home from './pages/Home';
import Travel from './pages/Travel';
import Registry from './pages/Registry';




const Header = () => {
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        if (currentPage === 'Travel') {
            return <Travel />
        }
        if (currentPage === 'Registry') {
            return <Registry />
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <header>
                <h1>K&D</h1>
                <Navigation
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                ></Navigation>
            </header>
            <main>{renderPage()}</main>
        </div>
    )
}

export default Header;
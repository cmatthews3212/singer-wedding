import { useState } from 'react';

const Navigation = ({ currentPage, handlePageChange }) => {
    const [isVisible, setIsVisible] = useState(false);

    const handleMenuClick = () => {
        setIsVisible(prevVisible => !prevVisible);
    }

    const handleNavClick = (page, event) => {
        event.preventDefault();
        setIsVisible(false)
        handlePageChange(page);
    };

    return (
        <div>
            <div className='menu' onClick={handleMenuClick}>
                <div className='hamIcon'></div>
                <div className='hamIcon'></div>
                <div className='hamIcon'></div>
            </div>
            <div className="navItems" style={{ display: isVisible ? 'block' : 'none' }}>

            <ul>
                <li>
                    <a 
                    href="#home" 
                    onClick={(event) => handleNavClick('Home', event)}
                    className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a 
                    href="#travel" 
                    onClick={(event) => handleNavClick('Travel', event)}
                    className={currentPage === 'Travel' ? 'nav-link active' : 'nav-link'}
                    >
                        Travel
                    </a>
                </li>
                <li>
                    <a 
                    href="#registry" 
                    onClick={(event) => handleNavClick('Registry', event)}
                    className={currentPage === 'Registry' ? 'nav-link active' : 'nav-link'}
                    >
                        Registry
                    </a>
                </li>
                {/* <li>
                    <a 
                    href="#rsvp" 
                    onClick={(event) => handleNavClick('Rsvp', event)}
                    className={currentPage === 'Rsvp' ? 'nav-link active' : 'nav-link'}
                    >
                        RSVP
                    </a>
                </li> */}
            </ul>
            </div>
        </div>
    )
}

export default Navigation;
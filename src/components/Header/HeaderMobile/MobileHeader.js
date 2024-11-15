import './MobileHeader.scss';
import { useState, useEffect } from 'react';

function MobileHeader() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
        if (isMenuOpen) setSubmenuOpen(false); // Zamyka submenu, gdy główne menu jest zamknięte
    };

    const toggleSubmenu = () => {
        setSubmenuOpen(!isSubmenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`mobile-header ${isSticky ? 'mobile-header--sticky' : ''}`}>
            <div className='mobile-header__logo'>Bonsai.pl</div>
            <div className='mobile-header__burger' onClick={toggleMenu}>
                <span className='burger-line'></span>
                <span className='burger-line'></span>
                <span className='burger-line'></span>
            </div>
            <nav className={`mobile-header__menu ${isMenuOpen ? 'mobile-header__menu--open' : ''}`}>
                <button className='mobile-header__close' onClick={toggleMenu}>✕</button>
                <ul>
                    <li onClick={toggleSubmenu} className={`submenu-toggle ${isSubmenuOpen ? 'submenu-toggle--open' : ''}`}>
                        <span>Dla początkujących</span>
                        <ul className={`submenu ${isSubmenuOpen ? 'submenu--open' : ''}`}>
                            <li>Co to jest?</li>
                            <li>Dlaczego Bonsai?</li>
                        </ul>
                    </li>
                    <li>Rodzaje</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>
                </ul>
            </nav>
        </header>
    );
}

export default MobileHeader;

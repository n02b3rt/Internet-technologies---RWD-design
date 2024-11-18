import './MobileHeader.scss';
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

function MobileHeader() {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        console.log(id, element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMenuOpen(false); // Zamyka menu po przewinięciu
        } else {
            // Opóźnij próbę przewinięcia, jeśli element jeszcze nie istnieje
            setTimeout(() => {
                const delayedElement = document.getElementById(id);
                if (delayedElement) {
                    delayedElement.scrollIntoView({ behavior: 'smooth' });
                    setMenuOpen(false); // Zamyka menu po przewinięciu
                }
            }, 100);
        }
    };

    const handleAnchorClick = (id) => {
        if (location.pathname !== "/") {
            // Jeśli nie jesteśmy na stronie głównej, nawigujemy do niej
            navigate("/");
            // Poczekaj, aż React Router wyrenderuje stronę, a potem przewiń
            setTimeout(() => scrollToSection(id), 100);
        } else {
            scrollToSection(id);
        }
    };

    return (
        <header className={`mobile-header ${isSticky ? 'mobile-header--sticky' : ''}`}>
            <div className='mobile-header__logo'>
                <Link to="/" >Bonsai.pl</Link>
            </div>
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
                            <li>
                                <Link
                                    to="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAnchorClick('co-to-jest-bonsai');
                                    }}
                                >
                                    Co to jest?
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleAnchorClick('dlaczego-warto-wybrac-bonasi');
                                    }}
                                >
                                    Dlaczego Bonsai?
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/Type-Of-Bonsai" onClick={toggleMenu}>
                            Rodzaje
                        </Link>
                    </li>
                    <li>
                        <Link to="/Gallery" onClick={toggleMenu}>
                            Galeria
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            onClick={(e) => {
                                e.preventDefault();
                                handleAnchorClick('kontakt');
                            }}
                        >
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MobileHeader;

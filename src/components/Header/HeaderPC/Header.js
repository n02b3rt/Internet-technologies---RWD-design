import './Header.scss';
import { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
    const [isSticky, setIsSticky] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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
        console.log(id,element);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            // Opóźnij próbę przewinięcia, jeśli element jeszcze nie istnieje
            setTimeout(() => {
                const delayedElement = document.getElementById(id);
                if (delayedElement) {
                    delayedElement.scrollIntoView({ behavior: 'smooth' });
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
        <header className={`header header__container ${isSticky ? 'header--sticky' : ''}`}>
            <div className='header__logo'>
                <Link to="/" >Bonsai.pl</Link>
            </div>
            <ul className='header__menu'>
                <li className='header__menu__submenu'>
                    <span>
                        Dla początkujących <span className='arrow'>▼</span>
                    </span>
                    <ul className='submenu'>
                        <li>
                            <Link
                                to="/"
                                onClick={(e) => {
                                    e.preventDefault(); // Zapobiega domyślnemu działaniu linku
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
                                Dlaczego warto wybrać bonsai?
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/Type-Of-Bonsai">Rodzaje</Link>
                </li>
                <li><Link to="/Gallery">Galeria</Link></li>
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
        </header>
    );
}

export default Header;

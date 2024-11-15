import './Header.scss';
import { useEffect, useState } from 'react';

function Header() {
    const [isSticky, setIsSticky] = useState(false);

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
        <header className={`header header__container ${isSticky ? 'header--sticky' : ''}`}>
            <div className='header__logo'>Bonsai.pl</div>
            <ul className='header__menu'>
                <li className='header__menu__submenu'>
                    <span>
                        Dla początkujących <span className='arrow'>▼</span>
                    </span>
                    <ul className='submenu'>
                        <li>Co to jest?</li>
                        <li>Dlaczego Bonsai?</li>
                    </ul>
                </li>
                <li>Rodzaje</li>
                <li>Galeria</li>
                <li>Kontakt</li>
            </ul>
        </header>
    );
}

export default Header;

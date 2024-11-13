import './Header.scss';
import Container from "../Container/Container";

function Header() {
    return (
        <header className='header header__container'>
            {/*<Container className='header__container'>*/}
                <div className='header__logo'>Bonsai.pl</div>
                <ul className='header__menu'>
                    <li className='header__menu__submenu'>
                        <span>
                            Dla początkujących <span className='arrow'>▼</span>
                        </span>
                    </li>
                    <li>rodzaje</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>
                </ul>
            {/*</Container>*/}
        </header>
    );
}

export default Header;
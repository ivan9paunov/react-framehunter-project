import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <input type="checkbox" id="mobileMenuToggler" className={styles.mobileTogglerCheckbox} />
            <label htmlFor="mobileMenuToggler" className={styles.mobileToggler}>
                <i className="fa-solid fa-bars"></i>
            </label>
            <div className={styles.logo}>
                <Link to="/"><img src="/img/logo.png" alt="logo" className={styles['logo-img']} /></Link>
            </div>
            <nav>
                <div className={styles['nav-btns']}>
                    <Link to="/">Home</Link>
                    <Link to="/destinations">Destinations</Link>
                    <Link to="/destinations/add">Add Frame</Link>
                    <Link to="/profile">My Profile</Link>
                    <Link to="/logout">Logout</Link>
                    {/* <Link to="/login">Login</Link> */}
                    {/* <Link to="/register">Register</Link> */}
                </div>
            </nav>
        </header>
    );
}
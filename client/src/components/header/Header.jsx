import styles from './Header.module.css';

export default function Header() {
    return (
        <header>
            <input type="checkbox" id="mobileMenuToggler" className={styles.mobileTogglerCheckbox} />
            <label htmlFor="mobileMenuToggler" className={styles.mobileToggler}>
                <i className="fa-solid fa-bars"></i>
            </label>
            <div className={styles.logo}>
                <a href="/home"><img src="/img/logo.png" alt="logo" className={styles['logo-img']} /></a>
            </div>
            <nav>
                <div className={styles['nav-btns']}>
                    <a href="/">Home</a>
                    <a href="/frames">Destinations</a>
                    <a href="/frames/create">Add Frame</a>
                    <a href="/profile">My Profile</a>
                    <a href="/logout">Logout</a>
                    {/* <a href="/login">Login</a> */}
                    {/* <a href="/register">Register</a> */}
                </div>
            </nav>
        </header>
    );
}
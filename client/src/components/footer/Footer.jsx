import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer>
            <div className={styles['footer-app']}>
                <p>&copy; <a href="/">FrameHunter</a><span className={styles['less-opacity']}>. All Rights Reserved.</span></p>
            </div>

            <div className={styles['footer-author']}>
                <p>Designed by <a href="https://github.com/ivan9paunov" target="_blank">Ivan Paunov</a></p>
            </div>
        </footer>
    );
}
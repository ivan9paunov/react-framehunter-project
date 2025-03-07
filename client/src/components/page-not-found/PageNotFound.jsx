import styles from './PageNotFound.module.css';

export default function PageNotFound() {
    return (
        <main>
            <div className={styles.notfound}>
                <div className={styles.notfoundContent}>
                    <div className={styles.notfound404}>
                        <h1>404</h1>
                        <h2>Page not found</h2>
                    </div>
                    <a href="/home">Homepage</a>
                </div>
            </div>
        </main>
    );
}
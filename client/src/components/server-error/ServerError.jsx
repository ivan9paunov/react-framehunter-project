import styles from './ServerError.module.css';

export default function ServerError() {
    return (
        <main>
            <div id={styles.notfound}>
                <div className={styles.notfound}>
                    <div className={styles.notfound404}>
                        <h1>500</h1>
                        <h2>Internal Server Error</h2>
                    </div>
                </div>
            </div>
        </main>
    );
}
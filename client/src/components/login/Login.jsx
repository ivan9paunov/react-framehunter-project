import styles from './Login.module.css';

export default function Login() {
    return (
        <main>
            <div className={styles['login-section']}>
                <div className={styles['login-container']}>
                    <h3>Login</h3>
                    <h5>Please enter your email and password</h5>
                    <form>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                    <div className={styles['redirect-link']}>
                        <a href="#">Not registered?</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
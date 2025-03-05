import styles from './Register.module.css';

export default function Register() {
    return (
        <main>
            <div className={styles['register-section']}>
                <div className={styles['register-container']}>
                    <h3>Register</h3>
                    <h5>Please provide all required details</h5>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Repeat Password" />
                        <div>
                            <button>Register</button>
                        </div>
                    </form>
                    <div className={styles['redirect-link']}>
                        <a href="#">Already have an account?</a>
                    </div>
                </div>
            </div>
        </main>
    );
}
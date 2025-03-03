import styles from './Home.module.css';

export default function Home() {
    return (
        <main>
            <section className={styles.heroSection}>
                <div className={styles['welcome-text']}>
                    <h1>Welcome to FrameHunter!</h1>
                    <h3>Where every shot tells a story. Your journey to cinematic landscapes starts here.</h3>
                </div>
            </section>

            <section className={styles['quick-instructions']}>
                <div className={styles['section-container']}>
                    <h2>CAPTURE THE EXTRAORDINARY</h2>
                    <div className={styles['steps-wrapper']}>
                        <div className={styles.step}>
                            <i className="fa-solid fa-compass"></i>
                            <h3>Choose Your Destination</h3>
                            <p>Not sure where to go next? Explore our curated list of breathtaking locations or add your
                                dream destination to your bucket list.</p>
                        </div>
                        <div className={styles.step}>
                            <i className="fa-solid fa-magnifying-glass-location"></i>
                            <h3>Get Inspired by Professionals</h3>
                            <p>Discover creative ideas from fellow photographers who have captured stunning shots in your
                                chosen location.</p>
                        </div>
                        <div className={styles.step}>
                            <i className="fa-solid fa-camera-retro"></i>
                            <h3>Create Amazing Shots</h3>
                            <p>Pick your gear, unleash your creativity, and capture cinematic masterpieces. Remember, every
                                frame tells a story!</p>
                        </div>
                        <div className={styles.step}>
                            <i className="fa-solid fa-cloud-arrow-up"></i>
                            <h3>Share Your Journey</h3>
                            <p>Don&apos;t forget to upload your best shots and tips to inspire the next generation of explorers
                                and photographers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles['last-three-spots']}>
                <div className={styles['section-container']}>
                    <h2>LAST ADDED DESTINATIONS</h2>
                    <div className={styles['latest-spots']}>
                        <div className={styles['latest-spot']}>
                            <img src="https://images.unsplash.com/photo-1600663757626-0fc610ba60d4?q=80&w=1884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Destination Cover" />
                            <div className={styles['latest-spot-info']}>
                                <h3>Golden Gate Bridge</h3>
                                <div className={styles['latest-spot-footer']}>
                                    <p>San Francisco, USA</p>
                                    <a href={`/details/${'spotId'}`}>Details</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles['latest-spot']}>
                            <img src="https://images.unsplash.com/photo-1522092372459-dff01028d904?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Destination Cover" />
                            <div className={styles['latest-spot-info']}>
                                <h3>Brooklyn Bridge</h3>
                                <div className={styles['latest-spot-footer']}>
                                    <p>New York, USA</p>
                                    <a href={`/details/${'spotId'}`}>Details</a>
                                </div>
                            </div>
                        </div>
                        <div className={styles['latest-spot']}>
                            <img src="https://images.unsplash.com/photo-1567597243073-2d274aabecec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Destination Cover" />
                            <div className={styles['latest-spot-info']}>
                                <h3>Machu Picchu</h3>
                                <div className={styles['latest-spot-footer']}>
                                    <p>PERU</p>
                                    <a href={`/details/${'spotId'}`}>Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </main >
    );
}
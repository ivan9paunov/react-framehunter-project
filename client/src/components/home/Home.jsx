import { useEffect, useState } from 'react';

import framesAPI from '../../api/frames-api.js';

import styles from './Home.module.css';

export default function Home() {
    const [latestFrames, setLatestFrames] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await framesAPI.getLatest();
            setLatestFrames(result);
        })();
    }, []);

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

                    {latestFrames.length > 0
                        ?
                        <div className={styles['latest-spots']}>

                            {latestFrames.map(frame =>
                                <div key={frame._id} className={styles['latest-spot']}>
                                    <img src={frame.imageUrl} alt={`${frame.destination}'s Picture`} />
                                    <div className={styles['latest-spot-info']}>
                                        <h3>{frame.destination}</h3>
                                        <div className={styles['latest-spot-footer']}>
                                            <p>{frame.region ? `${frame.region}, ${frame.country}` : frame.country}</p>
                                            <a href={`/destinations/${frame._id}/details`}>Details</a>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                        : <p className={styles['helper-text']}>NO DESTINATIONS ADDED YET</p>
                    }

                </div >
            </section >
        </main >
    );
}
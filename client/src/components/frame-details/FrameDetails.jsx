import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

import framesAPI from '../../api/frames-api.js';

import styles from './FrameDetails.module.css';
import { formatDate } from '../../utils/dateUtils.js';
import { truncateToDecimals } from '../../utils/truncateToDecimalsUtils.js';

export default function FrameDetails() {
    const [frame, setFrame] = useState({});
    const { frameId } = useParams();
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [mapSize, setMapSize] = useState({
        width: '400px',
        height: '300px'
    });

    useEffect(() => {
        (async () => {
            const result = await framesAPI.getOne(frameId);

            setFrame(result);

            let [lat, lng] = result.coordinates.split(', ');
            setLatitude(Number(lat));
            setLongitude(Number(lng));
        })();
    }, [frameId]);

    useEffect(() => {
        const updateSize = () => {
            if (window.innerWidth < 820) {
                setMapSize({width: '100%', height: '250px'});
            } else if (window.innerWidth < 1000) {
                setMapSize({width: '220px', height: '220px'});
            } else if (window.innerWidth < 1150) {
                setMapSize({width: '275px', height: '300px'});
            } else if (window.innerWidth < 1250) {
                setMapSize({width: '300px', height: '300px'});
            } else if (window.innerWidth < 1450) {
                setMapSize({width: '350px', height: '300px'});
            } else {
                setMapSize({width: '400px', height: '300px'});
            }
        };

        updateSize();
        window.addEventListener('resize', updateSize);

        return () => window.removeEventListener('resize', updateSize);
    }, []);
    
    return (
        <main>
            <div className={styles['main-container']}>
                <div className={styles['image-container']}>
                    <a href="">
                        <img
                            src={frame.imageUrl}
                            alt={`${frame.destination}'s Picture`}
                            title="Click to view the image in full size"
                            className={styles['main-image']}
                        />
                    </a>
                </div>
                <div className={styles.lightbox} hidden>
                    <div className={styles['lightbox-content']}>
                        <img src={frame.imageUrl} alt="Full size image" />
                    </div>
                </div>
                <div className={styles['data-container']}>
                    <div className={styles.likes}>
                        <i className="fa-solid fa-heart"></i>
                        <span>0</span>
                    </div>
                    <div className={styles.bookmarks}>
                        <span>0</span>
                        <i className="fa-solid fa-bookmark"></i>
                    </div>
                    <div className={styles['header-row']}>
                        <h1>{frame.destination}</h1>
                    </div>
                    <div className={styles['main-row']}>
                        <div className={styles['text-data']}>
                            <div className={styles.paragraph}>
                                <span>{frame.region ? `${frame.region}, ${frame.country}` : frame.country}</span>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className={styles.paragraph}>
                                <span>{`${truncateToDecimals(latitude, 6)}, ${truncateToDecimals(longitude, 6)}`}</span>
                                <i className="fa-solid fa-compass"></i>
                            </div>
                            <div className={styles.paragraph}>
                                <span className={styles.description}>{frame.description}</span>
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                        </div>
                        <div className={styles.map}>
                            <LoadScript googleMapsApiKey="AIzaSyDJ_fgWPfiBfW51692eHsVmgOsndmgpMfc">
                                <GoogleMap
                                    mapContainerStyle={mapSize}
                                    center={{lat: latitude, lng: longitude}}
                                    zoom={17}
                                    mapTypeId='satellite'
                                >
                                    <Marker position={{lat: latitude, lng: longitude}} />
                                </GoogleMap>
                            </LoadScript>
                        </div>
                    </div>
                    <div className={styles['footer-row']}>
                        <div className={styles['details-btns']}>
                            <a href="">Like</a>
                            <a href="">Save</a>
                            <a href="">Edit</a>
                            <a href="">Delete</a>
                        </div>
                    </div>
                    <div className={styles['post-info']}>
                        <p>{`${frame.author} / ${formatDate(frame._createdOn)}`}</p>
                    </div>
                </div>
            </div>

            <div className={styles['comment-section']}>
                <h2>1 comment</h2>
                <div className={styles.comments}>
                    <div className={styles.comment}>
                        <div className={styles['comment-header']}>
                            <p className={styles['comment-date']}>Jan 6, 2025</p>
                            <p className={styles['comment-author']}>george</p>
                            <a href="" className={styles['delete-comment']}><i className="fa-solid fa-rectangle-xmark"></i></a>
                        </div>
                        <div className={styles['comment-body']}>
                            <p>Great shot! I will definitely try by myself!</p>
                        </div>
                    </div>
                </div>
                <div className={styles['comment-input']}>
                    <h3>Leave a comment</h3>
                    <form>
                        <div>
                            <textarea name="comment" id="comment" rows="5" placeholder="Leave your comment"></textarea>
                        </div>
                        <div>
                            <button>Comment</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
import styles from './FrameDetails.module.css';

export default function FrameDetails() {
    return (
        <main>
            <div className={styles['main-container']}>
                <div className={styles['image-container']}>
                    <a href="">
                        <img 
                            src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Golden Gate Bridge Picture" 
                            title="Click to view the image in full size"
                            className={styles['main-image']}
                        />
                    </a>
                </div>
                <div className={styles.lightbox} hidden>
                    <div className={styles['lightbox-content']}>
                        <img src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt="Full size image" />
                    </div>
                </div>
                <div className={styles['data-container']}>
                    <div className={styles.likes}>
                        <i className="fa-solid fa-heart"></i>
                        <span>1</span>
                    </div>
                    <div className={styles.bookmarks}>
                        <span>4</span>
                        <i className="fa-solid fa-bookmark"></i>
                    </div>
                    <div className={styles['header-row']}>
                        <h1>Golden Gate Bridge</h1>
                    </div>
                    <div className={styles['main-row']}>
                        <div className={styles['text-data']}>
                            <div className={styles.paragraph}>
                                <span>San Francisco, USA</span>
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className={styles.paragraph}>
                                <span>37.819912, -122.478661</span>
                                <i className="fa-solid fa-compass"></i>
                            </div>
                            <div className={styles.paragraph}>
                                <span className={styles.description}>Capture the Golden Gate Bridge at its finest by shooting duringsunset. 
                                    Position the bridge between the trees to frame it beautifully and enhance the composition. Experiment
                                    with different angles and perspectives to add a unique touch. Don&amp;t forget to use a
                                    tripod for stability and play with the exposure settings to capture the perfect lighting. Happy
                                    shooting!</span>
                                <i className="fa-solid fa-circle-info"></i>
                            </div>
                        </div>
                        <div className={styles.map}>
                            <img src="https://potionwebstudio.com/wp-content/uploads/2018/10/google-map3-1080x630.jpg"
                                alt="" />
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
                        <p>ivan / Jan 5, 2025</p>
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
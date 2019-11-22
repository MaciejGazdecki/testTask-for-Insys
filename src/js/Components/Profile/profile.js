import React from 'react';
import styles from './profile.modules.scss'

function Profile() {
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.name}>
                        <h2>Marylin Monroe</h2>
                        <p><i className="fas fa-map-marker-alt"></i> Poznań, PL</p>
                    </div>
                    <div className={styles.content}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae exercitationem
                            in iusto minima modi necessitatibus nihil porro possimus provident, quae quisquam,
                            quod, reprehenderit rerum tenetur? Lorem ipsum dolor sit amet.
                        </p>
                        <p>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illoo</span>
                            <span>optio rem reprehenderit suscipit tenetur</span>
                            <span>Lorem ipsum dolor sit amet.</span>
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus dicta
                            dolor illo iure minus officiis recusandae sequi sunt veniam, voluptate? Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile;
import React from 'react';
import styles from './welcome.modules.scss'

function Welcome() {
    return (
        <section>
            <div className={styles.container}>
                <h3 className={styles.welcome}>Hello Marylin Monroe</h3>
            </div>
        </section>
    )
}

export default Welcome;
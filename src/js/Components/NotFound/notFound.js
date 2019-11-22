import React from 'react';
import styles from './notFound.module.scss'

function NotFound() {
    return (
        <section>
            <div className={styles.container}>
                <h3 className={styles.notFound}>Nie odnaleziono strony</h3>
            </div>
        </section>
    )
}

export default NotFound;
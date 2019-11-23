import React, {useState,useEffect} from 'react';
import styles from './gallery.modules.scss';

function Gallery() {
    const [gallery, setGallery] = useState([]);

    const corsProxy = 'https://cors-anywhere.herokuapp.com/';

    const url = `${corsProxy}https://www.flickr.com/services/feeds/photos_public.gne?nojsoncallback=1&format=json&tags=Marylin Monroe&tagmode=any`;

    const API_KEY = '492bd3844c14ea7ea88ac27d552be6da';

    useEffect(() => {
       const fetchData = async () => {
           return await fetch(url, {
               method: 'GET',
               api_key:API_KEY
           })
       };
       fetchData()
           .then(res => res.json())
           .then(obj => setGallery(obj.items))
           .catch(err => console.log(err, 'Jest błąd'))

    });
    console.log(gallery);
    return (
        <section>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.row}>
                        {gallery.slice(0,3).map((image, inx) =>
                            <div key={`${image.title}&${inx}`}
                                 style={{backgroundImage: `url(${image.media.m})`}}
                                 className={styles.galleryImage}>
                                <a href={image.link} target="_blank" rel="noopener noreferrer" ></a>
                            </div>
                        )}
                    </div>
                    <div className={styles.row}>
                        {gallery.slice(3,6).map((image, inx) =>
                            <div key={`${image.title}&${inx}`}
                                 style={{backgroundImage: `url(${image.media.m})`}}
                                 className={styles.galleryImage}>
                                <a href={image.link} target="_blank" rel="noopener noreferrer" ></a>
                            </div>
                        )}
                    </div>
                    <div className={styles.row}>
                        {gallery.slice(6,9).map((image, inx) =>
                            <div key={`${image.title}&${inx}`}
                                 style={{backgroundImage: `url(${image.media.m})`}}
                                 className={`${styles.galleryImage} ${styles.lastRowImages}`}>
                                <a href={image.link} target="_blank" rel="noopener noreferrer" ></a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Gallery;
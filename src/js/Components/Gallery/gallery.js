import React, {useState,useEffect} from 'react';
import styles from './gallery.modules.scss';

function Gallery() {
    const [gallery, setGallery] = useState([]);

    const corsProxy = 'https://cors-anywhere.herokuapp.com/';

    const url = `${corsProxy}https://www.flickr.com/services/feeds/photos_public.gne?nojsoncallback=1&format=json&tags=Marylin Monroe`;

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

    },[]);
    return (
        <div>
        </div>
    )
}

export default Gallery;
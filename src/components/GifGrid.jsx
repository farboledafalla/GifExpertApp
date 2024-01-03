import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {
   const [images, setImages] = useState([]);

   const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
   };

   useEffect(() => {
      getImages();
   }, []);

   return (
      <>
         <h3>{category}</h3>

         <ol>
            {images.map((img) => (
               <li key={img.id}>
                  <h5>{img.title}</h5>
                  <img src={img.url} />
               </li>
            ))}
         </ol>
      </>
   );
};

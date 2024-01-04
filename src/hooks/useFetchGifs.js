import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

// Un Hook no es más que una función que regresa algo, en este caso no retorna código JSX, sino que retorna un objeto
export const useFetchGifs = (category) => {
   const [images, setImages] = useState([]);
   const [isLoading, setIsLoading] = useState(true);

   const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      // Como ya cargó, se deja el false
      setIsLoading(false);
   };

   useEffect(() => {
      getImages();
   }, []);

   // Retornamos las imagenes
   return {
      // Esta es la forma larga, pero en ES6 si son iguales, dejamos uno
      // images: images,
      // isLoading: true,
      images,
      isLoading,
   };
};

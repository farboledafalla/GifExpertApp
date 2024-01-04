import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
   const { images, isLoading } = useFetchGifs(category);

   // console.log(images, isLoading);
   // console.log({ images, isLoading });

   return (
      <>
         <h3>{category}</h3>
         {isLoading ? <h4>Cargando...</h4> : null}

         <div className='card-grid'>
            {images.map((image) => (
               <GifItem key={image.id} {...image} />
            ))}
         </div>
      </>
   );
};

import { useState } from 'react';

// 1. Punto de entrada a la App
export const GifExpertApp = () => {
   //ePeisepz0RLx7wGhW5tKRqHyZg2TEYUW

   // 2. Categorias
   const [categories, setCategories] = useState(['One Puch', 'Dragon Ball']);
   console.log(categories);
   return (
      <>
         {/* Título */}
         <h1>GifExpertApp</h1>

         {/* Input */}

         {/* Listado de Gifs */}
         <ol>
            {categories.map((category) => {
               return <li key={category}>{category}</li>;
            })}
         </ol>

         {/* Gif Item */}
      </>
   );
};

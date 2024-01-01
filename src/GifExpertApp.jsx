import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

// 1. Punto de entrada a la App
export const GifExpertApp = () => {
   //ePeisepz0RLx7wGhW5tKRqHyZg2TEYUW

   // 2. Categorias
   const [categories, setCategories] = useState(['One Puch', 'Dragon Ball']);
   const onAddCategory = () => {
      const newCategory = 'Valorant';
      // Agregar la nueva al inicio
      setCategories([newCategory, ...categories]);
      // setCategories((cat) => [...cat, newCategory]);
   };

   return (
      <>
         {/* Título */}
         <h1>GifExpertApp</h1>

         {/* 3. Input */}
         <AddCategory />

         {/* Listado de Gifs */}
         <button onClick={onAddCategory}>Agregar</button>
         <ol>
            {categories.map((category) => {
               return <li key={category}>{category}</li>;
            })}
         </ol>

         {/* Gif Item */}
      </>
   );
};

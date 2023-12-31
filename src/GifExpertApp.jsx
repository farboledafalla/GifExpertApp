import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

// 1. Punto de entrada a la App
export const GifExpertApp = () => {
   //ePeisepz0RLx7wGhW5tKRqHyZg2TEYUW

   // 2. Categorias
   const [categories, setCategories] = useState(['One Puch']);

   const onAddCategory = (newCategory) => {
      // Validar para que no inserte repetidos
      if (categories.includes(newCategory)) return;

      // Agregar la nueva al inicio
      setCategories([newCategory, ...categories]);
      // Otra forma de hacerlo
      // setCategories((cat) => [...cat, newCategory]);
   };

   return (
      <>
         <h1>GifExpertApp</h1>

         <AddCategory onNewCategory={(newValue) => onAddCategory(newValue)} />

         {categories.map((category) => (
            <GifGrid key={category} category={category} />
         ))}
      </>
   );
};

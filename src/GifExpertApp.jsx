import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

// 1. Punto de entrada a la App
export const GifExpertApp = () => {
   //ePeisepz0RLx7wGhW5tKRqHyZg2TEYUW

   // 2. Categorias
   const [categories, setCategories] = useState(['One Puch', 'Dragon Ball']);

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
         {/* Título */}
         <h1>GifExpertApp</h1>

         {/* 3. Input */}
         {/* Enviando la función del useState */}
         {/* <AddCategory setCategories={setCategories} /> */}
         <AddCategory onNewCategory={(newValue) => onAddCategory(newValue)} />

         {/* Listado de Gifs */}
         {/* <button onClick={onAddCategory}>Agregar</button> */}
         <ol>
            {categories.map((category) => {
               return (
                  <div key={category}>
                     <li>{category}</li>
                  </div>
               );
            })}
         </ol>

         {/* Gif Item */}
      </>
   );
};

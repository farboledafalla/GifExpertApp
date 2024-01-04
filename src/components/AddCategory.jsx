import { useState } from 'react';
import PropTypes from 'prop-types';

// Este warning se muestra porque no se han configurado prop-types para este prop, desde el archivo .eslintrc.cjs se configura
export const AddCategory = ({ onNewCategory }) => {
   // Manejar estado del input
   const [inputValue, setInputValue] = useState('');

   const onInputChange = (event) => {
      //   console.log(event.target.value);
      // Para que se vea en el input lo que escribo
      setInputValue(event.target.value);
   };

   // Como el navegador se recarga al presionar Enter, puedo usar eso para capturar el valor de input en se momento de presionar esa tecla
   const onSubmit = (event) => {
      // Evitar el evento de recarga del navegador por defecto
      event.preventDefault();

      // Validamos que si al quitar espacios al inicio y fin nos dá <= 1, no lo agregue a la lista
      if (inputValue.trim().length < 1) return;
      // Actualizar el Padre desde el Hijo usando las props (categories,setCategories)
      //   setCategories([...categories, inputValue]);
      // Actualizar el Padre desde el Hijo usando la prop (setCategories)
      // setCategories((cat) => [inputValue, ...cat]);

      // Pasarle el valor al padre para que el lo agrege al array
      onNewCategory(inputValue.trim());

      // Limpiar la caja de texto
      setInputValue('');
   };

   return (
      // Forma larga de hacerlo
      //   <form onSubmit={(event) => onSubmit(event)}>
      <form onSubmit={onSubmit}>
         <input
            type='text'
            placeholder='Buscar Gifs'
            value={inputValue}
            //  onChange={(event) => onInputChange(event)}
            // Forma corta, si se pasa el mismo parámetro que se recibe...se retiran ambos
            onChange={onInputChange}
         />
      </form>
   );
};

AddCategory.propTypes = {
   // Definir que se espera una función
   onNewCategory: PropTypes.func,
};

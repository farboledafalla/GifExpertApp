import { useState } from 'react';

export const AddCategory = () => {
   // Manejar estado del input
   const [inputValue, setInputValue] = useState('One Punch');

   const onInputChange = (event) => {
      //   console.log(event.target.value);
      // Para que se vea en el input lo que escribo
      setInputValue(event.target.value);
   };

   // Como el navegador se recarga al presionar Enter, puedo usar eso para capturar el valor de input en se momento de presionar esa tecla
   const onSubmit = (event) => {
      // Evitar el evento de recarga del navegador por defecto
      event.preventDefault();
      console.log(inputValue);
   };

   return (
      <form onSubmit={(event) => onSubmit(event)}>
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

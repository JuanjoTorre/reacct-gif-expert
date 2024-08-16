/* eslint-disable react/prop-types */
import { useState } from "react";

//Componente que controla el input donde se insertan las nuevas categorias
//Recibira la props para enviar el nuevo valor al componente padre 
export const AddCategory = ( {onNewCategory} ) => {
	// Controlamos el state del input
	const [inputValue, setInputValue] = useState('');

	//Funcion que controla cada cambio que se produce en el input
	const onInputChange = ({ target }) => {
		setInputValue(target.value);
	};

	//Funcion que determina lo que ocurre cuando pulsamos enter en el input
      const onSubmit = ( event ) => {
            event.preventDefault();//Controlamos el comportamiento por defecto
		const newInputValue = inputValue.trim(); //Limpiamos lo que haya escrito en el input de espacios por delante y por detras
		if(newInputValue.length <1) return; //Si no hay nada escrito salimos de la funcion sin hacer nada
		onNewCategory( newInputValue); //En caso contrario pasamos al componente padre el valor del input
		setInputValue(''); //Limpiamos el input para una nueva categoria
            
            
      };


	return (
		//Input de la aplicacion
		<form onSubmit={ (event) => onSubmit(event)}>
			<input
				type="text"
				placeholder="Buscar Gifs"
				value={inputValue}
				onChange={(event) => onInputChange(event)}
			/>
		</form>
	);
};

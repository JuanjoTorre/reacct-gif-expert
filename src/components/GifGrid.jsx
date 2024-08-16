/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */


import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";



//Componente que va a dibujar el grid de gifs
export const GifGrid = ({ category }) => {


	//Uso el custom hook useFetchGifs para conseguir las imagenes
	const { images, isLoading } = useFetchGifs ( category );




	

	return (
		<>
			<h3>{category}</h3>	

			{/* Gestiono el loading */}
			{
				isLoading && ( <h2>Cargando ....</h2>)
			}

			{/* Dibujamos el grid donde iran todos los gifs */}
			<div className="card-grid">
				{
					//Recorremos el array images donde estan todos los gifs
					images.map( ( image )=> (
						//Llamamos al componente GifItem y le pasamos el id de la imagen como key y el resto del la imagen como props
						<GifItem  
							key={ image.id } 
							{ ...image }
							
						/>	
					))
				} 
				
			</div>
		</>
	);
};

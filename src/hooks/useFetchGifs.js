//Custom Hook que va a gestionar la logica de cargar y mostrar las imagenes

import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

      //Creamos un useState para gestionar el state de las imagenes
	const [images, setImages] = useState([]);
      //Creamos un state para gestionar el cargado de las imagenes
      const [isLoading, setIsLoading] = useState(true)

	//Creamos una funcion para rellenar el array de imagenes
	const getImages = async() => {
		const newImages = await getGifs(category);
		setImages(newImages);
            setIsLoading(false);
	};


	//Es useEffect decide que la funcion getGifs solo se ejecutara al inicio
	useEffect ( () => {
		getImages();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ ]);

	return {
		images: images,
		isLoading: isLoading
	};
};

/* eslint-disable no-unused-vars */
import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

//Componente Padre
export const GifExpertApp = () => {

      //Gestionamos el estado de las categorias y lo inicializamos a un array vacio
      const [ categories, setCategories ] = useState(['valorant']);
       
      //Funcion que va a insertar una nueva categoria manteniendo las anteriores
      const onAddCategory = (newCategory => {
            //Controlamos que el valor a insertar no exista en el array y si es asi lo insertamos
            if(categories.includes(newCategory)){
                  return;
            } else{
                  setCategories([newCategory, ...categories]);
            }
            
      });

	return (
            <>
                  {/* Titulo */}
                  <h1>GifExpertApp</h1>
                  
                  {/* Input */}
                  <AddCategory 
                        // Pasamos una props para recibir el valor de una nueva categoria
                        onNewCategory = {(event) => onAddCategory(event)}
                  />
                  
                  {/* Listado de Gifs */}
                  {/* Recorremos el array de categorias y lo imprimimos */}
                  
                  { 
                        categories.map( (category) => (
                              <GifGrid 
                                    key={ category } 
                                    category={category}
                              />
                        ))
                  }
                        
                  
                  

                  {/* Gif Item */}
            </>
      );
};



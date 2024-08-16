//Componente que dibuja cada uno de los gifs

/* eslint-disable react/prop-types */

//Recibimos el titulo y la url del componente y les damos unos estilos
export const GifItem = ({title, url}) => {
   
      return (
            <div className="card">
                  <img src={ url } alt={ title } />
                  <p>{ title }</p>
            </div>
      )
}

import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes.
 *
 * @typedef {Object} TarjetaPersonajesProps
 * @property {number} id - Identificador único del personaje.
 * @property {string} name - Nombre del personaje.
 * @property {string} image - URL de la imagen del personaje.
 * @property {boolean} esFavorito - Indica si el personaje está marcado como favorito.
 * @property {function} clickFavorito - Función que se ejecuta cuando se hace click en el botón favorito.
 */
interface TarjetaPersonajesProps {
  id: number;
  name: string;
  image: string;
  esFavorito: boolean;
  clickFavorito: () => void;
}

/**
 * Función componente que representa la tarjeta de un personaje.
 *
 * @param {TarjetaPersonajesProps} props - Las props del componente.
 * @returns {JSX.Element}
 */
const TarjetaPersonaje = ({id, image, name, esFavorito, clickFavorito}: TarjetaPersonajesProps) => {
    return <div className="tarjeta-personaje">
        <img src={image} alt={name}/>
        <div className="tarjeta-personaje-body">
            <span>{name}</span>
            <BotonFavorito esFavorito={esFavorito} handleClick={clickFavorito} />
        </div>
    </div>
}

export default TarjetaPersonaje;
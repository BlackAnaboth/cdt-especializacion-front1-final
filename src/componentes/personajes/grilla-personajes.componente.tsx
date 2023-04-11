import { Character } from "../../redux/rymSlice";
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';

/**
 * @typedef {Object} GrillaPersonajeProps
 * @property {Character[]} characters - Lista de personajes a mostrar.
 * @property {number[]} favoritos - Lista de IDs de personajes favoritos.
 * @property {(id: number) => void} clickFavorito - Función que se ejecuta cuando se hace clic en el botón de favorito.
 */
interface GrillaPersonajeProps {
  characters: Character[];
  favoritos: number[];
  clickFavorito: (id: number) => void;
}

/**
 * Grilla de personajes para la página de inicio.
 * @param {GrillaPersonajeProps} props - Propiedades de la grilla de personajes.
 * @returns {JSX.Element} Un elemento JSX que representa la grilla de personajes.
 */
const GrillaPersonajes = ({ characters, favoritos, clickFavorito }: GrillaPersonajeProps) => {

  return (

    <div className='grilla-personajes'>
      {characters.map((personaje) => (
        <TarjetaPersonaje
          key={personaje.id}
          name={personaje.name}
          image={personaje.image}
          id={personaje.id}
          clickFavorito={() => clickFavorito(personaje.id)}
          esFavorito={favoritos.includes(personaje.id)}
        />
      ))
      }
    </div>
  );
}
export default GrillaPersonajes;
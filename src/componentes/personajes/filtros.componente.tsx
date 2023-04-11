import React from 'react';
import './filtros.css';

/** Type para función pasada como una prop para manejar cambios en el input de busqueda. */
type BuscarPersonajeEvent = (event: React.ChangeEvent<HTMLInputElement>) => void;

/** Interfaz para las props aceptadas por el componente Filtros.*/
interface FiltrosProps {
  /** Función para manejar cambios en el input de búsqueda. */
  buscarPersonaje: BuscarPersonajeEvent;
  /** Valor actual del input de búsqueda. */
  valor: string;
  /** Referencia al elemento input. */
  inputRef: React.RefObject<HTMLInputElement>
}

/**
 * Componente para renderizar los filtros de búsqueda.
 * @param buscarPersonaje Función para manejar cambios en el input de búsqueda.
 * @param valor Valor actual del input de búsqueda.
 * @param inputRef Referencia al elemento input.
 * @returns Retorna un componente funcional de React.
 */
const Filtros = ({ buscarPersonaje, valor, inputRef }: FiltrosProps) => {
  /** Atributo de nombre para el elemento input. */  
  const nombreInput = 'nombre';
  
  return (
    <div className="filtros">
      <label htmlFor={nombreInput}>Filtrar por nombre:</label>
      <input
        value={valor}
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
        onChange={buscarPersonaje}
        ref={inputRef}
      />
    </div>
  )
}

export default Filtros;
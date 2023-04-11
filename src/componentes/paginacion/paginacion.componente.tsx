import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */

interface PaginacionProps {
    anterior: () => void;
    siguiente: () => void;
    bloquearSiguiente: boolean;
    bloquearAnterior: boolean;
}
const Paginacion = ({ anterior, siguiente, bloquearSiguiente, bloquearAnterior }: PaginacionProps) => {

    return (
        <div className="paginacion">
            <button disabled={bloquearAnterior} className="primary" onClick={anterior}>Anterior</button>
            <button disabled={bloquearSiguiente} className="primary" onClick={siguiente}>Siguiente</button>
        </div>
    );
};


export default Paginacion;
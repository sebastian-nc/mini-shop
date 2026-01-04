import type { ItemCarrito } from "../types";

interface Props {
    id: string;
    nombre: string;
    precio: number;
    cantidad: number;
    carritoDetalle: ItemCarrito[];
    onAgregar: () => void;
}

export function TarjetaProducto({ id, nombre, precio, cantidad, carritoDetalle, onAgregar }: Props) {

    const itemCarrito = carritoDetalle.find((item) => item.id === id);
    const stock = cantidad - (itemCarrito?.cantidad || 0);

    return (
        <div className="border rounded-xl p-5 shadow-sm hover:shadow-lg transition-all duration-300 bg-white flex flex-col gap-2">
            <h3 className="text-lg font-bold text-gray-900 truncate">{nombre}</h3>
            <p className="text-2xl font-extrabold text-indigo-600">${precio.toLocaleString()}</p>
            <span className={`text-sm font-medium px-2 py-1 rounded-full w-fit ${stock > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {stock > 0 ? `${stock} en stock` : 'Agotado'}
            </span>
            <button
                className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm active:scale-95 disabled:active:scale-100 disabled:cursor-not-allowed"
                onClick={onAgregar}
                disabled={stock === 0}
            >
                {stock > 0 ? 'Agregar al carrito' : 'No disponible'}
            </button>
        </div>
    )
}
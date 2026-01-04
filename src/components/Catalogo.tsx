import { useCarrito } from "../hooks/useCarrito";
import type { Producto } from "../types";
import { TarjetaProducto } from "./TarjetaProducto";



export function Catalogo() {
    const { carrito, agregar } = useCarrito()
    const productos: Producto[] = [
        {
            id: '1',
            nombre: 'Producto 1',
            precio: 10,
            cantidad: 10
        },
        {
            id: '2',
            nombre: 'Producto 2',
            precio: 20,
            cantidad: 20
        },
        {
            id: '3',
            nombre: 'Producto 3',
            precio: 30,
            cantidad: 30
        }
    ];

    return (
        <>
            <h2 className="text-3xl font-bold mb-5 text-gray-800">Productos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {productos.map((producto) => (
                    <TarjetaProducto
                        id={producto.id}
                        key={producto.id}
                        nombre={producto.nombre}
                        precio={producto.precio}
                        cantidad={producto.cantidad}
                        carritoDetalle={carrito}
                        onAgregar={() => agregar(producto)}
                    />
                ))}
            </div>
        </>
    )
}
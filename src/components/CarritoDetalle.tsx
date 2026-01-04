import { useCarrito } from "../hooks/useCarrito";

export function CarritoDetalle() {
    const { carrito, totalCompra, quitar } = useCarrito()

    return (
        <>
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 mt-5">
                <h3 className="text-2xl font-extrabold mb-6 text-gray-900 border-b pb-4">Resumen de compra</h3>
                <div className="space-y-4">
                    {carrito.length > 0 ? (
                        carrito.map((item) => {
                            return (
                                <div key={item.id} className="flex justify-between items-center p-4 bg-white hover:bg-gray-50 rounded-lg border border-gray-100 shadow-sm transition-all duration-200 group">
                                    <div className="flex-1">
                                        <p className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{item.nombre}</p>
                                        <p className="text-sm text-gray-500 font-medium">Cantidad: <span className="text-gray-700">{item.cantidad}</span></p>
                                    </div>
                                    <div className="text-right mr-4">
                                        <p className="font-black text-blue-600 text-xl">
                                            ${item.cantidad * item.precio}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => quitar(item.id)}
                                        className="px-3 py-1 text-sm font-semibold text-red-500 hover:bg-red-50 hover:text-red-700 rounded-md transition-colors duration-200 border border-transparent hover:border-red-100"
                                    >
                                        Quitar
                                    </button>
                                </div>
                            );
                        })
                    ) : (
                        <div className="text-center py-10">
                            <p className="text-gray-400 italic text-lg">Tu carrito está esperando ser llenado</p>
                        </div>
                    )}
                </div>
                {
                    carrito.length > 0 && (
                        <div className="mt-8 pt-6 border-t-2 border-gray-100">
                            <div className="flex justify-between items-center px-2">
                                <p className="text-lg font-bold text-gray-700">Total a pagar</p>
                                <p className="text-3xl font-black text-blue-600">
                                    ${totalCompra.toLocaleString()}
                                </p>
                            </div>
                        </div>
                    )}
            </div>

        </>
    )
}
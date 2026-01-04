import { useCarrito } from "../hooks/useCarrito";

export function Navbar() {
    const { carrito, totalProductos } = useCarrito();

    return (
        <nav className="flex items-center justify-between bg-white px-6  border-gray-100">
            <p className="text-xl font-bold text-gray-800 tracking-tight">
                Mini<span className="text-sky-500">Shop</span>
            </p>
            <div className="relative inline-flex items-center p-2 hover:bg-gray-50 rounded-full transition-colors cursor-pointer">
                <span className="text-2xl">🛒</span>
                {carrito.length > 0 && (
                    <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-sky-500 text-[10px] font-bold text-white ring-2 ring-white">
                        {totalProductos}
                    </span>
                )}
            </div>
        </nav>
    )
}
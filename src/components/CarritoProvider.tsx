import { useState } from "react";
import { CarritoContext } from "../context/CarritoContext"
import { Layout } from "../layout";
import { Navbar } from "./Navbar";
import type { Producto, ItemCarrito } from "../types";

export function CarritoProvider({ children }: { children: React.ReactNode }) {
    const [carrito, setCarrito] = useState<ItemCarrito[]>([]);


    const totalCompra = carrito.reduce((acum, item) => acum + item.precio * item.cantidad, 0);
    const totalProductos = carrito.reduce((total, item) => total + item.cantidad, 0)


    function agregar(producto: Producto) {
        const itemCarrito = carrito.find((item) => item.id === producto.id)
        if (itemCarrito) {
            setCarrito(carrito.map((item) => item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item))
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }])
        }

    }

    function quitar(id: string) {
        const itemCarrito = carrito.find((item) => item.id === id)
        if (!itemCarrito) return;

        if (itemCarrito.cantidad == 1) setCarrito(carrito.filter((item) => item.id !== id));
        else {
            setCarrito(carrito.map((item) => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item));
        }
    }

    return (
        <CarritoContext.Provider value={{ carrito, totalCompra, totalProductos, agregar, quitar }}>
            <Layout>
                <Navbar />
                <main className="px-5 py-3">
                    {children}
                </main>
            </Layout>
        </CarritoContext.Provider>
    )
}
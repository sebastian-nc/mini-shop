import { createContext } from "react";
import type { ItemCarrito, Producto } from "../types";



interface CarritoContext {
    carrito: ItemCarrito[];
    agregar: (producto: Producto) => void;
    quitar: (id: string) => void;
    totalCompra: number;
    totalProductos: number;
}

export const CarritoContext = createContext<CarritoContext | null>(null);
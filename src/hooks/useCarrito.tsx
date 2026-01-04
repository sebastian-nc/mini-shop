import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const useCarrito = () => {
    const context = useContext(CarritoContext);
    if (!context) throw new Error("¡Oye! Estás llamando al mesero fuera del restaurante (Provider)");
    return context;
};
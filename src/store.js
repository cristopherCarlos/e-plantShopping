import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';

/**
 * Tarea 5: Configuración de la Tienda Redux
 * * Utilizamos configureStore para centralizar el estado de la aplicación.
 * El 'cartReducer' manejará todas las acciones relacionadas con el carrito
 * (agregar, eliminar, actualizar cantidad) definidas en CartSlice.jsx.
 */
const store = configureStore({
    reducer: {
        // 'cart' es la clave que usaremos en useSelector(state => state.cart.items)
        cart: cartReducer,
    },
});

// Exportación predeterminada para envolver la aplicación en el componente <Provider>
export default store;
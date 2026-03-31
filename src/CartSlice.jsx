import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Array de plantas en el carrito
  },
  reducers: {
    // 1. Agregar artículo
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // 2. Eliminar artículo basado en el nombre
    removeItem: (state, action) => {
      // action.payload debe ser el nombre de la planta
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // 3. Actualizar cantidad de un artículo específico
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exportar los creadores de acciones para usarlos en los componentes
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exportar el reductor por defecto para el store.js
export default CartSlice.reducer;
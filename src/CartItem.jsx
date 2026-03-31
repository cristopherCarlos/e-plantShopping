import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Tarea 1: Calcular el costo total de todos los artículos en el carrito
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach((item) => {
      // Extraemos el valor numérico eliminando el '$'
      const unitCost = parseFloat(item.cost.substring(1));
      total += unitCost * item.quantity;
    });
    return total; // El total general se muestra en el encabezado
  };

  const handleContinueShopping = (e) => {
    // Llama a la función onContinueShopping pasada desde el padre
    onContinueShopping(e);
  };

  // Tarea: Alerta de Checkout
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  const handleIncrement = (item) => {
    // Despacha updateQuantity sumando 1 al valor actual
    dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 }));
  };

  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      // Si es mayor a 1, disminuimos la cantidad
      dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 }));
    } else {
      // Tarea: Si la cantidad caería a 0, eliminamos el artículo
      dispatch(removeItem(item.name));
    }
  };

  const handleRemove = (item) => {
    // Elimina la planta del carrito completamente
    dispatch(removeItem(item.name));
  };

  // Tarea: Calcular el subtotal por cada tipo de planta
  const calculateTotalCost = (item) => {
    const unitCost = parseFloat(item.cost.substring(1));
    return unitCost * item.quantity;
  };

  return (
    <div className="cart-container">
      {/* Total general actualizado en tiempo real */}
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">{item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              {/* Subtotal del artículo individual */}
              <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
      <div className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        {/* Añadido el onClick para la alerta de Checkout */}
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;
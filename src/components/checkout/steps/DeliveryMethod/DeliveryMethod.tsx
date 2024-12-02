import React, { useState } from 'react';
import { Truck, Store } from 'lucide-react';
import './DeliveryMethod.css';

interface DeliveryMethodProps {
  onNext: (data: { deliveryMethod: string }) => void;
}

export const DeliveryMethod: React.FC<DeliveryMethodProps> = ({ onNext }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  const handleSubmit = () => {
    if (selectedMethod) {
      onNext({ deliveryMethod: selectedMethod });
    }
  };

  return (
    <div className="delivery-methods">
      <h2 className="delivery-title">Escoge el método de entrega</h2>
      
      <div className="method-options">
        <div
          className={`method-option ${selectedMethod === 'delivery' ? 'selected' : ''}`}
          onClick={() => setSelectedMethod('delivery')}
        >
          <Truck className="method-icon" />
          <h3 className="method-name">A domicilio</h3>
          <p className="method-description">
            Entrega en 2-3 días hábiles
          </p>
          <span className="method-price">COSTO DE ENVÍO</span>
        </div>

        <div
          className={`method-option ${selectedMethod === 'pickup' ? 'selected' : ''}`}
          onClick={() => setSelectedMethod('pickup')}
        >
          <Store className="method-icon" />
          <h3 className="method-name">En punto de entrega</h3>
          <p className="method-description">
            Recoge tu pedido en nuestros puntos autorizados
          </p>
          <span className="method-price">GRATIS</span>
        </div>
      </div>

      <button
        className="next-button"
        onClick={handleSubmit}
        disabled={!selectedMethod}
      >
        Continuar
      </button>
    </div>
  );
};
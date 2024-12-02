import React, { useState } from 'react';
import './PaymentMethod.css';

interface PaymentMethodProps {
  onNext: (data: { paymentMethod: PaymentFormData }) => void;
  onBack: () => void;
}

interface PaymentFormData {
  cardNumber: string;
  cardName: string;
  expiryMonth: string;
  expiryYear: string;
  cvv: string;
}

export const PaymentMethod: React.FC<PaymentMethodProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardName: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ paymentMethod: formData });
  };

  return (
    <form onSubmit={handleSubmit} className="payment-method">
      <h2 className="payment-title">Forma de Pago</h2>

      <div className="card-preview">
        <div className="card-header">
          <img src="https://www.visa.com/images/visa-logo.png" alt="Visa" className="card-logo" />
        </div>
        <div className="card-number">
          {formData.cardNumber || '**** **** **** ****'}
        </div>
        <div className="card-footer">
          <span>{formData.cardName || 'NOMBRE DEL TITULAR'}</span>
          <span>{formData.expiryMonth}/{formData.expiryYear || 'MM/YY'}</span>
        </div>
      </div>

      <div className="payment-options">
        <div className="payment-option active">
          <img src="https://www.visa.com/images/visa-logo.png" alt="Visa" className="h-4" />
        </div>
        <div className="payment-option">
          <img src="https://www.mastercard.com/images/mastercard-logo.png" alt="Mastercard" className="h-4" />
        </div>
      </div>

      <div className="payment-form">
        <div className="form-group">
          <label htmlFor="cardNumber" className="form-label">Número de tarjeta</label>
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            value={formData.cardNumber}
            onChange={(e) => {
              const formatted = formatCardNumber(e.target.value);
              if (formatted.length <= 19) {
                setFormData(prev => ({ ...prev, cardNumber: formatted }));
              }
            }}
            className="form-input"
            placeholder="1234 5678 9012 3456"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="cardName" className="form-label">Nombre del titular</label>
          <input
            type="text"
            id="cardName"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className="form-input"
            placeholder="Como aparece en la tarjeta"
            required
          />
        </div>

        <div className="expiry-cvv">
          <div className="form-group">
            <label className="form-label">Fecha de vencimiento</label>
            <div className="grid grid-cols-2 gap-2">
              <select
                name="expiryMonth"
                value={formData.expiryMonth}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">MM</option>
                {Array.from({ length: 12 }, (_, i) => {
                  const month = (i + 1).toString().padStart(2, '0');
                  return (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  );
                })}
              </select>
              <select
                name="expiryYear"
                value={formData.expiryYear}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">YY</option>
                {Array.from({ length: 10 }, (_, i) => {
                  const year = (new Date().getFullYear() + i).toString().slice(-2);
                  return (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="cvv" className="form-label">CVV</label>
            <input
              type="text"
              id="cvv"
              name="cvv"
              value={formData.cvv}
              onChange={(e) => {
                if (e.target.value.length <= 4) {
                  setFormData(prev => ({ ...prev, cvv: e.target.value }));
                }
              }}
              className="form-input"
              placeholder="123"
              required
            />
          </div>
        </div>
      </div>

      <div className="buttons-group">
        <button type="button" onClick={onBack} className="back-button">
          Volver
        </button>
        <button type="submit" className="next-button">
          Confirmar pago
        </button>
      </div>
    </form>
  );
};
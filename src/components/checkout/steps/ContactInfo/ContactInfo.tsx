import React, { useState } from 'react';
import './ContactInfo.css';

interface ContactInfoProps {
  onNext: (data: { contactInfo: ContactFormData }) => void;
  onBack: () => void;
}

interface ContactFormData {
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  phone: string;
  saveInfo: boolean;
}

export const ContactInfo: React.FC<ContactInfoProps> = ({ onNext, onBack }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    documentType: 'CC',
    documentNumber: '',
    phone: '',
    saveInfo: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext({ contactInfo: formData });
  };

  return (
    <form onSubmit={handleSubmit} className="contact-info">
      <h2 className="contact-title">Información de contacto</h2>
      
      <div className="form-grid">
        <div className="form-group">
          <label htmlFor="firstName" className="form-label">Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="lastName" className="form-label">Apellidos</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="form-input"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="documentType" className="form-label"># de documento</label>
          <select
            id="documentType"
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            className="form-select"
          >
            <option value="CC">Cédula de Ciudadanía</option>
            <option value="CE">Cédula de Extranjería</option>
            <option value="PP">Pasaporte</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="documentNumber" className="form-label">Número de documento</label>
          <input
            type="text"
            id="documentNumber"
            name="documentNumber"
            value={formData.documentNumber}
            onChange={handleChange}
            className="form-input"
            placeholder="Ingrese su número de documento"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input"
            placeholder="+57 000 000 0000"
            required
          />
        </div>
      </div>

      <div className="form-checkbox-group">
        <input
          type="checkbox"
          id="saveInfo"
          name="saveInfo"
          checked={formData.saveInfo}
          onChange={handleChange}
          className="form-checkbox"
        />
        <label htmlFor="saveInfo" className="form-checkbox-label">
          Guardar mi información de contacto
        </label>
      </div>

      <div className="buttons-group">
        <button type="button" onClick={onBack} className="back-button">
          Volver
        </button>
        <button type="submit" className="next-button">
          Ir a la forma de pago
        </button>
      </div>
    </form>
  );
};
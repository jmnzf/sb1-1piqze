import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import './Contact.css';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Mercado a la Mano</title>
        <meta name="description" content="Contáctanos para cualquier consulta o soporte" />
      </Helmet>

      <div className="contact-page">
        <div className="contact-container">
          <header className="contact-header">
            <h1 className="contact-title">Contáctanos</h1>
            <p className="contact-subtitle">
              Estamos aquí para ayudarte. Envíanos tus preguntas o comentarios.
            </p>
          </header>

          <div className="contact-content">
            <div className="contact-info">
              <h2 className="info-title">Información de Contacto</h2>
              
              <div className="info-item">
                <MapPin className="info-icon" />
                <div className="info-text">
                  <p className="font-medium">Dirección</p>
                  <p>Calle 34 #43-31, Barranquilla, Colombia</p>
                </div>
              </div>

              <div className="info-item">
                <Phone className="info-icon" />
                <div className="info-text">
                  <p className="font-medium">Teléfono</p>
                  <p>+57 (605) 3399999</p>
                </div>
              </div>

              <div className="info-item">
                <Mail className="info-icon" />
                <div className="info-text">
                  <p className="font-medium">Email</p>
                  <p>contacto@mercadoalamano.gov.co</p>
                </div>
              </div>

              <div className="info-item">
                <Clock className="info-icon" />
                <div className="info-text">
                  <p className="font-medium">Horario de Atención</p>
                  <p>Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                  <p>Sábados: 8:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name" className="form-label">Nombre completo</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                  required
                />
              </div>

              <button type="submit" className="submit-button">
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
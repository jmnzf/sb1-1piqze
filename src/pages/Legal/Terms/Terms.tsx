import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Terms.css';

export const Terms: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Términos y Condiciones - Mercado a la Mano</title>
        <meta name="description" content="Términos y condiciones de uso de Mercado a la Mano" />
      </Helmet>

      <div className="terms-page">
        <div className="terms-container">
          <header className="terms-header">
            <h1 className="terms-title">Términos y Condiciones</h1>
            <p className="terms-subtitle">Última actualización: {new Date().toLocaleDateString()}</p>
          </header>

          <div className="terms-content">
            <section className="terms-section">
              <h2 className="section-title">1. Aceptación de los Términos</h2>
              <div className="section-content">
                <p>
                  Al acceder y utilizar Mercado a la Mano, usted acepta estar sujeto a estos términos y condiciones.
                  Si no está de acuerdo con alguna parte de estos términos, no podrá acceder al servicio.
                </p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title">2. Uso del Servicio</h2>
              <div className="section-content">
                <p>
                  Mercado a la Mano es una plataforma que conecta compradores y vendedores locales.
                  Al utilizar nuestros servicios, usted se compromete a:
                </p>
                <ul className="section-list">
                  <li>Proporcionar información precisa y actualizada</li>
                  <li>Mantener la seguridad de su cuenta</li>
                  <li>No usar el servicio para fines ilegales</li>
                  <li>Respetar los derechos de otros usuarios</li>
                </ul>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title">3. Cuenta de Usuario</h2>
              <div className="section-content">
                <p>
                  Para acceder a ciertas funciones del servicio, deberá crear una cuenta.
                  Usted es responsable de:
                </p>
                <ul className="section-list">
                  <li>Mantener la confidencialidad de su contraseña</li>
                  <li>Todas las actividades realizadas bajo su cuenta</li>
                  <li>Notificar inmediatamente cualquier uso no autorizado</li>
                </ul>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title">4. Productos y Transacciones</h2>
              <div className="section-content">
                <p>
                  Los vendedores son responsables de:
                </p>
                <ul className="section-list">
                  <li>La precisión de las descripciones de productos</li>
                  <li>El cumplimiento de las leyes aplicables</li>
                  <li>La calidad de los productos ofrecidos</li>
                  <li>La entrega oportuna de los productos</li>
                </ul>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title">5. Privacidad</h2>
              <div className="section-content">
                <p>
                  Su privacidad es importante para nosotros. Consulte nuestra Política de Privacidad
                  para entender cómo recopilamos, usamos y protegemos sus datos personales.
                </p>
              </div>
            </section>

            <section className="terms-section">
              <h2 className="section-title">6. Modificaciones</h2>
              <div className="section-content">
                <p>
                  Nos reservamos el derecho de modificar estos términos en cualquier momento.
                  Los cambios entrarán en vigor inmediatamente después de su publicación.
                  El uso continuado del servicio constituye la aceptación de los nuevos términos.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};
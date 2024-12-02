import React from 'react';
import { Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <img 
              src="https://lh6.googleusercontent.com/proxy/ErUuQxRxvEwOYKtbA-tFgO4b30shvsa59fhPz-4VEGURAxtdS6vburGedlPuOpFVaOFWBS3cav6PNmSKQpBA38vVZrQhJgysrxAkXeoh5Gu4vwlWNMXihwfRgkenKpcn9yLDF4PsMxgr3Q" 
              alt="Alcaldía de Barranquilla" 
              className="footer-logo"
            />
            <div className="newsletter">
              <h3 className="newsletter-title">¡Subscríbete! a nuestro boletín informativo</h3>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="newsletter-input"
                />
                <button type="submit" className="newsletter-button">
                  →
                </button>
              </form>
            </div>
          </div>

          <div className="footer-links">
            <h4 className="footer-section-title">Inicio</h4>
            <nav>
              <Link to="/acerca" className="footer-link">Acerca de nosotros</Link>
            </nav>
          </div>

          <div className="footer-links">
            <h4 className="footer-section-title">Catálogo</h4>
            <nav>
              <Link to="/categorias" className="footer-link">Categorías</Link>
              <Link to="/vendedores" className="footer-link">Vendedores</Link>
            </nav>
          </div>

          <div className="footer-links">
            <h4 className="footer-section-title">Ayuda</h4>
            <nav>
              <Link to="/faqs" className="footer-link">FAQs</Link>
              <Link to="/contacto" className="footer-link">Contacto</Link>
              <Link to="/terminos" className="footer-link">Términos y condiciones</Link>
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-legal">
            <Link to="/terminos" className="legal-link">Términos y condiciones</Link>
            <Link to="/privacidad" className="legal-link">Política de privacidad</Link>
          </div>
          
          <div className="footer-social">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
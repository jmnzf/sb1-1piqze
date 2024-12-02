import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, Eye, EyeOff, User, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Register.css';

export const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSocialRegister = (provider: string) => {
    console.log(`Register with ${provider}`);
  };

  return (
    <>
      <Helmet>
        <title>Registro - Mercado a la Mano</title>
        <meta name="description" content="Crea tu cuenta en Mercado a la Mano" />
      </Helmet>

      <div className="register-container">
        <div className="register-content">
          <div className="register-header">
            <img 
              src="https://lh6.googleusercontent.com/proxy/ErUuQxRxvEwOYKtbA-tFgO4b30shvsa59fhPz-4VEGURAxtdS6vburGedlPuOpFVaOFWBS3cav6PNmSKQpBA38vVZrQhJgysrxAkXeoh5Gu4vwlWNMXihwfRgkenKpcn9yLDF4PsMxgr3Q" 
              alt="Mercado a la Mano" 
              className="register-logo"
            />
            <h1 className="register-title">Crear cuenta</h1>
            <p className="register-subtitle">Únete a nuestra comunidad</p>
          </div>

          <div className="social-buttons">
            <button 
              className="social-button google-button"
              onClick={() => handleSocialRegister('Google')}
            >
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="w-5 h-5"
              />
              Registrarse con Google
            </button>
            
            <button 
              className="social-button facebook-button"
              onClick={() => handleSocialRegister('Facebook')}
            >
              <img 
                src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico" 
                alt="Facebook" 
                className="w-5 h-5"
              />
              Registrarse con Facebook
            </button>
          </div>

          <div className="divider">
            <div className="divider-line" />
            <p className="divider-text">O regístrate con tu correo</p>
          </div>

          <form onSubmit={handleSubmit} className="register-form">
            <div className="form-group">
              <label htmlFor="name">Nombre completo</label>
              <div className="input-group">
                <User className="input-icon" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Juan Pérez"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Correo electrónico</label>
              <div className="input-group">
                <Mail className="input-icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="phone">Teléfono</label>
              <div className="input-group">
                <Phone className="input-icon" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+57 300 123 4567"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="password">Contraseña</label>
              <div className="input-group">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-group">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="rounded border-gray-300 text-[--color-text-green] focus:ring-[--color-text-green]"
                  required
                />
                <span className="terms">
                  Acepto los <a href="/terminos">términos y condiciones</a> y la{' '}
                  <a href="/privacidad">política de privacidad</a>
                </span>
              </label>
            </div>

            <button type="submit" className="register-button">
              Crear cuenta
            </button>

            <div className="login-prompt">
              ¿Ya tienes una cuenta?{' '}
              <Link to="/login" className="login-link">
                Inicia sesión
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
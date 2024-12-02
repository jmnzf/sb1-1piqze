import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './Login.css';

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login, error, isLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
      navigate('/mi-negocio');
    } catch (error) {
      // Error is handled by context
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  return (
    <>
      <Helmet>
        <title>Iniciar Sesión - Mercado a la Mano</title>
        <meta name="description" content="Inicia sesión en tu cuenta de Mercado a la Mano" />
      </Helmet>

      <div className="login-container">
        <div className="login-content">
          <div className="login-header">
            <img 
              src="https://lh6.googleusercontent.com/proxy/ErUuQxRxvEwOYKtbA-tFgO4b30shvsa59fhPz-4VEGURAxtdS6vburGedlPuOpFVaOFWBS3cav6PNmSKQpBA38vVZrQhJgysrxAkXeoh5Gu4vwlWNMXihwfRgkenKpcn9yLDF4PsMxgr3Q" 
              alt="Mercado a la Mano" 
              className="login-logo"
            />
            <h1 className="login-title">¡Bienvenido de nuevo!</h1>
            <p className="login-subtitle">Inicia sesión para continuar</p>
          </div>

          <div className="social-buttons">
            <button 
              className="social-button google-button"
              onClick={() => handleSocialLogin('Google')}
            >
              <img 
                src="https://www.google.com/favicon.ico" 
                alt="Google" 
                className="w-5 h-5"
              />
              Continuar con Google
            </button>
            
            <button 
              className="social-button facebook-button"
              onClick={() => handleSocialLogin('Facebook')}
            >
              <img 
                src="https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico" 
                alt="Facebook" 
                className="w-5 h-5"
              />
              Continuar con Facebook
            </button>
          </div>

          <div className="divider">
            <div className="divider-line" />
            <p className="divider-text">O inicia sesión con tu correo</p>
          </div>

          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
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

            <div className="form-options">
              <label className="remember-me">
                <input
                  type="checkbox"
                  name="remember"
                  checked={formData.remember}
                  onChange={handleChange}
                />
                <span>Recordarme</span>
              </label>
              <a href="/recuperar-contrasena" className="forgot-password">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={isLoading}
            >
              {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión'}
            </button>

            <div className="register-prompt">
              ¿No tienes una cuenta?{' '}
              <a href="/registro" className="register-link">
                Regístrate aquí
              </a>
            </div>

            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              <p>Credenciales de prueba:</p>
              <p>Email: admin@mercadoalamano.com</p>
              <p>Contraseña: admin123</p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
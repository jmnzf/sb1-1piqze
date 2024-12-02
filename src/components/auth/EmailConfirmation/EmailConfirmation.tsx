import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './EmailConfirmation.css';

interface EmailConfirmationProps {
  onClose?: () => void;
}

export const EmailConfirmation: React.FC<EmailConfirmationProps> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleContinue = () => {
    if (onClose) {
      onClose();
    }
    navigate('/login');
  };

  return (
    <div className="email-confirmation">
      <div className="confirmation-content">
        <CheckCircle className="confirmation-icon" />
        
        <h2 className="confirmation-title">
          ¡Cuenta verificada exitosamente!
        </h2>
        
        <p className="confirmation-message">
          Tu cuenta ha sido verificada correctamente. Ahora puedes acceder a todas las
          funcionalidades de Mercado a la Mano.
        </p>
        
        <button 
          className="confirmation-button"
          onClick={handleContinue}
        >
          Continuar al inicio de sesión
        </button>
      </div>
    </div>
  );
};
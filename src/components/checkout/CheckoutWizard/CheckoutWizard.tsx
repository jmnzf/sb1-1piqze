import React, { useState } from 'react';
import { DeliveryMethod } from '../steps/DeliveryMethod';
import { ContactInfo } from '../steps/ContactInfo';
import { PaymentMethod } from '../steps/PaymentMethod';
import { OrderConfirmation } from '../steps/OrderConfirmation';
import { OrderSummary } from '../OrderSummary';
import './CheckoutWizard.css';

const steps = [
  { id: 1, label: 'Método de entrega' },
  { id: 2, label: 'Información de Contacto' },
  { id: 3, label: 'Forma de Pago' },
  { id: 4, label: 'Confirmación' }
];

export const CheckoutWizard: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [checkoutData, setCheckoutData] = useState({
    deliveryMethod: '',
    contactInfo: {},
    paymentMethod: {},
  });

  const handleNext = (data: any) => {
    setCheckoutData(prev => ({ ...prev, ...data }));
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return <DeliveryMethod onNext={handleNext} />;
      case 2:
        return <ContactInfo onNext={handleNext} onBack={handleBack} />;
      case 3:
        return <PaymentMethod onNext={handleNext} onBack={handleBack} />;
      case 4:
        return <OrderConfirmation onBack={handleBack} />;
      default:
        return null;
    }
  };

  return (
    <div className="checkout-wizard">
      <div className="wizard-steps">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="step">
              <div
                className={`step-number ${
                  step.id === currentStep
                    ? 'active'
                    : step.id < currentStep
                    ? 'completed'
                    : 'pending'
                }`}
              >
                {step.id}
              </div>
              <span
                className={`step-label ${
                  step.id === currentStep
                    ? 'active'
                    : step.id < currentStep
                    ? 'completed'
                    : 'pending'
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`step-line ${
                  step.id < currentStep ? 'active' : 'pending'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="wizard-content">
        <div className="main-content">
          {getStepContent()}
        </div>
        <div className="summary-content">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};
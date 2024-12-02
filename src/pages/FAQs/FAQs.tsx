import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import './FAQs.css';

interface FAQ {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    category: 'General',
    question: '¿Qué es Mercado a la Mano?',
    answer: 'Mercado a la Mano es una plataforma digital que conecta a compradores locales con vendedores de productos frescos y artesanales en Barranquilla. Facilitamos el comercio local y apoyamos a los pequeños productores.'
  },
  {
    id: 2,
    category: 'General',
    question: '¿Cómo funciona la plataforma?',
    answer: 'Los vendedores pueden registrar sus productos y los compradores pueden explorar el catálogo, realizar pedidos y coordinar la entrega. Todo el proceso se realiza de manera segura y transparente a través de nuestra plataforma.'
  },
  {
    id: 3,
    category: 'Compradores',
    question: '¿Cómo puedo realizar un pedido?',
    answer: 'Para realizar un pedido, simplemente explora nuestro catálogo, selecciona los productos que deseas, agrégalos al carrito y procede al pago. Puedes elegir entre diferentes métodos de pago y opciones de entrega.'
  },
  {
    id: 4,
    category: 'Compradores',
    question: '¿Cuáles son los métodos de pago aceptados?',
    answer: 'Aceptamos diversos métodos de pago, incluyendo tarjetas de crédito/débito, transferencias bancarias y pagos en efectivo contra entrega en algunos casos.'
  },
  {
    id: 5,
    category: 'Vendedores',
    question: '¿Cómo puedo vender mis productos?',
    answer: 'Para comenzar a vender, debes registrarte como vendedor, verificar tu cuenta y crear tu catálogo de productos. Nuestro equipo te guiará durante todo el proceso.'
  },
  {
    id: 6,
    category: 'Vendedores',
    question: '¿Cuáles son las comisiones por venta?',
    answer: 'Las comisiones varían según el tipo de producto y el volumen de ventas. Contáctanos para obtener información detallada sobre nuestra estructura de comisiones.'
  },
  {
    id: 7,
    category: 'Envíos',
    question: '¿Cuál es el tiempo de entrega?',
    answer: 'Los tiempos de entrega varían según la ubicación y el tipo de producto. Generalmente, realizamos entregas dentro de las 24-48 horas siguientes al pedido.'
  },
  {
    id: 8,
    category: 'Envíos',
    question: '¿Cuál es el costo de envío?',
    answer: 'El costo de envío se calcula según la distancia y el peso del pedido. Muchos vendedores ofrecen envío gratuito a partir de cierto monto de compra.'
  }
];

export const FAQs: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleFAQ = (id: number) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const groupedFAQs = filteredFAQs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {} as Record<string, FAQ[]>);

  return (
    <>
      <Helmet>
        <title>Preguntas Frecuentes - Mercado a la Mano</title>
        <meta name="description" content="Encuentra respuestas a las preguntas más frecuentes sobre Mercado a la Mano" />
      </Helmet>

      <div className="faqs-page">
        <div className="faqs-container">
          <header className="faqs-header">
            <h1 className="faqs-title">Preguntas Frecuentes</h1>
            <p className="faqs-subtitle">
              Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma
            </p>
          </header>

          <div className="search-container">
            <input
              type="text"
              placeholder="Buscar preguntas frecuentes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="faqs-content">
            {Object.entries(groupedFAQs).map(([category, categoryFAQs]) => (
              <div key={category} className="faq-category">
                <h2 className="category-title">{category}</h2>
                {categoryFAQs.map(faq => (
                  <div key={faq.id} className="faq-item">
                    <button
                      className="faq-question"
                      onClick={() => toggleFAQ(faq.id)}
                    >
                      <span className="question-text">{faq.question}</span>
                      <ChevronDown className={`question-icon ${openFAQ === faq.id ? 'open' : ''}`} />
                    </button>
                    {openFAQ === faq.id && (
                      <div className="faq-answer">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
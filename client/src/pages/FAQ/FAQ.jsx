import React from 'react';
import { AccordionItem } from '@/components';
import { FAQContainer, FAQTitle } from './style.js'; 

const FAQ = () => {
    const faqData = [
      {
        id: 1,
        question: '¿Qué es FundWeb?',
        answer: 'Es una billetera digital donde podrás cargar tu dinero y realizar transferencias.',
      },
      {
        id: 2,
        question: '¿Cómo me creo una cuenta?',
        answer: 'Debes hacer clic en Registrar, ingresar tus datos, y validar tu email.',
      },
      {
        id: 3,
        question: '¿Me cobran algo?',
        answer: 'No, FundWeb es 100% gratis y no cobramos ninguna comisión por las transacciones.',
      },
      // Add more FAQ items here
    ];
  
    return (
      <FAQContainer>
      <FAQTitle>Preguntas Frecuentes</FAQTitle>
      {faqData.map((item) => (
        <AccordionItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </FAQContainer>
  );
};

export default FAQ;
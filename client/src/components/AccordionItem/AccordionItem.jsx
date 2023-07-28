import React, { useState } from "react";
import { AccordionItemContainer, AccordionButton, AccordionContent } from "./style";

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionItemContainer>
      <AccordionButton onClick={toggleAccordion}>{question}</AccordionButton>
      {isOpen && <AccordionContent>{answer}</AccordionContent>}
    </AccordionItemContainer>
  );
};

export default AccordionItem;
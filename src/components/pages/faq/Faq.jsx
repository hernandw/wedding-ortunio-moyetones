import  { useState } from "react";
import AccordionItem from "./AcordionItem";
/* import "../../../scss/main.scss";

import "../../../scss/main.scss";
 */

const Faq = ({ questionsAnswers }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        key={item.question}
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className="faq">
      <h1 className="pb-4 text-center">Preguntas Frecuentes</h1>
      <dl className="faq__list">{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Faq;

import  { useState } from "react";
import AccordionItem from "./AcordionItem";
import { useTranslation } from "react-i18next";
/* import "../../../scss/main.scss";

import "../../../scss/main.scss";
 */

const Faq = ({ questionsAnswers }) => {
  const { t } = useTranslation()
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
      <h1 className="pt-8 text-3xl font-bold text-center">{t("faq.title")}</h1>
      <dl className="p-4 sm:p-20">{renderedQuestionsAnswers}</dl>
    </div>
  );
};

export default Faq;

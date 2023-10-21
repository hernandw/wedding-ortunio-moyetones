import { useTranslation } from "react-i18next";

const Faq = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="pt-20 text-4xl font-bold text-center">{t("faq.title")}</h1>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question1")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer1")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question2")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer2")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question3")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer3")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question4")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer4")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question5")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer5")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question6")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer6")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question7")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer7")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question8")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer8")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question9")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer9")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question10")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer10")}</p>
      </div>
      <div>
        <p className="pt-16 text-2xl font-medium text-center">
          {t("faq.question11")}
        </p>
        <p className="pt-6 text-center text2xl">{t("faq.answer11")}</p>
      </div>
    </div>
  );
};

export default Faq;

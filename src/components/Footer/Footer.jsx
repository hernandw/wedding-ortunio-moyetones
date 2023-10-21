import { useTranslation } from "react-i18next";


const Footer = () => {

    const { t } = useTranslation();
  return (
    <div className="w-full p-2 mt-10 text-center text-white bg-black lg:absolute lg:bottom-0">
      <p>{t("app.copyright")}</p>
      <p>
        Williams Hernandez -{" "}
        <span>
          <a
            href="https://www.williamshernandez.com/#contact"
            target="_blank"
            rel="noreferrer"
          >
            www.williamshernandez.com
          </a>
        </span>
      </p>
    </div>
  );
}

export default Footer

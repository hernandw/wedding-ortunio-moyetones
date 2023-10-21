import { useTranslation } from 'react-i18next'
import './Groomsmen.css'

const Groomsmen = () => {

  const { t } = useTranslation()
  return (
    <div>
      <h1 className="pt-10 text-4xl text-center">{t("groomsmen.title")}</h1>

      <p className="pt-20 text-2xl text-center textos">
        {t("groomsmen.person1")}
      </p>
      <p className="pt-16 text-2xl text-center textos">
        {t("groomsmen.person2")}
      </p>
    </div>
  );
}

export default Groomsmen

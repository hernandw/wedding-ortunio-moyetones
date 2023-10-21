import photoevent from '/assets/images/manu2.jpg'
import './Event.css'
import { useTranslation } from 'react-i18next';

const Event = () => {
  const { t } = useTranslation()
  return (
    <div>
      <img className="photo" src={photoevent} alt="" />
      <h2 className="title__event">{t("event.title")}</h2>
      <p className="text-event">{t("event.description1")}</p>
      <p className="text-event">{t("event.description2")}</p>
      <p className="text-event">{t("event.description3")}</p>
      <p className="text-event">{t("event.description4")}</p>

      <p className="date-event">{t("event.date")}</p>

      <h3 className="py-6 title_ceremonia">{t("event.subtitle1")}</h3>
      <p className="text-2xl text-center">{t("event.hour1")}</p>
      <p className="text-2xl text-center">{t("event.address1")}</p>
      <p className="text-2xl text-center">{t("event.address2")}</p>
      <div className="flex justify-center gap-8 mt-5 15px">
        <button className="button">{t("event.button1")}</button>
        <button className="button">{t("event.button2")}</button>
      </div>

      <h3 className="py-6 title_ceremonia">{t("event.subtitle2")}</h3>
      <p className="text-2xl text-center">{t("event.hour2")}</p>
      <p className="text-2xl text-center">{t("event.address3")}</p>
      <p className="text-2xl text-center">{t("event.address4")}</p>
      <div className="flex justify-center gap-8 mt-5 15px">
        <button className="button">{t("event.button1")}</button>
        <button className="button">{t("event.button2")}</button>
      </div>
    </div>
  );
}

export default Event

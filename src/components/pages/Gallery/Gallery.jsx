import { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";
import "./Gallery.css";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

export default function Gallery({ slides }) {
  const { t } = useTranslation();

  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div>
      <h1 className="pt-20 text-4xl font-bold text-center">
        {t("gallery.title")}
      </h1>
      <div className="relative overflow-hidden galeria">
        <div
          className={`flex transition ease-out duration-40`}
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((s) => {
            return <img key={s.id} src={s.image} alt={s.title} />;
          })}
        </div>

        <div className="absolute top-0 flex items-center justify-between w-full h-full px-10 text-3xl text-white">
          <button onClick={previousSlide}>
            <BsFillArrowLeftCircleFill />
          </button>
          <button onClick={nextSlide}>
            <BsFillArrowRightCircleFill />
          </button>
        </div>

        <div className="absolute bottom-0 flex justify-center w-full gap-3 py-4">
          {slides.map((s, i) => {
            return (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={"circle" + i}
                className={`rounded-full w-5 h-5 cursor-pointer  ${
                  i == current ? "bg-white" : "bg-gray-500"
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Gallery.propTypes = {
  slides: PropTypes.array.isRequired,
};

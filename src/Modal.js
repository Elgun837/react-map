import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

const Modal = ({ markerInfo, onClose }) => {
  const { t } = useTranslation();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="modal">
        <div className="main_container">
          <div className="left_container">
            <div className="f-height">
              <Slider {...settings}>
                <div>
                  <img src={`${markerInfo.image_1}`} />
                </div>

                <div>
                  <img src={`${markerInfo.image_2}`} />
                </div>

                <div>
                  <img src={`${markerInfo.image_3}`} />
                </div>
              </Slider>
            </div>
          </div>
          <div className={`${markerInfo.class} right_container`}>
            <p className="main_text">{`${markerInfo.info}`}</p>
            <div className="loc_section">
              <h3 className="location">{ t("locate")}</h3>
              <p>Lacin Qubadli zengilan / Azerbaycan</p>
            </div>
            <div className="time_section">
              <h3 className="year">Tikilen il</h3>
              <p>2022 - 2023</p>
            </div>
            <div className="company">
              <h3 className="com_name">Sifarisci Sirket</h3>
              <p>Azərbaycan Meliorasiya  və Su Təsərrüfatı ASC</p>
            </div>
          </div>
        </div>
        <button className="popup_close" onClick={onClose}>
          X
        </button>
      </div>
    </>
  );
};

export default Modal;

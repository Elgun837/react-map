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
              {markerInfo.images.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Project Image ${index + 1}`} />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
          <div className={`${markerInfo.class} right_container`}>
            <p className="main_text">{`${markerInfo.info}`}</p>
            <div className="loc_section">
              <h3 className="location">{ t("locate")}</h3>
              <p> <img src={process.env.PUBLIC_URL + "/icons/locate.svg"} alt="Your SVG Icon" />{`${markerInfo.locate}`}</p>
            </div>
            <div className="time_section">
              <h3 className="year">{ t("year")}</h3>
              <p><img src={process.env.PUBLIC_URL + "/icons/calendar.svg"} alt="Your SVG Icon" />{`${markerInfo.year}`}</p>
            </div>
            <div className="company">
              <h3 className="com_name">{ t("company")}</h3>
              <p><img src={process.env.PUBLIC_URL + "/icons/customer.svg"} alt="Your SVG Icon" />{`${markerInfo.customer}`}</p>
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

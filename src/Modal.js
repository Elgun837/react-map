import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Modal = ({ markerInfo, onClose }) => {
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
                <img  src={`${markerInfo.image_1}`} />
              </div>
             
              <div>
                <img src={`${markerInfo.image_2}`} />
              </div>
             
              <div>
                <img src={`${markerInfo.image_3}`} />
              </div>
             
              
              {/* Add more slides as needed */}
            </Slider>
            </div>
          </div>
          <div className="right_container">
            <h2>{`Marker ID: ${markerInfo.id}`}</h2>
            <p>{`Marker Info: ${markerInfo.info}`}</p>
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

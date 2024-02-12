import React from "react";

const Modal = ({ markerInfo, onClose }) => {
  return (
    <>
      <div className="modal">
        <div className="main_container">
          <div className="left_container">Slider</div>
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

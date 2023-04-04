import React from "react";

//everyone form without img
function PopupWithForm({ name, title, buttonText, children, isOpen, onSubmit, onClose, onCloseOverlay }) {
  return (
    <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ""}`}
    onClick={onCloseOverlay}
    >
      <div className="popup__container">
        <button className="popup__button-close" type="button" onClick={onClose} />
        <h2 className="popup__title">{title}</h2>
          {children}
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <button className="popup__button-submit popup__button-submit_delete-card" type="submit">
            {buttonText || "Сохранить"}
          </button>
        </form>
      </div>
    </div>
  )
}

export default PopupWithForm
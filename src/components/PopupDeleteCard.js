import React from "react";
import PopupWithForm from './PopupWithForm';

function PopupDeleteCard({ onLoading, onClose, isOpen, onCardDelete, card, onCloseOverlay }) {
    function handleSubmit(event) {
        event.preventDefault();
        onCardDelete(card);
      }

    return (
        <PopupWithForm 
          name='popupDeleteCard' 
          title='Вы уверены?' 
          buttonText={onLoading ? `Удаление` : `Да`}
          onSubmit={handleSubmit}
          onClose={onClose}
          isOpen={isOpen}
          onCloseOverlay={onCloseOverlay}
          />
    )
}

export default PopupDeleteCard;
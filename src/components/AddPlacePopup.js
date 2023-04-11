//popup added new cards
import React, {useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({onClose, onAddPlace, onLoading, isOpen, onCloseOverlay}) {
    const [placeName, setPlaceName] = useState('');
    const [placeLink, setPlaceLink] = useState('');

    useEffect(() => {
        setPlaceName('');
        setPlaceLink('');
    }, [isOpen]);

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace({
            name: placeName,
            link: placeLink,
        });
    }

    function handleChangePlaceName(e) {
        setPlaceName(e.target.value);
    }

    function handleChangePlaceLink(e) {
        setPlaceLink(e.target.value);
    }

    return (
        <PopupWithForm
          name='popupAddCard'
          title='Новое место'
          buttonText={onLoading ? `Сохранение` : `Создать`}
          onSubmit={handleSubmit}
          onClose={onClose}
          isOpen={isOpen}
          onCloseOverlay={onCloseOverlay} 
        >

          <input 
          type="text" 
          name="name" 
          placeholder="Название" 
          required 
          className="popup__input popup__input_img-name" 
          id="title" 
          minLength={2} 
          maxLength={30}
          value={placeName}
          onChange={handleChangePlaceName} />
          <span className="title-error popup__input-error" />

          <input 
          name="link" 
          type="url" 
          placeholder="Ссылка на картинку" 
          required className="popup__input popup__input_img-link" 
          id="link"
          value={placeLink}
          onChange={handleChangePlaceLink} />
          <span className="link-error popup__input-error" />

        </PopupWithForm>
    )
}

export default AddPlacePopup;
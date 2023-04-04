import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';
import profileEditAvatar from '../images/popup.svg';
import Card from './Card';

// обработчики
function Main({ cards, onEditProfile, onAddPlace, onEditAvatar, onCardClick, onCardLike, onPopupDeleteCard, onDeletedCard }) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
          <main>
            <section className="profile">
              <div className="profile__item">
                <div className="profile__wrapper-avatar">
                  <img src={currentUser.avatar} alt="изображение владельца профиля" className="profile__img" />
                  <button 
                    className="profile__edit-avatar-button"
                    onClick={() => {
                    onEditAvatar(true)
                    }}
                    />
                </div>
                <div className="profile__form">
                  <div className="profile__text">
                    <h1 className="profile__title">{currentUser.name}</h1>
                    <p className="profile__info">{currentUser.about}</p>
                  </div>
                  <button 
                    type="button" 
                    className="profile__button"
                    onClick={() => {
                      onEditProfile(true)
                    }}
                    >
                  <img src={profileEditAvatar} className="profile__button-img" alt="кнопка для открытия формы редактирования" />
                  </button>
                </div>
              </div>
              <button type="button" className="profile__button-plus"
                onClick={() => {
                  onAddPlace(true)
                }}
                />
            </section>

            <section className="gallery">
            {cards.map((card) => (
              <Card
              card={card}
              key={card._id}
              onCardDelete={onDeletedCard}
              onCardClick={onCardClick}
              onCardLike={onCardLike}
              onPopupDeleteCard={onPopupDeleteCard}
          />
        ))}
            </section>
          </main>
    </>
  )
}

export default Main
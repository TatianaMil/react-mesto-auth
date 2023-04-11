import React from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";
import profileEditAvatar from "../images/popup.svg";
import Card from "./Card";
import Loader from "./Loader";

// обработчики
function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);

  return (
    <>
      <main>
        {props.isLoading && <Loader />}

        <section
          className={`profile ${props.isLoading && "page__profile_hidden"}`}
        >
          <div className="profile__item">
            <div className="profile__wrapper-avatar">
              <img
                src={currentUser.avatar}
                alt="изображение владельца профиля"
                className="profile__img"
              />
              <button
                className="profile__edit-avatar-button"
                onClick={() => {
                  props.onEditAvatar(true);
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
                  props.onEditProfile(true);
                }}
              >
                <img
                  src={profileEditAvatar}
                  className="profile__button-img"
                  alt="кнопка для открытия формы редактирования"
                />
              </button>
            </div>
          </div>
          <button
            type="button"
            className="profile__button-plus"
            onClick={() => {
              props.onAddPlace(true);
            }}
          />
        </section>

        <section className="gallery">
          {props.cards.map((card) => (
            <Card
              card={card}
              key={card._id}
              onCardDelete={props.onDeletedCard}
              onCardClick={props.onCardClick}
              onCardLike={props.onCardLike}
              onPopupDeleteCard={props.onPopupDeleteCard}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default Main;

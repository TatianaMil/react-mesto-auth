import { useContext} from "react";
import CurrentUserContext from '../contexts/CurrentUserContext';


function Card({ card, onCardLike, onCardDelete, onCardClick, onPopupDeleteCard }) {
  const currentUser = useContext(CurrentUserContext)
  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
  const isLiked = card.likes.some((user) => user._id === currentUser._id)
  //chanched likes
  const likeButtonClassName = `gallery__like ${
    isLiked ? "gallery__like_active" : ""
  }`
  const isOwner = card.owner._id === currentUser._id

  function handleLikeClick() {
    onCardLike(card)
  }

  function handleDeleteClick() {
    onCardDelete(card)
    onPopupDeleteCard(true)
  }

  function handleCardClick() {
    onCardClick(card)
  }

  return (
    //add marking up cards
    <article className="gallery__item"> 
      <div className="gallery__img-block">
        <img
          className="gallery__img"
          src={card.link}
          alt={card.name}
          onClick={handleCardClick}
        />
        {isOwner && (
           <button
           className='gallery__del' 
           type="button" 
           onClick={handleDeleteClick}/>
        )}
       
      </div>
      <div className="gallery__text-block">
        <h2 className="gallery__title">{card.name}</h2>
        <div className="gallery__wrapper-like">
          <button 
          className={likeButtonClassName} 
          type="button"
          onClick={handleLikeClick}
          ></button>
          <p className="gallery__count-like">{card.likes.length}</p>
        </div>
      </div>
    </article>
  )
}

export default Card
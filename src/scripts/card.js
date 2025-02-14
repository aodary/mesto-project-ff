import { setLikeCard,removeCard,removeLikeCard } from "./api";
const cardTemplate = document.querySelector('#card-template').content;

const isLiked = (card, userId) => {
	return card.likes.some(like => like._id === userId);
};


export const createCard = (cardData, onDeleteCard, onLikeCard, openImgPopup, userId) => {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const likeCount = cardElement.querySelector('.card__like-counter');
    const cardImage = cardElement.querySelector('.card__image');

    cardTitle.textContent = cardData.name;
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardElement.dataset.id = cardData._id;

    if (userId === cardData.owner._id) {
        deleteButton.addEventListener('click', (evt) => onDeleteCard(evt, cardData._id));
    } else {
        deleteButton.remove();
    }

    likeCount.textContent = cardData.likes.length;

    if (isLiked(cardData, userId)) {
        likeButton.classList.add('card__like-button_is-active');
    }

    likeButton.addEventListener('click', () => onLikeCard(cardData, cardElement,likeButton, likeCount, userId,));

    cardImage.addEventListener('click', () => openImgPopup(cardData));

    return cardElement;
};

export const cleanCard = (evt, cardId) => {
    const cardElement = evt.target.closest('.card');
    
    if (cardElement) {
        removeCard(cardId)
            .then(() => {
                cardElement.remove();
            })
            .catch(err => console.log(err));
    } 
};


export const cardLikeStat = (cardData, cardElement, likeButton, likeCount, userId) => {
    const likeActive = likeButton.classList.contains('card__like-button_is-active') ? removeLikeCard : setLikeCard;

    likeActive(cardData._id)
    .then((res) => {
        likeButton.classList.toggle('card__like-button_is-active');
        
        if (likeCount) {
            likeCount.textContent = res.likes.length;
        } 
        cardData.likes = res.likes;
    })
    .catch(err => console.error("Ошибка запроса:", err));
};
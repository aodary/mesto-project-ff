import { cardTemplate} from "..";
export const createCard = (cardData, onDeleteCard, onLikeCard, onOpenImagePopup) =>{
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);

    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button');
    const cardImage = cardElement.querySelector('.card__image');

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardElement.querySelector('.card__title').textContent = cardData.name;


    deleteButton.addEventListener('click', () => onDeleteCard(cardElement));
    likeButton.addEventListener('click', () => onLikeCard(likeButton));
    cardImage.addEventListener('click', () => onOpenImagePopup(cardData));

    return cardElement;
}
  
export function likeCard(likeButton){
    likeButton.classList.toggle('card__like-button_is-active')

}
  
export function handleDeleteCard(element) {
    element.remove();
}

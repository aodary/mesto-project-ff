import { cardTemplate, openImagePopup } from "..";
export function createCard(data, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    const deleteButton = cardElement.querySelector('.card__delete-button');
    const likeButton = cardElement.querySelector('.card__like-button')
    const cardImage = cardElement.querySelector('.card__image');
    cardElement.querySelector('.card__image').src = data.link;
    cardElement.querySelector('.card__title').textContent = data.name;
    cardElement.querySelector('.card__image').alt = data.name;
    
    deleteButton.addEventListener('click', () => deleteCard(cardElement));
    likeButton.addEventListener('click',()=> likeCard(likeButton))
    cardImage.addEventListener('click',() => {openImagePopup(data)})
    return cardElement;
  }
  
function likeCard(likeButton){
    likeButton.classList.toggle('card__like-button_is-active')

}
  
export function handleDeleteCard(element) {
    element.remove();
}

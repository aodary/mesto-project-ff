import { openPopup } from "./popup";
import { place } from "..";
 const cardTemplate = document.querySelector('#card-template').content;
 const popupImg = document.querySelector('.popup_type_image')
 const popupCard = popupImg.querySelector('.popup__image')
 const popupDescription = popupImg.querySelector('.popup__caption')
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
    cardImage.addEventListener('click',() => {
        popupCard.src=data.link
        popupCard.alt=data.name
        popupDescription.textContent=data.name
        openPopup(popupImg)

    })
    return cardElement;
  }
  
function likeCard(likeButton){
    likeButton.classList.toggle('card__like-button_is-active')

}
  
export function handleDeleteCard(element) {
    element.remove();
}

export function addCard(name,link) {
    console.log('addCard called with:', name, link);
    const card = createCard({ name, link }, handleDeleteCard)
    place.prepend(card)
}
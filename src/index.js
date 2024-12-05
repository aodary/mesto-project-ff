import './styles/index.css';
import {initialCards} from './scripts/cards.js';
import { closePopup ,openPopup} from './scripts/popup.js';
import './scripts/form.js';
import { createCard,handleDeleteCard,likeCard} from './scripts/card.js';
import { cardForm,profileForm,profileDescription,profileTitle } from './scripts/form.js';
import { handleCardFormSubmit,handleProfileFormSubmit } from './scripts/form.js';
export const place = document.querySelector('.places__list');
export const popupEdit = document.querySelector('.popup_type_edit')
export const popupAdd = document.querySelector('.popup_type_new-card')
export const cardTemplate = document.querySelector('#card-template').content;
export const popupImg = document.querySelector('.popup_type_image')
export const popupCard = popupImg.querySelector('.popup__image')
export const popupImgDescription = popupImg.querySelector('.popup__caption')
export const nameInput = profileForm.querySelector('.popup__input_type_name');
export const jobInput = profileForm.querySelector('.popup__input_type_description');
export const cardNameInput = cardForm.querySelector('.popup__input_type_card-name')
export const linkInput = cardForm.querySelector('.popup__input_type_url')
 const addButton = document.querySelector('.profile__add-button')
 const editButton = document.querySelector('.profile__edit-button')
 const closeButtons = document.querySelectorAll('.popup__close');
document.querySelectorAll('.popup').forEach(popup => {
  popup.addEventListener('click', (event) => {
    if (event.target === popup) {
      closePopup(popup);
    }
  });
});
closeButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    const popup = event.target.closest('.popup');
    closePopup(popup);
  });
});
initialCards.forEach(cardData => {
  const cardElement = createCard(cardData, handleDeleteCard,likeCard, openImagePopup);
  place.append(cardElement);
});
addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', () => openProfilePopup()

);
function openImagePopup(cardData) {
  popupCard.src = cardData.link;
  popupCard.alt = cardData.name;
  popupImgDescription.textContent = cardData.name;
  openPopup(popupImg);
}
export function addCard(name, link) {
  const cardData = { name, link };
  const card = createCard(cardData, handleDeleteCard, likeCard, openImagePopup);
  place.prepend(card);
}

function openProfilePopup() {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;  
  openPopup(popupEdit); 
}
cardForm.addEventListener('submit',handleCardFormSubmit)
profileForm.addEventListener('submit', handleProfileFormSubmit); 
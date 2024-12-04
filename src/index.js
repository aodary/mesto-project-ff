import './styles/index.css';
import {initialCards} from './scripts/cards.js';
import { closePopup ,closeButtons,addButton,editButton,openPopup} from './scripts/popup.js';
import './scripts/form.js';
import { createCard,handleDeleteCard} from './scripts/card.js';
import { cardForm,profileForm } from './scripts/form.js';
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
initialCards.forEach(data => {
  const cardElement = createCard(data, handleDeleteCard);
  place.append(cardElement);
});
addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', () => {
  
  openPopup(popupEdit)
}
);

export function addCard(name,link) {
  const data = { name,link }
  const card = createCard({ name, link }, handleDeleteCard)
  place.prepend(card)
}

export function openImagePopup(data){
  popupCard.src=data.link
  popupCard.alt=data.name
  popupImgDescription.textContent=data.name
  openPopup(popupImg)

}

cardForm.addEventListener('submit',handleCardFormSubmit)
profileForm.addEventListener('submit', handleProfileFormSubmit); 
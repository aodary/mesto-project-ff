import './styles/index.css';
import {initialCards} from './scripts/cards.js';
import './scripts/popup.js';
import './scripts/form.js';
import { createCard,handleDeleteCard} from './scripts/card.js';
export const place = document.querySelector('.places__list');
initialCards.forEach(data => {
  const cardElement = createCard(data, handleDeleteCard);
  place.append(cardElement);
});

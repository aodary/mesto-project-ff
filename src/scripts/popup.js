
export const addButton = document.querySelector('.profile__add-button')
export const editButton = document.querySelector('.profile__edit-button')
export const closeButtons = document.querySelectorAll('.popup__close');
export function openPopup(popup) {
  popup.classList.add('popup_is-opened');
  document.addEventListener('keydown', handleEscClose);
}

export function closePopup(popup) {
  popup.classList.remove('popup_is-opened'); 
  document.removeEventListener('keydown', handleEscClose);
}
export function handleEscClose(evt) {
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_is-opened');
          closePopup(openedPopup);
  }
}
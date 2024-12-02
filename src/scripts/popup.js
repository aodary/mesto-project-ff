const addButton = document.querySelector('.profile__add-button')
const editButton = document.querySelector('.profile__edit-button')
const closeButtons = document.querySelectorAll('.popup__close');
export const popupAdd = document.querySelector('.popup_type_new-card')
const popupEdit = document.querySelector('.popup_type_edit')
export function openPopup(popup) {
  popup.classList.add('popup_is-animated')
  setTimeout(() => {
    popup.classList.add('popup_is-opened');  
    popup.classList.remove('popup_is-closed');
  }, 10);
}

export function closePopup(popup) {
  popup.classList.add('popup_is-animated')
  setTimeout(() => {
    popup.classList.remove('popup_is-opened'); 
    popup.classList.add('popup_is-closed');    
  }, 10); 
}
function handleEscClose(evt) {
  if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_is-opened');
      if (openedPopup) {
          closePopup(openedPopup);
      }
  }
}
document.addEventListener('keydown', handleEscClose);
addButton.addEventListener('click', () => openPopup(popupAdd));
editButton.addEventListener('click', () => openPopup(popupEdit));

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
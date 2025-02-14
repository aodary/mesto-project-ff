const togglePopup = (popup) => {
  if(popup.classList.contains('popup_is-opened')){
    popup.classList.remove('popup_is-opened')
  } else {
    popup.classList.add('popup_is-opened')
  }
}

export const animationPopup = (popups) => {
  for (const popup of popups) {
		popup.classList.add('popup_is-animated');
	}
}

export const openPopup = (popup, keyDown, click) =>{
  togglePopup(popup)
  document.addEventListener('keydown', keyDown)
  popup.addEventListener('click', click)
}

export const closePopup = (popup ,keyDown, click) =>{
  togglePopup(popup)
  document.removeEventListener('keydown', keyDown)
  popup.removeEventListener('click', click)
}

export const keyDown = (evt) => {
  if (evt.key === 'Escape') {
    const popupIsOpened = document.querySelector('.popup_is-opened');
    if (popupIsOpened) {
      closePopup(popupIsOpened, keyDown, click);  
    }
  }
}

export const click = (evt) => {
if (evt.currentTarget === evt.target) {
  closePopup(evt.target, keyDown, click); 
}
};
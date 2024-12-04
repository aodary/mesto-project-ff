import { addCard } from "..";
import { closePopup } from "./popup";
import { popupEdit,popupAdd,nameInput,jobInput,cardNameInput,linkInput } from "..";
export const profileForm = document.forms.edit_profile
export const cardForm = document.forms.new_place
export const profileTitle = document.querySelector('.profile__title')
export const profileDescription = document.querySelector('.profile__description')

export function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 


    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    
    closePopup(popupEdit)
    profileForm.reset();
}

export function handleCardFormSubmit(evt) {
    evt.preventDefault();
 

    addCard(cardNameInput.value,linkInput.value)
    closePopup(popupAdd)
    cardForm.reset();
}

import { addCard } from "./card";
const profileForm = document.forms.edit_profile
const cardForm = document.forms.new_place
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); 

    const nameInput = profileForm.querySelector('.popup__input_type_name');
    const jobInput = profileForm.querySelector('.popup__input_type_description');

    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    const popup = profileForm.closest('.popup');
    if (popup) {
        popup.classList.remove('popup_is-opened');
    }

    profileForm.reset();
}

function handleCardFormSubmit(evt) {
    evt.preventDefault();
 
    const cardNameInput = cardForm.querySelector('.popup__input_type_card-name')
    const linkInput = cardForm.querySelector('.popup__input_type_url')

    addCard(cardNameInput.value,linkInput.value)

    const popup = cardForm.closest('.popup');
    if (popup) {
        popup.classList.remove('popup_is-opened');
    }
 
    cardForm.reset();
}
cardForm.addEventListener('submit',handleCardFormSubmit)
profileForm.addEventListener('submit', handleProfileFormSubmit); 
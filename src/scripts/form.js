import { addCard } from "./card";
import { popupAdd } from "./popup";
const profileForm = document.forms.edit_profile
const cardForm = document.forms.new_place
const profileTitle = document.querySelector('.profile__title')
const profileDescription = document.querySelector('.profile__description')

function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Предотвращаем перезагрузку страницы

    // Найти поля внутри формы
    const nameInput = profileForm.querySelector('.popup__input_type_name');
    const jobInput = profileForm.querySelector('.popup__input_type_description');

    // Обновить элементы профиля
    profileTitle.textContent = nameInput.value;
    profileDescription.textContent = jobInput.value;

    // Закрыть попап, если форма находится внутри него
    const popup = profileForm.closest('.popup');
    if (popup) {
        popup.classList.remove('popup_is-opened');
    }

    // Очистить поля формы
    profileForm.reset();
}

function handleCardFormSubmit(evt) {
    evt.preventDefault(); // Предотвращаем перезагрузку страницы

    // Найти поля внутри формы
    const cardNameInput = cardForm.querySelector('.popup__input_type_card-name')
    const linkInput = cardForm.querySelector('.popup__input_type_url')

    // Обновить элементы профиля
    addCard(cardNameInput.value,linkInput.value)

    // Закрыть попап, если форма находится внутри него
    const popup = cardForm.closest('.popup');
    if (popup) {
        popup.classList.remove('popup_is-opened');
    }

    // Очистить поля формы
    cardForm.reset();
}
cardForm.addEventListener('submit',handleCardFormSubmit)
profileForm.addEventListener('submit', handleProfileFormSubmit); 
import './styles/index.css';
import { createCard,cleanCard,cardLikeStat } from './scripts/card';
import { animationPopup,openPopup,closePopup,keyDown,click } from './scripts/popup';
import { validcfg} from './scripts/cfg';
import { enableValidity,clearFormErr } from './scripts/validation.js';
import { fetchUser,fetchCards,userProfile,addCard,profileAvatar } from './scripts/api.js';
import { saving } from './scripts/save.js';
const place = document.querySelector('.places__list');
const popupEdit = document.querySelector('.popup_type_edit')
const popupAdd = document.querySelector('.popup_type_new-card')
const popupImg = document.querySelector('.popup_type_image')
const popupEditProfileImg = document.querySelector('.popup_type_edit-profile-image')
const popupCard = popupImg.querySelector('.popup__image')
const profileForm = document.querySelector('form[name="edit_profile"]')
const profileTitle = document.querySelector('.profile__title')
const popupImgDescription = popupImg.querySelector('.popup__caption')
const profileDescription = document.querySelector('.profile__description')
const profileIgmForm = document.querySelector('form[name="edit-profile-image"]')
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_description');
const profileImg = document.querySelector('.profile__image')
const profileImgInput = document.querySelector('input[name="profile_img_link"]')
const cardNameInput = document.querySelector('input[name="place_name"]')
const addButton = document.querySelector('.profile__add-button')
const editButton = document.querySelector('.profile__edit-button')
const cardLinkInput = document.querySelector('input[name="link"]')
const cardForm = document.querySelector('form[name="new_place"]')
const closeButtons = document.querySelectorAll('.popup__close');
const popupArr = document.querySelectorAll('.popup')

let userId = ""

animationPopup(popupArr)

const openImgPopup =(cardData) =>{
    popupImgDescription.textContent = cardData.name
    popupCard.src = cardData.link
    popupCard.alt = cardData.name
    openPopup(popupImg,keyDown,click)
}

Promise.all([fetchUser(),fetchCards()])
  .then(([profileInfo, initialCards]) => {
    userId = profileInfo._id
    profileTitle.textContent = profileInfo.name
    profileDescription.textContent = profileInfo.about
    profileImg.style.backgroundImage = `url('${profileInfo.avatar}')`;
    initialCards.forEach(cardData =>{
      place.append(createCard(cardData,cleanCard,cardLikeStat,openImgPopup,userId))
    })
  })
  .catch(err => console.log(err));
editButton.addEventListener('click',()=>{
  refillProfileForm()
  clearFormErr(popupEdit,validcfg)
  openPopup(popupEdit,keyDown,click)
})

addButton.addEventListener('click', ()=>{
  clearFormErr(popupAdd,validcfg)
  openPopup(popupAdd,keyDown,click)
})

document.addEventListener('click',(evt)=>{
  if(evt.target.classList.contains('popup__close')){
    closePopup(evt.target.closest('.popup_is-opened'))
  }
})

const refillProfileForm = () => {
  nameInput.value = profileTitle.textContent
  jobInput.value = profileDescription.textContent
}

const handleFormSubmit = (form,api,success) => (evt) => {
evt.preventDefault()
const acceptbutton = form.querySelector('.popup__button')
saving(true,acceptbutton)
api()
  .then(success)
  .catch(err => console.log(err))
  .finally(() => saving(false,acceptbutton))

}

profileImg.addEventListener('click', ()=>{
  clearFormErr(popupEditProfileImg,validcfg)
  openPopup(popupEditProfileImg,keyDown,click)
})

profileForm.addEventListener('submit', handleFormSubmit(
  profileForm,
  () => userProfile(nameInput.value, jobInput.value),
  (profileInfo) => {
    profileTitle.textContent = profileInfo.name;
    profileDescription.textContent = profileInfo.about;
    closePopup(popupEdit, keyDown, click);
  }
));

profileIgmForm.addEventListener('submit', handleFormSubmit(
  profileIgmForm,
  () => profileAvatar(profileImgInput.value),
  (res) => {
    profileImg.style.backgroundImage = `url('${res.avatar}')`;
    closePopup(popupEditProfileImg);
    profileIgmForm.reset();
  }
));


cardForm.addEventListener('submit',handleFormSubmit(cardForm,()=>addCard(cardNameInput.value,cardLinkInput.value),
(cardData) =>{
  place.prepend(createCard(cardData,cleanCard,cardLikeStat,openImgPopup,userId))
  closePopup(popupAdd)
  cardForm.reset()

}
))

enableValidity(validcfg)


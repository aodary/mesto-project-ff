// @todo: Темплейт карточки
const places = document.querySelector('.places__list')
const cardTemplate = document.querySelector('#card-template').content;
initialCards.forEach(function (element) {
    const cardElement = cardTemplate.cloneNode(true);
    cardElement.querySelector('.card__image').src = element.link
    cardElement.querySelector('.card__title').textContent = element.name
  
    
    places.append(cardElement)
    
  });
document.querySelector('.page').onclick = function(e){
    if(e.target.className !== 'card__delete-button')return
    const item = e.target.closest('.card')
    item.remove()
}

// @todo: DOM узлы


//@todo: Функция создания карточки

// @todo: Функция удаления карточки

// @todo: Вывести карточки на страницу

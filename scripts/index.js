const places = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;

function createCard(data, deleteCard) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');

  cardElement.querySelector('.card__image').src = data.link;
  cardElement.querySelector('.card__title').textContent = data.name;
  cardElement.querySelector('.card__image').alt = data.name;

  deleteButton.addEventListener('click', () => deleteCard(cardElement));
  return cardElement;
}

function handleDeleteCard(element) {
  element.remove();
}

initialCards.forEach(data => {
  const cardElement = createCard(data, handleDeleteCard);
  places.append(cardElement);
});
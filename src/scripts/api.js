const apiEndpoint =  "https://nomoreparties.co/v1/wff-cohort-31";
const apiConfig= {
	headers: {
		authorization: 'c4fe7178-db8e-4fa3-8523-a6df09ca090f',
		'Content-Type': 'application/json'
	}
};

const handleResponse = (res) => res.ok ? res.json() : Promise.reject(res.statusText);

const request = (endpoint, options = {}) => {
	const url = `${apiEndpoint}${endpoint}`;
	const config = { ...options, headers: apiConfig.headers };
	return fetch(url, config).then(handleResponse);
};

export const fetchUser = () => request('/users/me', { method: "GET" });

export const fetchCards = () => request('/cards', { method: "GET" });

export const userProfile = (name, about) => {
	return request('/users/me', {
		method: 'PATCH',
		body: JSON.stringify({ name, about })
	});
};

export const addCard = (name, link) => {
	return request('/cards', {
		method: 'POST',
		body: JSON.stringify({ name, link })
	});
};

export const removeCard = (removedCardId) => {
	return request(`/cards/${removedCardId}`, { method: "DELETE" });
};

export const setLikeCard = (cardId) => {
	return request(`/cards/likes/${cardId}`, { method: "PUT" });
};

export const removeLikeCard = (cardId) => {
	return request(`/cards/likes/${cardId}`, { method: "DELETE" });
};

export const profileAvatar = (avatarUrl) => {
	return request('/users/me/avatar', {
		method: 'PATCH',
		body: JSON.stringify({ avatar: avatarUrl })
	});
};
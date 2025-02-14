export const saving = (IsLoading, acceptButton) => {
	acceptButton.textContent = IsLoading ? 'Сохранение...' : 'Сохранить';
};
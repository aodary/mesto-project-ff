const hasInvalidInput = (inputElmArray) => {
    const inputArray = Array.isArray(inputElmArray) ? inputElmArray : Array.from(inputElmArray);
    
    return inputArray.some((inputElm) => {

        if (inputElm && inputElm.validity) {
            return !inputElm.validity.valid;
        }
        return true; 
    });
};

const showInputValidationErrors = (input, form, stg) => {
    const errorMessage = form.querySelector(`.${input.id}-error`);
    input.classList.add(stg.inputErrorClass);
    errorMessage.textContent = input.validationMessage; 
};

const hideInputValidationErrors = (input, form, stg) => {
    const errorMessage = form.querySelector(`.${input.id}-error`);
    if (errorMessage) {
        input.classList.remove(stg.inputErrorClass);
        errorMessage.textContent = ''; 
    }
};

const toggleButtonState = (form, inputList, stg) => {
    const acceptButton = form.querySelector(stg.submitButtonSelector);
    const invalid = hasInvalidInput(inputList);
    if (invalid) {
        acceptButton.setAttribute('disabled', true); 
        acceptButton.classList.add(stg.inactiveButtonClass);
    } else {
        acceptButton.removeAttribute('disabled');
        acceptButton.classList.remove(stg.inactiveButtonClass);
    }
};

const checkInputValidity = (form, input, stg) => {
    if (input.validity.patternMismatch) {
        input.setCustomValidity(input.dataset.errorMessage);
    } else {
        input.setCustomValidity("");
    }
    if (!input.validity.valid) {
        showInputValidationErrors(input, form, stg);
    } else {
        hideInputValidationErrors(input, form, stg);
    }
};

const enableInputValidation = (form, stg) => {
    const inputRoll = Array.from(form.querySelectorAll(stg.inputSelector));
    toggleButtonState(form, inputRoll, stg);

    inputRoll.forEach(input => {
        input.addEventListener('input', () => {
            checkInputValidity(form, input, stg);
            toggleButtonState(form, inputRoll, stg);
        });
    });
};

export const enableValidation = (stg) => {
    const formRoll = Array.from(document.querySelectorAll(stg.formSelector));
    formRoll.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        enableInputValidation(form, stg);
    });
};

export const clearFormValidationErrors = (form, stg) => {
    const inputRoll = Array.from(form.querySelectorAll(stg.inputSelector)); 
    inputRoll.forEach(input => {
        hideInputValidationErrors(input, form, stg);
    });
    toggleButtonState(form, inputRoll, stg);
};

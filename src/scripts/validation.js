const InvalidInput = (inputElmArray) => {
    const inputArray = Array.isArray(inputElmArray) ? inputElmArray : Array.from(inputElmArray);
    
    return inputArray.some((inputElm) => {

        if (inputElm && inputElm.validity) {
            return !inputElm.validity.valid;
        }
        return true; 
    });
};

const showValidError = (input, form, stg) => {
    const errorMessage = form.querySelector(`.${input.id}-error`);
    input.classList.add(stg.inputErrorClass);
    errorMessage.textContent = input.validationMessage; 
};

const hideValidErrors = (input, form, stg) => {
    const errorMessage = form.querySelector(`.${input.id}-error`);
    if (errorMessage) {
        input.classList.remove(stg.inputErrorClass);
        errorMessage.textContent = ''; 
    }
};

const toggleButton = (form, inputList, stg) => {
    const acceptButton = form.querySelector(stg.submitButtonSelector);
    const Invalid = InvalidInput(inputList);
    if (Invalid) {
        acceptButton.setAttribute('disabled', true); 
        acceptButton.classList.add(stg.inactiveButtonClass);
    } else {
        acceptButton.removeAttribute('disabled');
        acceptButton.classList.remove(stg.inactiveButtonClass);
    }
};

const InputValidation = (form, input, stg) => {
    if (input.validity.patternMismatch) {
        input.setCustomValidity(input.dataset.errorMessage);
    } else {
        input.setCustomValidity("");
    }
    if (!input.validity.valid) {
        showValidError(input, form, stg);
    } else {
        hideValidErrors(input, form, stg);
    }
};

const enableInput = (form, stg) => {
    const inputRoll = Array.from(form.querySelectorAll(stg.inputSelector));
    toggleButton(form, inputRoll, stg);

    inputRoll.forEach(input => {
        input.addEventListener('input', () => {
            InputValidation(form, input, stg);
            toggleButton(form, inputRoll, stg);
        });
    });
};

export const enableValidity = (stg) => {
    const formRoll = Array.from(document.querySelectorAll(stg.formSelector));
    formRoll.forEach(form => {
        form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });
        enableInput(form, stg);
    });
};

export const clearFormErr = (form, stg) => {
    const inputRoll = Array.from(form.querySelectorAll(stg.inputSelector)); 
    inputRoll.forEach(input => {
        hideValidErrors(input, form, stg);
    });
    toggleButton(form, inputRoll, stg);
};

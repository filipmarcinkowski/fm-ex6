'use strict';

const btn = document.querySelector('.hero__form-btn');
const inputField = document.querySelector('.hero__form-input');
const iconError = document.querySelector('.hero__form-error__icon');
const msgError = document.querySelector('.hero__form-error__msg');

const errorMsg = function () {
  iconError.classList.remove('error');
  msgError.classList.remove('error');
};

const clearErrorMsg = function () {
  if (
    !iconError.classList.contains('error') &&
    !msgError.classList.contains('error')
  ) {
    iconError.classList.add('error');
    msgError.classList.add('error');
  }
};

const sendEmail = function () {
  inputField.classList.add('msg-sent');
  setTimeout(() => (inputField.value = ''), 1100);
  setTimeout(() => inputField.classList.remove('msg-sent'), 1200);
  // console.log(`input jest poprawny: ${inputField.value}`);
};

const checkAdress = function (e) {
  e.preventDefault();

  const input = inputField.value;

  const a = input.slice(0, input.indexOf('@')).length >= 1;
  const b = input.slice(input.indexOf('@'), input.indexOf('.')).length >= 3;
  const c = input.slice(input.indexOf('.'), input.length + 1).length >= 3;

  if (input !== '' && input.includes('@', '.') && a && b && c === true) {
    clearErrorMsg();
    sendEmail();
  } else {
    errorMsg();
  }
};

btn.addEventListener('click', checkAdress);

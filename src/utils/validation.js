import { isNaN } from 'lodash';

export function isNumberEmpty(value) {
  if (value !== '' && !isNaN(value - 0)) return false;
  return true;
}

export function isStringEmpty(value) {
  if (value) return '';
  return 'Champ vide';
}

export function validateEmail(email) {
  if (!email) return 'Email vide';
  // eslint-disable-next-line
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(`${email}`.toLowerCase())) {
    return '';
  }
  return 'Email invalide';
}

export function validatePassword(password) {
  if (!password) return 'mot de passe vide';
  if (password.length < 6) return 'Mot de passe doit dépasser 6 caractères';

  return '';
}

export function codeValidation(code) {
  return code.length === 6 ? '' : 'Le code doit être composé de 6 caractères';
}

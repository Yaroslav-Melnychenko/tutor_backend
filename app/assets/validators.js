const isEmpty = require('lodash/isEmpty');
const Validator = require('validator');

exports.validateInput = (data) => {
  let errors = {};

  if(!Validator.isEmail(data.mail)) {
    errors.mail = 'Email не корректний';
  }

  if(Validator.isEmpty(data.mail)) {
    errors.mail = 'Поле email потрібно заповнити';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Поле з паролем потрібно заповнити';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
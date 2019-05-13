const isEmpty = require('lodash/isEmpty');
const Validator = require('validator');

exports.validateInput = (data) => {
  let errors = {};

  if(Validator.isEmpty(data.mail)) {
    errors.mail = 'Email is required';
  }

  if(!Validator.isEmail(data.mail)) {
    errors.mail = 'Email is invalid';
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = 'Password is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}
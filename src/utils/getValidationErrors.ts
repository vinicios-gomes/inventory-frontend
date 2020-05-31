import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError) {
  const vlaidationErrors: Errors = {};
  err.inner.forEach(error => {
    vlaidationErrors[error.path] = error.message;
  });

  return vlaidationErrors;
}

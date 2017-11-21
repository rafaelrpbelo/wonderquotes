export default function validate(quote) {
  const errors = [];

  if (quote.length <= 0) {
    errors.push('Cannot be blank!');
  }

  return errors;
}

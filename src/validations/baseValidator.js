export default function validate(options={currentQuotes: 0, maxQuotes: 10}) {
  const errors = [];

  const { currentQuotes, maxQuotes } = options;

  if (currentQuotes >= maxQuotes) {
    errors.push('You should delete some quote before create a new one!')
  }

  return errors;
}

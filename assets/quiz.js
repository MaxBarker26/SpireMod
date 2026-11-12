document.querySelectorAll('[data-quiz]').forEach((quiz) => {
  const button = quiz.querySelector('button');
  const output = quiz.querySelector('[role="status"]');
  button.addEventListener('click', () => {
    const selected = quiz.querySelector('input:checked');
    if (!selected) {
      output.textContent = 'Choose an answer first.';
      return;
    }
    output.textContent = selected.value === quiz.dataset.answer
      ? `Correct. ${quiz.dataset.explanation}`
      : `Try again. ${quiz.dataset.hint}`;
  });
});

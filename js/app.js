// Show / Hide Other textbox
const otherCheckbox = document.querySelector('input[value="other"]');
const otherText = document.querySelector('input[id="other-value"]');
otherText.style.visibility = 'hidden';

otherCheckbox.addEventListener('change', () => {
  if (otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } else {
    otherText.style.visibility = 'hidden';
  }
});

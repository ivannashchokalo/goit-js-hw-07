const refs = {
  input: document.querySelector('#name-input'),
  nameLabel: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', event => {
  if (refs.input.value.trim() === '') {
    refs.nameLabel.textContent = 'Anonymous';
  } else {
    refs.nameLabel.textContent = refs.input.value.trim();
  }
});




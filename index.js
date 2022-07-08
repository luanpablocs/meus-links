const checkbox = document.getElementById('checkbox');

checkbox.addEventListener('change', () => {
  //trocar o tema do site
  document.body.classList.toggle('dark-green');
});
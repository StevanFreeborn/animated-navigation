document.addEventListener('DOMContentLoaded', function() {
  document
    .querySelector('#collapseButton')
    .addEventListener('click', function() {
      document.querySelector('aside').classList.toggle('collapsed');
    });
});
document.addEventListener('DOMContentLoaded', function() {
  document
    .querySelector('#endUserCollapseButton')
    .addEventListener('click', function() {
      document.querySelector('aside').classList.toggle('collapsed');
    });

  document
    .querySelector('#adminCollapseButton')
    .addEventListener('click', function() {
      const adminNavigation = document.querySelector('#adminNavigation');

      if (adminNavigation.classList.contains('collapsed')) {
        adminNavigation.classList.remove('collapsed');
        adminNavigation.classList.add('expanded');
        return;
      }
      
      adminNavigation.classList.remove('expanded');
      adminNavigation.classList.add('collapsed');
    });
});
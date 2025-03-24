// filepath: /Users/melinanevarez/bootcamp/12-portfolio/script.js
document.addEventListener('DOMContentLoaded', function() {
  const toggleButton = document.getElementById('theme-toggle');
  const toggleIcon = document.getElementById('toggle-icon');
  const lightIcon = window.location.pathname.includes('/pages/') ? '../assets/images/lightmode.png' : 'assets/images/lightmode.png';
  const darkIcon = window.location.pathname.includes('/pages/') ? '../assets/images/darkmode.png' : 'assets/images/darkmode.png';

  toggleButton.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      document.body.classList.toggle('light');

      if (document.body.classList.contains('dark')) {
          toggleIcon.src = lightIcon;
      } else {
          toggleIcon.src = darkIcon;
      }
  });
});




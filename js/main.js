window.onload = () => {

  const dropdownIcon = document.getElementById('dropdown-icon');
  const navBar = document.getElementById('navbar');

  // Event listener for dropdown icon
  dropdownIcon.addEventListener('click', e => {
    e.target.classList.toggle('icon-rotate');
    navBar.classList.toggle('dropdown-visible');
  });
  // If visible return initial height of sidebar if width is more than 800px 
  window.addEventListener('resize', () => {
    if (window.innerWidth > 800) {
      dropdownIcon.classList.remove('icon-rotate');
      navBar.classList.remove('dropdown-visible');
    }
  });
  // Click outside of sidebar to hide the sidebar
  window.addEventListener('click', e => {
    if (e.clientX > 250) {
      dropdownIcon.classList.remove('icon-rotate');
      navBar.classList.remove('dropdown-visible');
    }
  });

};
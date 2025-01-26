
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }
  document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
  
    function activateLink() {
      let index = sections.length;
  
      while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
      navLinks.forEach((link) => link.classList.remove('active'));
      navLinks[index].classList.add('active');
    }
  
    activateLink();
    window.addEventListener('scroll', activateLink);
  });
  document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
  
    menuToggle.addEventListener('click', function () {
      navLinks.classList.toggle('active');
    });
  });
  
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const menuLinks = document.getElementsByClassName('menu-links');


toggleButton.addEventListener('click', function() {
    for(var i= 0; i<menuLinks.length; i++)
    menuLinks[i].classList.toggle('active');
  });



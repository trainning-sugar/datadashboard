 const buttonMenu = document.getElementById('button-menu');
buttonMenu.addEventListener('click', e => {
  console.log(e.target);
  console.log(e.target.nextElementSibling);
  e.target.nextElementSibling.classList.toggle('show');
}) 


//url https://api.laboratoria.la/campuses


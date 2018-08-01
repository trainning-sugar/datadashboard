 const buttonMenu = document.getElementById('button-menu');
 buttonMenu.addEventListener('click', _ => {
   const navbarContent = document.getElementById('collapse-navbar-content');
   navbarContent.classList.toggle('show');
 })


 const renderOptionsCampus = (campuses) => {
   const selectCampus = document.getElementById('campuses')
   campuses.filter(campus => campus.active)
     .reverse()
     .forEach(campus => {
       console.log(campus);
       selectCampus.firstElementChild.insertAdjacentHTML('afterend', `<option value=${campus.id}>${campus.name}</option>`);
     });
 };



 Promise.all([getAjaxRequest('https://api.laboratoria.la/campuses'), getAjaxRequest('https://api.laboratoria.la/cohorts')])
   .then((data) => {
     const [campuses, cohort] = data;
     renderOptionsCampus(campuses);
   })
 //https://api.laboratoria.la/cohorts
 //https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/progress
 //https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/progress
 //https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/users
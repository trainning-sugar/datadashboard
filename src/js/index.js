 const buttonMenu = document.getElementById('button-menu');
 buttonMenu.addEventListener('click', _ => {
   const navbarContent = document.getElementById('collapse-navbar-content');
   navbarContent.classList.toggle('show');
 })


 const getAjaxRequest = url => {
   return new Promise((resolve, reject) => {
     const xhr = new XMLHttpRequest();
     xhr.open('GET', url);
     xhr.addEventListener('load', e => {
       if (e.target.readyState === 4 && e.target.status !== 200) return reject(new Error(`Error loading JSON from ${url} ${e.status}`))
       resolve(JSON.parse(e.target.responseText));
     })
     xhr.send();
   })
 }


 Promise.all([getAjaxRequest('https://api.laboratoria.la/campuses'), getAjaxRequest('https://api.laboratoria.la/cohorts')])
   .then((data) => {
     console.log(data);
   })
 //https://api.laboratoria.la/cohorts
 //https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/progress
 //https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/progress
 //https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/users
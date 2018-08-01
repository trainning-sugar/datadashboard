const path = {
  allCohorts: null,
  sede: null,
  year: null
}

const renderOptionsCampus = campuses => {
  const selectCampus = document.getElementById('campuses')
  campuses.filter(campus => campus.active)
    .reverse()
    .forEach(campus => {
      console.log(campus);
      selectCampus.firstElementChild.insertAdjacentHTML('afterend', `<option value=${campus.id}>${campus.name}</option>`);
    });
};

const findCohort = (sede, year) => {
  if (sede && year) {
    console.log(sede + year);
  }

}

Promise.all([getAjaxRequest('https://api.laboratoria.la/campuses'), getAjaxRequest('https://api.laboratoria.la/cohorts')])
  .then(data => {
    const [campuses, allCohorts] = data;
    path.allCohorts = allCohorts;
    renderOptionsCampus(campuses);
  });

document.addEventListener('DOMContentLoaded', _ => {
  const buttonMenu = document.getElementById('button-menu');
  const form = document.getElementById('navbar-content');

  buttonMenu.addEventListener('click', _ => {
    const navbarContent = document.getElementById('collapse-navbar-content');
    navbarContent.classList.toggle('show');
  });

  form.addEventListener('change', e => {
    console.log(e.target);
    switch (true) {
      case (e.target.id === 'campuses'):
        path.sede = e.target.value;
        break;
      case (e.target.id === "year"):
        path.year = e.target.value;
        break;
    }
    findCohort(path.sede, path.year)
  })


})


//https://api.laboratoria.la/cohorts
//https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/progress
//https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/progress
//https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/users
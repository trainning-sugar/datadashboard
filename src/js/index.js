const path = {
  allCohorts: null,
  sede: null,
  year: null
}

const renderCampus = (campuses, id) => {
  const selectCampus = document.getElementById(id)
  campuses.filter(campus => campus.active)
    .reverse()
    .forEach(campus => selectCampus.firstElementChild.insertAdjacentHTML('afterend', `<option value=${campus.id}>${campus.name}</option>`));
};

const renderCohorts = (cohorts, id) => {
  if (!cohorts.length) {
    alert('La sede y generación seleccionado no tienen cohorts asignados');
  }
  const selectCohort = document.getElementById(id);
  selectCohort.innerHTML = '';
  const optionSelected = document.createElement('option');
  const optionTextNode = document.createTextNode('Cohorts');
  optionSelected.appendChild(optionTextNode);
  optionSelected.setAttribute('selected', 'selected');
  selectCohort.appendChild(optionSelected);
  cohorts.forEach(cohort => selectCohort.firstElementChild.insertAdjacentHTML('afterend', `<option value=${cohort.id}>${cohort.id}</option>`));
}

const searchCohorts = (sede, year) => {
  if (sede && year) {
    const cohorts = path.allCohorts.reduce((prev, cur) => {
      if (`${cur.id.split("-")[0]}${cur.id.split("-")[1]}` === (`${sede}${year}`)) {
        prev.push(cur);
      }
      return prev;
    }, []);
    renderCohorts(cohorts, 'cohorts');
  }
}

Promise.all([getAjaxRequest('https://api.laboratoria.la/campuses'), getAjaxRequest('https://api.laboratoria.la/cohorts')])
  .then(data => {
    const [campuses, allCohorts] = data;
    path.allCohorts = allCohorts;
    renderCampus(campuses, 'campuses');
  });

document.addEventListener('DOMContentLoaded', _ => {

  const buttonMenu = document.getElementById('button-menu');
  const form = document.getElementById('navbar-content');

  buttonMenu.addEventListener('click', _ => {
    const navbarContent = document.getElementById('collapse-navbar-content');
    navbarContent.classList.toggle('show');
  });

  form.addEventListener('change', e => {
    switch (true) {
      case (e.target.id === 'campuses'):
        path.sede = e.target.value;
        searchCohorts(path.sede, path.year);
        break;
      case (e.target.id === "year"):
        path.year = e.target.value;
        searchCohorts(path.sede, path.year);
        break;
    }
  })


})


//https://api.laboratoria.la/cohorts
//https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/progress
//https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/progress
//https://api.laboratoria.la/cohorts/lim-2017-09-bc-core-am/users
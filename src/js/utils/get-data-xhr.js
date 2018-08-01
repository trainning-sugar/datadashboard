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

/* var mediaQueryList = window.matchMedia("(min-width: 768px)"); // Create the query list.
function handleOrientationChange(mediaQueryList) {
 const flexContainerNav = document.getElementById('navbar-content');
 e.matches ? flexContainerNav.classList.remove('flex-column') : null;
} // Define a callback function for the event listener.
mediaQueryList.addListener(handleOrientationChange); // Add the callback function as a listener to the query list.

handleOrientationChange(mediaQueryList); // Run the orientation change handler once. */


/* function myFunction(x) {
 const flexContainerNav = document.getElementById('navbar-content');
 console.log(x);
 if (x.matches) { // If media query matches
  flexContainerNav.classList.remove('flex-column')
 } else {
  flexContainerNav.classList.add('flex-column')
 }
}

var mediaQueryList = window.matchMedia("(min-width: 768px)")
myFunction(mediaQueryList) // Call listener function at run time
mediaQueryList.addListener(myFunction) // Attach listener function on state changes */
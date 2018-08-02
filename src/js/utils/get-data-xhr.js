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
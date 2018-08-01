const handlerMedia = e => {
 const flexContainerNav = document.getElementById('navbar-content');
 e.matches ? flexContainerNav.classList.remove('flex-column') : null;
}
handlerMedia(e);
window.matchMedia("(min-width: 768px)").addListener(handlerMedia);
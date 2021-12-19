
// if there are toasts visible
// https://picturepan2.github.io/spectre/components/toasts.html
// this will make it dissapear, if the user clicks on the X
const toasts = document.querySelectorAll('.toast button');

toasts.forEach(el => el.addEventListener('click', event => {
  event.target.closest('.toast').remove()
}));

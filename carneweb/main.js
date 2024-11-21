

window.addEventListener('scroll', () => {
  console.log('Scroll position:', window.scrollY);  // Verifica que se detecte el scroll
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('nav-scroll', window.scrollY > 0);
});

document.addEventListener('DOMContentLoaded', () => {
  // Selecciona todas las FAQ
  const faqs = document.querySelectorAll('.faq');

  // Añade el evento de click a cada FAQ
  faqs.forEach(faq => {
    faq.addEventListener('click', () => {
      faq.classList.toggle('open');  // Alterna la clase 'open' cuando se hace clic en el FAQ
      // Alternar el ícono de plus a minus
      // const icon = faq.querySelector('.faq_icon i');
      // if (icon.classList.contains('fa-plus')) {
        // icon.classList.remove('fa-plus');
        // icon.classList.add('fa-minus');
      // } else {
        // icon.classList.remove('fa-minus');
       //  icon.classList.add('fa-plus');
      // }
    });
  });
});




  













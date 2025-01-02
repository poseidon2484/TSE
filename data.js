const scriptURL = 'https://script.google.com/macros/s/AKfycbwW-LJNg_n_pPfyo5RiMOYDgQgjn8iiE-5CmVqqrWiFmxDLWsdIJZWnjqHsSORDpc3S/exec';

const form = document.forms['contact-form'];
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  if (navLinks.style.right === '0px') {
      navLinks.style.right = '-200px';
  } else {
      navLinks.style.right = '0px';
  }
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

const scrollToTopButton = document.getElementById('scrollToTop');

window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
};

scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

form.addEventListener('submit', e => {
  e.preventDefault();

  // Select the submit button
  const submitButton = form.querySelector('input[type="submit"]');
    if (submitButton) {
      submitButton.disabled = true;
    }

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })

    .then(() => { window.location.href = 'thankyou.html'; })

    .catch(error => {
      console.error('Error!', error.message);
      alert('There was an issue submitting the form. Please try again.');
    })
    .finally(() => {
      if (submitButton) {
        submitButton.disabled = false; // Re-enable the button if necessary
      }
    });
});
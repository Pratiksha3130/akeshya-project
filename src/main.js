import { createApp } from 'vue';
import App from './App.vue';

// Import Bootstrap and other CSS files from node_modules
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'boxicons/css/boxicons.min.css';
import 'glightbox/dist/css/glightbox.min.css';
import 'remixicon/fonts/remixicon.css';
import 'swiper/css'; 
import 'swiper/css/bundle';
import 'aos/dist/aos.css';

// Import custom CSS file from assets
import '@/assets/css/style.css';

// Import JS files from node_modules and assets
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'glightbox/dist/js/glightbox.min.js';
import 'isotope-layout/dist/isotope.pkgd.min.js';
import '@/assets/vendor/php-email-form/validate.js';
import PureCounter from '@srexi/purecounterjs';
import Swiper from 'swiper';
import AOS from 'aos';
import '@/assets/js/main.js';

// Initialize AOS
AOS.init();

// Initialize PureCounter
new PureCounter();

// Initialize Swiper (example initialization)
new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100,
});

// Create and mount the app
createApp(App).mount('#app');

// Back-to-top button
let backToTop = document.querySelector('.back-to-top');
if (backToTop) {
  const toggleBackToTop = () => {
    if (window.scrollY > 100) {
      backToTop.classList.add('active');
    } else {
      backToTop.classList.remove('active');
    }
  };
  window.addEventListener('load', toggleBackToTop);
  document.addEventListener('scroll', toggleBackToTop);
  backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}









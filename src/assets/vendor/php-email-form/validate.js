/* src/assets/vendor/php-email-form/validate.js */



document.addEventListener('DOMContentLoaded', function () {
    'use strict';
  
    const forms = document.querySelectorAll('.php-email-form');
  
    forms.forEach(function (e) {
      e.addEventListener('submit', function (event) {
        event.preventDefault();
        
      });
    });
  });
  

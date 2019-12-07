"use strict";
(function () {

var selectSlide = document.querySelector('.slider-btn');
var switchers = selectSlide.querySelectorAll('label');
var sliders = document.querySelectorAll('.top-item');

selectSlide.addEventListener('click', function (evt) {
  switch (evt.target) {
    case switchers[0]:
      window.removeActive(sliders, 'active-slide');
      sliders[0].classList.add('active-slide');
      break;
    case switchers[1]:
      window.removeActive(sliders, 'active-slide');
      sliders[1].classList.add('active-slide');
      break;
    case switchers[2]:
      window.removeActive(sliders, 'active-slide');
      sliders[2].classList.add('active-slide');
      break;
  }
});

})();

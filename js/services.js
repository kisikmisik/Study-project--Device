"use strict";
(function () {
  var servWrapper = document.querySelector('.services-labels');
  var switchers = servWrapper.querySelectorAll('button');
  var servContent = document.querySelectorAll('.services-text div');


  window.removeActive = function (items, selector) {
    for (var i = 0; i < items.length; i++) {
      items[i].classList.remove(selector);
      servContent[i].classList.remove('current-service');
    }
  };

  servWrapper.addEventListener('click', function (evt) {
  switch (evt.target) {
    case switchers[0]:
      window.removeActive(switchers, 'current');
      switchers[0].classList.add('current');
      servContent[0].classList.add('current-service');
      break;
    case switchers[1]:
      window.removeActive(switchers, 'current');
      switchers[1].classList.add('current');
      servContent[1].classList.add('current-service');
      break;
    case switchers[2]:
      window.removeActive(switchers, 'current');
      switchers[2].classList.add('current');
      servContent[2].classList.add('current-service');
      break;
    }
  });

  var garrancyBtn = document.querySelector('.gwarrancy-btn');
  var deliveryBtn = document.querySelector('.delivery-btn');

  var rightService = function (index) {
    servContent[index].classList.add('current-service');
    switchers[index].classList.add('current');
  }

  garrancyBtn.addEventListener('click', function(evt) {
    window.removeActive(switchers, 'current');
    rightService(1);
  });

  deliveryBtn.addEventListener('click', function(evt) {
    window.removeActive(switchers, 'current');
    rightService(0);
  });

})();

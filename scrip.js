'use strict';

// Store values inside the function

// const remove = function (open) {
//   open = document.querySelector('.first-question-description-container');
//   open.classList.remove('visually-hidden-focusable');
// };

// const add = function (close) {
//   close = document.querySelector('.first-question-description-container');
//   close.classList.add('visually-hidden-focusable');
// };

// Create EventListener

document.querySelector('.first-button').addEventListener('click', function () {
  const firstContainer = document.querySelector(
    '.first-question-description-container',
  );
  if (firstContainer.classList.contains('visually-hidden-focusable')) {
    firstContainer.classList.remove('visually-hidden-focusable');
  } else {
    firstContainer.classList.add('visually-hidden-focusable');
  }
});

document.querySelector('.second-button').addEventListener('click', function () {
  const secondContainer = document.querySelector(
    '.second-question-description-container',
  );
  if (secondContainer.classList.contains('visually-hidden-focusable')) {
    secondContainer.classList.remove('visually-hidden-focusable');
  } else {
    secondContainer.classList.add('visually-hidden-focusable');
  }
});

document.querySelector('.third-button').addEventListener('click', function () {
  const thirdContainer = document.querySelector(
    '.third-question-description-container',
  );

  if (thirdContainer.classList.contains('visually-hidden-focusable')) {
    thirdContainer.classList.remove('visually-hidden-focusable');
  } else {
    thirdContainer.classList.add('visually-hidden-focusable');
  }
});

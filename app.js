document.addEventListener('DOMContentLoaded', function () {
    var modal = document.getElementById('my-modal');
    var modalButton = document.querySelector('[data-target="my-modal"]');
    var modalClose = modal.querySelector('.modal-close');
  
    modalButton.addEventListener('click', function () {
      modal.classList.add('is-active');
    });
  
    modalClose.addEventListener('click', function () {
      modal.classList.remove('is-active');
    });
  });


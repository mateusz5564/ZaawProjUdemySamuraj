window.addEventListener('DOMContentLoaded', function() {
  const animationContainer = document.querySelector('.animation');
  const images = document.querySelectorAll('.animation__img');
  const ratio = [1, 0.2, 0.3, 0.8, 0.2, 1, 0.5];

  animationContainer.addEventListener('mousemove', moveImages);

  function moveImages(e) {
    images.forEach((img, index) => {
      const {clientX, clientY} = e;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      img.style.transform = `translateX(${-(clientX - centerX) * img.dataset.ratiox}px) translateY(${-(clientY - centerY) * img.dataset.ratioy}px)`

    })
  }
  
})

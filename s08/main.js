document.addEventListener('DOMContentLoaded', function() {

  const scrollerElement = document.querySelector('.scroller');
  const sections = document.querySelectorAll('.scroller__section')
  console.log(sections)

  document.addEventListener('wheel', function(e){
    console.log(e.deltaY);
  })
})
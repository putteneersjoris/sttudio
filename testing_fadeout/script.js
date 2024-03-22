
let scrollDistance = 50;

const fadeOutElement = document.getElementById("menubarExpandMenuText");

let isAnimating = false;

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
  console.log('Current Scroll:', currentScroll);

  if (currentScroll > scrollDistance && !isAnimating) {
    fadeOutElement.style.animation = 'fadeOut 1s forwards';
    isAnimating = true;
    console.log('Fade Out Animation Started');
  } else if (currentScroll < scrollDistance && isAnimating) {
    const currentOpacity = getComputedStyle(fadeOutElement).opacity;
    console.log('Current Opacity:', currentOpacity);
    fadeOutElement.style.setProperty('--current-opacity', currentOpacity);
    fadeOutElement.style.animation = 'fadeIn 1s forwards';
    isAnimating = false;
    console.log('Fade In Animation Started');
  }
});

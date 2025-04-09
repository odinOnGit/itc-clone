function scrollBySection() {
  document.querySelector('.navbar').scrollIntoView({
    behavior: 'smooth'
  });
}

/*const video = document.querySelector('.video-bg');

document.body.addEventListener('mouseenter', () => {
  video.classList.remove('wiggle'); // reset
  void video.offsetWidth; // reflow hack to re-trigger animation
  video.classList.add('wiggle');
});*/
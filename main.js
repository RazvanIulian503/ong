// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});


//Menu

const menuBtn = document.querySelector('.nav-menu');
const menu = document.querySelector('.menu');
const closeMenu = document.querySelector('.close-menu')

menuBtn.addEventListener('click', function() {
  menu.style.display = 'block';
});

closeMenu.addEventListener('click', function() {
  menu.style.display = 'none';
});


window.addEventListener('mouseup', function(event) {
	let box = menu;
	if (event.target != box && event.target.parentNode != box) {
		box.style.display = 'none'
		hamburger.classList.remove('open');
	}
});
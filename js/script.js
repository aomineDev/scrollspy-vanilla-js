//Variables
var nav = document.getElementById('nav'),
navH;

// ScrollSpy
var navLinks = document.querySelectorAll('nav div ul li a'),
sections = document.querySelectorAll('section'),
currentScrollPos, targetClass;

// Document Scroll
document.onscroll = () => {
	navH = nav.offsetHeight;
	currentScrollPos = document.documentElement.scrollTop;
	sections.forEach((e) => {
		if (e.offsetTop < (currentScrollPos + navH) && (currentScrollPos + navH) < (e.offsetTop + e.offsetHeight)) {
			targetClass = '.' + e.id + '-marker';
			for(let i of navLinks){
				if (i.classList.contains('active')) {
					i.classList.remove('active');
				}
			}
			document.querySelector(targetClass).classList.add('active');
		}
	});
	
	// Cambiar color
	if(currentScrollPos > navH || document.body.scrollTop > navH){
		nav.classList.add('bg-blue');
	}else{
		nav.classList.remove('bg-blue');
	}
}


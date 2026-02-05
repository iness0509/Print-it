const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let position = 0

const bannerImage = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots'); 

slides.forEach((_,i) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');

	if (i === 0) {
		dot.classList.add('dot_selected');
	}

	dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dot');

function  updateSlide(position) { 
    bannerImage.src = `./assets/images/slideshow/${slides[position].image}`; 
    tagLine.innerHTML = slides[position].tagLine; 
    
	dots.forEach((dot, i) =>
    dot.classList.toggle("dot_selected", i === position) 
);}

arrowRight.addEventListener('click', function () {
    position = (position + 1) % slides.length;
    updateSlide(position);   
})

arrowLeft.addEventListener ('click', function() {
    position = (position - 1 + slides.length) % slides.length;
    updateSlide(position);
})


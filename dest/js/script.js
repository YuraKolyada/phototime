//click 'menu nav' for transition section

let homeList = document.getElementById('homs'),
	navigation = homeList.children[0];

navigation.onclick = function(e){
	e.preventDefault();
	let event = e.target;
	if(!event.hasAttribute('href') || event.parentElement === 'IMG') return;

	let element = event.getAttribute('href').slice(1),
		elementById = document.getElementById(element),
		scrollValue = 0; 

	let start = Date.now();
	let timer = setInterval( () => {
		let time = Date.now() - start;

		if(time > 2000){
			clearTimeout(timer);
			return;
		}

		scroll();

	},50);

	function scroll(){
		scrollValue += elementById.offsetTop/40;
		window.scrollTo(0, scrollValue);
	}
}

/// slider

function Slider(src){
	this.marginR = src.marginRight;
	this.conteinerByPhoto = src.conteinerByPhoto;
	this.lengthTransition = src.lengthTransitionPhoto;

	this.prev = src.arrow.children[0];
	this.next = src.arrow.children[1];
	let	width = this.conteinerByPhoto.clientWidth,
		lengthPhoto = this.conteinerByPhoto.children.length,
		widthPhoto = parseInt(getComputedStyle(this.conteinerByPhoto.children[0]).width) || this.conteinerByPhoto.children[0].clientWidth;
	let maxWidth = (widthPhoto*(lengthPhoto-2) + this.marginR*(lengthPhoto-2));

	this.prevSlide = (function(){
		let position = getComputedStyle(this.conteinerByPhoto);
		let min = Math.min(0, parseInt(position.left) + (widthPhoto * this.lengthTransition + this.marginR));
    	this.conteinerByPhoto.style.left = min + 'px';
	}.bind(this));

	this.nextSlide = (function(){
		let position = getComputedStyle(this.conteinerByPhoto);
		let max = Math.max(-maxWidth, parseInt(position.left) - (widthPhoto * this.lengthTransition + this.marginR));
    	this.conteinerByPhoto.style.left = max + 'px';
	}.bind(this));
}

let slider = new Slider({
	arrow: document.getElementById('arrows'),
	marginRight: 25,
	conteinerByPhoto: document.getElementById('slider_photo'),
	lengthTransitionPhoto: 1
});

slider.prev.onclick = slider.prevSlide;
slider.next.onclick = slider.nextSlide;

////

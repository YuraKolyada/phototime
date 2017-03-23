///click 'menu nav' for transition section

let homeList = document.getElementById('homs'),
	navigation = homeList.children[0];

navigation.onclick = function(e){
	let event = e.target;
	if(!event.hasAttribute('href') || event.parentElement === 'IMG') return;

	let element = event.getAttribute('href').slice(1),
		elmentById = document.getElementById(element);

	setTimeout(()=> window.pageYOffset = element.offsetTop, 500);
}

///
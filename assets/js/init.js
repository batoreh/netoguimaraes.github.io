addEventListener('DOMContentLoaded', function () {
	var up = document.getElementById('up-line');
	var mid = document.getElementById('mid-line');
	var down = document.getElementById('down-line');
	var mobile = document.getElementById('mob-nav');
	mobile.addEventListener('click', function () {
		var navbar = document.getElementById('navbar');
		if (up.classList.contains('up-line-active')) {
			up.classList.remove('up-line-active');
			mid.classList.remove('mid-line-active');
			down.classList.remove('down-line-active');
			navbar.style.left = "-400px";
		} else {
			up.classList.add('up-line-active');
			mid.classList.add('mid-line-active');
			down.classList.add('down-line-active');
			navbar.style.left = "0px";	
		}
	});
});

setInterval(function(){
	var up = document.getElementById('up-line');
	var mid = document.getElementById('mid-line');
	var down = document.getElementById('down-line');
	if (!up.classList.contains('up-line-active')) {
		if (window.pageYOffset>50) {
			up.style.backgroundColor="rgba(200,200,200, 0.6)";
			mid.style.backgroundColor="rgba(200,200,200, 0.6)";
			down.style.backgroundColor="rgba(200,200,200, 0.6)";
		}else{
			up.style.backgroundColor="#530093";
			mid.style.backgroundColor="#530093";
			down.style.backgroundColor="#530093";
		}
	} else{
		up.style.backgroundColor="red";
		mid.style.backgroundColor="red";
		down.style.backgroundColor="red";
	}
}, 50);
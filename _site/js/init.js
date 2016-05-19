addEventListener('DOMContentLoaded', function () {
	var mobile = document.getElementById('mob-nav');
	mobile.addEventListener('click', function () {
		var up = document.getElementById('up-line');
		var mid = document.getElementById('mid-line');
		var down = document.getElementById('down-line');
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
})
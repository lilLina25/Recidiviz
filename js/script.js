//Реализация меню-бургера
let headerMenu = document.querySelector('.menu-header__menu');
let headerBtn = document.querySelector('.menu-header__icon');
let links = document.querySelectorAll('.menu-header__link');
headerBtn.addEventListener('click',function(){
		headerMenu.classList.toggle('active');
		headerBtn.classList.toggle('active');
		document.body.classList.toggle('overflow');
	});
for(let link of links){
	link.addEventListener('click', function(){
		headerMenu.classList.remove('active');
		headerBtn.classList.remove('active');
		document.body.classList.remove('overflow');
	});
}

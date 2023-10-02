const scrollToTopBtn = document.querySelector('.scroll-to-top');
let root = document.documentElement;

const handleScrollBar = () => {
	const scroll = window.scrollY;
	// console.log(window.scrollY, 'scrolly');
	const pageHeight = document.body.offsetHeight;
	// console.log(pageHeight, 'page height' );
	const viewHeight = window.innerHeight;
	// console.log(viewHeight, 'viewport height');
	const restScroll = pageHeight - viewHeight;
	// console.log(restScroll, 'reszta do scroll');
	const remainScrollValue = (scroll / restScroll) * 100;
	// console.log(remainScrollValue, 'skroll wartosc');
	// console.log('-------------------------------');

	root.style.setProperty('--scroll-width', remainScrollValue + '%');

	if (remainScrollValue > 30) {
		scrollToTopBtn.classList.add('active');
	} else {
		scrollToTopBtn.classList.remove('active');
	}
};

const scrollToTop = () => {
	window.scrollTo({ top: 0, behavior: 'smooth' });
};

window.addEventListener('scroll', handleScrollBar);
scrollToTopBtn.addEventListener('click', scrollToTop);

// const btn =document.querySelector('.scroll-to-top')
// let root = document.documentElement;

// const handleScrollBar = () => {
// 	const scroll = window.scrollY

// 	const leftToScroll = document.body.getBoundingClientRect().height - window.innerHeight
// 	// console.log(`wysokość strony ${document.body.getBoundingClientRect().height}`);
// 	// console.log(`wysokość viewportu ${window.innerHeight}`);
// 	// console.log(leftToScroll);
// const scrollBarWidth = Math.floor((scroll / leftToScroll) * 100)
// 	console.log(scrollBarWidth);

// 	root.style.setProperty('--scroll-width', `${scrollBarWidth}%`)

// 	if(scrollBarWidth > 80) {
// 		btn.classList.add('active')
// 	} else {
// 		btn.classList.remove('active')
// 	}
// }

// const scrollToTop = () => {
// 	window.scroll({
// 		top: 0,
// 		behavior: 'smooth'
// 	})
// }

// window.addEventListener('scroll', handleScrollBar)
// btn.addEventListener('click', scrollToTop)

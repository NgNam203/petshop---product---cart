// ----- Header position fixed --------

window.onscroll = () => {
	if (
		window.pageYOffset > document.querySelector(".header .header-2").offsetTop
	) {
		document.querySelector(".header .header-2").classList.add("active");
	} else {
		document.querySelector(".header .header-2").classList.remove("active");
	}
};

// ----- Loading gif --------

window.onload = () => {
	fadeOut();
};

function loader() {
	document.querySelector(".loader-container").classList.add("active");
}

function fadeOut() {
	setTimeout(loader, 4000);
}

// ----- Add to cart --------

let cartAmountEl = document.querySelector(".cartAmount");
let count = 0;

function increment() {
	count++;
	cartAmountEl.textContent = count;
}

var carts = document.querySelectorAll(".featured .btn");

for (var i = 0; i < carts.length; i++) {
	carts[i].addEventListener("click", () => {
		increment();
	});
}

// ----- Slide swiper --------

var swiper = new Swiper(".books-slider", {
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".featured-slider", {
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		450: {
			slidesPerView: 2,
		},
		768: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		},
	},
});

var swiper = new Swiper(".arrivals-slider", {
	loop: true,
	centeredSlides: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

var swiper = new Swiper(".reviews-slider", {
	loop: true,
	spaceBetween: 30,
	centeredSlides: true,
	grabCursor: true,
	autoplay: {
		delay: 9500,
		disableOnInteraction: false,
	},
	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
		},
	},
});

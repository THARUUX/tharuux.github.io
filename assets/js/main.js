/*-----------------------------------------------------------------------------------

Theme Name: Gerold - Personal Portfolio Tailwind CSS Template
Theme URI: https://themejunction.net/
Author: Theme-Junction
Author URI: https://themeforest.net/user/theme-junction
Description: Gerold - Personal Portfolio Tailwind CSS Template

-----------------------------------------------------------------------------------

/***************************************************
==================== JS INDEX ======================
****************************************************
WoW Js
mobile toggle button
Sticky Header Js
Fun Fact Js
Services Hover Js
Portfolio Filter Js
Testimonial Carousel Js
Post Carousel Js
Portfolio Carousel Js
Nice Select Js
All Popup Js
GSAP 
Lenis Scroll Js
Preloader
Portfolio Filter Js
indexing and active link

****************************************************/

(function ($) {
	"use strict";

	var windowSize = $(window).width();

	$(window).on("load", function () {
		/*
	============================== Preloader =====================================
	*/
		const svg = document.getElementById("preloaderSvg");

		const preTl = gsap.timeline({
			onComplete: startAnimationAfterPreloader,
		});

		const curve = "M0 502S175 272 500 272s500 230 500 230V0H0Z";
		const flat = "M0 2S175 1 500 1s500 1 500 1V0H0Z";

		preTl.to(".preloader-heading .load-text , .preloader-heading .cont", {
			delay: 0.15,
			y: -100,
			opacity: 0,
		});
		preTl
			.to(svg, {
				duration: 0.5,
				attr: { d: curve },
				ease: "power2.easeIn",
			})
			.to(svg, {
				duration: 0.5,
				attr: { d: flat },
				ease: "power2.easeOut",
			});
		preTl.to(".preloader", {
			y: -1500,
		});
		preTl.to(".preloader", {
			zIndex: -1,
			display: "none",
		});

		let svgText = document.querySelector(".hero-section .intro_text svg text");
		let heroAnimation = document.querySelector(".heroAnimation");

		function startAnimationAfterPreloader() {
			if (svgText) {
				// Add a class or directly apply styles to trigger the stroke animation
				svgText.classList.add("animate-stroke");
			}

			if (heroAnimation) {
				// Add a class or directly apply styles to trigger the stroke animation
				heroAnimation.classList.add("activeAnimation");
			}
		}
		// WoW Js
		var wow = new WOW({
			boxClass: "wow", // default
			animateClass: "animated", // default
			offset: 100, // default
			mobile: true, // default
			live: true, // default
		});
		wow.init();
		// mobile toggle button
		const mobileMenus = document.querySelectorAll(".mobile-menu");
		if (mobileMenus?.length) {
			const mobileMenuToggleButtons =
				document.querySelectorAll(".menu-bar button");
			mobileMenuToggleButtons?.forEach((mobileMenuToggleButton, idx) => {
				mobileMenuToggleButton.addEventListener("click", function () {
					mobileMenuToggleButton.classList.toggle("active");
					mobileMenus.forEach((mobileMenu, idx2) => {
						if (idx === idx2) {
							mobileMenu.classList.toggle("active");
						}
					});
				});
			});
		}

		// Sticky Header Js

		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 300) {
				$(".header-area.header-sticky").addClass("sticky");
				$(".header-area.header-sticky").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 500) {
					$(".header-area.header-sticky").addClass("sticky-out");
					$(".header-area.header-sticky").removeClass("sticky");
				}
			} else {
				$(".header-area.header-sticky").removeClass("sticky");
			}

			lastScrollTop = scroll;
		});

		// Fun Fact Js
		if ($(".odometer").length > 0) {
			$(".odometer").appear(function () {
				var odo = $(".odometer");
				odo.each(function () {
					var countNumber = $(this).attr("data-count");

					$(this).html(countNumber);
				});
			});
		}
		// Services Hover Js
		function service_animation() {
			var active_bg = $(".services-widget .active-bg");
			var element = $(".services-widget .current");
			$(".services-widget .service-item").on("mouseenter", function () {
				var e = $(this);
				activeService(active_bg, e);
				$(".services-widget .service-item").removeClass("current");
				$(this).addClass("current");
			});
			$(".services-widget").on("mouseleave", function () {
				element = $(".services-widget .current");
				activeService(active_bg, element);
				element.closest(".service-item").siblings().removeClass("mleave");
			});
			activeService(active_bg, element);
		}
		service_animation();

		function activeService(active_bg, e) {
			if (!e.length) {
				return false;
			}
			var topOff = e.offset().top;
			var height = e.outerHeight();
			var menuTop = $(".services-widget").offset().top;
			e.closest(".service-item").removeClass("mleave");
			e.closest(".service-item").siblings().addClass("mleave");
			active_bg.css({ top: topOff - menuTop + "px", height: height + "px" });
		}

		// Portfolio Filter Js
		$(".portfolio-box").imagesLoaded(function () {
			var $grid = $(".portfolio-box").isotope({
				// options
				masonry: {
					columnWidth: ".portfolio-box .portfolio-sizer",
					gutter: ".portfolio-box .gutter-sizer",
				},
				itemSelector: ".portfolio-box .portfolio-item",
				percentPosition: true,
			});

			// filter items on button click
			$(".filter-button-group").on("click", "button", function () {
				$(".filter-button-group button").removeClass("active");
				$(this).addClass("active");

				var filterValue = $(this).attr("data-filter");
				$grid.isotope({ filter: filterValue });
			});
		});

		// Testimonial Carousel Js
		$(".testimonial-carousel.owl-carousel").owlCarousel({
			loop: true,
			margin: 30,
			nav: false,
			dots: true,
			autoplay: false,
			active: true,
			smartSpeed: 1000,
			autoplayTimeout: 7000,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 2,
				},
				1000: {
					items: 2,
				},
			},
		});
		// Post Carousel Js
		$(".tj-post__gallery.owl-carousel").owlCarousel({
			items: 1,
			loop: true,
			margin: 30,
			dots: false,
			nav: true,
			navText: [
				'<i class="fal fa-arrow-left"></i>',
				'<i class="fal fa-arrow-right"></i>',
			],
			autoplay: false,
			smartSpeed: 1000,
			autoplayTimeout: 3000,
		});
		// Portfolio Carousel Js
		$(".portfolio_gallery.owl-carousel").owlCarousel({
			items: 2,
			loop: true,
			lazyLoad: true,
			center: true,
			// autoWidth: true,
			autoplayHoverPause: true,
			autoplay: false,
			autoplayTimeout: 5000,
			smartSpeed: 800,
			margin: 30,
			nav: false,
			dots: true,
			responsive: {
				0: {
					items: 1,
					margin: 0,
				},
				768: {
					items: 2,
					margin: 20,
				},
				992: {
					items: 2,
					margin: 30,
				},
			},
		});

		// Brand Slider Js
		if ($(".brand-slider").length > 0) {
			var brand = new Swiper(".brand-slider", {
				slidesPerView: 6,
				spaceBetween: 30,
				loop: false,
				breakpoints: {
					320: {
						slidesPerView: 2,
					},
					576: {
						slidesPerView: 3,
					},
					640: {
						slidesPerView: 3,
					},
					768: {
						slidesPerView: 4,
					},
					992: {
						slidesPerView: 5,
					},
					1024: {
						slidesPerView: 6,
					},
				},
			});
		}

		if ($(".roll-marquee")?.length) {
			//rold marquee
			let SwiperTop = new Swiper(".roll-marquee", {
				spaceBetween: 0,
				centeredSlides: true,
				speed: 6000,
				autoplay: {
					delay: 1,
				},
				loop: true,
				slidesPerView: "auto",
				allowTouchMove: false,
				disableOnInteraction: true,
			});
		}

		// Nice Select Js
		$("select").niceSelect();

		// All Popup Js
		if ($(".popup_video").length > 0) {
			$(`.popup_video`).lightcase({
				transition: "elastic",
				showSequenceInfo: false,
				slideshow: false,
				swipe: true,
				showTitle: false,
				showCaption: false,
				controls: true,
			});
		}
	});
	/*****************************************************************
================================= GSAP ====================================
********************************************************************/
	// gsap.registerPlugin(ScrollTrigger, TweenMax, ScrollToPlugin);

	// gsap.config({
	//   nullTargetWarn: false,
	// });

	// Lenis Scroll Js

	/*
============================== Lenis Scroll Js =====================================
*/
	// const lenis = new Lenis();
	// lenis.on("scroll", ScrollTrigger.update);
	// gsap.ticker.add((time) => {
	//   lenis.raf(time * 1000);
	// });
	// gsap.ticker.lagSmoothing(0);

	const smoothScroll = () => {
		var links = document.querySelectorAll('a[href^="#"]');
		if (!links.length) {
			return;
		}
		links.forEach(function (link) {
			link.addEventListener("click", function (e) {
				e.preventDefault();

				var targetId = this.getAttribute("href").substring(1);

				var targetElement = document.getElementById(targetId);
				if (targetElement) {
					targetElement.scrollIntoView({ behavior: "smooth" });
				} else {
					window.scroll({ top: 0, left: 0, behavior: "smooth" });
				}
			});
		});
	};

	smoothScroll();

	// Portfolio Filter Js
	$(".portfolio-box").imagesLoaded(function () {
		var $grid = $(".portfolio-box").isotope({
			// options
			masonry: {
				columnWidth: ".portfolio-box .portfolio-sizer",
				gutter: ".portfolio-box .gutter-sizer",
			},
			itemSelector: ".portfolio-box .portfolio-item",
			percentPosition: true,
		});

		// filter items on button click
		$(".filter-button-group").on("click", "button", function () {
			$(".filter-button-group button").removeClass("active");
			$(this).addClass("active");

			var filterValue = $(this).attr("data-filter");
			$grid.isotope({ filter: filterValue });
		});
	});

	const buttonGroup = document.querySelector(".portfolio-filter .button-group");
	function buttonBgAnimation() {
		const activeBg = document.querySelector(
			".portfolio-filter .button-group .active-bg"
		);
		const buttons = document.querySelectorAll(
			".portfolio-filter .button-group button"
		);

		const activeFilterBtn = (activeBg, element) => {
			if (activeBg && element) {
				const rect = element.getBoundingClientRect();
				const parentRect = buttonGroup.getBoundingClientRect();

				activeBg.style.width = `${rect.width}px`;
				activeBg.style.height = `${rect.height}px`;
				activeBg.style.left = `${rect.left - parentRect.left}px`;
				activeBg.style.top = `${rect.top - parentRect.top}px`;
			}
		};

		// Event listener for button clicks
		buttons.forEach(button => {
			button.addEventListener("click", () => {
				// Remove the 'active' class from all buttons
				buttons.forEach(btn => btn.classList.remove("active"));

				// Add the 'active' class to the clicked button
				button.classList.add("active");

				// Update the position of the active background
				activeFilterBtn(activeBg, button);
			});
		});

		// Initialize with the currently active button
		const activeElement = document.querySelector(
			".portfolio-filter .button-group .active"
		);
		activeFilterBtn(activeBg, activeElement);
	}

	if (buttonGroup) {
		buttonBgAnimation();
	}

	// indexing and active link
	const sections = document.querySelectorAll("section"); // All sections
	const navLinks = document.querySelectorAll("nav>ul li:has(a) > a"); // All nav links

	window.addEventListener("scroll", () => {
		if (navLinks?.length) {
			let currentSection = "";

			// Loop through sections to find the current one
			sections.forEach(section => {
				const sectionTop = section.offsetTop;
				const sectionHeight = section.offsetHeight;
				if (window.scrollY >= sectionTop - sectionHeight / 3) {
					currentSection = section.getAttribute("id");
				}
			});

			// Remove 'active' class from all links and add it to the current one
			navLinks.forEach(link => {
				link.classList.remove("active");

				if (link.getAttribute("href")?.includes(currentSection)) {
					link.classList.add("active");
				}
			});
		}
	});
	const themeControllerButton = document.querySelector(".theme-controller");

	// theme controller
	if (themeControllerButton) {
		themeController();
	}

	// accordions

	const buttons = document.querySelectorAll(".accordion-btn");
	if (buttons?.length) {
		buttons.forEach((button, index) => {
			button.addEventListener("click", function () {
				const content = button.nextElementSibling;

				const isOpen = content.classList.contains("open");
				buttons.forEach((button2, index2) => {
					button2.classList.remove("open");
				});
				document.querySelectorAll(".accordion-content").forEach((item, i) => {
					item.style.maxHeight = "0";
					item.classList.remove("open");
				});

				if (!isOpen) {
					content.style.maxHeight = content.scrollHeight + "px";
					content.classList.add("open");
					this.classList.add("open");
				}
			});
		});

		document.querySelectorAll(".accordion-content").forEach((item, i) => {
			const isOpen = item.classList.contains("open");
			if (isOpen) {
				item.style.maxHeight = item.scrollHeight + "px";
			}
		});
	}

	// Anim Js
	const target = document.getElementById("anim");

	if (target) {
		function splitTextToSpans(targetElement) {
			if (targetElement) {
				const text = targetElement.textContent;
				targetElement.innerHTML = "";
				for (let character of text) {
					const span = document.createElement("span");
					if (character === " ") {
						span.innerHTML = "&nbsp;";
					} else {
						span.textContent = character;
					}
					targetElement.appendChild(span);
				}
			}
		}
		splitTextToSpans(target);
	}
})(jQuery);

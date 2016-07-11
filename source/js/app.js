(function($) {
	"use strict";


	// ==============================
	// Check scrollbar width
	// ==============================
	var widthContentA = $("#scroll_bar_check_A").width(),
		widthContentB = $("#scroll_bar_check_B").width();

	var scrollBarWidht =  widthContentA - widthContentB;
	$("#scroll_bar_check_A").css("display","none");


	// ==============================
	// Animations
	// ==============================
	$.fn.animated = function(inEffect) {
		$(this).each(function() {
			var ths = $(this);
			ths.css({opacity:0})
				.addClass("animated")
				.waypoint(function(dir) {
					if (dir === "down") {
						ths.addClass(inEffect).css({opacity:1});
					}
				},
				{
					offset: "90%"
				});
		});
	};

	$("header .svg-heading, .talks .svg-heading, .talks .testimonial").animated("fadeInUp");
	$(".portfolio-slider__module>div, .about-me__skills>div").animated("fadeInUp");
	$(".article").animated("fadeIn");



	// ==============================
	// Piecharts animation
	// ==============================
	$(".piechart .piechart__fill").each(function(){
		var pie = $(this);
		pie.waypoint(function(dir) {
			if (dir === "down") {
				pie.css({strokeDashoffset:pie.data("percentage")});
			}
		},
			{
				offset: "90%"
			});
	});

	//Слайдер
	(function() {
		//Переменные слайдера
		var downBtn = $("#downBtn");
		var upBtn = $("#upBtn");
		var slide = $("#slide");
		var description = $("#slideDescr");
		var counterDown = 0;
		var counterUp = 2;
		var counterSlide = 1;
		//Все элементы
		var itemsDown = downBtn.find('.thumbnail__item'),
			itemsUp = upBtn.find('.thumbnail__item'),
			itemsSlide = slide.find('.slider__current-item'),
			itemsDescr = description.find('.slider__description-item');
		//Обработчик кнопки вниз
		downBtn.on('click', function() {
			//Декремент счётчиков
			counterDown--;
			counterUp--;
			counterSlide--;
			//Функция для смены слайда
			function toggleSlide() {
				//Скрытие активного слайда
				activeItemSlide.fadeOut(700);
				//Появление требуемого слайда
				reqItemSlide.fadeIn(700);
				//Удаление класса у бывшего активного слайда
				activeItemSlide.removeClass('slider__current-item--active').css('opacity', '0');
				//Добавление активного класса требуемому слайду
				reqItemSlide.addClass('slider__current-item--active');
				//Добавление требуемому описанию слайда активного класса
				reqItemDescr.addClass('slider__description-item--active');
				//Удаление класса у активного описания слайда
				activeItemDescr.removeClass('slider__description-item--active');
			}
			//Активные элементы
			var activeItemDown = downBtn.find('.thumbnail__item--active'),
				activeItemUp = upBtn.find('.thumbnail__item--active'),
				activeItemSlide = slide.find('.slider__current-item--active'),
				activeItemDescr = description.find('.slider__description-item--active');
			//Если счётчики меньше нуля обновить
			if (counterDown < 0) counterDown = itemsDown.length-1;
			if (counterUp < 0) counterUp = itemsUp.length-1;
			if (counterSlide < 0) counterSlide = itemsUp.length-1;
			//Требуемые элементы
			var reqItemDown = itemsDown.eq(counterDown),
				reqItemUp = itemsUp.eq(counterUp),
				reqItemSlide = itemsSlide.eq(counterSlide),
				reqItemDescr = itemsDescr.eq(counterSlide);
			//Скрытие активных миниатюр
			activeItemDown.animate({
				'top': '100%'
			}, 300);
			activeItemUp.animate({
				'top' : '-100%'
			}, 300);
			//Смена слайда
			toggleSlide();
			//Появление требуемых миниатюр
			reqItemDown.animate({
				'top' : '0'
			}, 300, function() {
				activeItemDown.removeClass('thumbnail__item--active').css('top', '-100%');
				reqItemDown.addClass('thumbnail__item--active');
			});
			reqItemUp.animate({
				'top' : '0'
			}, 300, function() {
				activeItemUp.removeClass('thumbnail__item--active').css('top', '100%');
				reqItemUp.addClass('thumbnail__item--active');
			});
		});
		//Обработчик кнопки вверх
		upBtn.on('click', function() {
			//Инкремент счётчиков
			counterDown++;
			counterUp++;
			counterSlide++;
			//Функция для смены слайда
			function toggleSlide() {
				//Скрытие активного слайда
				activeItemSlide.fadeOut(700);
				//Появление требуемого слайда
				reqItemSlide.fadeIn(700);
				//Удаление класса у бывшего активного слайда
				activeItemSlide.removeClass('slider__current-item--active').css('opacity', '0');
				//Добавление активного класса требуемому слайду
				reqItemSlide.addClass('slider__current-item--active');
				//Добавление требуемому описанию слайда активного класса
				reqItemDescr.addClass('slider__description-item--active');
				//Удаление класса у активного описания слайда
				activeItemDescr.removeClass('slider__description-item--active');
			}
			//Активные элементы
			var activeItemDown = downBtn.find('.thumbnail__item--active'),
				activeItemUp = upBtn.find('.thumbnail__item--active'),
				activeItemSlide = slide.find('.slider__current-item--active'),
				activeItemDescr = description.find('.slider__description-item--active');
			//Обнуление счётчиков, если уходят за пределы
			if (counterUp >= itemsUp.length) {
				counterUp = 0;
			}
			if (counterDown >= itemsDown.length) counterDown = 0;
			if (counterSlide >= itemsDown.length) counterSlide = 0;
			//Требуемые элементы
			var reqItemDown = itemsDown.eq(counterDown),
				reqItemUp = itemsUp.eq(counterUp),
				reqItemSlide = itemsSlide.eq(counterSlide),
				reqItemDescr = itemsDescr.eq(counterSlide);
			//Скрытие активных миниатюр
			activeItemDown.animate({
				'top': '100%'
			}, 300);
			activeItemUp.animate({
				'top' : '-100%'
			}, 300);
			//Смена слайда
			toggleSlide();
			//Появление требуемых миниатюр
			reqItemDown.animate({
				'top' : '0'
			}, 300, function() {
				activeItemDown.removeClass('thumbnail__item--active').css('top', '-100%');
				reqItemDown.addClass('thumbnail__item--active');
			});
			reqItemUp.animate({
				'top' : '0'
			}, 300, function() {
				activeItemUp.removeClass('thumbnail__item--active').css('top', '100%');
				reqItemUp.addClass('thumbnail__item--active');
			});
		});
	}());
	// ==============================
	// Axis Parallax
	// ==============================
	$("#scene").parallax({
		scalarX: 3,
		scalarY: 3,
		frictionX: 0.5,
		frictionY: 0.5
	});


	// ==============================
	// Login card flip
	// ==============================
	$(".login-button").click(function() {
		$("body").addClass("card_flipped");
		if(!(".flip-card__back-side").click(function () {
			$('body').removeClass('card_flipped');
		}));


	});

	$('#unflip-card').click(function() {
		$("body").removeClass("card_flipped");
	});




	// ==============================
	// Main menu
	// ==============================
	$("#menu-toggle").click(function(){
		$(this).add(".main-menu").toggleClass("active");
	});

	$(".main-menu__item").each(function(index) {
		$(this).css("transition-delay", 0.3+0.1*index + "s");
	});


	// ==============================
	// Buttons
	// ==============================
	$("button.go-down").click(function(){
		var go = $(this).data("link");
		$("html, body").stop().animate({
			scrollTop: $(go).offset().top
		}, 700, "swing");
	});

	$("button.go-up").click(function(){
		$("html, body").stop().animate({
			scrollTop: 0
		}, 700, "swing");
	});

	$(".blog-navigation__toggle").click(function(){
		$(".blog-navigation").toggleClass("active");
	});


	// ==============================
	// SCROLL EVENTS
	// ==============================

	// SCROLL NAVIGATION BEGIN
	var lastId,
		menu = $(".blog-navigation"),
		menuItems = menu.find("li a"),
		scrollItems = menuItems.map(function(){
			var item = $($(this).attr("href"));
			if (item.length) return item;
		});

	// Bind click handler to menu items
	// so we can get a fancy scroll animation
	menuItems.click(function(e){
		var href = $(this).attr("href"),
			offsetTop = (href === "#") ? 0 : $(href).offset().top-60;
		
		$("html, body").stop().animate({ 
			scrollTop: offsetTop
		}, 700, "swing");
		e.preventDefault();
	});

	// Bind to scroll
	if($(".blog-navigation").offset()){
		$(window).scroll(function() {
			// Get container scroll position
			var fromTop = $(this).scrollTop(),
				blogNavOffset = $(".blog-navigation").offset().top,
				blogNavLimit = $(".footer__wrapper").offset().top - $(".blog-navigation__wrapper").outerHeight();

			// Get id of current scroll item
			var cur = scrollItems.map(function(){
				if ($(this).offset().top < fromTop+144)
					return this;
			});
			// Get the id of the current element
			cur = cur[cur.length-1];
			var id = cur && cur.length ? cur[0].id : "";

			if (lastId !== id) {
				lastId = id;
				// Set/remove active class
				menuItems
				.removeClass("active")
				.filter("[href=#"+id+"]")
				.addClass("active");
			}

			if(fromTop >= blogNavLimit && $(window).width() > (768 - scrollBarWidht)) {
				$(".blog-navigation__wrapper").css({"position":"absolute", "top":blogNavLimit + "px"});
			} else if (fromTop >= blogNavOffset && $(window).width() > (768 - scrollBarWidht)) {
				$(".blog-navigation__wrapper").css({"position":"fixed", "top":0});
				$(".blog-navigation__wrapper").addClass("nav-fixed");
			} else {
				$(".blog-navigation__wrapper").css({"position":"relative"});
				$(".blog-navigation__wrapper").removeClass("nav-fixed");
			}

		});
	}
	// SCROLL NAVIGATION END


	// ==============================
	// RESIZE EVENTS
	// ==============================
	if($(".blog-navigation").offset()){
		$(window).resize(function() {
			if($(window).width() <= (768 - scrollBarWidht)){
				$(".blog-navigation__wrapper").removeClass("nav-fixed");
				$(".blog-navigation__wrapper").css({"position":"relative"});
			} else {
				if($("body").scrollTop() >= $(".blog").offset().top){
					$(".blog-navigation__wrapper").css({"position":"fixed", "top":0});
					$(".blog-navigation__wrapper").addClass("nav-fixed");
				}
			}
		});
	}


	$(window).resize(function() {
		// Testimonials section bg size
		if( $(window).width()>2000){
			$(".talks, .contact-form__bg").css("background-size", $(window).width() + "px");
		}
	});



	// ==============================
	// Page changer
	// ==============================
	$(document).on("click", "a.preload-link", function(e) {
		var href = $(this).attr("href");
		e.preventDefault();

		return $("#preloader")
			.fadeIn(300, function(){
				return document.location = href != null ? href : "/";
			});
	});

	// ==============================
	// Preloader with percentage
	// ==============================
	function preloader() {
		var duration = 1000;
		var st = new Date().getTime();

		var $circle__o = $("#preloader-svg__img .bar__outer"),
			$circle__c = $("#preloader-svg__img .bar__center"),
			$circle__i = $("#preloader-svg__img .bar__inner");

		var c_o = Math.PI*($circle__o.attr("r") * 2),
			c_c = Math.PI*($circle__c.attr("r") * 2),
			c_i = Math.PI*($circle__i.attr("r") * 2);


		var interval = setInterval(function() {
			var diff = Math.round(new Date().getTime() - st),
				val = Math.round(diff / duration * 100);

			val = val > 100 ? 100 : val;

			var pct_o = ((100-val)/100)*c_o,
				pct_c = ((100-val)/100)*c_c,
				pct_i = ((100-val)/100)*c_i;

			$circle__o.css({strokeDashoffset: pct_o});
			$circle__c.css({strokeDashoffset: pct_c});
			$circle__i.css({strokeDashoffset: pct_i});

			$("#preloader-svg__percentage").text(val);
			$("#preloader-svg__img").css({opacity:1});

			if (diff >= duration) {
				clearInterval(interval);

				if($(".flip-card").length){
					$("#preloader").delay(1000).fadeOut(700, function(){
						$("#preloader__progress").remove();
						$(".flip-card").addClass("loaded");
					});
				} else {
					$("#preloader").delay(1000).fadeOut(700, function(){
						$("#preloader__progress").remove();
					});
				}
			}
		}, 200);
	}
	preloader();

})(jQuery);
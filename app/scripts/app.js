import svg4everybody from 'svg4everybody';
import $ from 'jquery';
import 'calc-polyfill';
import 'jquery.csssr.validation';

$(() => {
	const $menuTrigger = $('#menuTrigger');
	const $menuTriggerIcon = $('#menuTriggerIcon');
	const $header = $('#header');
	const $index = $('#index');
	const $pageBody = $('#page');
	const $sideNav = $('#nav');

	// по клику на триггере показываем/скрываем боковое меню
	$menuTrigger.on('click', function (event) {
		event.preventDefault();
		$menuTriggerIcon.toggleClass('header__icon_is-clicked');
		$header.toggleClass('header_is-shifted');
		$index.toggleClass('index_is-shifted');
		$sideNav.toggleClass('nav_open');
	});

	// по клику вне триггера скрываем боковое меню в любом случае
	$pageBody.on('click', function (event) {
		if ( $sideNav.hasClass('nav_open') && !$(event.target).is('#menuTrigger, #menuTriggerIcon')) {
			$menuTriggerIcon.removeClass('header__icon_is-clicked');
			$header.removeClass('header_is-shifted');
			$index.removeClass('index_is-shifted');
			$sideNav.removeClass('nav_open');
		}
	});

	svg4everybody();

});

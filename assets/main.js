$(document).ready(function () {

 
	$('.postslider').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	arrows: true,
	prevArrow: ' <div style="display: flex;justify-content: center;align-items: center; position: relative;right: 25px;"> <svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M11.4502 1.34786C11.4713 1.36239 11.4953 1.38317 11.5207 1.41272L11.5272 1.42032L11.534 1.42766L13.2521 3.27335C13.2523 3.2736 13.2525 3.27386 13.2528 3.27412C13.366 3.39816 13.3658 3.62486 13.2521 3.74846L13.252 3.74845L13.2492 3.75158L5.63922 12.1646L5.33582 12.5L5.63922 12.8354L13.2492 21.2485L13.2492 21.2485L13.2521 21.2516C13.3658 21.3752 13.366 21.6019 13.2528 21.7259L11.534 23.5724L11.5272 23.5797L11.5207 23.5873C11.4679 23.6488 11.4092 23.6766 11.3601 23.6838C11.3356 23.6796 11.2817 23.6599 11.2194 23.5873L11.2195 23.5872L11.21 23.5768L1.33002 12.7072L1.33003 12.7072L1.32799 12.705C1.21404 12.5811 1.21404 12.3537 1.32799 12.2299L1.32901 12.2288L11.208 1.42552C11.2082 1.42533 11.2083 1.42515 11.2085 1.42496C11.2596 1.36974 11.3185 1.34786 11.37 1.34786H11.4502Z" fill="#0C3BDD" stroke="#0C3BDD"/></svg></div>',
	nextArrow: '<div style="display: flex;justify-content: center;align-items: center; position: relative;left: 25px;"><svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.16983 23.6521C3.14866 23.6376 3.12468 23.6168 3.09931 23.5873L3.09278 23.5797L3.08596 23.5723L1.36794 21.7267C1.3677 21.7264 1.36746 21.7261 1.36722 21.7259C1.25398 21.6018 1.25422 21.3751 1.36794 21.2515L1.36795 21.2516L1.37078 21.2484L8.98078 12.8354L9.28417 12.5L8.98078 12.1646L1.37078 3.75151L1.37079 3.7515L1.36794 3.7484C1.25423 3.6248 1.25398 3.39812 1.3672 3.27408L3.08596 1.42759L3.09278 1.42026L3.09931 1.41265C3.15209 1.35119 3.21081 1.32344 3.25994 1.31619C3.28441 1.32042 3.33833 1.34011 3.40063 1.41265L3.40048 1.41278L3.40998 1.42323L13.29 12.2928L13.29 12.2928L13.292 12.295C13.406 12.4189 13.406 12.6463 13.292 12.7701L13.291 12.7712L3.41201 23.5745C3.41184 23.5747 3.41166 23.5749 3.41149 23.575C3.36043 23.6303 3.30153 23.6521 3.24997 23.6521H3.16983Z" fill="#0C3BDD" stroke="#0C3BDD"/></svg></div>',
	responsive: [
		{
		breakpoint: 2000,
		settings: {
			slidesToShow: 4,
			slidesToScroll: 1,
			centerMode: false,
			centerPadding: '60px'
		}
		},
		{
		breakpoint: 1100,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
		}
		},
		{
		breakpoint: 900,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			centerMode: true,
		}
		},
		{
		breakpoint: 500,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			centerMode: true,
		}
		},

		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]
	});

	$('.categoria-destaque-slider').slick({
	infinite: true,
	responsive: [
		{
		breakpoint: 900,
		settings: {
			infinite: true,
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			centerMode: true,
		}
		},
		{
		breakpoint: 500,
		settings: {
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			centerMode: true,
		}
		},

		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	]



	});

	$('.nav-expand-link').on("click", function(event) {
		event.preventDefault();
	});

	// Desabilita botão de submit

	$('#btnnews').prop('disabled', true);
	
	// Verifica consentimento do formulário do Responsys
	$(".form_consent input, .form_consent label").click(function() { 
		if ($("#lgpd:checked").val()) {
			$('#btnnews').prop('disabled', false);
			return true;
		}
	});

	var menumobtopo = document.querySelector("#menu-menu-superior-mobile > li.fechamenubtn.menu-item.menu-item-type-custom.menu-item-object-custom.nav-item > a");
	// Cria um novo elemento <p> com o ícone <i> dentro
	var paragraph = document.createElement('p');
	var icon = document.createElement('i');
	icon.classList.add('fa-solid', 'fa-xmark');
	paragraph.appendChild(icon);

	// Adiciona o novo elemento <p> ao elemento <a>
	menumobtopo.appendChild(paragraph);

	const targetDiv = document.getElementById("ez-toc-container");
	const btn = document.getElementById("indc");
	btn.onclick = function () {
		if (targetDiv.style.display !== "none") {
		targetDiv.style.display = "none";
		} else {
		targetDiv.style.display = "block";
		}
	};

});


window.onload = function() {
	//Compartilhamento - Single Post

	// Facebook
	//Constrói a URL depois que o DOM estiver pronto
	document.addEventListener("DOMContentLoaded", function () {
	//altera a URL do botão
	document.getElementById("facebook-share-btt").href = "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href);
	}, false);

	// Whatsapp
	//Constrói a URL depois que o DOM estiver pronto
	document.addEventListener("DOMContentLoaded", function () {
	//conteúdo que será compartilhado: Título da página + URL
	var conteudo = encodeURIComponent(document.title + " " + window.location.href);
	//altera a URL do botão
	document.getElementById("whatsapp-share-btt").href = "https://api.whatsapp.com/send?text=" + conteudo;
	}, false);

	// Twitter

	//Constrói a URL depois que o DOM estiver pronto        
	document.addEventListener("DOMContentLoaded", function () {
	var url = encodeURIComponent(window.location.href);
	var titulo = encodeURIComponent(document.title);
	//var via = encodeURIComponent("usuario-twitter"); //nome de usuário do twitter do seu site
	//altera a URL do botão
	document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url=" + url + "&text=" + titulo;

	//se for usar o atributo via, utilize a seguinte url
	//document.getElementById("twitter-share-btt").href = "https://twitter.com/intent/tweet?url="+url+"&text="+titulo+"&via="+via;
	}, false);

	// Pinterest
	//Constrói a URL depois que o DOM estiver pronto
	document.addEventListener("DOMContentLoaded", function () {
	var url = encodeURIComponent(window.location.href);

	//tenta obter o conteúdo da meta tag description
	var desc = document.querySelector("meta[name='description']");
	desc = (!!desc) ? desc.getAttribute("content") : null;

	//se a meta tag description estiver ausente...
	if (!desc) {
		//...tenta obter o conteúdo da meta tag og:description
		desc = document.querySelector("meta[property='og:description']");
		desc = (!!desc) ? desc.getAttribute("content") : null;
	}

	//metas tags description e og:description ausentes
	if (!desc) {
		//obtém title
		desc = document.title;
	}

	//altera a URL do botão
	document.getElementById("pinterest-share-btt").href = "https://www.pinterest.com/pin/create/button/?url=" + url + "&description=" + encodeURIComponent(desc);
	}, false);

	//Linkedin

	//Constrói a URL depois que o DOM estiver pronto
	document.addEventListener("DOMContentLoaded", function () {
	var url = encodeURIComponent(window.location.href); //url
	var titulo = encodeURIComponent(document.title); //título
	var linkedinLink = "https://www.linkedin.com/shareArticle?mini=true&url=" + url + "&title=" + titulo;

	//tenta obter o conteúdo da meta tag description
	var summary = document.querySelector("meta[name='description']");
	summary = (!!summary) ? summary.getAttribute("content") : null;

	//se a meta tag description estiver ausente...
	if (!summary) {
		//...tenta obter o conteúdo da meta tag og:description
		summary = document.querySelector("meta[property='og:description']");
		summary = (!!summary) ? summary.getAttribute("content") : null;
	}
	//altera o link do botão
	linkedinLink = (!!summary) ? linkedinLink + "&summary=" + encodeURIComponent(summary) : linkedinLink;
	document.getElementById("linkedin-share-btt").href = linkedinLink;
	}, false);


	document.getElementById("comment").placeholder = "Escreva seu comentário";
	document.getElementById("author").placeholder = "Nome";
	document.getElementById("email").placeholder = "Email";
	var editlink = document.querySelector("a.comment-edit-link");
	editlink.forEach(anchor => {
	anchor.innerHTML = "Editar";
	});
};









function dropdown(num) {
	const dpanelAll = document.getElementsByClassName('dpanel');
	dpanelAll[num-1].classList.toggle('show');
} // my first javascript code :D

var acc = document.getElementsByClassName("accordion");
b = document.getElementsByTagName('body')[0];

// my code- this sets the accordion panels to open instead of closed upon loading resource page
if (b.classList.contains('resource')) {
	var panels = document.getElementsByClassName('apanel');
	var c;
	for (c=0; c < panels.length; c++) {
		acc[c].classList.toggle('active');
		panels[c].style.maxHeight = panels[c].scrollHeight + "px";
    }
}
//
var i;
for (i = 0; i < acc.length; i++) {
	acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    
	this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
		panel.style.maxHeight = null;
    } else {
		panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
} // from w3schools

var theme;
const getLinks = document.getElementsByTagName('link');

var retro = [
	'#ffd4e2', '#ffe8f0', '#ff6195', '#ff91b5', '#778899', 'rgba(255,255,255)', 'rgba(255,255,255,0.7)',
	'rgba(230,245,255)', 'rgba(230,245,255,0.7)', 'rgba(205,235,254)', 'rgba(175,225,253)', 'rgba(150,200,252)',
	'rgba(205,235,254,0.8)', 'rgba(255,255,255,0.8)', 'rgba(255,232,240,0.8)', '"\\2606"', '"\\2605"'
];
retro = retro.join(' ');
var gothic = [
	'#000000', '#474747', '#805c5c', '#472929', 'rgba(255,255,255)', 'rgba(120,120,120)', 'rgba(120,120,120,0.8)',
	'rgba(255,90,90)', 'rgba(255,90,90,0.7)', 'rgba(233,45,45)', 'rgba(210,0,0)', 'rgba(199,10,0)',
	'rgba(236,63,60,0.8)', 'rgba(120,120,120,0.8)', 'rgba(71,71,71,0.9)', '"\\271E"', '"\\271F"'
];
gothic = gothic.join(' ');
var russian = [
	'#ffffff', '#779eed', '#ffa1a1', '#ffc2c2', '#000000', 'rgba(73,124,227)', 'rgba(73,124,227,0.8)',
	'rgba(250,80,80)', 'rgba(250,80,80,0.8)', 'rgba(215,49,49)', 'rgba(188,33,33)', 'rgba(166,28,28)',
	'rgba(215,49,49,0.8)', 'rgba(73,124,227,0.8)', 'rgba(119,158,237,0.8)', '"\\2654"', '"\\265A"'
];
russian = russian.join(' ');
const properties = [
	'background', 'lightbackground', 'link', 'link-active', 'text', 'highlight', 'highlight-trans',
	'background2-1', 'background2-1-trans', 'background2-2', 'background2-3', 'background2-4',
	'tooltip1', 'tooltip2', 'tooltip3', 'star1', 'star2'
];

function themeChange(themeName) {
	localStorage.setItem('theme', themeName);
	themeSet();
}

b.addEventListener('load', themeSet());

function themeSet() {
	theme = localStorage.getItem('theme'); 
	theme = theme.split(' ');
	const r = document.querySelector(':root');
	var a;
	for (a = 0; a < properties.length; a++) {
		r.style.setProperty('--' + properties[a], theme[a]);
	}
} // YIPPEEEE

pars = document.getElementsByTagName('p');
for (let par = 0; par < pars.length; par++) {
	let raw = pars[par].innerHTML;
	let fin = '';
	theme = localStorage.getItem('theme'); 
	if (theme === retro) {
		fin = raw.replace(/star1/gi, '&star;');
		fin = raw.replace(/star2/gi, '&starf;');
	}
	else if (theme === gothic) {
		fin = raw.replace(/star1/gi, '&#10014;');
		fin = raw.replace(/star2/gi, '&#10015;');
	}
	else if (theme === russian) {
		fin = raw.replace(/star1/gi, '&#9812;');
		fin = raw.replace(/star2/gi, '&#9818;');
	}
	else {
		fin = raw.replace(/star1/gi, '&star;');
		fin = raw.replace(/star2/gi, '&starf;');
	};
	pars[par].innerHTML = fin;
};


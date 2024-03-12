function dropdown(num) {
	const dpanelAll = document.getElementsByClassName('dpanel');
	dpanelAll[num-1].classList.toggle('show');
} // my first javascript code :D

var acc = document.getElementsByClassName("accordion");
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
	'#ffd4e2', '#ffe8f0', '#ff91b5', '#ff6195', '#778899', 'rgba(255,255,255)', 'rgba(255,255,255,0.7)',
	'rgba(230,245,255)', 'rgba(230,245,255,0.7)', 'rgba(205,235,254)', 'rgba(175,225,253)', 'rgba(150,200,252)',
	'rgba(205,235,254,0.8)', 'rgba(255,255,255,0.8)', 'rgba(255,232,240,0.8)', 'ps2p', 'pixelify', 'cousine_reg'
];
retro = retro.join(' ');
var gothic = [
	'#000000', '#474747', '#870000', '6e0000', 'rgba(255,255,255)', 'rgba(120,120,120)', 'rgba(120,120,120,0.8)',
	'rgba(255,90,90)', 'rgba(255,90,90,0.8)', 'rgba(233,45,45)', 'rgba(210,0,0)', 'rgba(199,10,0)',
	'rgba(236,63,60,0.8)', 'rbga(120,120,120,0.8)', 'rbga(71,71,71,0.9)', 'ps2p', 'pixelify', 'cousine_reg'
];
gothic = gothic.join(' ');

const properties = [
	'background', 'lightbackground', 'link', 'link-active', 'text', 'highlight', 'highlight-trans',
	'background2-1', 'background2-1-trans', 'background2-2', 'background2-3', 'background2-4',
	'tooltip1', 'tooltip2', 'tooltip3', 'heading', 'basictext', 'paragraph'
];

function themeChange(themeName) {
	localStorage.setItem('theme', themeName);
	themeSet();
}

b = document.getElementsByTagName('body')[0];
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
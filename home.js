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

function dropdown(num) {
	const dpanelAll = document.getElementsByClassName('dpanel');
	dpanelAll[num-1].classList.toggle('show');
} // my first javascript code :D

var theme;
const getLinks = document.getElementsByTagName('link');
function themeChange(stylesheet) {
	localStorage.setItem('theme', stylesheet);
	themeSet();
}

b = document.getElementsByTagName('body')[0];
b.addEventListener('load', themeSet());


function themeSet() {
	theme = localStorage.getItem('theme');
	if (b.classList.contains('lesson')) {
		getLinks[0].href = '../styles/' + theme;		

	} else {
		getLinks[0].href = 'styles/' + theme;
	}
} // YIPPEEEE
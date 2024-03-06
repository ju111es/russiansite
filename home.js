function dropdown(num) {
	const dpanelAll = document.getElementsByClassName('dpanel');
	dpanelAll[num-1].classList.toggle('show');
}
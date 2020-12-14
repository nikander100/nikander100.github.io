const card = document.querySelector(".linkcard");
const mainLink = document.querySelector(".mainlink");

function cardClick(event) {
	const noTextSelected = !window.getSelection().toString();
	if (noTextSelected) {	
		mainLink.click();
	}
}

card.addEventListener("click", cardClick);
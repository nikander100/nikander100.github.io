const card = document.querySelector(".linkcard");
const mainLink = document.querySelector(".main-link");

function handleClick(event) {
	const noTextSelected = !window.getSelection().toString();
	if (noTextSelected) {	
		mainLink.click();
	}
}

card.addEventListener("click", handleClick);
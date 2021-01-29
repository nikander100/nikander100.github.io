function handleButtons(linkto) {
	switch (linkto) {
		case "youtube":
			window.open("https://youtube.com/nikander100", "_blank");
			break;
		case "github":
			window.open("https://github.com/nikander100", "_blank");
			break;
		case "codam":
			window.open("https://www.codam.nl/", "_blank");
	}
}

function handleNav(linkto) {
	switch (linkto) {
		case "index":
			window.open("index.html", "_self");
			break;
		case "socials":
			window.open("socials.html", "_self");
			break;
		case "portfolio":
			window.open("portfolio.html", "_self");
			break;
		case "contact":
			window.open("contact.html", "_self");
			break;
	}
}
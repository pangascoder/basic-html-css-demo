/*  Only run the following code once the window has loaded all the elements */
window.onload = function() {

	let url_string = window.location.href
	var url = new URL(url_string);

	let name = url.searchParams.get("name");
	let nameElement = document.getElementById("name");
	nameElement.innerText = name;

	let price = url.searchParams.get("price");
	let priceElement = document.getElementById("price");
	priceElement.innerText = "$" + price;

	let image = url.searchParams.get("image");
	let imageElement = document.getElementById("image");
	imageElement.setAttribute("src", "imgs/" + image + ".webp")
}

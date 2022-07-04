/*  Only run the following code once the window has loaded all the elements */
window.onload = function() {

	/* Mobile Navigation */

	/* Get the elements we need to manipulate:
		* The burger icon (or the toggle button) referenced using the class name toggle-button
		* The container of the list of links referenced using the class name nav-links
	*/
	const toggleButton = document.getElementsByClassName('toggle-button')[0]	/* This function returns an array. Adding [0] indicates that we only want the first child (in this case there's only one child) */
	const navLinks = document.getElementsByClassName('nav-links')[0]

	/* We assign a function to an event, in this case a click. */
	/* So when a user clicks on the element (the toggle button), the code inside the function will run. */
	toggleButton.onclick = function() {
		navLinks.classList.toggle('active')		/* We add the active class so it overrides the display: none property of the nav-links. Refer to your stylesheet. */
												/* Toggle simply means to remove when it exists or to add when it doesn't */
	}


	/* Popup */

	/* Get the elements we need to manipulate:
		* The button that will show the popup referenced using the ID ShowPopupBooBtn
		* The container of the popup element referenced using the ID PopupBoo
		* The container of the close icon referenced using the CSS selectors #PopupBoo and .close-button
	*/
	const showPopupBooBtn = document.getElementById('ShowPopupBooBtn')
	const popupBoo = document.getElementById('PopupBoo')
	const popupBooClose = document.querySelectorAll('#PopupBoo .close-button')[0]

	/* Assign a function when the Show Popup button is clicked. */
	showPopupBooBtn.onclick = function() {
		popupBoo.classList.add('open')		/* Adding the class open will override the display: none property of the popup */
	}

	popupBooClose.onclick = function() {
		popupBoo.classList.remove('open')	/* Removing the class open means the display: none property is followed by CSS */
	}

}

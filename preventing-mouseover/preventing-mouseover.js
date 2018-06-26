(function () {
	const hoverClickButton = document.querySelector('#button');
	const displayDiv = document.querySelector('#display');

	hoverClickButton.addEventListener('mouseover', handleMouseOver);
	hoverClickButton.addEventListener('mouseout', handleMouseOut);
	hoverClickButton.addEventListener('click', handleClick);

	function handleClick(event) {
		displayDiv.style.backgroundColor = 'red';
	}

	function handleMouseOut(event) {
		if (detectMobile()) {
			return;
		}
		displayDiv.style.backgroundColor = 'white';
	}

	function handleMouseOver(event) {
		if (detectMobile()) {
			return;
		}
		displayDiv.style.backgroundColor = 'blue';
	}

	function detectMobile() {
		const userAgent = navigator.userAgent || navigator.vendor || window.opera;
		let result = false;

		if (/windows phone/i.test(userAgent)) {
			result = true;
		} else if (/android/i.test(userAgent)) {
			result = true;
		} else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
			result = true;
		}

		return result;
	}
}());
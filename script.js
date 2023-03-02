const convertBtn = document.getElementById("convert-btn");
convertBtn.addEventListener("click", () => {
	const fromValue = parseFloat(document.getElementById("from-value").value);
	const fromUnit = document.getElementById("from-unit").value;
	const toUnit = document.getElementById("to-unit").value;

	let toValue;
	switch (fromUnit) {
		case "meters":
			switch (toUnit) {
				case "feet":
					toValue = fromValue * 3.2808;
					break;
				case "yards":
					toValue = fromValue * 1.0936;
					break;
				default:
					toValue = fromValue;
			}
			break;
		case "feet":
			switch (toUnit) {
				case "meters":
					toValue = fromValue / 3.2808;
					break;
				case "yards":
					toValue = fromValue / 3.0;
					break;
				default:
					toValue = fromValue;
			}
			break;
		case "yards":
			switch (toUnit) {
				case "meters":
					toValue = fromValue / 1.0936;
					break;
				case "feet":
					toValue = fromValue * 3.0;
					break;
				default:
					toValue = fromValue;
			}
			break;
		default:
			toValue = fromValue;
	}

	document.getElementById("to-value").value = toValue.toFixed(2);
});


function openNav () {
	var x = document.getElementById("navigation");

	if (x.className === "navigation"){
		x.className += " menujs";
		document.querySelector("threeline-icon").innerHTML = "&Cross;";
	} else {
		x.className = "navigation";
		document.querySelector("threeline-icon").innerHTML = "&#9776;";
	}
}
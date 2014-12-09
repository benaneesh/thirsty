document.addEventListener("DOMContentLoaded", function (event) {
	setTimeout(function () {
		document.getElementById('title').setAttribute("style", "opacity: 0;-webkit-animation: fadeout 3s;-moz-animation: fadeout 3s;-ms-animation: fadeout 3s;-o-animation: fadeout 3s;animation: fadeout 3s;");
	}, 3000);
	setTimeout(function () {
		document.getElementById('subtitle').setAttribute("style", "opacity: 0;-webkit-animation: fadein 3s;-moz-animation: fadein 3s;-ms-animation: fadein 3s;-o-animation: fadein 3s;animation: fadein 3s;");
	}, 1000);


	console.log("I'll kill you, console checker");
});

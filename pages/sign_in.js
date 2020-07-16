"use strict";
$.pages["Sign In"] = (() => {

const forward = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = {
	"flex": "1 1 auto",
	"display": "grid",
	"place-items": "center",
};

let img = document.createElement("img"); main.appendChild(img);
img.src = "resources/splash.jpg";
img.ngstyle = { objectFit:"contain", objectPosition:"center" };
	
let button = document.createElement("button"); main.appendChild(button);
button.textContent = "Sign In";
button.ngpointerdown = () => { $.nav.goTo("Patient List"); };

return {
	forward: forward,
	back: back,
};

})();

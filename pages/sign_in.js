"use strict";
$.pages["Sign In"] = (() => {

const forward = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = { flex:"1 1 auto", display:"grid", placeItems:"center", background:"url('resources/splash.jpg') no-repeat center center fixed", backgroundSize:"cover" };

let button = document.createElement("button"); main.appendChild(button);
button.textContent = "Sign In";
button.ngpointerdown = () => { $.nav.goTo("Patient List"); };

return {
	forward: forward,
	back: back,
};

})();

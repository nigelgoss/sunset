"use strict";
$.pages["Sign In"] = (() => {

const forward = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = {"flex":"1 1 100%", "display":"grid", "place-items":"center", "background":"url('resources/splash.jpg') no-repeat center center fixed", "background-size":"cover"};

let form = document.createElement("form"); main.appendChild(form);
	
let div = document.createElement("div"); form.appendChild(div);
div.ngstyle = {"display":"grid", "background-color":"rgb(255,255,255,0.67)", "padding":"20px", "border-radius":"10px", "grid-template-columns":"auto auto", "grid-gap":"5px"};

let label = document.createElement("label"); div.appendChild(label); label.textContent = "Username";
let input = document.createElement("input"); div.appendChild(input);
input.type="text";
input.required = true;
input.autocomplete = "username";
	
label = document.createElement("label"); div.appendChild(label); label.textContent = "Password";
input = document.createElement("input"); div.appendChild(input);
input.type="password";
input.required = true;
input.autocomplete = "current-password";

let button = document.createElement("button"); div.appendChild(button);
button.ngstyle = {"grid-column":"1/-1"};
button.textContent = "Sign In";
button.ngpointerdown = () => {
	if (form.reportValidity() === false) return;
	$.nav.goTo("Patient List");
};

return {
	forward: forward,
	back: back,
};

})();

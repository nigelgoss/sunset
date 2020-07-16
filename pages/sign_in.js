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

let div = document.createElement("div"); main.appendChild(div);
div.ngstyle = { display:"grid", backgroundColor:"white", padding:"20px" };

let label = document.createElement("label"); div.appendChild(label); label.textContent = "Username";
let input = document.createElement("input"); div.appendChild(input); input.type="text;

label = document.createElement("label"); div.appendChild(label); label.textContent = "Password";
input = document.createElement("input"); div.appendChild(input); input.type="password;

let button = document.createElement("button"); div.appendChild(button);
button.textContent = "Sign In";
button.ngpointerdown = () => { $.nav.goTo("Patient List"); };

return {
	forward: forward,
	back: back,
};

})();

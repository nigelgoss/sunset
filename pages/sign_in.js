"use strict";
$.pages["Sign In"] = (() => {

const forward = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = { flex:"1 1 100%", display:"grid", placeItems:"center", background:"url('resources/splash.jpg') no-repeat center center fixed", backgroundSize:"cover" };

let form = document.createElement("form"); main.appendChild(form);
	
let div = document.createElement("div"); form.appendChild(div);
div.ngstyle = { display:"grid", backgroundColor:"rgb(255,255,255,0.67)", padding:"20px", borderRadius:"10px", gridTemplateColumns:"auto auto", gridGap:"5px" };

let label = document.createElement("label"); div.appendChild(label); label.textContent = "Username";
let input = document.createElement("input"); div.appendChild(input);
input.type="text";
input.autocomplete = "username";
	
label = document.createElement("label"); div.appendChild(label); label.textContent = "Password";
input = document.createElement("input"); div.appendChild(input);
input.type="password";
input.autocomplete = "current-password";

let button = document.createElement("button"); div.appendChild(button);
button.ngstyle = { gridColumn:"1/-1" };
button.textContent = "Sign In";
button.ngpointerdown = () => { $.nav.goTo("Patient List"); };

return {
	forward: forward,
	back: back,
};

})();

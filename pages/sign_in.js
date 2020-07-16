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
div.ngstyle = { display:"grid", backgroundColor:"rgb(255,255,255,0.67)", padding:"20px", borderRadius:"10px", gridTemplateColumns:"auto auto", gridGap:"5px" };

let label = document.createElement("label"); div.appendChild(label); label.textContent = "Username";
let input = document.createElement("input"); div.appendChild(input); input.type="text";

label = document.createElement("label"); div.appendChild(label); label.textContent = "Password";
let form = document.createElement("form"); div.appendChild(form); //Keep Chrome happy
input = document.createElement("input"); form.appendChild(input); input.type="password";

let button = document.createElement("button"); div.appendChild(button);
button.ngstyle = { gridColumn:"1/-1" };
button.textContent = "Sign In";
button.ngpointerdown = () => { $.nav.goTo("Patient List"); };

return {
	forward: forward,
	back: back,
};

})();

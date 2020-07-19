"use strict";
$.pages["Menu"] = (() => {

const forward = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");

let button = document.createElement("button"); main.appendChild(button);
button.ngstyle = {"border-radius":"999px"};
button.className = "faS";
button.textContent = " Patient List";
button.ngpointerdown = () => { $.nav.back("Patient List"); };

button = document.createElement("button"); main.appendChild(button);
button.ngstyle = {"border-radius":"999px"};
button.className = "faS";
button.textContent = " Admin"; 
button.ngpointerdown = () => { $.nav.goTo("Admin"); };

button = document.createElement("button"); main.appendChild(button);
button.ngstyle = {"border-radius":"999px"};
button.className = "faS";
button.textContent = " Help";
button.ngpointerdown = () => { $.ngX.open("https://www.google.com/"); };

button = document.createElement("button"); main.appendChild(button);
button.ngstyle = {"border-radius":"999px"};
button.className = "faS";
button.textContent = " Sign Out";
button.ngpointerdown = () => { location.reload(true); };

return {
	forward: forward,
	back: back,
};
  
})();

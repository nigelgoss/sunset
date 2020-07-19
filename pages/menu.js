"use strict";
$.pages["Menu"] = (() => {

const forward = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.textContent = "** Menu **";

return {
	forward: forward,
	back: back,
};
  
})();

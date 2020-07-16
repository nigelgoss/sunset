"use strict";
$.pages["Admin"] = (() => {

const forward = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.textContent = "** Admin **";

return {
	forward: forward,
	back: back,
};
  
})();

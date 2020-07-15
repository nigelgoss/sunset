"use strict";
$.pages["Admin"] = (() => {

const load = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.textContent = "** Admin **";

return {
	"forwards": load,
	"backwards": back,
};
  
})();

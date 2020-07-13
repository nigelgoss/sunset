$.pages["Sign In"] = (() => {

const load = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");

let button = document.createElement("button"); main.appendChild(button);
button.textContent = "Sign In";
button.ngpointerdown = function () { $.nav.goTo("Patient List"); };

return {
	"forwards": load,
	"backwards": back,
};

})();

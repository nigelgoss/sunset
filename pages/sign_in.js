$.pages["Sign In"] = (() => {

const load = ($d, $cb) => {
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = {
	"flex": "1 1 auto",
	"display": "grid",
	"place-items": "center",
};

let button = document.createElement("button"); main.appendChild(button);
button.textContent = "Sign In";
button.ngpointerdown = () => { $.nav.goTo("Patient List"); };

return {
	"forwards": load,
	"backwards": back,
};

})();

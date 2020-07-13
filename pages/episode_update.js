(() => {

const load ($d, $cb) => {
	main.textContent = JSON.stringify($d);
	$cb(main);
};

const back ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");

$.pages["Episode Update"] = {
	"forwards": load,
	"backwards": back,
};

})();

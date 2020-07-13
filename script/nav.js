$.nav = (() => {

const history = [];

const goTo = ($page, $input) => {
	if ($page === history.slice(-1)[0]?.page) return; 
	$.pages[$page].forwards($input, function ($ele) {
		history.push({"page":$page, "input":$input});
		updateViewport($ele);
	});
};

const back = ($refresh) => {
	if (history.length <= 2) return;
	history.pop();
	let d = history.slice(-1)[0];
	$.pages[d.page].forwards(d.input, function ($ele) {
		updateViewport($ele);
	});
};

const updateViewport = ($ele) => {
	let main = document.body.querySelector("main");
	main.parentNode.replaceChild($ele, main);
	title.textContent = history.slice(-1)[0].page;
	buttonBack.style.display = (history.length > 2) ? "inline-block" : "none";
};
  
let header = document.createElement("header");
header.style.backgroundColor = "lightblue";
header.style.padding = "10px";
header.style.textAlign = "center";

const buttonBack = document.createElement("button"); header.appendChild(buttonBack);
buttonBack.textContent = "Back";
buttonBack.onpointerdown = function () { $.nav.back(); };

const title = document.createElement("span"); header.appendChild(title);

button = document.createElement("button"); header.appendChild(button);
button.textContent = "Admin";
button.onpointerdown = function () { $.nav.goTo("Admin"); };

let oldHeader = document.body.querySelector("header");
oldHeader.parentNode.replaceChild(header, oldHeader);
  
return {
	"goTo": goTo,
	"back": back,
};
  
})();

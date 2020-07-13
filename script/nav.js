$.nav = (() => {

const history = [];

const goTo = ($page, $input) => {
	if ($page === history.slice(-1)[0]?.page) return; 
	$.pages[$page].forwards($input, ($ele) => {
		history.push({"page":$page, "input":$input});
		updateViewport($ele);
	});
};

const back = ($refresh) => {
	if (history.length <= 2) return;
	history.pop();
	let d = history.slice(-1)[0];
	$.pages[d.page].forwards(d.input, ($ele) => {
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
header.ngstyle = {
	backgroundColor: "lightblue",
	padding: "10px",
	textAlign: "center",
	display: "flex",
};

let div = document.createElement("div"); header.appendChild(div);
div.ngstyle = { flex: "1 1 auto", };

const buttonBack = document.createElement("button"); div.appendChild(buttonBack);
buttonBack.textContent = "Back";
buttonBack.ngpointerdown = () => { $.nav.back(); };

const title = document.createElement("div"); header.appendChild(title);
title.ngstyle = { flex: "1 1 auto", };

div = document.createElement("div"); header.appendChild(div);
div.ngstyle = { flex: "1 1 auto", };

buttonAdmin = document.createElement("button"); div.appendChild(buttonAdmin);
buttonAdmin.textContent = "Admin";
buttonAdmin.ngpointerdown = () => { $.nav.goTo("Admin"); };

let oldHeader = document.body.querySelector("header");
oldHeader.parentNode.replaceChild(header, oldHeader);
  
return {
	"goTo": goTo,
	"back": back,
};
  
})();

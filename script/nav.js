$.nav = (() => {

const history = [];

const goTo = ($page, $input) => {
	if ($page === history.slice(-1)[0]?.page) return; //Can't go to the page you're already on
	$.pages[$page].forward($input, ($ele) => {
	    	if (history.length > 0) history[history.length-1].status = {"TBC":"TBC"};
		history.push({"page":$page, "input":$input});
		updateViewport($ele);
	});
};

const back = ($refresh) => {
	if (history.length <= 2) return;
	history.pop();
	let d = history.slice(-1)[0];
	$.pages[d.page].back(d.status, ($ele) => { updateViewport($ele); });
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
div.ngstyle = { flex: "0 0 auto", };

const buttonBack = document.createElement("button"); div.appendChild(buttonBack);
buttonBack.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
buttonBack.className = "faS";
buttonBack.textContent = "";
buttonBack.ngpointerdown = () => { $.nav.back(); };

const title = document.createElement("div"); header.appendChild(title);
title.ngstyle = {
	flex: "1 1 auto",
	display: "grid",
	placeItems: "center",
};

div = document.createElement("div"); header.appendChild(div);
div.ngstyle = { flex: "0 0 auto", };

let button = document.createElement("button"); div.appendChild(button);
button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
button.className = "faS";
button.textContent = "";
button.ngpointerdown = () => { location.reload(true); };

button = document.createElement("button"); div.appendChild(button);
button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
button.className = "faS";
button.textContent = ""; 
button.ngpointerdown = () => { $.nav.goTo("Admin"); };

button = document.createElement("button"); div.appendChild(button);
button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
button.className = "faS";
button.textContent = "";
button.ngpointerdown = () => { $.ngX.open("https://www.google.com/"); };

button = document.createElement("button"); div.appendChild(button);
button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
button.className = "faS";
button.textContent = "";
button.ngpointerdown = () => { $.nav.back("Patient List"); };

let oldHeader = document.body.querySelector("header");
oldHeader.parentNode.replaceChild(header, oldHeader);
  
return {
	"goTo": goTo,
	"back": back,
};
  
})();

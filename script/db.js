"use strict";
$.db = (() => {

const delay = (ms) => { return new Promise((resolve) => { setTimeout(() => { resolve(); }, ms); }); };
	
const query = ($qry, $params = {}, $success) => {

	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = async () => {
		if (xhr.readyState !== 4) return;
		await delay(1000);
		if (xhr.status === 200) $success(JSON.parse(xhr.responseText));
		spinner(false);
	};
	xhr.open("GET", "!/"+$qry+".sql", true);
	xhr.send(JSON.stringify([$qry, $params]));
	spinner(true);
	
};

let spinnerCount = 0;
const spinner = ($status) => {
	spinnerCount += ($status === true) ? 1 : -1;
	if (spinnerCount > 0) {
		document.body.appendChild(spinnerDiv);
	} else {
		spinnerDiv.remove();
	};
};

const spinnerDiv = document.createElement("div");
spinnerDiv.ngstyle = { backgroundColor:"grey", position:"absolute", top:"0", left:"0", width:"100%", height:"100%", placeItems:"center", display:"grid" };
let span = document.createElement("span"); spinnerDiv.appendChild(span);
span.textContent = "Please wait...";

return {
	query: query,
};
  
})();

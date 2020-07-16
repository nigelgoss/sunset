"use strict";
$.db = (() => {

const delay = (ms) => { new Promise((resolve) => { setTimeout(() => { resolve(); }, ms) }); };
	
const query = ($qry, $params = {}, $success) => {

	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
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
	console.log("Spinner", (spinnerCount > 0) ? true : false);
};
	
return {
	query: query,
};
  
})();

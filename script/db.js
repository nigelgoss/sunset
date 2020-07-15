"use strict";
$.db = (() => {

const query = ($qry, $params = {}, $success) => {

	const xhr = new XMLHttpRequest();
	xhr.onreadystatechange = () => {
		if (xhr.readyState !== 4) return;
		if (xhr.status === 200) $success(JSON.parse(xhr.responseText));
	};
	xhr.open("POST", "/!/"+$qry+".sql", true);
	xhr.send(JSON.stringify([$qry, $params]));
	
};

return {
	query: query,
};
  
})();

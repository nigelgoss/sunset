$.ngX = (() => {

const open = ($url) => {
	window.open($url);
};

const alert = ($msg) => {
	window.alert($msg);
};

const ngserialise = ($ele = document.body) => {
	const d = {};
	$ele.querySelectorAll("*[name]").forEach(($v) => {
		if (d[$v.name] === undefined) d[$v.name] = ($v.type === "checkbox") ? [] : null;
		if ($v.checked === false) return;
		let value = ($v.value === "") ? null : $v.value;
		if (Array.isArray(d[$v.name]) === true) { d[$v.name].push(value); } else { d[$v.name] = value; };
	});
	return d;
};

return {
	"open": open,
	"alert": alert,
	"ngserialise": ngserialise,
};
  
})();

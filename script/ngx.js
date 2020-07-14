$.ngX = (() => {

const open = ($url) => {
	window.open($url);
};

const alert = ($msg) => {
	window.alert($msg);
};

const serialise = ($ele = document.body) => {
	const d = {};
	$ele.querySelectorAll("*[name]").forEach(function ($v) {
		if (d[$v.name] === undefined) d[$v.name] = ($v.type === "checkbox") ? [] : null;
		if (["checkbox", "radio"].indexOf($v.type) > -1 && $v.checked === false) return;
		let value = ($v.value === "") ? null : $v.value;
		if (Array.isArray(d[$v.name]) === true) { d[$v.name].push(value); } else { d[$v.name] = value; };
	});
	return d;
};
	
const deserialise = ($d) => {
	Object.keys($d).forEach(($v) => {
		document.body.querySelectorAll("*[name='"+$v+"']").forEach(($v2) => {
			console.log($v, $v2);
			if (["checkbox", "radio"].indexOf($v2.type) > -1) {
				$v2.checked = ($v2.value === $d[$v]) ? true : false;
			} else {
				$v2.value = $d[$v];
			};
		});
	});
};

return {
	open: open,
	alert: alert,
	serialise: serialise,
	deserialise: deserialise,
};
  
})();

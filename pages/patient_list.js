$.pages["Patient List"] = (() => {

const load = ($d, $cb) => {
	build();
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");

let style = document.createElement("style"); main.appendChild(style);
style.textContent = [
	"main tbody:nth-of-type(odd) { background-color:#fafafa; }",
	"main tbody:nth-of-type(even) { background-color:#e6e6e6; }",
	"main td { padding:10px; }",
].join("\n");

let table = document.createElement("table"); main.appendChild(table);
table.ngstyle = {
	width: "100%",
	borderCollapse: "collapse",
};

let thead = document.createElement("thead"); table.appendChild(thead);
thead.ngstyle = {
	fontWeight: "bold",
	backgroundColor: "lightgrey",
	border: "0 solid white",
	borderWidth: "2px 0 2px 0",
};

let tr = document.createElement("tr"); thead.appendChild(tr);

let td = document.createElement("td"); tr.appendChild(td); td.textContent = "Location";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "Name";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "NHS No.";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "Hospital No.";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "Birth";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "Death";
				
td = document.createElement("td"); tr.appendChild(td);
td.ngstyle = {
	width: "1px",
	textAlign: "right",
};
				
let button = document.createElement("button"); td.appendChild(button);
button.ngstyle = {
	backgroundColor: "#007f3b",
	color: "#ffffff",
	borderRadius: "999px",
};
button.ngpointerdown = () => {};
	let span = document.createElement("span"); button.appendChild(span);
	span.className = "faS";
	span.textContent = "";

const build = () => {

	const $d = [
		{ "EPN":"1", "Episode":"1", "Location":"THH-1", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
		{ "EPN":"2", "Episode":"1", "Location":"THH-2", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
		{ "EPN":"3", "Episode":"1", "Location":"THH-3", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
		{ "EPN":"4", "Episode":"1", "Location":"THH-4", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
		{ "EPN":"5", "Episode":"1", "Location":"THH-5", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
		{ "EPN":"6", "Episode":"1", "Location":"THH-6", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":"Test"},
		{ "EPN":"7", "Episode":"1", "Location":"THH-7", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
		{ "EPN":"8", "Episode":"1", "Location":"THH-8", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
		{ "EPN":"9", "Episode":"1", "Location":"THH-9", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
		{ "EPN":"10", "Episode":"1", "Location":"THH-10", "Name":"SMITH, John (Mr)", "NHSNo":"000 000 0000", "HospitalNo":"00000000", "Birth":"01 Jan 1900", "Death":"01 Jan 2000", "Notes":null},
	];
	
	table.querySelectorAll("tbody").forEach(($v) => { $v.parentElement.removeChild($v); });
	
	$d.forEach(($v) => {
		
		let tbody = document.createElement("tbody"); table.appendChild(tbody);
		tbody.ngstyle = {
			border: "0 solid white",
			borderWidth: "2px 0 2px 0",
		};

		let tr = document.createElement("tr"); tbody.appendChild(tr);

		let td = document.createElement("td"); tr.appendChild(td);
		if ($v.Notes !== null) td.rowSpan = "2";
		td.textContent = $v.Location;
		td = document.createElement("td"); tr.appendChild(td); td.textContent = $v.Name;
		td = document.createElement("td"); tr.appendChild(td); td.textContent = $v.NHSNo;
		td = document.createElement("td"); tr.appendChild(td); td.textContent = $v.HospitalNo;
		td = document.createElement("td"); tr.appendChild(td); td.textContent = $v.Birth;
		td = document.createElement("td"); tr.appendChild(td); td.textContent = $v.Death;

		td = document.createElement("td"); tr.appendChild(td);
		if ($v.Notes !== null) td.rowSpan = "2";
		td.ngstyle = { textAlign: "right", };
		button = document.createElement("button"); td.appendChild(button);
		button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
		button.ngpointerdown = () => { $.nav.goTo("Episode Update", {"EPN":$v.EPN, "Episode":$v.Episode}); };
			let span = document.createElement("span"); button.appendChild(span);
			span.className = "faS";
			span.textContent = "";
		
		if ($v.Notes !== null) {
			tr = document.createElement("tr"); tbody.appendChild(tr);
			td = document.createElement("td"); tr.appendChild(td);
			td.colSpan = "5";
			td.textContent = "Notes: " + $v.Notes;
		};
		
	});

};

return {
	"forwards": load,
	"backwards": back,
};

})();

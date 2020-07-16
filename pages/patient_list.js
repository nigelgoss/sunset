"use strict";
$.pages["Patient List"] = (() => {

const forward = ($in, $cb) => {
	
	$.db.query("patient_list", {}, ($d) => {
		build($d);
		$cb(main);
	});
	
};

const back = ($in, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = { overflow:"auto" };

let style = document.createElement("style"); main.appendChild(style);
style.textContent = [
	"main tbody:nth-of-type(odd) { background-color:#fafafa; }",
	"main tbody:nth-of-type(even) { background-color:#e6e6e6; }",
	"main td { padding:10px; }",
].join("\n");

let table = document.createElement("table"); main.appendChild(table);
table.ngstyle = { width:"100%", borderCollapse:"collapse", };

let thead = document.createElement("thead"); table.appendChild(thead);
thead.ngstyle = { fontWeight:"bold", backgroundColor:"lightgrey", border:"0 solid white", borderWidth:"2px 0 2px 0", };

let tr = document.createElement("tr"); thead.appendChild(tr);
let td = document.createElement("td"); tr.appendChild(td); td.textContent = "Location";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "Name";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "NHS No.";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "Hospital No.";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "Birth";
td = document.createElement("td"); tr.appendChild(td); td.textContent = "Death";			
td = document.createElement("td"); tr.appendChild(td);
td.ngstyle = { width:"1px", textAlign:"right", };
				
	let button = document.createElement("button"); td.appendChild(button);
	button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
	button.className = "faS";
	button.textContent = "";
	button.ngpointerdown = () => {
		trSearch.style.display = (trSearch.style.display === "none") ? "table-row" : "none";
	};

const trSearch = document.createElement("tr"); thead.appendChild(trSearch);
trSearch.ngstyle = { display:"none", };
td = document.createElement("td"); trSearch.appendChild(td);
let input = document.createElement("input"); td.appendChild(input);
input.type = "text"; 
td = document.createElement("td"); trSearch.appendChild(td);
input = document.createElement("input"); td.appendChild(input);
input.type = "text";
td = document.createElement("td"); trSearch.appendChild(td);
input = document.createElement("input"); td.appendChild(input);
input.type = "text";
td = document.createElement("td"); trSearch.appendChild(td);
input = document.createElement("input"); td.appendChild(input);
input.type = "text"; 
td = document.createElement("td"); trSearch.appendChild(td);
input = document.createElement("input"); td.appendChild(input);
input.type = "date"; 
td = document.createElement("td"); trSearch.appendChild(td);
input = document.createElement("input"); td.appendChild(input);
input.type = "date"; 
td = document.createElement("td"); trSearch.appendChild(td);
td.ngstyle = { width:"1px", textAlign:"right", };
				
	button = document.createElement("button"); td.appendChild(button);
	button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
	button.className = "faS";
	button.textContent = "";
	button.ngpointerdown = () => {};

const build = ($d) => {

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
	forward: forward,
	back: back,
};

})();

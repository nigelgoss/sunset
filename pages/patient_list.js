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
main.ngstyle = { overflow:"auto", flex:"1 1 auto" };

let style = document.createElement("style"); main.appendChild(style);
style.textContent = [
	"main section { grid-template-columns:repeat(7, auto); }",
	"@media (max-width:800px) { main section { grid-template-columns:repeat(1, auto); } }",
	"main section div { padding:5px; }",
	"main section div:nth-child(14n+1), main section div:nth-child(14n+2), main section div:nth-child(14n+3), main section div:nth-child(14n+4), main section div:nth-child(14n+5), main section div:nth-child(14n+6), main section div:nth-child(14n+7) { background-color:red; }",
	"main section div:nth-child(14n+8), main section div:nth-child(14n+9), main section div:nth-child(14n+10), main section div:nth-child(14n+11), main section div:nth-child(14n+12), main section div:nth-child(14n+13), main section div:nth-child(14n+14) { background-color:green; }",
].join("\n");

const section = document.createElement("section"); main.appendChild(section);
section.ngstyle = { display:"grid" };

/*
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
	button.ngstyle = { borderRadius:"999px", };
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
*/
const build = ($d) => {

	//table.querySelectorAll("tbody").forEach(($v) => { $v.parentElement.removeChild($v); });
	
	$d.forEach(($v) => {
		
		let td = document.createElement("div"); section.appendChild(td); td.textContent = $v.Location;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.Name;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.NHSNo;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.HospitalNo;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.Birth;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.Death;

		td = document.createElement("div"); section.appendChild(td);
		td.ngstyle = { textAlign: "right", };
		let button = document.createElement("button"); td.appendChild(button);
		button.ngstyle = { borderRadius:"999px", };
		button.ngpointerdown = () => { $.nav.goTo("Episode Update", {"EPN":$v.EPN, "Episode":$v.Episode}); };
			let span = document.createElement("span"); button.appendChild(span);
			span.className = "faS";
			span.textContent = "";
		
	});

};

return {
	forward: forward,
	back: back,
};

})();

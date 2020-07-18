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
main.ngstyle = {"overflow":"auto", "flex":"1 1 auto"};

let style = document.createElement("style"); main.appendChild(style);
style.textContent = [
	":root {",
	"--borderColour:grey;",
	"}",
	
	"main section div { padding:10px; display:grid; align-items:center; }",
	"main section .tbodyOdd { background-color:lightgreen; }",
	"main section .tbodyEven { background-color:lightblue; }",

	"@media (max-width:399px) {",
		/* NARROW */
		"main section { grid-template-columns:auto 1fr min-content; }",
		"main section .notThin { display:none; }",
		"main section div { order:var(--thinOrder); }",
		"main section .thin-border { border-bottom:1px solid var(--borderColour); }",
		"main section .thin-rowspan-7 { grid-row-end:span 7; }",
	"} @media (min-width:400px) {",
		/* WIDE */
		"main section { grid-template-columns:auto auto auto auto auto auto min-content; }",
		"main section .notFat { display:none; }",
		"main section div { order:var(--fatOrder); }",
		"main section .fat-border { border-bottom:1px solid var(--borderColour); }",
		"main section .fat-rowspan-2 { grid-row-end:span 2; }",
		"main section .fat-colspan-5 { grid-column-end:span 5; }",
	"}"
].join("\n");
	
const section = document.createElement("section"); main.appendChild(section);
section.ngstyle = {"display":"grid"};

const build = ($d) => {

	//table.querySelectorAll("tbody").forEach(($v) => { $v.parentElement.removeChild($v); });

	["Fridge", "Name", "NHS No.", "Hospital No.", "Born", "Died", null].forEach(($v, $i) => {

		let div = document.createElement("div"); section.appendChild(div);
		div.classList.add("notThin", "fat-border");
		if ($i === 7) div.classList.add("thin-border");
		div.ngstyle = {"--fatOrder": $i};
		div.ngstyle = {"font-style":"italic", "background-color":"lightgrey"};
		div.textContent = $v;

	});
	
	$d.forEach(($v) => {
		
		let td = document.createElement("div"); section.appendChild(td); td.textContent = $v.Location;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.Name;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.NHSNo;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.HospitalNo;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.Birth;
		td = document.createElement("div"); section.appendChild(td); td.textContent = $v.Death;

		td = document.createElement("div"); section.appendChild(td);
		td.ngstyle = {"text-align":"right"};
		let button = document.createElement("button"); td.appendChild(button);
		button.ngstyle = {"border-radius":"999px"};
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

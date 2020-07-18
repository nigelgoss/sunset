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
	"main div { padding:10px; display:grid; align-items:center; }",
	"main .tbodyOdd { background-color:lightgreen; }",
	"main .tbodyEven { background-color:lightblue; }",

	"@media (max-width:399px) {",
		/* NARROW */
		"main { grid-template-columns:auto 1fr min-content; }",
		"main .notThin { display:none; }",
		"main div { order:var(--thinOrder); }",
		"main .thin-border { border-bottom:1px solid var(--borderColour); }",
		"main .thin-rowspan-7 { grid-row-end:span 7; }",
	"} @media (min-width:400px) {",
		/* WIDE */
		"main { grid-template-columns:auto auto auto auto auto auto min-content; }",
		"main .notFat { display:none; }",
		"main div { order:var(--fatOrder); }",
		"main .fat-border { border-bottom:1px solid var(--borderColour); }",
		"main .fat-rowspan-2 { grid-row-end:span 2; }",
		"main .fat-colspan-5 { grid-column-end:span 5; }",
	"}"
].join("\n");

const section = document.createElement("section"); main.appendChild(section);
section.ngstyle = {"display":"grid"};

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

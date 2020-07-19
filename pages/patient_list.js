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

	["Location", "Name", "NHS No.", "Hospital No.", "Born", "Died", null].forEach(($v, $i) => {

		let div = document.createElement("div"); section.appendChild(div);
		div.classList.add("notThin", "fat-border");
		if ($i === 7) div.classList.add("thin-border");
		div.ngstyle = {"--fatOrder":$i, "font-style":"italic", "background-color":"lightgrey", "position":"sticky", "top":"0"};
		div.textContent = $v;

	});
	
	$d.forEach(($v, $i) => {
		
		let os = $i * 15;
	
		[
			{
				label:{textContent:"Location",classList:[],style:{"--thinOrder":os+1}},
				data:{textContent:"Location",classList:["fat-rowspan-2","fat-border"],style:{"--fatOrder":os+8,"--thinOrder":os+2}}
			},{
				label:{textContent:"Name",classList:[],style:{"--thinOrder":os+4}},
				data:{textContent:"Name",classList:[],style:{"--fatOrder":os+9,"--thinOrder":os+5}}
			},{
				label:{textContent:"NHS No.",classList:[],style:{"--thinOrder":os+6}},
				data:{textContent:"NHSNo",classList:[],style:{"--fatOrder":os+10,"--thinOrder":os+7}}
			},{
				label:{textContent:"Hospital No.",classList:[],style:{"--thinOrder":os+8}},
				data:{textContent:"HospitalNo",classList:[],style:{"--fatOrder":os+11,"--thinOrder":os+8}}
			},{
				label:{textContent:"Born",classList:[],style:{"--thinOrder":os+9}},
				data:{textContent:"Born",classList:[],style:{"--fatOrder":os+12,"--thinOrder":os+10}}
			},{
				label:{textContent:"Died",classList:[],style:{"--thinOrder":os+11}},
				data:{textContent:"Died",classList:[],style:{"--fatOrder":os+13,"--thinOrder":os+12}}
			},{
				data:{classList:["fat-rowspan-2", "fat-border", "thin-rowspan-7", "thin-border"],style:{"--fatOrder":os+14,"--thinOrder":os+3}}
			},{
				label:{textContent:"Notes",classList:["thin-border"],style:{"--thinOrder":os+13}},
				data:{textContent:"Notes",classList:["fat-colspan-5", "fat-border", "thin-border"],style:{"--fatOrder":os+15,"--thinOrder":os+14}}
			}
		].forEach(($v2, $i2) => {

			let div;

			if ($v2.label !== undefined) {
				div = document.createElement("div"); section.appendChild(div);
				div.classList.add("notFat", "label", ...$v2.label.classList);
				div.ngstyle = $v2.label.style;
				div.ngstyle = {"font-style":"italic", "background-color":"lightgrey"};
				div.textContent = $v2.label.textContent;
			};

			div = document.createElement("div"); section.appendChild(div);
			div.classList.add(($i % 2 === 0) ? "tbodyOdd" : "tbodyEven", ...$v2.data.classList);
			div.ngstyle = $v2.data.style;
			if ($v2.data.textContent !== undefined) div.textContent = $v[$v2.data.textContent];

			if ($i2 === 6) {
				let button = document.createElement("button"); div.appendChild(button);
				button.textContent = ">";
				button.ngpointerdown = () => { $.nav.goTo("Episode Update", {"EPN":$v.EPN, "Episode":$v.Episode}); };
			};

		});

	});

};

return {
	forward: forward,
	back: back,
};

})();

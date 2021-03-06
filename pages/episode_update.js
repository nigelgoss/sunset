"use strict";
$.pages["Episode Update"] = (() => {
	
const forward = ($d, $cb) => {
	$.db.query("episode_list", {"EPN":$d.EPN}, ($d) => {
		$.ngX.clear();
		build($d);
		$cb(main);
	});
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = {"display":"flex", "flex-direction":"column", "flex":"1 1 100%", "overflow":"hidden"};

let style = document.createElement("style"); main.appendChild(style);
style.textContent = [
	"main fieldset * { padding:2px; }",
	"@media (max-width:399px) {",
		/* NARROW */
		"main fieldset > div { grid-template-columns:auto; }",
	"} @media (min-width:400px) {",
		/* WIDE */
		"main fieldset > div { grid-template-columns:min-content 1fr; }",
	"}"
].join("\n");	
const patientBanner = document.createElement("div"); main.appendChild(patientBanner);
patientBanner.ngstyle = {"color":"#ffffff", "background-color":"#005EB8", "height":"70px", "flex":"0 0 auto"};

const episodeBanner = document.createElement("div"); main.appendChild(episodeBanner);
episodeBanner.ngstyle = {"flex":"0 0 auto"};
	
let divInput = document.createElement("div"); main.appendChild(divInput);
divInput.ngstyle = {"flex":"1 1 auto", "display":"grid", "grid-template-columns":"repeat(auto-fit, minmax(300px, 1fr))", "overflow":"auto", "border-top":"2px solid var(--background)", "border-bottom":"2px solid var(--background)"};

[
	["Body Registration", [
	 	["Fridge tray no.", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
	 	["Religion", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Size", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Infection status", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Condition of body", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["PM required", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Pacemaker", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
	]],
	["Property", [
	 	["Details", () => { let input = document.createElement("textarea"); return input; }],
	 	["Transferred to", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Date", () => { let input = document.createElement("input"); input.type = "date"; return input; }],
	]],
	["Valuables", [
	 	["Details", () => { let input = document.createElement("textarea"); return input; }],
	 	["Transferred to", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Date", () => { let input = document.createElement("input"); input.type = "date"; return input; }],
	]],
	["Clothing", [
	 	["Details", () => { let input = document.createElement("textarea"); return input; }],
	 	["Transferred to", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Date", () => { let input = document.createElement("input"); input.type = "date"; return input; }],
	]],
	["Babies", [
	 	["Mothers name", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Mothers hospital no.", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Baby named", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Delivery date", () => { let input = document.createElement("input"); input.type = "date"; return input; }],
		["Gestation", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
	]],
	["Funeral Arrangements", [
	 	["Parents arranging", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Cremation / Burial", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Midwife / Nurse name", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
	]],
	["Offsite PM Details", [
	 	["Destination", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Date sent", () => { let input = document.createElement("input"); input.type = "date"; return input; }],
		["Date returned", () => { let input = document.createElement("input"); input.type = "date"; return input; }],
	]],
	["Body Release", [
	 	["Funeral director", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Persons releasing body", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Type of release", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Disposal certificate no.", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Condition of body form given", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Date", () => { let input = document.createElement("input"); input.type = "date"; return input; }],
		["Out of hours release", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Hospital arranged funderal", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
		["Infection form given", () => { let input = document.createElement("input"); input.type = "text"; return input; }],
	]],
	["Notes", [
	 	["Notes", () => { let input = document.createElement("textarea"); return input; }],
	]]
].forEach(($v) => {
	let fieldset = document.createElement("fieldset"); divInput.appendChild(fieldset);
	fieldset.ngstyle = {"background-color":"#eeeeee", "margin":"5px", "border":"2px solid grey", "border-radius":"10px"};
	let legend = document.createElement("legend"); fieldset.appendChild(legend);
	legend.ngstyle = {"font-size":"1.2em", "font-weight":"bold", "border":"2px solid grey", "border-radius":"10px", "background-color":"#FAE100"};
	legend.textContent = $v[0];
	let div = document.createElement("div"); fieldset.appendChild(div);
	div.ngstyle = {"display":"grid", "grid-gap":"5px"};
	$v[1].forEach(($v2) => {
		let label = document.createElement("label"); div.appendChild(label); label.textContent = $v2[0];
		let ele = $v2[1]();
		ele.setAttribute("name", ($v[0] + "|" + $v2[0]).replace(/\W/g, ""));
		div.appendChild(ele);
	});
});

let button = document.createElement("button"); main.appendChild(button);
button.ngstyle = {"flex":"0 0 auto", "width":"100%"};
button.className = "faS";
button.textContent = " Save";
button.ngpointerdown = () => {
	console.log($.ngX.serialise(main));
	$.nav.forceRefresh();
	$.nav.back();
};
	
const build = ($d) => {
	
	patientBanner.textContent = JSON.stringify($d[0][0]);
	
	episodeBanner.textContent = "Episode: ";
	
	$d[1].forEach(($v) => {		
		let button = document.createElement("button"); episodeBanner.appendChild(button);
		button.ngstyle = {"border-radius":"999px"};
		button.textContent = $v.Episode;
		button.ngpointerdown = () => {};
	});
	
	button = document.createElement("button"); episodeBanner.appendChild(button);
	button.ngstyle = {"border-radius":"999px"};
	button.className = "faS";
	button.textContent = "";
	button.ngpointerdown = () => {
		$.ngX.clear();
	};
	
	$.ngX.deserialise(main, $d[1][0]);
	
};
	
return {
	forward: forward,
	back: back,
};

})();

$.pages["Episode Update"] = (() => {

const $d = [
	[
		{"EPN":1, "Name":"SIMTH, John (Mr)"},
	],[
		{"Episode":1, "Body_Registration_Fridge_tray_no_":"Test", "Body_Registration_Religion":"Test", "Body_Registration_Size":"Test", "Body_Registration_Infection_status":"Test", "Body_Registration_Condition_of_body":"Test", "Body_Registration_PM_required":"Test", "Body_Registration_Pacemaker":"Test", "Property_Details":"Test Test Test", "Property_Transferred_to":"Test", "Property_Date":"2020-07-14", "Valuables_Details":"Test Test Test", "Valuables_Transferred_to":"Test", "Valuables_Date":"2020-07-14", "Clothing_Details":"Test Test Test", "Clothing_Transferred_to":"Test", "Clothing_Date":"2020-07-14", "Babies_Mothers_name":"Test", "Babies_Mothers_hospital_no_":"Test", "Babies_Baby_named":"Test", "Babies_Delivery_date":"2020-07-14", "Babies_Gestation":"Test", "Funeral_Arrangements_Parents_arranging":"Test", "Funeral_Arrangements_Cremation___Burial":"Test", "Funeral_Arrangements_Midwife___Nurse_name":"Test", "Offsite_PM_Details_Destination":"Test", "Offsite_PM_Details_Date_sent":"2020-07-14", "Offsite_PM_Details_Date_returned":"2020-07-14", "Body_Release_Funeral_director":"Test", "Body_Release_Persons_releasing_body":"Test", "Body_Release_Type_of_release":"Test", "Body_Release_Disposal_certificate_no_":"Test", "Body_Release_Condition_of_body_form_given":"Test", "Body_Release_Date":"2020-07-14", "Body_Release_Out_of_hours_release":"Test", "Body_Release_Hospital_arranged_funderal":"Test", "Body_Release_Infection_form_given":"Test", "Notes_Notes":"Test Test Test"},
		{"Episode":2, "Body_Registration_Fridge_tray_no_":"Test", "Body_Registration_Religion":"Test", "Body_Registration_Size":"Test", "Body_Registration_Infection_status":"Test", "Body_Registration_Condition_of_body":"Test", "Body_Registration_PM_required":"Test", "Body_Registration_Pacemaker":"Test", "Property_Details":"Test Test Test", "Property_Transferred_to":"Test", "Property_Date":"2020-07-14", "Valuables_Details":"Test Test Test", "Valuables_Transferred_to":"Test", "Valuables_Date":"2020-07-14", "Clothing_Details":"Test Test Test", "Clothing_Transferred_to":"Test", "Clothing_Date":"2020-07-14", "Babies_Mothers_name":"Test", "Babies_Mothers_hospital_no_":"Test", "Babies_Baby_named":"Test", "Babies_Delivery_date":"2020-07-14", "Babies_Gestation":"Test", "Funeral_Arrangements_Parents_arranging":"Test", "Funeral_Arrangements_Cremation___Burial":"Test", "Funeral_Arrangements_Midwife___Nurse_name":"Test", "Offsite_PM_Details_Destination":"Test", "Offsite_PM_Details_Date_sent":"2020-07-14", "Offsite_PM_Details_Date_returned":"2020-07-14", "Body_Release_Funeral_director":"Test", "Body_Release_Persons_releasing_body":"Test", "Body_Release_Type_of_release":"Test", "Body_Release_Disposal_certificate_no_":"Test", "Body_Release_Condition_of_body_form_given":"Test", "Body_Release_Date":"2020-07-14", "Body_Release_Out_of_hours_release":"Test", "Body_Release_Hospital_arranged_funderal":"Test", "Body_Release_Infection_form_given":"Test", "Notes_Notes":"Test Test Test"},
		{"Episode":3, "Body_Registration_Fridge_tray_no_":"Test", "Body_Registration_Religion":"Test", "Body_Registration_Size":"Test", "Body_Registration_Infection_status":"Test", "Body_Registration_Condition_of_body":"Test", "Body_Registration_PM_required":"Test", "Body_Registration_Pacemaker":"Test", "Property_Details":"Test Test Test", "Property_Transferred_to":"Test", "Property_Date":"2020-07-14", "Valuables_Details":"Test Test Test", "Valuables_Transferred_to":"Test", "Valuables_Date":"2020-07-14", "Clothing_Details":"Test Test Test", "Clothing_Transferred_to":"Test", "Clothing_Date":"2020-07-14", "Babies_Mothers_name":"Test", "Babies_Mothers_hospital_no_":"Test", "Babies_Baby_named":"Test", "Babies_Delivery_date":"2020-07-14", "Babies_Gestation":"Test", "Funeral_Arrangements_Parents_arranging":"Test", "Funeral_Arrangements_Cremation___Burial":"Test", "Funeral_Arrangements_Midwife___Nurse_name":"Test", "Offsite_PM_Details_Destination":"Test", "Offsite_PM_Details_Date_sent":"2020-07-14", "Offsite_PM_Details_Date_returned":"2020-07-14", "Body_Release_Funeral_director":"Test", "Body_Release_Persons_releasing_body":"Test", "Body_Release_Type_of_release":"Test", "Body_Release_Disposal_certificate_no_":"Test", "Body_Release_Condition_of_body_form_given":"Test", "Body_Release_Date":"2020-07-14", "Body_Release_Out_of_hours_release":"Test", "Body_Release_Hospital_arranged_funderal":"Test", "Body_Release_Infection_form_given":"Test", "Notes_Notes":"Test Test Test"},
	],
];
	
const load = ($d, $cb) => {
	build($d);
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = { display: "flex", flexDirection: "column", flex: "1 1 100%", };

let style = document.createElement("style"); main.appendChild(style);
style.textContent = [
	"main fieldset * { padding:2px; }",
].join("\n");	
const patientBanner = document.createElement("div"); main.appendChild(patientBanner);
patientBanner.ngstyle = {
	color: "#ffffff",
	backgroundColor: "#005EB8",
	height: "70px",
	flex: "0 0 auto",
};

const episodeBanner = document.createElement("div"); main.appendChild(episodeBanner);
episodeBanner.ngstyle = { flex: "0 0 auto", };
	
let divInput = document.createElement("div"); main.appendChild(divInput);
divInput.ngstyle = { flex:"1 1 auto", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", };

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
	fieldset.ngstyle = { backgroundColor:"#eeeeee", margin:"5px", border:"2px solid grey", borderRadius:"10px", };
	let legend = document.createElement("legend"); fieldset.appendChild(legend);
	legend.ngstyle = { fontSize:"1.2em", fontWeight:"bold", border:"2px solid grey", borderRadius:"10px", backgroundColor:"#FAE100", };
	legend.textContent = $v[0];
	let div = document.createElement("div"); fieldset.appendChild(div);
	div.ngstyle = { display:"grid", gridTemplateColumns:"auto 1fr", gridGap:"5px", };
	$v[1].forEach(($v2) => {
		let label = document.createElement("label"); div.appendChild(label); label.textContent = $v2[0];
		let ele = $v2[1]();
		ele.name = ($v[0] + "|" + $v2[0]).replace(/\W/g, "_");
		div.appendChild(ele);
	});
});

let button = document.createElement("button"); main.appendChild(button);
button.ngstyle = { flex: "0 0 auto", width: "100%", backgroundColor: "#007f3b", color: "#ffffff", };
let span = document.createElement("span"); button.appendChild(span);
span.className = "faS";
span.textContent = "";
button.appendChild(document.createTextNode(" Save"));
button.ngpointerdown = () => {};
	
const build = ($d) => {
	
	patientBanner.textContent = JSON.stringify($d[0][0]);
	
	episodeBanner.textContent = "Episode: ";
	
	$d[1].forEach(($v) => {		
		let button = document.createElement("button"); episodeBanner.appendChild(button);
		button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
		button.textContent = $v.Episode;
		button.ngpointerdown = () => {};
	});
	
	button = document.createElement("button"); episodeBanner.appendChild(button);
	button.ngstyle = { backgroundColor:"#007f3b", color:"#ffffff", borderRadius:"999px", };
	button.textContent = "+";
	
	$.ngX.deserialise($d[1][0]);
	
};
	
return {
	"forwards": load,
	"backwards": back,
};

})();

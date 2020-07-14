$.pages["Episode Update"] = (() => {

const $d = [
	[
		{"EPN":1, "Name":"SIMTH, John (Mr)"},
	],[
		{"Episode":1},
		{"Episode":2},
		{"Episode":3},
	],
];
	
const load = ($d, $cb) => {
	build();
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");
main.ngstyle = { display: "flex", flexDirection: "column", flex: "1 1 100%", };

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
		div.appendChild($v2[1]());
	});
});

let button = document.createElement("button"); main.appendChild(button);
button.ngstyle = { flex: "0 0 auto", width: "100%", backgroundColor: "#007f3b", color: "#ffffff", };
let span = document.createElement("span"); button.appendChild(span);
span.className = "faS";
span.textContent = "";
button.appendChild(document.createTextNode(" Save"));
button.ngpointerdown = () => {};
	
const build = () => {
	
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
	
};
	
return {
	"forwards": load,
	"backwards": back,
};

})();
	
	
/*




<fieldset>
	<legend>Property</legend>
	<div>
		<label>Details</label><textarea></textarea>
		<label>Transferred to</label><input type="text">
		<label>Date</label><input type="date">
	</div>
</fieldset>

<fieldset>
	<legend>Valuables</legend>
	<div>
		<label>Details</label><textarea></textarea>
		<label>Transferred to</label><input type="text">
		<label>Date</label><input type="date">
	</div>
</fieldset>

<fieldset>
	<legend>Clothing</legend>
	<div>
		<label>Details</label><textarea></textarea>
		<label>Transferred to</label><input type="text">
		<label>Date</label><input type="date">
		
	</div>
</fieldset>

<fieldset>
	<legend>Babies</legend>
	<div>
		<label>Mothers name</label><input type="text">
		<label>Mothers hospital no.</label><input type="text">
		<label>Baby named</label><input type="text">
		<label>Delivery date</label><input type="date">
		<label>Gestation</label><input type="text">
	</div>
</fieldset>

<fieldset>
	<legend>Funeral Arrangements</legend>
	<div>
		<label>Parents arranging</label><input type="text">
		<label>Cremation / Burial</label><input type="text">
		<label>Midwife / Nurse name</label><input type="text">
	</div>
</fieldset>

<fieldset>
	<legend>Offsite PM Details</legend>
	<div>
		<label>Destination</label><input type="text">
		<label>Date sent</label><input type="date">
		<label>Date returned</label><input type="date">
	</div>
</fieldset>

<fieldset>
	<legend>Body Release</legend>
	<div>
		<label>Funeral director</label><input type="text">
		<label>Persons releasing body</label><input type="text">
		<label>Type of release</label><input type="text">
		<label>Disposal certificate no.</label><input type="text">
		<label>Condition of body form given</label><input type="text">
		<label>Date</label><input type="date">
		<label>Out of hours release</label><input type="text">
		<label>Hospital arranged funderal</label><input type="text">
		<label>Infection form given</label><input type="text">
	</div>
</fieldset>

<fieldset>
	<legend>Notes</legend>
	<div>
		<label>Notes</label><textarea></textarea>
	</div>
</fieldset>

</section>

<button style="width:100%; background-color:#007f3b; color:#ffffff;" onclick="swap();"><span class="faR"></span> Save</button>

</main>

*/

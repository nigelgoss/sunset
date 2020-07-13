$.pages["Episode Update"] = (() => {

const load = ($d, $cb) => {
	build();
	$cb(main);
};

const back = ($d, $cb) => {
	$cb(main);
};

const main = document.createElement("main");

const patientBanner = document.createElement("div"); main.appendChild(patientBanner);
patientBanner.ngstyle = {
	color: "#ffffff",
	backgroundColor: "#005EB8",
	height: "70px",
};
patientBanner.textContent = "PATIENT BANNER";

const $d = ["3", "2", "1"];

const episodeBanner = document.createElement("div"); main.appendChild(episodeBanner);

const build = () => {
	
	episodeBanner.textContent = "Episode: ";
	
	$d.forEach(($v) => {		
		let button = document.createElement("button"); episodeBanner.appendChild(button);
		button.textContent = $v;
		button.ngpointerdown = () => {};
	});
	
	button = document.createElement("button"); episodeBanner.appendChild(button);
	button.textContent = "+";
	
};
	
return {
	"forwards": load,
	"backwards": back,
};

})();
	
	
/*

<section>

<fieldset>
	<legend>Body Registration</legend>
	<div>
		<label>Fridge tray no.</label><input type="text">
		<label>Religion</label><input type="text">
		<label>Size</label><input type="text">
		<label>Infection status</label><input type="text">
		<label>Condition of body</label><input type="text">
		<label>PM required</label><input type="text">
		<label>Pacemaker</label><input type="text">
	</div>
</fieldset>

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

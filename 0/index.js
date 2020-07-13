const $ = {};
(function () {

	let throttle = { "date": new Date(0), "ele": null };
	Object.defineProperties(HTMLElement.prototype, {
		
		"ngpointerdown": {
			"set": function ($d) {
				if (this._ngX === undefined) this._ngX = {}; 
				if (this.onpointerdown === null) this.onpointerdown = () => {
					if (throttle.ele === this && new Date() - throttle.date < (this.ngthrottle ?? 500)) return;
					throttle = {"date": new Date(), "ele": this };
					this._ngX.ngpointerdown();
				};
				if (this.ontouchstart === null) this.ontouchstart = () => {}; // iOS
				this._ngX.ngpointerdown = $d;
			},
			"get": function () {
				return this?._ngX?.ngpointerdown;
			},
		},
					
		"ngthrottle": {
			"set": function ($d) {
				if (this._ngX === undefined) this._ngX = {}; 
				this._ngX.ngthrottle = $d;
			},	
			"get": function () {
				return this?._ngX?.ngthrottle;
			},
		},
		
	});
  
  $.pages = {};
  
  [
    "pages/sign_in.js",
    "script/nav.js",
    "pages/patient_list.js",
    "pages/episode_update.js",
    "pages/admin.js",
  ].forEach(function ($v) {

    let script = document.createElement("script"); document.head.appendChild(script);
    //script.defer = true;
    script.src = $v;
    
  });
  
  window.onload = function () {
    $.nav.goTo("Sign In");
};
  
}());

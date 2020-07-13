const $ = {};
(function () {

	let throttleDate = new Date(0);
	Object.defineProperties(HTMLElement.prototype, {
		
		"ngpointerdown": {
			"set": function ($d) {
				if (this.ng === undefined) this.ng = {}; 
				if (this.onpointerdown === null) this.onpointerdown = () => {
					if (new Date() - throttleDate < this.ng.ngthrottle ?? 500) return;
					throttleDate = new Date();
					this.ng.ngpointerdown();
				};
				this.ng.ngpointerdown = $d;
			},
			"get": function () {
				return this?.ng?.ngpointerdown;
			},
		},
					
		"ngthrottle": {
			"set": function ($d) {
				if (this.ng === undefined) this.ng = {}; 
				this.ng.ngthrottle = $d;	
			},	
			"get": function () {
				return this?.ng?.ngthrottle;
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

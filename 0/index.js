const $ = {};
(function () {

	let throttleDate = new Date(0);
	Object.defineProperties(HTMLElement.prototype, {
		
		"ngpointerdown": {
			"set": ($d) => {
				console.log(self, this);
				if (this.ng === undefined) this.ng = {}; 
				if (this.onpointerdown === null) this.onpointerdown = () => {
					if (new Date() - throttleDate < this.ng.ngthrottle ?? 500) return;
					throttleDate = new Date();
					this.ng.ngpointerdown();
				};
				this.ng.ngpointerdown = $d;
			},
			"get": () => {
				return this?.ng?.ngpointerdown;
			},
		},
					
		"ngthrottle": {
			"set": ($d) => {
				if (this.ng === undefined) this.ng = {}; 
				this.ng.ngthrottle = $d;	
			},	
			"get": () => {
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

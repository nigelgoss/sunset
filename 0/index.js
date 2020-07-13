const $ = {};
(function () {

	//let throttleTimer;
	Object.defineProperty(HTMLElement.prototype, "ngpointerdown", {
		"set": function ($d) {
			if (this.onpointerdown === null) this.onpointerdown = () => {
				if (typeof throttleTimer !== "undefined") return;
				let throttleTimer = setTimeout(() => { throttleTimer = undefined; }, 2000);
				this.ng.ngpointerdown();
			};
			if (this.ng === undefined) this.ng = {}; 
			this.ng.ngpointerdown = $d;
		},
		"get": function () {
			return this?.ng?.ngpointerdown;
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

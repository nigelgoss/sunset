const $ = {};
(() => {

const throttle = {};
Object.defineProperties(HTMLElement.prototype, {

	"ngpointerdown": {
		"set": function ($d) {
			this.style.cursor = "pointer";
			if (this._ngX === undefined) this._ngX = {}; 
			if (this.onpointerdown === null) this.onpointerdown = () => {
				if (throttle.ele === this && new Date() - throttle.date < (this.ngthrottle ?? 333)) return;
				throttle.date = new Date();
				throttle.ele = this;
				this._ngX.pointerdown();
			};
			if (this.ontouchstart === null) this.ontouchstart = () => {}; // iOS
			this._ngX.pointerdown = $d;
		},
		"get": function () {
			return this?._ngX?.pointerdown;
		},
	},

	"ngthrottle": {
		"set": function ($d) {
			if (this._ngX === undefined) this._ngX = {}; 
			this._ngX.throttle = $d;
		},	
		"get": function () {
			return this?._ngX?.throttle;
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
].forEach(($v) => {
	let script = document.createElement("script"); document.head.appendChild(script);
	script.src = $v;
});
			
window.onload = () => { $.nav.goTo("Sign In"); };

})();

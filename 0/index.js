"use strict";
(() => {

window.$ = {
	"pages": {},
};
	
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
				
	"ngstyle": {
		"set": function ($d) {
			Object.keys($d).forEach($v => { this.style.setProperty($v, $d[$v]); });
		},
	},

});

[
	"resources/splash.jpg",
	"resources/spinner.png"
].forEach(($v) => {
	let link = document.createElement("link"); document.head.appendChild(link);
	link.href = $v;
	link.as = "image";
	link.rel = "preload";
	link.crossOrigin = "anonymous";
});

[
	["FARegular", "resources/fa-regular-400.woff2"],
	["FASolid", "resources/fa-solid-900.woff2"],
].forEach(($v) => {
	let font = new FontFace($v[0], "url('"+$v[1]+"')");
	font.load().then(() => { document.fonts.add(font); });
});
	
[
	"script/nav.js",
	"script/db.js",
	"script/ngx.js",
	"pages/sign_in.js",
	"pages/menu.js",
	"pages/patient_list.js",
	"pages/episode_update.js",
	"pages/admin.js",
].forEach(($v) => {
	let script = document.createElement("script"); document.head.appendChild(script);
	script.src = $v;
});
			
window.onload = () => {
	$.nav.goTo("Sign In");
	document.body.ngstyle = { animation:"opacityFade 3s", opacity:"1", };
};

})();
 

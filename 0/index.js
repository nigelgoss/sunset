const $ = {};
(function () {

	new MutationObserver(function ($mutationsList) {
		$mutationsList.forEach(function ($x) {
			$x.addedNodes.forEach(function ($y) {
				console.log($y);
				if (typeof $y.ngpointerdown !== "function") return;
				$y.onpointerdown = $y.ngpointerdown;
			});
		});
	}).observe(document.body, { attributes:true, childList:true });
  
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

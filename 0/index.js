const $ = {};
(function () {

  $.pages = {};
  
  [
  "pages/sign_in.js",
  "script/nav.js",
    "pages/patient_list.js",
  ].forEach(function ($v) {

    let script = document.createElement("script"); document.head.appendChild(script);
    script.defer = true;
    script.src = $v;
    
  });
  
  window.onload = function () {
    $.nav.goTo('Sign In');
};
  
}());

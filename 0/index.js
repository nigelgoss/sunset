(function () {
  
  const $ = {};
  $.pages = {};
  
  [
  "pages/sign_in.js",
  "script/nav.js",
  ].forEach(function ($v) {

    let script = document.createElement("script"); document.head.appendChild(script);
    script.src = $v;
    
  });
  
}());

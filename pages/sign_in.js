(function () {
  
  function load ($d, $cb) {
    $cb(main);
  };
  
  function back ($d, $cb) {
    $cb(main);
  };
  
  let main = document.createElement("main");
  
  let button = document.createElement("button"); main.appendChild(button);
  button.textContent = "Sign In";
  button.ngpointerdown = function () { $.nav.goTo("Patient List"); };
  
  button = document.createElement("button"); main.appendChild(button);
  button.textContent = "Count";
  button.ngpointerdown = function () { console.log(1); };
  
  $.pages["Sign In"] = {
    "forwards": load,
    "backwards": back,
  };
  
  
}());

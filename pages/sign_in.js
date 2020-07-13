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
  
  $.pages["Sign In"] = {
    "forwards": load,
    "backwards": back,
  };
  
  
}());

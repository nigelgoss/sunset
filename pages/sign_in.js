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
  
  let button1 = document.createElement("button"); main.appendChild(button1);
  button1.textContent = "Count";
  button1.ngpointerdown = function () { console.log(1); };
  
  let button2 = document.createElement("button"); main.appendChild(button2);
  button2.textContent = "Count";
  button2.ngpointerdown = function () { console.log(2); };
  
  $.pages["Sign In"] = {
    "forwards": load,
    "backwards": back,
  };
  
  
}());

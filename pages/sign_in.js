(function () {
  
  function load () {
    $.nav.goTo(main);
  };
  
  let main = document.createElement("main");
  
  let button = document.createElement("button"); main.appendChild(button);
  button.textContent = "Sign In";
  
  $.pages["Sign In"] = {
    "forwards": load,
    "backwards": back,
  };
  
  
}());

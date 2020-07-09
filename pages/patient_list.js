(function () {
  
  function load ($d, $cb) {
    $cb(main);
  };
  
  function back ($d, $cb) {
    $cb(main);
  };
  
  let main = document.createElement("main");
  main.textContent = "Sign In";
  
  $.pages["Patient List"] = {
    "forwards": load,
    "backwards": back,
  };
  
  
}());

(function () {
  
  function load ($d, $cb) {
    $cb(main);
  };
  
  function back ($d, $cb) {
    $cb(main);
  };
  
  let main = document.createElement("main");
  main.textContent = "*";
  
  $.pages["Episode Update"] = {
    "forwards": load,
    "backwards": back,
  };
  
  
}());


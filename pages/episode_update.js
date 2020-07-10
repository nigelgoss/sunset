(function () {
  
  function load ($d, $cb) {
     main.textContent = JSON.stringify($d);
    $cb(main);
  };
  
  function back ($d, $cb) {
    $cb(main);
  };
  
  const main = document.createElement("main");
  
  $.pages["Episode Update"] = {
    "forwards": load,
    "backwards": back,
  };
  
  
}());


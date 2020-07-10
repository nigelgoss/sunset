(function () {
  
  function load ($d, $cb) {
    $cb(main);
  };
  
  function back ($d, $cb) {
    $cb(main);
  };
  
  let main = document.createElement("main");
  
  let button = document.createElement("button");
  button.textContent = "Episode";
  button.onpointerdown = function () { $.nav.goTo("Episode Update", {"EPN":1, "Episode":1}); };
  
  $.pages["Patient List"] = {
    "forwards": load,
    "backwards": back,
  };
  
  
}());

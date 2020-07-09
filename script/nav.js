(function () {
  
  function goTo ($page, $input) {
    $.pages[$page].forwards($input, function ($ele) { updateViewport({"title":$page, "ele":$ele}); } );
  };
  
  function updateViewport ($d) {
    let main = document.body.querySelector("main");
    main.parentNode.replaceChild($d.ele, main);
    document.body.querySelector("header").textContent = $d.title;
  };
  
  $.nav = {
    "goTo": goTo
  };
  
}());

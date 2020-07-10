(function () {
  
  function goTo ($page, $input) {
    $.pages[$page].forwards($input, function ($ele) { updateViewport({"title":$page, "ele":$ele}); } );
  };
  
  function updateViewport ($d) {
    let main = document.body.querySelector("main");
    main.parentNode.replaceChild($d.ele, main);
    document.body.querySelector("header").textContent = $d.title;
  };
  
  let header = document.createElement("header");
  header.style.backgroundColor = "blue";
  
  let oldHeader = document.body.querySelector("header");
  oldHeader.parentNode.replaceChild(header, oldHeader);
  
  $.nav = {
    "goTo": goTo
  };
  
}());

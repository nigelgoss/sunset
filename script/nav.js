(function () {
  
  function goTo ($page, $input) {
    $.pages[$page].forwards($input, function ($ele) { updateViewport($ele); } );
  };
  
  function updateViewport ($ele) {
    let main = document.body.querySelector("main");
    main.parentNode.replaceChild($ele, main);
  };
  
  $.nav = {
    "goTo": goTo
  };
  
}());

(function () {
  
  function goTo ($ele) {
    let main = document.body.querySelector("main");
    main.parentNode.replaceChild($ele, main);
  };
  
  $.nav = {
    "goTo": goTo
  };
  
}());

(function () {
  
  let history = [];
  
  function goTo ($page, $input) {
    $.pages[$page].forwards($input, function ($ele) {
      updateViewport({"title":$page, "ele":$ele});
      history.push({"page":$page, "input":$input});
    });
  };
  
  function back ($refresh) {
    history.pop()
    let d = history.slice(-1)[0];
    $.pages[d.page].forwards(d.input, function ($ele) {
      updateViewport({"title":d.page, "ele":$ele});
    });
  };
  
  function updateViewport ($d) {
    let main = document.body.querySelector("main");
    main.parentNode.replaceChild($d.ele, main);
    title.textContent = $d.title;
  };
  
  let header = document.createElement("header");
  header.style.backgroundColor = "lightblue";
  header.style.padding = "10px";
  header.style.textAlign = "center";
  
  let button = document.createElement("button"); header.appendChild(button);
  button.textContent = "Back";
  button.onpointerdown = function () { $.nav.back(); };
  
  const title = document.createElement("span"); header.appendChild(title);
  
  button = document.createElement("button"); header.appendChild(button);
  button.textContent = "Admin";
  button.onpointerdown = function () { $.nav.goTo("Admin"); };
  
  let oldHeader = document.body.querySelector("header");
  oldHeader.parentNode.replaceChild(header, oldHeader);
  
  $.nav = {
    "goTo": goTo,
    "back": back,
  };
  
}());

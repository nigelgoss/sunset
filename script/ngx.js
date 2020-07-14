$.ngX = (() => {

const open = ($url) => {
	window.open($url);
};

const alert = ($msg) => {
	window.alert($msg);
};

return {
	"open": open,
	"alert": alert,
};
  
})();

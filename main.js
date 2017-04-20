var update = () => document.getElementsByTagName('body')[0].innerHTML = Date();
update();
setInterval(update, 1000);
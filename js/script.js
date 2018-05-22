window.onload = function () {
    
    var s = Snap("#logo");
    
	Snap.load("../img/logo.svg", function(f) {
        s.append(f);
	});
};
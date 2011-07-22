(function () {

	function ChildBrowser(disp) {
		
		this.constructor.prototype.loadURL = function(url) { return disp.loadURL(url); };
		this.constructor.prototype.back = function() { return disp.back(); };
		this.constructor.prototype.forward = function() { return disp.forward(); };
		this.constructor.prototype.refresh = function() { return disp.refresh(); };
		this.constructor.prototype.close = function() { return disp.close(); };
		this.constructor.prototype.getLocation = function() { return disp.getLocation(); };
	
	};
	
	blackberry.Loader.javascriptLoaded("blackberry.polarmobile.childbrowser", ChildBrowser);
})();

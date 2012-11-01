(function () {

	function ChildBrowser(disp) {
		this.constructor.prototype.loadURLAsync = function(url, onURLChange, onExit) {
			disp.loadURLAsync(url, onURLChange, onExit);
		};
		this.constructor.prototype.loadURL = function(url) { return disp.loadURL(url); };
		this.constructor.prototype.clearCookies = function() { return disp.clearCookies(); };
		this.constructor.prototype.getVisible = function() { return disp.getVisible(); };
		this.constructor.prototype.back = function() { return disp.back(); };
		this.constructor.prototype.forward = function() { return disp.forward(); };
		this.constructor.prototype.refresh = function() { return disp.refresh(); };
		this.constructor.prototype.close = function() { return disp.close(); };
		this.constructor.prototype.getLocation = function() { return disp.getLocation(); };

	};

	blackberry.Loader.javascriptLoaded("blackberry.polarmobile.childbrowser", ChildBrowser);
})();

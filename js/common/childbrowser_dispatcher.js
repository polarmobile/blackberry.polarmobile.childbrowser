(function () {

	var API_URL = "blackberry/polarmobile/childbrowser";
	var URL_PARAM_NAME = "url"

	function ChildBrowser() {
	};

	function loadURLAsync(url, onURLChange, onExit)
	{
		var onURLChangeId = blackberry.events.registerEventHandler(EVENT_CHANGE, onURLChange);
        var onExitId = blackberry.events.registerEventHandler(EVENT_EXIT, onExit);

		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/loadURLAsync");
		remoteCall.addParam("url", url);
		remoteCall.addParam("onURLChange", onURLChangeId);
		remoteCall.addParam("onExit", onExitId);
		remoteCall.makeAsyncCall();
	}

	function loadURL(url){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/loadURL");
		remoteCall.addParam(URL_PARAM_NAME, url);
		return remoteCall.makeSyncCall();
	}

	function clearCookies(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/clearCookies");
		return remoteCall.makeSyncCall();
	}

	function getLocation(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/getLocation");
		return remoteCall.makeSyncCall();
	}

	function getVisible(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/getVisible");
		return remoteCall.makeSyncCall();
	}

	function back(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/back");
		return remoteCall.makeSyncCall();
	}

	function forward(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/forward");
		return remoteCall.makeSyncCall();
	}

	function refresh(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/refresh");
		return remoteCall.makeSyncCall();
	}

	function close(){
		var remoteCall = new blackberry.transport.RemoteFunctionCall(API_URL + "/close");
		return remoteCall.makeSyncCall();
	}

	ChildBrowser.prototype.loadURLAsync = function(url, onURLChange, onExit) {
		loadURLAsync(url, onURLChange, onExit);
	};

	ChildBrowser.prototype.loadURL = function(url) {
		return loadURL(url);
	};

	ChildBrowser.prototype.clearCookies = function() {
		return clearCookies();
	};

	ChildBrowser.prototype.getLocation = function() {
		return getLocation();
	};

	ChildBrowser.prototype.getVisible = function() {
		return getVisible();
	};

	ChildBrowser.prototype.back = function() {
		return back();
	};

	ChildBrowser.prototype.forward = function() {
		return forward();
	};

	ChildBrowser.prototype.refresh = function() {
		return refresh();
	};

	ChildBrowser.prototype.close = function() {
		return close();
	};


	blackberry.Loader.javascriptLoaded("blackberry.polarmobile.childbrowser", ChildBrowser);
})();

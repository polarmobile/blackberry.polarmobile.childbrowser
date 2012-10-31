# blackberry.polarmobile.childbrowser

This extension for the [BlackBerry WebWorks SDK for Tablet OS](http://us.blackberry.com/developers/tablet/webworks.jsp) provides a _"child browser"_ mechanism for displaying external webpages within WebWorks applications.

Webpages hosted within this child browser run within a WebKit instance that is completely isolated and independent from the WebKit instance being used to host your core WebWorks app.

## Installation

Clone this repository into a folder called `blackberry.polarmobile.childbrowser/` within the `bbwp/ext/` folder of your WebWorks SDK installation.

## Compatibility

This extension has been tested with the BlackBerry WebWorks SDK for TabletOS v2.1.0.6.

## Usage

### Configuration

In the `config.xml` file of your WebWorks app, include the following feature element:

    <feature id="blackberry.polarmobile.childbrowser" />

### Code Sample

    var browser = blackberry.polarmobile.childbrowser;

    // view http://polarmobile.com
    browser.loadURL("http://polarmobile.com");

    // get the URL of the browser's current location
    browser.getLocation();

    // refresh the current page
    browser.refresh();

    // clear all cookies
    browser.clearCookies();

    // automatically close the browser in 10 seconds from now
    setTimeout(function(){ browser.close(); }, 10000);

### Basic Async Code Version
    var url = "http://twitter.com/gogibbons";
    browser.loadURLAsync(
        url,
        function (result)
        {
            console.log("The current url is: " + result.data);
        },
        function ()
        {
            console.log("The browser has been closed");
        });

### Async Code Sample Showing How To Obtain Facebook Credentials
    var browser = blackberry.polarmobile.childbrowser;
    var appID = "<insert numeric app ID here>";
    var redirect = "https://www.facebook.com/connect/login_success.html";

    var path = 'https://www.facebook.com/dialog/oauth?display=wap&scope=publish_actions,read_stream&';
    var queryParams = ['client_id=' + appID, 'redirect_uri=' + redirect, 'response_type=token'];
    var query = queryParams.join('&');
    var url = path + query;
    var browserIsOpen = true;
    browser.loadURLAsync(
        url,  // URL to open in browser
        function (result){
            var url = result.data;
            if (url.substring(0, redirect.length) == redirect)
            {
                var fbAccessToken = url.match(/access_token=([^&]+)/)[1];
                localStorage.setItem('fbAccessToken', fbAccessToken);
                browserIsOpen = false;
                browser.close();
                browser.clearCookies();
                alert("You authenticated with Facebook");
            }
        },
        function ()
        {
            if (browserIsOpen)
            {
                alert("You closed the browser before we authenticated you!");
            }
        });






## Known Issues/ TODO

- "back" and "forward" not functional
- "pause" button
- button to re-launch current web page in dedicated browser app

## Acknowledgements

- Special thanks to Adam Stanley ([Twitter](http://twitter.com/n_adam_stanley), [GitHub](http://github.com/adamstanley)) and the WebWorks team for support

- Project shell based on the [WebWorks Extension (for PlayBook) Tutorial](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Tutorial-for-Writing-WebWorks-Extension-for-PlayBook/ta-p/1172483)

- Icons by [app-bits](http://www.app-bits.com/free-icons/) (licensed under a Creative Commons Attribution-No Derivative Works 3.0 License)

## License

The source code for this project is distributed under the MIT license. See LICENSE for details.

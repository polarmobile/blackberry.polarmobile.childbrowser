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

    // automatically close the browser in 10 seconds from now
    setTimeout(function(){ browser.close(); }, 10000);

## Known Issues/ TODO

- handling of orientation changes
- "back" and "forward" not functional
- "pause" button
- progress bar
- throw event/ trigger callback when loading complete
- the `close` method currently loads the page `about:blank` and then hides the browser _(when calling the [`dispose` method of QNXStageWebView](http://www.blackberry.com/developers/docs/airapi/1.0.0/qnx/media/QNXStageWebView.html) on our child WebView instance, the main WebWorks WebView is also disposed of)_

## Acknowledgements

- [WebWorks Extension (for PlayBook) Tutorial](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Tutorial-for-Writing-WebWorks-Extension-for-PlayBook/ta-p/1172483)

- Icons by [app-bits](http://www.app-bits.com/free-icons/) (licensed under a Creative Commons Attribution-No Derivative Works 3.0 License)

## License

The source code for this project is distributed under the MIT license. See LICENSE for details.

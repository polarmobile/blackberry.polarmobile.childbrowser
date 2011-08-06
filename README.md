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

## Known Issues/ TODO

- "back" and "forward" not functional
- "pause" button
- button to re-launch current web page in dedicated browser app
- throw event/ trigger callback when loading complete

## Acknowledgements

- Special thanks to Adam Stanley ([Twitter](http://twitter.com/n_adam_stanley), [GitHub](http://github.com/adamstanley)) and the WebWorks team for support

- Project shell based on the [WebWorks Extension (for PlayBook) Tutorial](http://supportforums.blackberry.com/t5/Web-and-WebWorks-Development/Tutorial-for-Writing-WebWorks-Extension-for-PlayBook/ta-p/1172483)

- Icons by [app-bits](http://www.app-bits.com/free-icons/) (licensed under a Creative Commons Attribution-No Derivative Works 3.0 License)

## License

The source code for this project is distributed under the MIT license. See LICENSE for details.

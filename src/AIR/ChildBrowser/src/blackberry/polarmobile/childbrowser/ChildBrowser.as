package blackberry.polarmobile.childbrowser
{

    import json.JSON;

    import flash.geom.Rectangle;
    import flash.display.Stage;
    import flash.events.MouseEvent;
    import flash.display.Sprite;
    import flash.events.StageOrientationEvent;

    import qnx.locale.LocaleManager;
    import qnx.media.QNXStageWebView;
    import qnx.ui.buttons.IconButton;
    import qnx.ui.skins.buttons.OutlineButtonSkinBlack;

    import webworks.extension.DefaultExtension;

    /**
     * Author: Shane Jonas
     *
     */

    public class ChildBrowser extends DefaultExtension
    {
        private var childWebView:QNXStageWebView = null;
        private var closeButton:IconButton;
        private var refreshButton:IconButton;
        private var bgshape:Sprite;
        private var browserHeight;

        [Embed(source="assets/close.png")] 
        public static var Close:Class;

        [Embed(source="assets/refresh.png")] 
        public static var Refresh:Class;

        public function ChildBrowser() {
            super();
        }

        private function initBG()
        {
            bgshape = new Sprite();
            bgshape.graphics.beginFill(0x323232);
            bgshape.graphics.drawRect(0,0,webView.stage.stageWidth, webView.stage.stageHeight);
            webView.stage.addChildAt(bgshape, 0);
        }

        override public function getFeatureList():Array {
            return new Array ("blackberry.polarmobile.childbrowser");
        }

        public function loadURL(url:String)
        {
            browserHeight = webView.stage.stageHeight - 50
            initBG();

            //only ever create one web view
            if (childWebView == null) 
            {
                childWebView = new QNXStageWebView("ChildBrowser")
                childWebView.viewPort = new Rectangle(0,50,webView.stage.stageWidth,browserHeight);
            }

            //if its not visible.. i want to see it
            if (childWebView.zOrder <= 0)
            {
                webView.zOrder = -1;
                childWebView.zOrder = 1;
            }

          //load this url
          childWebView.loadURL(url);

          //build buttons
          this.initUI()

          // events
          webView.stage.addEventListener(StageOrientationEvent.ORIENTATION_CHANGE, onOrientationChange);

        }

        private function onOrientationChange(event:StageOrientationEvent){
            removeUI();
            initBG();
            initUI();
            childWebView.viewPort = new Rectangle(0,50,webView.stage.stageWidth,browserHeight);
        }

        private function clearWindow()
        {
            childWebView.loadURL("about:blank");
        }

        public function getLocation():String
        {
            return childWebView.location;
        }

        public function forward()
        {
            childWebView.historyForward();
        }

        public function back()
        {
            childWebView.historyBack();
        }

        public function refresh()
        {
            childWebView.reload();
        }

        public function close()
        {
          // the `dispose` method does not work when running inside of webworks,
          // as it closes then main `webView` instance. as a temp. work-around,
          // we hide the child
          childWebView.zOrder = -1;
          webView.zOrder = 1;
          clearWindow();
        }

        public function closeCLICK(e:MouseEvent)
        {
          close();
          removeUI();
        }

        public function refreshCLICK(e:MouseEvent)
        {
          refresh();
        }

        private function removeUI()
        {
          removeChild(bgshape);
          removeChild(closeButton);
          removeChild(refreshButton)
        }

        //close button
        private function addClose()
        {
          closeButton = new IconButton();
          closeButton.setIcon(new Close());
          closeButton.setSize(266, 50);
          closeButton.setPosition(-5, 0);
          closeButton.setSkin(new OutlineButtonSkinBlack())
          closeButton.addEventListener(MouseEvent.CLICK, closeCLICK);
          addChild(closeButton);
        }

        private function addRefresh(){
          refreshButton = new IconButton();
          refreshButton.setIcon(new Refresh());
          refreshButton.setSize(266, 50);
          refreshButton.setPosition(256, 0);
          refreshButton.setSkin(new OutlineButtonSkinBlack())
          refreshButton.addEventListener(MouseEvent.CLICK, refreshCLICK);
          addChild(refreshButton);
        }

        // UI Buttons
        private function initUI(){
          addClose()
          addRefresh()
        }

        // our own addChild implementation
        // (maps back to stage of WebWorkAppTemplate.as; no explicit typing)
        private function addChild(obj)
        {
          webView.stage.addChild(obj);
          //always set added obj's to top
          webView.stage.setChildIndex(obj, webView.stage.numChildren -1)
        }

        private function removeChild(obj)
        {
          webView.stage.removeChild(obj);
        }

    }
}

function getTradingViewSymbolInfoHtml(symbolName){
    return `<iframe class="tradingViewSymbolInfoIframe" scrolling="no" allowtransparency="true" 
    frameborder="0" srcdoc='
        <html>
            <body>
                <!-- TradingView Widget BEGIN -->
                <div class="tradingview-widget-container">
                    <div class="tradingview-widget-container__widget"></div>
                    <script type="text/javascript" src="https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js" async>
                    {
                        "symbol": "${symbolName}",
                        "width": 480,
                        "height": "650",
                        "colorTheme": "light",
                        "isTransparent": false,
                        "locale": "en"
                    }
                    </script>
                </div>
                <!-- TradingView Widget END -->
            </body>
        </html>'
    </iframe>`;
}
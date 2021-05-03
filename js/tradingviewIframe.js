function openTradingViewIframe(stocksList){
    let iframe = document.getElementById("tradingViewIframe");
    iframe.src = './html/tradingViewChart.html?stocksList=' + stocksList;
}

function openTradingView(tabulatorTable){
    let stocksList = tabulatorTable.getGroups().flatMap(row => row.getKey()).filter(s => s !== "" && s.length < 10);
    document.getElementById('tradingView-wrapper').style.display = 'block';
    openTradingViewIframe(stocksList);

    return false;
}

function closeTradingViewIframe(){
    document.getElementById('tradingView-wrapper').style.display = 'none';
}

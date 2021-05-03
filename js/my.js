//TODO do not use global namespace

function customFilter(data, filterParams) {
    let symbol = getSymbol(data);
    return symbol !== "" && symbol.length < 10;
}

function getSymbol(data) {
    if (data.hasOwnProperty('Symbol')) {//barchart
        return data.Symbol;
    } else if (data.hasOwnProperty('Include symbols')) {//optionsamurai
        return data["Include symbols"];
    }
}


function openLinks(stockName) {
    openInNewTab('https://www.barchart.com/stocks/quotes/' + stockName + '/');
    openInNewTab('https://stocktwits.com/symbol/' + stockName + '/');
    openInNewTab('https://www.marketbeat.com/stocks/' + stockName + '/');

    openTradingViewIframe(stockName);

    return false;
}


function openInNewTab(href) {
    Object.assign(document.createElement('a'), {
        target: '_blank',
        href: href,
    }).click();
}

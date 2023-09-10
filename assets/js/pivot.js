import WebDataRocks from "webdatarocks";
var pivot = new WebDataRocks({
    container: "#report_container",
    toolbar: true,
    report: {
        "dataSource": {
            "dataSourceType": "json",
            "data": getJSONData()
        },
        slice: {
            rows: [{
                uniqueName: "Country"
            }, {
                uniqueName: "[Measures]"
            }],
            columns: [{
                uniqueName: "Category"
            }],
            measures: [{
                uniqueName: "Price",
                format:"currency"
            }]
        },
        formats: [
            {
                name: "currency",
                thousandsSeparator: ",",
                decimalSeparator: ".",
                decimalPlaces: 2,
                maxDecimalPlaces: 2,
                maxSymbols: 20,
                currencySymbol: "$",
                currencySymbolAlign: "left",
                nullValue: "",
                infinityValue: "Infinity",
                divideByZeroValue: "Infinity",
                textAlign: "right",
                isPercent: false
            }
        ]
    },
    reportcomplete: function() {
        pivot.off("reportcomplete");
        createChart();
    }
});

//Create Chart from pivot table and keep it updated
function createChart() {
    pivot.highcharts.getData({
        type: "column"
    }, createAndUpdateChart, createAndUpdateChart);
}
//Create chart with data provided
function createAndUpdateChart(data) {
    Highcharts.chart('highcharts_container', data);
}
//Test JSON Data
function getJSONData() {
    return [{
        "Country": "Australia",
        "Category": "Wood",
        "Price": 445,
        "Revenue": 464
    }, {
        "Country": "Australia",
        "Category": "Bikes",
        "Price": 125,
        "Revenue": 440
    }, {
        "Country": "China",
        "Category": "Clothing",
        "Price": 190,
        "Revenue": 310
    }, {
        "Country": "United States",
        "Category": "Aircraft",
        "Price": 406,
        "Revenue": 127
    }, {
        "Country": "United States",
        "Category": "Bikes",
        "Price": 85,
        "Revenue": 821
    }, {
        "Country": "United Kingdom",
        "Category": "Cars",
        "Price": 21,
        "Revenue": 455
    }, {
        "Country": "Canada",
        "Category": "Clothing",
        "Price": 666,
        "Revenue": 685
    }, {
        "Country": "Germany",
        "Category": "Cars",
        "Price": 563,
        "Revenue": 742
    }, {
        "Country": "United Kingdom",
        "Category": "Bikes",
        "Price": 397,
        "Revenue": 340
    }, {
        "Country": "Germany",
        "Category": "Clothing",
        "Price": 800,
        "Revenue": 948
    }, {
        "Country": "Germany",
        "Category": "Cars",
        "Price": 172,
        "Revenue": 800
    }, {
        "Country": "Canada",
        "Category": "Aircraft",
        "Price": 352,
        "Revenue": 947
    }, {
        "Country": "United Kingdom",
        "Category": "Aircraft",
        "Price": 540,
        "Revenue": 328
    }, {
        "Country": "United Kingdom",
        "Category": "Aircraft",
        "Price": 204,
        "Revenue": 216
    }, {
        "Country": "Germany",
        "Category": "Clothing",
        "Price": 292,
        "Revenue": 644
    }, {
        "Country": "Canada",
        "Category": "Aircraft",
        "Price": 901,
        "Revenue": 237
    }, {
        "Country": "Canada",
        "Category": "Wood",
        "Price": 348
    }, {
        "Country": "Canada",
        "Category": "Clothing",
        "Price": 725,
        "Revenue": 335
    }, {
        "Country": "Canada",
        "Category": "Clothing",
        "Price": 13,
        "Revenue": 687
    }, {
        "Country": "China",
        "Category": "Wood",
        "Price": 62,
        "Revenue": 378
    }]
}
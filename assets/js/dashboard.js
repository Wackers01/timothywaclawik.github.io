$(function () {
    $('#highchart_chart').highcharts({
        credits: {
            enabled: false
        },
        chart: {
            type: 'area',
            marginRight: 40,
            spacingLeft: 40,
            spacingBottom: 50
        },
        title: {
            text: false
        },
        subtitle: {
            text: false,
        },
        xAxis: {
            lineColor: '#eeeeee',
            categories: ['18. Sep', '19. Sep', '20. Sep', '21. Sep', '22. Sep', '23. Sep', '24. Sep', '25. Sep'],
            labels: {
                style: {
                    color: '#999999'
                },
                y: 35
            },
            tickColor: '#eeeeee',
            tickmarkPlacement: 'on'
        },
        yAxis: {
            gridLineColor: '#eeeeee',
            title: {
                text: false
            },
            min: -50,
            max: 400,
            tickInterval: 50,
            labels: {
                style: {
                    color: '#999999',
                    fontSize: '9px'
                }
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            backgroundColor: 'white',
            borderColor: null,
            borderWidth: null
        },
        legend: {
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'top',
            symbolHeight: 11,
            symbolWidth: 11,
            symbolPadding: 10,
            borderWidth: 0,
            y: -10,
            x: -15,
            padding: 15,
            itemDistance: 35,
            itemMarginTop: 10,
            itemMarginBottom: 5,
            itemStyle: {
                color: "#2D282A",
                fontSize: 12,
                fontWeight: 'normal'
            }
        },
        plotOptions: {
            area: {
                lineWidth: 0,
                marker: {
                    symbol: 'circle'
                }
            },
            series: {
                fillOpacity: 0.1,
                stickyTracking: false,
                states: {
                    hover: {
                        halo: {
                            size: 8
                        }

                    }
                }
            }
        },
        series: [{
            name: 'Total Visits',
            data: [300, 250, 250, 150, 200, 50, 300, 300],
            color: '#D64857',
            marker: {
                height: 10,
                width: 10,
                symbol: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/252775/graph-red.svg)'
            },
        }, {
            name: 'Facebook',
            data: [0, 25, 0, 0, 0, 0, 50, 0],
            color: '#6693E5',
            marker: {
                height: 10,
                width: 10,
                symbol: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/252775/graph-facebook.svg)'
            }
        }, {
            name: 'Twitter',
            data: [30, 0, 0, 0, 0, 0, 0, 25],
            color: '#7DCAFD',
            marker: {
                height: 10,
                width: 10,
                symbol: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/252775/graph-twitter.svg)'
            }
        }, {
            name: 'Tumblr',
            data: [0, 10, 0, 0, 0, 0, 0, 50],
            color: '#115EA3',
            marker: {
                height: 10,
                width: 10,
                symbol: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/252775/graph-tumblr.svg)'
            }
        }, {
            name: 'Pinterest',
            data: [260, 210, 250, 60, 200, 30, 250, 210],
            color: '#FD7177',
            marker: {
                height: 10,
                width: 10,
                symbol: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/252775/graph-pinterest.svg)'
            }
        }, {
            name: 'Linkedin',
            data: [0, 0, 0, 0, 0, 0, 0, 0],
            color: '#727272',
            marker: {
                height: 10,
                width: 10,
                symbol: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/252775/graph-linkedin.svg)'
            }
        }, {
            name: 'Instagram',
            data: [0, 0, 0, 0, 0, 0, 0, 0],
            color: '#d79e64',
            marker: {
                height: 10,
                width: 10,
                symbol: 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/252775/graph-instagram.svg)'
            }
        }]
    });
});
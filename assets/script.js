// -------------------------------------------------------------
//       Fetching json file for Task 1: Total Teams' Runs
// -------------------------------------------------------------
fetch('json/total_runs.json')
    .then(response => response.json())
    .then(json_data => {
        Highcharts.chart('task1', {
            chart: {
                type: 'column'
            },
            title: {
                text: 'Total Runs Scored By Each Team'
            },
            xAxis: {
                type: 'category',
                allowDecimals: false,
                title: {
                    text: ""
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Runs Scored'
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Scored: <b>{point.y} Runs</b>'
            },
            series: [{
                name: 'Teams',
                colorByPoint: true,
                data: json_data,
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    align: 'center',
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
    });

// -------------------------------------------------------------
//        Fetching json file for Task 2: Top RCB Players
// -------------------------------------------------------------
fetch('json/top5_rcb.json')
    .then(response => response.json())
    .then(json_data => {
        Highcharts.chart('task2', {
            chart: {
                type: "column"
            },
            title: {
                text: "Top 5 Players of Royal Challengers Bangalore"
            },
            xAxis: {
                type: 'category',
                allowDecimals: false,
                title: {
                    text: ""
                }
            },
            yAxis: {
                title: {
                    text: "Runs Scored"
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: 'Scored: <b>{point.y} Runs</b>'
            },
            series: [{
                name: 'Players',
                colorByPoint: true,
                data: json_data,
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    align: 'center',
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }
            }]
        });
    });

// -------------------------------------------------------------
//       Fetching json file for Task 3: Umpires' Origin
// -------------------------------------------------------------
fetch('json/umpire_origin.json')
    .then(response => response.json())
    .then(json_data => {
        Highcharts.chart('task3', {
            chart: {
                type: "column"
            },
            title: {
                text: "Numbers of Umpires from Different Origin"
            },
            xAxis: {
                type: 'category',
                allowDecimals: false,
                title: {
                    text: ""
                }
            },
            yAxis: {
                title: {
                    text: "Number of Umpires"
                }
            },
            legend: {
                enabled: false
            },
            tooltip: {
                pointFormat: '<b>{point.y} Umpires</b>'
            },
            series: [{
                name: 'Country of Origin',
                colorByPoint: true,
                data: json_data,
                dataLabels: {
                    enabled: true,
                    color: '#000000',
                    align: 'center',
                    style: {
                        fontSize: '10px',
                        fontFamily: 'Verdana, sans-serif'
                    }
                }

            }]
        });
    });

// -----------------------------------------------------------------
// Fetching json file for Task 4: Grouped Chart of Matches Played
// -----------------------------------------------------------------
fetch('json/grouped_data.json')
    .then(response => response.json())
    .then(json_data => {
        Highcharts.chart('task4', {
            chart: {
                type: "column"
            },
            title: {
                text: "Matches Played per Team per Season"
            },
            xAxis: {
                categories: [
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015',
                    '2016',
                    '2017'
                ],
                crosshair: true
            },
            yAxis: {
                min: 0,
                title: {
                    text: "Number of Matches"
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y}</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true
            },
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: json_data
        });
    });

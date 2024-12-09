window.onload = function () {

    var chart = am4core.create("chartdiv", am4charts.PieChart);

    // Add data
    chart.data = [{
    "Crypto": "Bitcoin",
    "value": 11567.00
    }, {
    "Crypto": "Ethereum",
    "value": 5583.00
    }, {
    "Crypto": "Monero",
    "value": 8050.97
    }];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "value";
    pieSeries.dataFields.category = "Crypto";
    pieSeries.legendSettings.valueText = '${value}';
    pieSeries.legendSettings.valueText.position = 'bottom';
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;

    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    chart.legend.dataFields.value = "value";

    chart.innerRadius = am4core.percent(60);

    var label = pieSeries.createChild(am4core.Label);
    label.text = "${values.value.sum}";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 15;

    var chart = new CanvasJS.Chart("lineGraph", {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            valueFormatString: "MMM"
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            yValueFormatString: "$#,###",
		    xValueFormatString: "MMMM",
            type: "spline",
            lineColor: "#cc99ff",
            dataPoints: [
                { x: new Date(2016, 0),  y: 20 },
			    { x: new Date(2016, 1), y: 40 },
			    { x: new Date(2016, 2), y: 70 },
			    { x: new Date(2016, 3),  y: 103 },
			    { x: new Date(2016, 4),  y: 140 },
			    { x: new Date(2016, 5),  y: 129 },
			    { x: new Date(2016, 6), y: 125 },
			    { x: new Date(2016, 7), y: 120 },
			    { x: new Date(2016, 8),  y: 115 },
			    { x: new Date(2016, 9),  y: 106 },
			    { x: new Date(2016, 10),  y: 100 },
                { x: new Date(2016, 11), y: 105 },
                { x: new Date(2017, 0),  y: 115 },
			    { x: new Date(2017, 1), y: 120 },
			    { x: new Date(2017, 2), y: 125 },
			    { x: new Date(2017, 3),  y: 103 },
			    { x: new Date(2017, 4),  y: 93 },
			    { x: new Date(2017, 5),  y: 129 },
			    { x: new Date(2017, 6), y: 143 },
			    { x: new Date(2017, 7), y: 156 },
			    { x: new Date(2017, 8),  y: 122 },
			    { x: new Date(2017, 9),  y: 106 },
			    { x: new Date(2017, 10),  y: 137 },
			    { x: new Date(2017, 11), y: 142 }
            ]
        }]
    });
    chart.render();
    var chart = new CanvasJS.Chart("lineGraph2", {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            valueFormatString: "MMM"
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            yValueFormatString: "$#,###",
		    xValueFormatString: "MMMM",
            type: "spline",
            lineColor: "#cc99ff",
            dataPoints: [
                { x: new Date(2018, 0),  y: 50 },
			    { x: new Date(2018, 1), y: 55 },
			    { x: new Date(2018, 2), y: 60 },
			    { x: new Date(2018, 3),  y: 40 },
			    { x: new Date(2018, 4),  y: 93 },
			    { x: new Date(2018, 5),  y: 129 },
			    { x: new Date(2018, 6), y: 143 },
			    { x: new Date(2018, 7), y: 156 },
			    { x: new Date(2018, 8),  y: 122 },
			    { x: new Date(2018, 9),  y: 106 },
			    { x: new Date(2018, 10),  y: 137 },
                { x: new Date(2018, 11), y: 142 },
                { x: new Date(2019, 0),  y: 130 },
			    { x: new Date(2019, 1), y: 120 },
			    { x: new Date(2019, 2), y: 102},
			    { x: new Date(2019, 3),  y: 145 },
			    { x: new Date(2019, 4),  y: 93 },
			    { x: new Date(2019, 5),  y: 129 },
			    { x: new Date(2019, 6), y: 143 },
			    { x: new Date(2019, 7), y: 156 },
			    { x: new Date(2019, 8),  y: 122 },
			    { x: new Date(2019, 9),  y: 106 },
			    { x: new Date(2019, 10),  y: 137 },
			    { x: new Date(2019, 11), y: 142 }
            ]
        }]
    });
    chart.render();
    var chart = new CanvasJS.Chart("lineGraph3", {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            valueFormatString: "MMM"
        },
        data: [{
            type: "line",
            indexLabelFontSize: 16,
            yValueFormatString: "$#,###",
		    xValueFormatString: "MMMM",
            type: "spline",
            lineColor: "#cc99ff",
            dataPoints: [
                { x: new Date(2018, 0),  y: 130 },
			    { x: new Date(2018, 1), y: 120 },
			    { x: new Date(2018, 2), y: 102},
			    { x: new Date(2018, 3),  y: 145 },
			    { x: new Date(2018, 4),  y: 93 },
			    { x: new Date(2018, 5),  y: 129 },
			    { x: new Date(2018, 6), y: 143 },
			    { x: new Date(2018, 7), y: 156 },
			    { x: new Date(2018, 8),  y: 122 },
			    { x: new Date(2018, 9),  y: 106 },
			    { x: new Date(2018, 10),  y: 137 },
                { x: new Date(2018, 11), y: 142 },
                { x: new Date(2019, 0),  y: 50 },
			    { x: new Date(2019, 1), y: 55 },
			    { x: new Date(2019, 2), y: 60 },
			    { x: new Date(2019, 3),  y: 40 },
			    { x: new Date(2019, 4),  y: 93 },
			    { x: new Date(2019, 5),  y: 129 },
			    { x: new Date(2019, 6), y: 143 },
			    { x: new Date(2019, 7), y: 156 },
			    { x: new Date(2019, 8),  y: 122 },
			    { x: new Date(2019, 9),  y: 106 },
			    { x: new Date(2019, 10),  y: 137 },
                { x: new Date(2019, 11), y: 142 },
            ]
        }]
    });
    chart.render();
    var dataPoints1 = [], dataPoints2 = [], dataPoints3 = [];
    var stockChart = new CanvasJS.StockChart("chartContainer1",{
      theme: "light2",
      exportEnabled: true,

      charts: [{
        axisX: {
          lineThickness: 2,
          tickLength: 0,
          labelFormatter: function(e) {
            return "";
          }
        },
        axisY: {
          prefix: "$"
        },
        legend: {
          verticalAlign: "top"
        },
        data: [{
          showInLegend: true,
          yValueFormatString: "$#,###.##",
          type: "candlestick",
          dataPoints : dataPoints1
        }]
      },{
        height: 100,
        toolTip: {
          shared: true
        },
        axisY: {
          prefix: "$",
          labelFormatter: addSymbols
        },
        legend: {
          verticalAlign: "top"
        },
        data: [{
          showInLegend: true,
          yValueFormatString: "$#,###.##",
          dataPoints : dataPoints2
        }]
      }],
      navigator: {
        data: [{
          dataPoints: dataPoints3
        }],
        slider: {
          minimum: new Date(2019, 06, 01),
          maximum: new Date(2019, 08, 01)
        }
      }
    });
    $.get("https://canvasjs.com/data/docs/btcusd2018.json", function(data) {
      for(var i = 0; i < data.length; i++){
        dataPoints1.push({x: new Date(data[i].date), y: [Number(data[i].open), Number(data[i].high), Number(data[i].low), Number(data[i].close)]});;
        dataPoints2.push({x: new Date(data[i].date), y: Number(data[i].volume_usd)});
        dataPoints3.push({x: new Date(data[i].date), y: Number(data[i].close)});
      }
      stockChart.render();
    });
    function addSymbols(e){
      var suffixes = ["", "K", "M", "B"];
      var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
      if(order > suffixes.length - 1)
        order = suffixes.length - 1;
      var suffix = suffixes[order];
      return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
    }
}


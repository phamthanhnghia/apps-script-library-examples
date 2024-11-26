// This script embeds a Google Chart into an HTML page
function showChartInHtml() {
  var html = HtmlService.createHtmlOutputFromFile('ChartPage');
  SpreadsheetApp.getUi().showModalDialog(html, 'Chart Example');
}

// Create a file named "ChartPage.html" with the following content:
/*
<!DOCTYPE html>
<html>
  <body>
    <div id="chart"></div>
    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script>
      google.charts.load('current', { packages: ['corechart'] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales'],
          ['2020', 1000],
          ['2021', 1170],
          ['2022', 660],
          ['2023', 1030]
        ]);
        var options = { title: 'Company Sales' };
        var chart = new google.visualization.LineChart(document.getElementById('chart'));
        chart.draw(data, options);
      }
    </script>
  </body>
</html>
*/

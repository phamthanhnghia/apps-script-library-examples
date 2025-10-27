/**
 * @description This script demonstrates how to embed a Google Chart directly into an HTML output
 * displayed as a modal dialog. It uses the Google Charts library to visualize data.
 *
 * Note: The HTML content is embedded directly in the Apps Script file for simplicity.
 * For more complex HTML, consider using `HtmlService.createTemplateFromFile()`.
 * @see https://developers.google.com/apps-script/guides/html/charts
 */
function showEmbeddedChartDialog() {
  // Data for the chart. This could come from a Google Sheet, database, or API.
  const chartData = [
    ['Month', 'Sales', 'Expenses'],
    ['Jan', 1000, 400],
    ['Feb', 1170, 460],
    ['Mar', 660, 1120],
    ['Apr', 1030, 540],
    ['May', 1200, 600]
  ];

  // Options for the chart.
  const chartOptions = {
    title: 'Monthly Performance',
    hAxis: { title: 'Month', titleTextStyle: { color: '#333' } },
    vAxis: { minValue: 0 },
    colors: ['#4285F4', '#DB4437'] // Google blue and red
  };

  // Create the HTML content for the dialog.
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <base target="_top">
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script>
          google.charts.load('current', { packages: ['corechart'] });
          google.charts.setOnLoadCallback(drawChart);

          function drawChart() {
            // Convert Apps Script data to Google Charts DataTable format.
            const data = google.visualization.arrayToDataTable(${JSON.stringify(chartData)});
            const options = ${JSON.stringify(chartOptions)};

            const chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
            chart.draw(data, options);
          }
        </script>
        <style>
          body { font-family: sans-serif; margin: 10px; }
          #chart_div { width: 100%; height: 350px; }
        </style>
      </head>
      <body>
        <h3>Sales Performance Chart</h3>
        <div id="chart_div"></div>
        <button onclick="google.script.host.close()">Close</button>
      </body>
    </html>
  `;

  const htmlOutput = HtmlService.createHtmlOutput(htmlContent)
    .setTitle('Embedded Chart')
    .setWidth(600)
    .setHeight(450);

  // Display the modal dialog. This requires the script to be bound to a Google Sheet/Doc/Form.
  SpreadsheetApp.getUi().showModalDialog(htmlOutput, 'Chart Example');
  // Or DocumentApp.getUi().showModalDialog(htmlOutput, 'Chart Example');
  // Or FormApp.getUi().showModalDialog(htmlOutput, 'Chart Example');
}
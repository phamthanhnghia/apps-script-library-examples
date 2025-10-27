/**
 * @description This script demonstrates a complete, end-to-end workflow for working with Google Sheets.
 * It programmatically creates a new spreadsheet, writes and formats data, reads the data back,
 * and adds a new sheet. This is a practical example of how to automate spreadsheet tasks.
 */
function fullSpreadsheetWorkflow() {
  try {
    // --- 1. Create a new Spreadsheet ---
    const spreadsheetName = `My Automated Report - ${new Date().toLocaleDateString()}`;
    const spreadsheet = SpreadsheetApp.create(spreadsheetName);
    Logger.log(`Successfully created new spreadsheet: "${spreadsheet.getName()}"`);
    Logger.log(`URL: ${spreadsheet.getUrl()}`);

    // Get the first sheet and rename it.
    const sheet = spreadsheet.getActiveSheet();
    sheet.setName('Sales Data');

    // --- 2. Write Data ---
    // Define headers and data. Using a 2D array.
    const header = ['OrderID', 'Customer', 'Product', 'SaleDate', 'Amount'];
    const data = [
      ['ORD-001', 'John Smith', 'Laptop', new Date('2025-10-27'), 1200.50],
      ['ORD-002', 'Jane Doe', 'Mouse', new Date('2025-10-27'), 25.00],
      ['ORD-003', 'Peter Jones', 'Keyboard', new Date('2025-10-28'), 75.75],
      ['ORD-004', 'Mary Brown', 'Monitor', new Date('2025-10-28'), 350.00]
    ];

    // Write the header
    sheet.getRange(1, 1, 1, header.length).setValues([header]);

    // Write the data
    sheet.getRange(2, 1, data.length, data[0].length).setValues(data);
    Logger.log('Successfully wrote data to the "Sales Data" sheet.');

    // --- 3. Format Cells ---
    // Format the header row
    const headerRange = sheet.getRange('A1:E1');
    headerRange.setFontWeight('bold');
    headerRange.setBackground('#4a86e8'); // A nice blue color
    headerRange.setFontColor('white');
    headerRange.setHorizontalAlignment('center');

    // Format the currency column (Column E)
    const currencyRange = sheet.getRange('E2:E' + (data.length + 1));
    currencyRange.setNumberFormat('$#,##0.00');

    // Format the date column (Column D)
    const dateRange = sheet.getRange('D2:D' + (data.length + 1));
    dateRange.setNumberFormat('yyyy-mm-dd');
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, header.length);
    Logger.log('Successfully applied formatting.');

    // --- 4. Read Data Back ---
    const allDataRange = sheet.getDataRange();
    const allValues = allDataRange.getValues();
    Logger.log('Reading all data from the sheet for verification:');
    Logger.log(allValues);

    // --- 5. Create a New Sheet ---
    const newSheet = spreadsheet.insertSheet('Summary');
    newSheet.getRange('A1').setValue('This is the summary sheet.');
    Logger.log(`Successfully created a new sheet named "${newSheet.getName()}".`);
    
    // --- 6. Final Message ---
    Logger.log('Full spreadsheet workflow completed successfully!');

  } catch (e) {
    Logger.log(`An error occurred during the workflow: ${e.toString()}`);
    Logger.log(`Stack: ${e.stack}`);
  }
}

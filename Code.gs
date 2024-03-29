// Short Google Apps Script code to receive webhook data in Google Sheets
// Link my github https://github.com/rvbautista/google-sheets-webhook/
// It can automatically process json load of any realistic size; but if the json load is too big, it will be better to use an API service.

function doPost(e) {
  var jsonData = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var nextRow = sheet.getLastRow() + 1;
  var currentDateTime = new Date();
  var numCells = Object.keys(jsonData).length;
  var valuesArray = [currentDateTime];
  for (var key in jsonData) {
    valuesArray.push(jsonData[key]);
  }
  sheet.getRange(nextRow, 1, 1, numCells + 1).setValues([valuesArray]);
}


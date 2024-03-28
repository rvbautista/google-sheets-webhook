// Short Google Apps Script code to receive webhook data in Google Sheets
// Link my github https://github.com/rvbautista/google-sheets-webhook/
// Note it only receives data with one value

function doPost(e) {
  var jsonData = JSON.parse(e.postData.contents);
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var nextRow = sheet.getLastRow() + 1;
  var message = jsonData.message;
  var currentDateTime = new Date();
  sheet.getRange(nextRow, 1, 1, 2).setValues([[currentDateTime, message]]);
  return ContentService.createTextOutput("Webhook received and data written to sheet successfully");
}

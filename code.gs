function doGet() {
  var output = HtmlService.createHtmlOutputFromFile('form.html');
  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
}

function getAuthenticationToken(){
  return ScriptApp.getOAuthToken();
}

// This line prompts google script to request the correct permissions
// DriveApp.createFile();

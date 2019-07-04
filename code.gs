function doGet() {
  return HtmlService.createHtmlOutputFromFile('form.html');
}

function getAuthenticationToken(){
  return ScriptApp.getOAuthToken();
}

// This line prompts google script to request the correct permissions
// DriveApp.createFile();

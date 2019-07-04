function doGet() {
  return HtmlService.createTemplateFromFile('form').evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getAuthenticationToken(){
  return ScriptApp.getOAuthToken();
}

// This line prompts google script to request the correct permissions
// DriveApp.createFile();

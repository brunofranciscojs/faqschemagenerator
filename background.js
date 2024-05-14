// background.js

let extractedData = [];

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.action === "extractedData") {
    extractedData = request.data;
  } else if (request.action === "getExtractedData") {
    sendResponse({ data: extractedData });
  }
});

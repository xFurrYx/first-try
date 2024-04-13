
    // Select the dropdown and the display input field
    let dropdownService = document.querySelector('#dropdownService');
    let dropdownPayment = document.querySelector('#dropdownPayment');
    let dropdownStatus = document.querySelector('#dropdownStatus');
    let displayService = document.getElementById('displayService');
    let displayPayment = document.getElementById('displayPayment');
    let displayStatus = document.getElementById('displayStatus');
  
    dropdownService.addEventListener('change', function(event) {
        displayService.value = event.target.value;
    });
  
    dropdownPayment.addEventListener('change', function(event) {
        displayPayment.value = event.target.value;
    });
  
    dropdownStatus.addEventListener('change', function(event) {
        displayStatus.value = event.target.value;
    });
    
  // to add to gsheets //https://developers.google.com/sheets/api/guides/values#node.js
  // Assuming you have already fetched the data you want to update
// Call the Google Sheets API to update the spreadsheet
function updateSpreadsheet() {
  var newData = [
    [displayService.value, displayPayment.value, displayStatus.value] // Use the values from the dropdowns
  ];

  gapi.client.sheets.spreadsheets.values.append({
    spreadsheetId: '1ocLJ7tj8Tzltdq3EfmZ1YtmBo6E-XSiATgDXK4RUV0Q',
    range: 'Sheet1!A1', // Range where you want to append data
    valueInputOption: 'RAW',
    resource: { values: newData }
  }).then(function(response) {
    console.log('Data appended successfully:', response);
  }, function(reason) {
    console.error('Error appending data:', reason.result.error.message);
  });
}

document.getElementById('updateButton').addEventListener('click', updateSpreadsheet);
  
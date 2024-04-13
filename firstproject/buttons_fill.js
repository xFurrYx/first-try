<script>
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
    
  /* to add to gsheets //https://developers.google.com/sheets/api/guides/values#node.js
  // Assuming you have already fetched the data you want to update
  var newData = [
    ['A1', 'B1', 'C1'], // Example data to update in the spreadsheet
    ['A2', 'B2', 'C2'],
    ['A3', 'B3', 'C3']
  ];
  
  // Call the Google Sheets API to update the spreadsheet
  function updateSpreadsheet() {
    gapi.client.sheets.spreadsheets.values.update({
      spreadsheetId: 'YOUR_SPREADSHEET_ID',
      range: 'Sheet1!A1', // Range where you want to update data
      valueInputOption: 'RAW',
      resource: { values: newData }
    }).then(function(response) {
      console.log('Data updated successfully:', response);
    }, function(reason) {
      console.error('Error updating data:', reason.result.error.message);
    });
   
  }
  */
  </script>
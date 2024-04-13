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

document.getElementById('updateButton').addEventListener('click', function() {
    var newData = [
        [displayService.value, displayPayment.value, displayStatus.value] // Use the values from the dropdowns
    ];

    fetch('http://localhost:3001/update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newData: newData }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch((error) => {
        console.error('Error:', error);
    });
});

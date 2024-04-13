
const { google } = require('googleapis');
const keys = require('C:/Users/Mateusz/Desktop/.Pulpit/calendarui-417618-6aaea0c26381.json');

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('Connected!');
        gsrun(client);
    }
});

async function gsrun(cl) {
    const gsapi = google.sheets({ version: 'v4', auth: cl });

    const opt = {
        spreadsheetId: '1ocLJ7tj8Tzltdq3EfmZ1YtmBo6E-XSiATgDXK4RUV0Q',
        range: 'Sheet1!A:AA'
    };

    let data = await gsapi.spreadsheets.values.get(opt);
    let dataArray = data.data.values;
    console.log(dataArray);
}


/*
// Function to authenticate with Google Sheets API
function authenticate() {
    return new Promise((resolve, reject) => {
        // Client ID and API key from the Developer Console
        //test data V
        const apiKey = process.env.API_KEY;
        const clientId = process.env.CLIENT_ID;
        const clientSecret = process.env.CLIENT_SECRET;
        // Array of API discovery doc URLs for APIs used by the application
        const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];

        // Authorization scopes required by the API
        const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';
        
const { google } = require('googleapis');

// Set up the Google Sheets API client
const oauth2Client = new google.auth.OAuth2(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

// Authenticate the client
oauth2Client.setCredentials({ access_token: process.env.ACCESS_TOKEN });

// Create the Google Sheets API client
const sheets = google.sheets({ version: 'v4', auth: oauth2Client });

// Now you can use the `sheets` client to make API requests
        // Load the API client and auth2 library
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                discoveryDocs: DISCOVERY_DOCS,
                scope: SCOPES
            }).then(() => {
                // Listen for sign-in state changes
                gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);

                // Handle initial sign-in state
                updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
            }, (error) => {
                console.error('Error initializing Google API client:', error);
                reject(error);
            });
        });

        // Update UI sign-in state changes
        function updateSignInStatus(isSignedIn) {
            if (isSignedIn) {
                console.log('User is signed in.');
                resolve();
            } else {
                console.log('User is not signed in.');
                // Sign in user
                gapi.auth2.getAuthInstance().signIn();
            }
        }
    });
}
*/
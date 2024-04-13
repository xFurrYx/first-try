// Function to authenticate with Google Sheets API
function authenticate() {
    return new Promise((resolve, reject) => {
        // Client ID and API key from the Developer Console
        const CLIENT_ID = 'YOUR_CLIENT_ID';
        const API_KEY = 'YOUR_API_KEY';

        // Array of API discovery doc URLs for APIs used by the application
        const DISCOVERY_DOCS = ['https://sheets.googleapis.com/$discovery/rest?version=v4'];

        // Authorization scopes required by the API
        const SCOPES = 'https://www.googleapis.com/auth/spreadsheets';

        // Load the API client and auth2 library
        gapi.load('client:auth2', () => {
            gapi.client.init({
                apiKey: API_KEY,
                clientId: CLIENT_ID,
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
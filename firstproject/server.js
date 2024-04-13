const express = require('express');
const { google } = require('googleapis');
const path = require('path');
const keys = require('C:/Users/Mateusz/Desktop/.Pulpit/calendarui-417618-6aaea0c26381.json');

const app = express();

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json()); // for parsing application/json

const client = new google.auth.JWT(
    keys.client_email,
    null,
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

app.post('/update', async (req, res) => {
    const gsapi = google.sheets({ version: 'v4', auth: client });
    console.log("running");
    console.log(req.body);

    const opt = {
        spreadsheetId: '1ocLJ7tj8Tzltdq3EfmZ1YtmBo6E-XSiATgDXK4RUV0Q',
        range: 'Sheet1!A:AA',
        valueInputOption: 'RAW',
        resource: {
            values: req.body.newData,
        },
    };

    let response = await gsapi.spreadsheets.values.update(opt);
    res.json(response);
});

app.listen(3001, () => console.log('Server running on port 3001'));
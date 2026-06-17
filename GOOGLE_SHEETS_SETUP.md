# BBC Google Sheets Webhook Setup

Your Google Sheet ID:

```text
1I6sNi75m1xMFFQSmGisWM92_Lo_N8pHdivaeMya0_0k
```

Use `google-apps-script.gs` as the Apps Script code.

## Steps

1. Open your Google Sheet.
2. Go to `Extensions` > `Apps Script`.
3. Paste the full code from `google-apps-script.gs`.
4. Click `Deploy` > `New deployment`.
5. Choose type: `Web app`.
6. Set `Execute as`: `Me`.
7. Set `Who has access`: `Anyone`.
8. Deploy and copy the Web App URL.
9. Open `outputs/app.js` and replace:

```js
const GOOGLE_SHEETS_WEBHOOK_URL = "";
```

with:

```js
const GOOGLE_SHEETS_WEBHOOK_URL = "PASTE_YOUR_WEB_APP_URL_HERE";
```

The public Google Sheet edit URL is not the webhook URL. The site needs the Apps Script Web App URL.

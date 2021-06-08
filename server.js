const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();
const port = 18181;

const cardStatuses = ['low', 'medium', 'high'];
let currentIndex = 0;
let currentCardStatus = cardStatuses[currentIndex];

setInterval(() => {
  if (currentIndex >= cardStatuses.length) {
    currentIndex = 0;
  }
  currentCardStatus = cardStatuses[currentIndex];
  currentIndex++;
}, 5 * 1000);

app.use(cors());
app.use(express.static('public'));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/api/v1/card-data', (req, res) => {
  res.json({
    card_number: '98K7830H005-000',
    card_company: 'SkySelect Inc.',
    due_in: 31,
    created_at: '2021-04-21',
    card_status: 'medium',
  });
});

app.get('/api/v1/card-status', (req, res) => {
  res.json({
    card_status: currentCardStatus,
  });
});

app.listen(port, () => console.log(`Listening on port ${port}`));

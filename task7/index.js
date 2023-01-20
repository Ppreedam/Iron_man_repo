const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());


let strings = [];


app.post('/check-string', (req, res) => {
  const { string } = req.body;
  const stringExists = strings.includes(string);
  if (stringExists) {
    res.status(200).json({ message: 'String was sent before', exists: true });
  } else {
    strings.push(string);
    res.status(200).json({ message: 'String was not sent before', exists: false });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

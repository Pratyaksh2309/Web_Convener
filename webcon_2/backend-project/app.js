const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());


app.post('/submit-form', (req, res) => {
  const formData = req.body;
  const dataToStore = `${formData.name},${formData.email},${formData.branch}\n`;

  fs.appendFile('formData.txt', dataToStore, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error storing data');
    } else {
      console.log('Data stored successfully');
      res.status(200).send('Data stored successfully');
    }
  });
});


app.get('/get-form-data', (req, res) => {
  fs.readFile('formData.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error reading data');
    } else {
      const formDataArray = data
        .split('\n')
        .map((line) => {
          const [name, email, branch] = line.split(',');
          return { name, email, branch };
        })
        .filter((formData) => formData.name && formData.email && formData.branch); // Filter out invalid data

      res.status(200).json(formDataArray);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

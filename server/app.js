const express = require("express");
const file = require("fs");
const bodyParser = require("body-parser");
const cors = require('cors');

let fileName = null;
const app = express();

const corsOptions = {
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
const urlencodedParser = bodyParser.urlencoded({extended: false});
 
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "learn-site",
//   password: ""
// });

// app.get('/langs', (req, res) => {
//   connection.query("SELECT * FROM langs", (error, results) => {
//     if (error) {
//       console.error(error);
//       connection.end();
//     }

//     res.send(results);
//   });
//   connection.end();
// });

app.get('/language', urlencodedParser, (req, res) => {
  new Promise((resolve, reject) => {

    if (req.query.nameFile) {
      fileName = req.query.nameFile;
    } else {
      fileName = "ru";
    }

    file.readFile(`translate/${fileName}.json`, (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(data);
    });
  }).then((response) => {
    res.send(response);
  }).catch(error => {
    console.warn(error);
  });
});

app.get('/pattern', urlencodedParser, (req, res) => {
  new Promise((resolve, reject) => {

    file.readFile(`config/patterns.json`, (error, data) => {
      if (error) {
        reject(error);
      }

      resolve(data);
    });
  }).then((response) => {
    res.send(response);
  }).catch(error => {
    console.warn(error);
  });
});
 

app.listen(8016, function () {
  console.log('server запушен...');
});
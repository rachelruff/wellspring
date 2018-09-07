const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const massive = require('massive');


// const secrets = require('./secrets.js');
const ctrl = require("./controllers.js");

const app = express();
app.use(cors());
app.use(json());

// massive(secrets.connectionString).then(db => {
//   app.set("db", db);
// }).catch(console.log);
 
const PORT = 3001;

app.get('/api/test', mCtrl.getProductCategoriesProducts)

 
app.listen(PORT || 3001, () => {
  console.log(`App listening on port ${PORT || 3001}!`);
});
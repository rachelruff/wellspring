const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");

const ctrl = require("./controller.js");

const app = express();

app.use(cors());
app.use(json());

const PORT = 3001;

app.get("/api/articles", (console.log('hi'), ctrl.getArticles));
app.get('/api/getSaved', ctrl.getSaved);
app.post('/api/add', ctrl.saveArticle);
app.delete('/api/delete/:id', ctrl.deleteArticle);
app.put('/api/changeTitle/:id', ctrl.changeTitle);

app.listen(PORT || 3001, () => {
    console.log(`App listening on port ${PORT || 3001}!`);
});
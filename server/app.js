const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();
const jsonParser = express.json();
const urlencodedParser = express.urlencoded({extended: false});
const filePath = "words.json";

app.use(express.static(__dirname + "/public"));

app.use(cors());
app.get("/words", (request, response) => {
    const content = fs.readFileSync(filePath, "utf8");
    const words = JSON.parse(content);
    response.send(words);
});

app.post("/addWords", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);

    const content = fs.readFileSync("words.json", "utf8");
    const words = JSON.parse(content);
    const newWord = {
        id: words.length,
        word: request.body.word,
        transaction: request.body.translation,
        partOfSpeech: request.body.partOfSpeech
    };
    words.push(newWord);
    fs.writeFileSync("words.json", JSON.stringify(words));

    response.redirect('http://localhost:3000/dictionary/addWord')
});

app.post("/addConstruction", urlencodedParser, function (request, response) {
    if (!request.body) return response.sendStatus(400);
    console.log(request.body)

    const content = fs.readFileSync("constructionsWords.json", "utf8");
    const constructions = JSON.parse(content);
    const newConstruction = {
        id: constructions.length,
        word: request.body.construction,
        transaction: request.body.translation,
        wordCount: request.body.wordCount
    };
    constructions.push(newConstruction);
    fs.writeFileSync("constructionsWords.json", JSON.stringify(constructions));

    response.redirect('http://localhost:3000/dictionary/addConstruction');
});

app.listen(2000);
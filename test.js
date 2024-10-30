const { doesNotReject } = require("assert");
const express = require("express")
const app = express()
const PORT = 3000;
const fs = require("fs")
const path = require("path")



const lessonname = fs.readdirSync(__dirname + "/static/cwiczenia/");
console.log(lessonname)

const filenames = []
for (let index = 0; index < lessonname.length; index++) {
    let folder = fs.readdirSync(__dirname + "/static/cwiczenia/" + lessonname[index])
    filenames.push(folder)

}
// const filenames = fs.readdirSync(__dirname + "/static/cwiczenia/lekcja-1-directives");
// console.log(filenames)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/index.html"))

})

dirdata = []
dirdata.push(lessonname)
dirdata.push(filenames)
app.get("/aaa", function (req, res) {

    res.header("content-type", "application/json")
    res.send({ dirdata: dirdata })

})

// function sendLink() {
//     for (let index = 0; index < dirdata.length; index++) {
//         const para = document.createElement("a");
//         para.href = dirdata[1][index];
//         para.innerText = dirdata[1][index];
//         console.log(para)
//     }

// }
app.use(express.static('static'))
app.use(express.static('static/cwiczenia/lekcja-1-directives'))

app.listen(PORT, function () {
    console.log("start serwera na porcie " + PORT)
})

var express = require('express');
var app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))
// set the view engine to ejs
app.set('view engine', 'ejs');

let listName = ["Doan", "Thai", "Dung"]

// index page
app.get('/', function(req, res) {
    var drinks = listName
    var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

    res.render('pages/index', {
        drinks: drinks,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.post('/about', (req,res) => {
    listName.push(req.body.name)
    return res.redirect("/")
})

// app.put('/about', (req,res) => {
//     console.log('haha')
//     listName.map(item => {
//         if(item == req.body.name){
//             item = req.body.name
//         }
//     })
//     console.log(listName)
// })

// app.post('/about', (req,res) => {
//     console.log('jsjsj')
//     listName.map(item => {
//         if(item == req.body.name){
//             console.log('hjaja')
//             listName.splice(item, 1)
//         }
//     })
//     console.log(listName)
//     //return res.redirect("/about")
// })
app.listen(8080);
console.log('Server is listening on port 8080');


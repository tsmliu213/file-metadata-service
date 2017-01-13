var express = require('express');
var multer = require('multer');
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var app = express();
app.use('/', express.static(__dirname + '/public'));
app.post('/upload', upload.single('uploadfile'), function(req, res) {
    if(req.file == undefined) {
        res.send(JSON.stringify({"error": "no file selected"}));
    }
    else {
        res.send(JSON.stringify({"size": req.file.size}));
    }
});

app.listen(process.env.PORT || 8080);


var http = require('http')
var url = require('url')

var server = http.createServer(function(req,res) {
    var page = url.parse(req.url).pathname

    res.writeHead(200, {"contentType": "text/html"})

    if (page == "/login") {
        res.write("hello " + page)
    }
    else if(page=="/signup"){
        res.write("Hi "+page)
        }
        else{
        res.write("Welcome To Hell")
    }
    res.end("")

})

server.listen(1338)
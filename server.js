var express = require('express');
var http = require('http');
// var app = require('express')();
var app = express();

var bodyparser = require('body-parser');
var path = require('path');
var nodemailer = require('nodemailer');

// HTTPS
var https = require('https');
const fs = require('fs');

// SSL

var options = {
    ca: fs.readFileSync('ca_bundle.crt', 'utf8'),
    key: fs.readFileSync('private.key', 'utf8'),
    cert: fs.readFileSync('certificate.crt', 'utf8')
}



// var bcrypt = require('bcrypt');







app.use(express.static(path.join(__dirname,"static")));
app.use(express.static(path.join(__dirname,"c")));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));




// Home page
app.get('/', function(req, res)
{
    res.sendFile(path.join(__dirname,"c","cindex.html"));
})

// C++

app.get('/cplus', function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++index.html"));
})


// Navbar in C++
app.get('/homefromcplus', function(req,res)
{
    res.sendFile(path.join(__dirname,"c","index.html"));
})
app.get('/askQfromcplus', function(req,res)
{
    res.sendFile(path.join(__dirname,"c","askedQ.html"));
})
app.get('/contactfromcplus', function(req,res)
{
    res.sendFile(path.join(__dirname,"c","contactus.html"));
})


// Cards in C++

app.get('/plusTemplates',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++Templates.html"));
})
app.get('/plusOperatorOverloading',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++OperatorOverloading.html"));
})
app.get('/plusFriendFunction',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++friendfunction.html"));
})
app.get('/plusFunctionOverloading',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++FunctionOverloading.html"));
})



app.get('/cfromcplus',function(req, res)
{
    res.sendFile(path.join(__dirname,"c","cindex.html"));
})
app.get('/plusfromquala', function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++helloProgram.html"));
})

app.get('/plusaddition',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++addition.html"));
})
app.get('/plusvolumeofcube',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++cubevolume.html"));
})
app.get('/pluscircle',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++circle.html"));
})
app.get('/plusfindangle',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++angletriangle.html"));
})
app.get('/plusvirtualfunction',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++virtualfunction.html"));
})
app.get('/plussortingnames',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++sortingnames.html"));
})
app.get('/pluscontructordestructor',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++constructordestructor.html"));
})
app.get('/plusreversearray',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++reversearray.html"));
})
app.get('/plusbankingsystem',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++bankingsystem.html"));
})
app.get('/plusthisPointer',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++thisPointer.html"));
})

app.get('/pluspolymorphism',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++polymorphism.html"));
})
app.get('/plusinheritance',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++inheritance.html"));
})

app.get('/plusencapsulation',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++encapsulation.html"));
})
app.get('/plusLoops',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++Loops.html"));
})

app.get('/plusManipulatestring',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++manipulatestring.html"));
})

app.get('/plusstatements',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++statements.html"));
})
app.get('/plussearchelearray',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++searchelementarray.html"));
})
app.get('/plusmergetwoarraysort',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++mergearrayandsort.html"));
})
app.get('/plusswapwithoutvariable',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++swapwithoutvariable.html"));
})
app.get('/plusseriessum',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++seriessum.html"));
})
app.get('/plusleapyear',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++leapyear.html"));
})
app.get('/plusprintwithoutloop',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++printwithoutloop.html"));
})
app.get('/plusFiles',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++files.html"));
})
app.get('/plusDynamicBinding',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++DynamicBinding.html"))
})
app.get('/plusDataAbstraction',function(req, res)
{
    res.sendFile(path.join(__dirname,"c++","c++DataAbstraction.html"))
})















// Admin Login


// app.post('/adminLogin', function(req, res)
// {
//     var user = req.body.username;
//     var pass = req.body.password;
//     var hash = bcrypt.hashSync(pass, 10);
//     console.log(user);
//     admin.findOne({username: user},function(err,Admin)
//     {
//     if(Admin)
//     {
//       if(Admin.password == pass)
//       {
//           res.sendFile(path.join(_dirname,"c","admin.html"));
//       }  
//       else{
//         res.send("Invalid password");
//       }
//     }
//     else{
//         res.json("Invalid username");
//     }
//     })
    
// })

// Fetch Questions

// app.get('/fetchQuestions', function(req, res)
// {
//     programs.find({}, function(err, results)
//     {
//         if (err) throw err;
//         console.log(results);
//         res.json({results});
//     })
// })

// Admin questions upload

// app.post('/uploadQ', function(req, res)
// {
//     var q = "hi";
//     var solutions = req.body.codes;
//     console.log(solutions);
//     var sltn = new programs({
//         question: q,
//         solution: solutions
//     })
//     sltn.save(function(err, programs)
//     {
//         if (err)
//         res.end("Error");
//         res.json({msg: "success"});
//     })
// })

// app.listen(80,function()
// {
//     console.log("Listening at port 80");
// });


http.createServer(app).listen(80, ()=>{
    
    console.log("Listening at port 80");
})
https.createServer(options,app).listen(443, ()=>{
    console.log("Listening");
});


var fs = require('fs');



 function sayTwo(){
     
 }

// function sayTwo(){
//         fs.readFileSync(__dirname + '/data.json');
//         console.log('two');
// }

// function sayTwo(){
//     fs.readFile(__dirname + '/data.json', function(err, data){
//         console.log('two');
//     });
// }

function say(){
    console.log('one');
    sayTwo();
    console.log('three');
}

say();
const fs = require('fs');

// create directory
// fs.mkdir('./files', (err) => {
//     if(err){
//         console.log(err);
//     }
//     console.log('Folder created')
// });


// write file

// fs.writeFile('./files/file1.txt', 'hello,world', () => {
//     console.log('written successfully');
// });

// read file
fs.readFile('./files/file1.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})
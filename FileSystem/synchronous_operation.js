const fs = require('fs');
const filepath = '/home/developers/AniketWorkSpace/NodeJS/example.txt'
const content = '\nHello, this is a text file created synchronously with Node.js!';

if(fs.existsSync(filepath)){
    // Read
    // const data = fs.readFileSync(filepath, 'utf8');
    // console.log(data); // Output the content of the file

    //append
    fs.appendFileSync(filepath,content)
    console.log("data successfully append..")
    
    //remove
    // fs.unlinkSync(filepath) // This is used to delete a file
    // console.log('File deleted successfully');

}
else{
    console.log("file not present file creation started...")
    // Content to write to the file
    fs.writeFileSync(filepath, content);

    console.log('Directory created successfully');
}

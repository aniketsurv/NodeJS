const fs = require('fs');
const filepath = '/home/developers/AniketWorkSpace/NodeJS/example.txt'
const content = '\nHello, this is a text file created synchronously with Node.js!';

fs.access(filepath,fs.constants.F_OK, (err) =>{
    if(err){
        console.log('File does not exist..');
        console.log("File creation started..")

        fs.writeFile(filepath, content ,(err) =>{
            if(err){
                console.log("File creation fail.")
            }
            else{
                console.log("File creation done.")
            }
        });
    }
    else{
        console.log('File exists.');

        // Read
        // const data = fs.readFileSync(filepath, 'utf8');
        // fs.readFile(filepath,'utf8',(err,data) =>{
        //     if(err){
        //         console.log("res-->",err)
        //     }
        //     else{
        //         console.log("res-->",data)
        //     }
        // });

        //append
        fs.appendFile(filepath,content,(err) =>{
            if(err){
                console.log("data append failed")
            }
            else{
                console.log("data successfully append..")
            }
        });

        // //delete
        // fs.unlink(filepath,(err) =>{
        //     if(err){
        //         console.log("File deltion failed")
        //     }
        //     else{
        //         console.log("File successfully deleted..",)
        //     }
        // });
    }
});

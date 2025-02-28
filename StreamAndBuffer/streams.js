//const fs = require('fs');
import fs, { ReadStream, WriteStream } from 'fs'

function readFromStream(){
    // Create a readable stream from a file
const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8' });

// Listen for 'data' event to read the chunks
readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data.`);
  console.log(chunk);
});

// Listen for 'end' event when there is no more data
readableStream.on('end', () => {
  console.log('No more data to read.');
});

// Listen for errors
readableStream.on('error', (err) => {
  console.error('Error occurred:', err);
});
}


function writeToStream(){
    // Create a writable stream to a file
const writableStream = fs.createWriteStream('example.txt');

// Write data to the file in chunks
writableStream.write('Hello, ');
writableStream.write('World!\n');
writableStream.write('jon, ');
writableStream.write('World!\n');

// End the stream, ensuring all data is flushed
writableStream.end();

// Listen for 'finish' event when all writes are complete
writableStream.on('finish', () => {
  console.log('All writes are complete.');
});

// Handle errors
writableStream.on('error', (err) => {
  console.error('Error occurred:', err);
});

}
readFromStream();
//writeToStream();
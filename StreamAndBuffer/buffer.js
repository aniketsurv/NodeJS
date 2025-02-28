// Example: Create a buffer and fill it with data
const buffer = Buffer.alloc(10);
buffer.write('Hello');
console.log(buffer); // Output: <Buffer 48 65 6c 6c 6f 00 00 00 00 00>

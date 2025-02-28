const users = [
    { id: 1, username: 'test', password: '$2a$10$V/sU1.nOWaRE.WO56Zk7aeR7djW6O/A6WJxWcTTGvFb5yMCzhrfuG' }, // hashed password: 'password123'
  ];
  
  export const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
  };
  
  export const verifyPassword = async (password, hashedPassword) => {
    const bcrypt = require('bcryptjs');
    return await bcrypt.compare(password, hashedPassword);
  };
  
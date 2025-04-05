// Example of legitimate function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function hashPassword(password) {
    const crypto = require('crypto');
    return crypto.createHash('sha256').update(password).digest('hex');
  }
  // you did it 
  // now you just need to take a look at the github source code
  // Export functions
  module.exports = {
    validateEmail,
    hashPassword
  };
  
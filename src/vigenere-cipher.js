const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Message and key are required parameters.');
    }

    const upperMessage = message.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < upperMessage.length; i++) {
      const char = upperMessage[i];

      if (char >= 'A' && char <= 'Z') {
        const shift = upperKey[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const encryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) + shift) % 26) + 'A'.charCodeAt(0));
        result += encryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Encrypted message and key are required parameters.');
    }

    const upperEncryptedMessage = encryptedMessage.toUpperCase();
    const upperKey = key.toUpperCase();
    let result = '';

    for (let i = 0, j = 0; i < upperEncryptedMessage.length; i++) {
      const char = upperEncryptedMessage[i];

      if (char >= 'A' && char <= 'Z') {
        const shift = upperKey[j % key.length].charCodeAt(0) - 'A'.charCodeAt(0);
        const decryptedChar = String.fromCharCode(((char.charCodeAt(0) - 'A'.charCodeAt(0) - shift + 26) % 26) + 'A'.charCodeAt(0));
        result += decryptedChar;
        j++;
      } else {
        result += char;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

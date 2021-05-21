import CryptoJS from 'crypto-js';

class Crypt {
	static secret = 'sadfsdf!dHfvY>UdvfS54';

	static encrypt(plainText) {
		return CryptoJS.AES.encrypt(plainText, this.secret).toString();
	}

	static decrypt(cipherText) {
		const bytes = CryptoJS.AES.decrypt(cipherText, this.secret);
		return bytes.toString(CryptoJS.enc.Utf8);
	}
}

export default Crypt;

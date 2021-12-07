import Crypt from '../security/Crypt';

/**
 * Cookie Service
 */
class CookieService {
	/**
	 * Crée un cookie
	 * @param {string} cName Cookie mame
	 * @param {string} cValue Cookie value
	 * @param {bool} useCrypt If true encrypt cookie value
	 * @param {int} expDay Cookie expiration date
	 */
	static setCookie(cName, cValue, useCrypt = true, expDay) {
		const cookieValue = (cValue.isArray || (typeof cValue === 'object' && cValue !== null)) ? JSON.stringify(cValue) : cValue;

		const date = new Date();
		date.setTime(date.getTime() + (expDay * 24 * 60 * 60 * 1000));
		const expires = `expires=${date.toUTCString()};`;
		if (useCrypt) {
			document.cookie = `${cName}=${Crypt.encrypt(cookieValue)};${expires}path=/`;
		} else {
			document.cookie = `${cName}=${cookieValue};${expires}path=/`;
		}
	}

	/**
	 * Returns the value of a cookie based on this name
	 * @param {string} cName Cookie mame
	 * @param {Crypt} Crypt Cookie value
	 */
	static getCookie(cName, useCrypt = true) {
		const name = `${cName}=`;
		const allCookies = document.cookie.split(';');
		for (let i = 0; i < allCookies.length; i++) {
			let cookie = allCookies[i];
			while (cookie.charAt(0) === ' ') {
				cookie = cookie.substring(1);
			}
			if (cookie.indexOf(name) === 0) {
				const cookieValue = cookie.substring(name.length, cookie.length);
				if (useCrypt) {
					return JSON.parse(Crypt.decrypt(cookieValue));
				}

				try {
					return JSON.parse(cookieValue);
				} catch (error) {
					return cookieValue;
				}
			}
		}
		return '';
	}

	/**
	* Checks the existence of the USER key in cookies
	* @param string $key
	* @return mixed false || value
	*/
	static checkUserCookie(key) {
		if (cookieService.getCookie('USER')) {
			const userCookie = cookieService.getCookie('USER');
			if (userCookie && key in userCookie) {
				return userCookie[key];
			}
		}

		return false;
	}
}

export default CookieService;
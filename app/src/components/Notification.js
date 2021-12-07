import { store } from 'react-notifications-component';

export default class Notification {
	static success(message, title = '') {
		if (message.length > 3) {
			store.addNotification({
				title,
				message,
				type: 'success',
				insert: 'bottom',
				container: 'bottom-right',
				animationIn: ['animated', 'fadeIn'],
				animationOut: ['animated', 'fadeOut'],
				dismiss: {
					duration: 3000,
					pauseOnHover: true,
				}
			});
		}
	}

	static error(message, title = '') {
		if (message.length > 3) {
			store.addNotification({
				title,
				message,
				type: 'danger',
				insert: 'bottom',
				container: 'bottom-right',
				animationIn: ['animated', 'fadeIn'],
				animationOut: ['animated', 'fadeOut'],
				dismiss: {
					duration: 3000,
					pauseOnHover: true,
				}
			});
		}

		return false;
	}

	/**
	 * Customized Notification Method
	 * @param {string} message
	 * @param {string} title
	 * @param {string} type success|danger|info|default|warning
	 * @param {int} duration Notification display time in ms
	 */
	static custom(message, title = '', type = 'info', duration = 3000) {
		if (message.length > 3) {
			store.addNotification({
				title,
				message,
				type,
				insert: 'bottom',
				container: 'bottom-right',
				animationIn: ['animated', 'fadeIn'],
				animationOut: ['animated', 'fadeOut'],
				dismiss: {
					duration,
					pauseOnHover: true,
				}
			});
		}
	}
}

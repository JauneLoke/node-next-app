// SessionStorageService.js
const SessionStorageService = (function () {
	let _service;

	function _getService() {
		if (!_service) {
			_service = this;
			return _service;
		}
		return _service;
	}

	function _setToken(tokenObj) {
		sessionStorage.setItem('access_token', tokenObj.ACCESS_TOKEN);
		sessionStorage.setItem('refresh_token', tokenObj.REFRESH_TOKEN);
	}

	function _getAccessToken() {
		return sessionStorage.getItem('access_token');
	}

	function _getRefreshToken() {
		return sessionStorage.getItem('refresh_token');
	}

	function _clearToken() {
		sessionStorage.removeItem('access_token');
		sessionStorage.removeItem('refresh_token');
	}

	return {
		getService: _getService,
		setToken: _setToken,
		getAccessToken: _getAccessToken,
		getRefreshToken: _getRefreshToken,
		clearToken: _clearToken
	};
}());

export default SessionStorageService;

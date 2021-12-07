
/**
 * Invoquez cette classe pour générer des erreurs personnalisées
 * ex: throw new ErrorHandler(404, 'not found')
 */
class ErrorHandler extends Error {
	constructor(status, message) {
		super();
		this.status = status;
		this.message = message;
	}
}

module.exports = {
	ErrorHandler
}
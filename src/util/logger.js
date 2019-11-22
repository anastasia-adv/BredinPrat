const { createLogger, format, transports } = require('winston');

// logger configuration
const {
	combine, colorize, splat, simple,
} = format;

const logger = createLogger({
	format: combine(
		colorize(),
		splat(),
		simple(),
	),
	transports: [
		new transports.Console(),
	],
});
module.exports = logger;
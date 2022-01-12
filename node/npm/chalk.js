const chalk =require('chalk')

const log = console.log;

// Combine styled and normal strings
console.loglog(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
console.loglog(chalk.blue.bgRed.bold('Hello world!'));

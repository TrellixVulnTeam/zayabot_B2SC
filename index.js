let cluster = require('cluster')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts = require('cfonts')
const Readline = require('readline')
const yargs = require('yargs/yargs')
const rl = Readline.createInterface(process.stdin, process.stdout)
const moment = require('moment-timezone');
const chalk = require('chalk')

CFonts.say('INICIANDO', {
	font: 'tiny',                // define the font face
  align: 'center',              // define text alignment
	colors: ['system'],           // define all colors
	background: 'transparent',    // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,             // define letter spacing
	lineHeight: 1,                // define the line height
	space: true,                  // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',               // define how many character can be on one line
	gradient: false,
  independentGradient: false,   // define if you want to recalculate the gradient for each new line
	transitionGradient: false,    // define if this is a transition between colors directly
	env: 'node'                   // define the environment CFonts is being executed in
});

CFonts.say('ZAYA', {
	font: 'block',                // define the font face
  align: 'center',              // define text alignment
	colors: ['system'],           // define all colors
	background: 'transparent',    // define the background color, you can also use `backgroundColor` here as key
	letterSpacing: 1,             // define letter spacing
	lineHeight: 1,                // define the line height
	space: true,                  // define if the output text should have empty lines on top and on the bottom
	maxLength: '0',               // define how many character can be on one line
	gradient: ['red', 'magenta'], // define your two gradient colors
	independentGradient: false,   // define if you want to recalculate the gradient for each new line
	transitionGradient: false,    // define if this is a transition between colors directly
	env: 'node'                   // define the environment CFonts is being executed in
});

console.log(chalk.bold.rgb(239, 225, 3)(`[CONEXÃO] ${chalk.rgb(255, 255, 255)('Sucesso ao conectar-se com a Zaya!')}`))
console.log(chalk.bold.rgb(239, 225, 3)(`[INICIALIZAÇÃO] ${chalk.rgb(255, 255, 255)(new Date())}`))
console.log(' ')
console.log(chalk.bold.rgb(239, 225, 3)(`[SUPORTE] ${chalk.rgb(255, 255, 255)('+5511968151484 (Número de contato do WhatsApp)')}`))
console.log(chalk.bold.rgb(252, 88, 88)(`[AVISO] ${chalk.rgb(255, 255, 255)('Em fase de desenvolvimento, encontrou uma falha? Utilize /report [descrição do erro]')}`))




var isRunning = false
/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  if (isRunning) return
  isRunning = true
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say(`Desenvolvido por LotusBridge
  Todos os direitos reservados @2022`, {
    font: 'console',
    align: 'center',
    color: ['yellow']
  });

  cluster.setupMaster({
    exec: path.join(__dirname, file),
    args: args.slice(1),
  })
  let p = cluster.fork()
  p.on('message', data => {
    console.log('[RECEBIDA]', data)
    switch (data) {
      case 'reset':
        p.kill()
        isRunning = false
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
        case 'test':
          m.reply('s')
          break
    }
  })
  p.on('exit', code => {
    isRunning = false
    console.error('Saiu com o código:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
  if (!opts['test'])
    if (!rl.listenerCount()) rl.on('line', line => {
      p.emit('message', line.trim())
    })
  // console.log(p)
}

start('main.js')

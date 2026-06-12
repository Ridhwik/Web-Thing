const fs = require('fs')
const os = require('os')

const EventLogger = require('events')

class Logger extends EventLogger {

    log(message){
        this.emit('message', {message});
    }
    
}

var logger = new Logger();
const logFile = './logFile.txt'


const logToFile = (event) => {
    const logMessage = `${new Date().toISOString()} - ${event.message} \n`;
    fs.appendFileSync(logFile, logMessage);
}

logger.on('message', logToFile);

setInterval(() => {
    const memUsage = (os.freemem() / os.totalmem() ) * 100;
    logger.log(`Current Memory Usage: ${memUsage.toFixed(2)} , Used Memory: ${os.freemem}, Total Memory: ${os.totalmem} \n`);

}, 3000)
import { appendStyle, getFile, getStatusSymbol, getTime } from './logs.utils'
import { LoggerType } from './utils'


export const loggerType: LoggerType = {
    log: () => { return { prefix: appendStyle('green', `${getTime()} `) + getStatusSymbol('bold.green') } },
    error: () => { return { prefix: appendStyle('red', `${getTime()} `) + getStatusSymbol('bold.red') } },
    warning: () => { return { prefix: appendStyle('orange', `${getTime()} `) + getStatusSymbol('bold.orange') } },
    file: () => { return { prefix: `${getTime()} ${getFile()}` } },
    lim: () => { return { prefix: appendStyle('blue', '[' + '='.repeat(100) + ']') } }
}

export const loggerTypeExtension: LoggerType = {}
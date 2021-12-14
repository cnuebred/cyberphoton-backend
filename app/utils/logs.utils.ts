import { loggerType, loggerTypeExtension } from './logs.types.utils'
import { Logger, LoggerAppendix } from './utils'

const prefixes: { [index: string]: string } = {
    bold: '1',
    underline: '4',
    orange: '33',
    red: '31',
    blue: '34',
    magenta: '35',
    green: '32',
    black: '30',
    bwhite: '47',
    bred: '41',
    bgreen: '42',
    borange: '43',
}

const mapPrefixes = (prefixesList: string[]): string => {
    if (prefixesList.length == 0)
        return ''
    const prefixMapped: string[] = prefixesList.map((item: string) => {
        return `\x1b[${prefixes[item]}m`
    })
    return prefixMapped.join('')
}

const getStyle = (style: string): string => {
    return mapPrefixes(style.split('.').filter((item: string) => item))
}

export const getTime = (): string => {
    const time: Date = new Date()
    const timeHMS: number[] = [time.getHours(), time.getMinutes(), time.getSeconds()]
    return `[${timeHMS.map((item: number) => `0${item}`.slice(-2)).join(':')}]`
}

export const getFile = (): string => {
    const stack = new Error().stack
    const caller = stack.split('\n')[5].trim().slice(0, -1).split('\\');
    const prettierCaller = caller.slice(caller.length - 3).join('/')
    return `[${prettierCaller}]`
}

export const getStatusSymbol = (style: string | string[]): string => {
    if (!Array.isArray(style))
        style = [style]
    return `[${style.map(item => { return appendStyle(item, '•') }).join('')}]`
}

export const appendStyle = (style: string, text: string): string => {
    return `${getStyle(style)}${text}\x1b[0m`
}

export const loggerParser = (type: string, ...args): string => {
    const specificType = loggerType[type] || loggerTypeExtension[type]
    if (!specificType) return ''
    const typeMethod = specificType()

    const appendix: LoggerAppendix = {
        prev: args[0] == '\n' ? '\n' : '',
        next: args[args.length - 1] == '\n' ? '\n' : '',
        prefix: typeMethod.prefix || '',
        suffix: typeMethod.suffix || ''
    }
    if (appendix.prev) args.shift()
    if (appendix.next) args.pop()

    return `${appendix.prev}${appendix.prefix} ${args.map(item => {
        if (typeof item != 'string')
            return JSON.stringify(item)
        return item
    }
    ).join(' ')} ${appendix.suffix}${appendix.next}`
}

export const logger: Logger = {
    log: (...args): void => { console.log(loggerParser('log', ...args)) },
    error: (...args): void => { console.log(loggerParser('error', ...args)) },
    warning: (...args): void => { console.log(loggerParser('warning', ...args)) },
    file: (...args): void => { console.log(loggerParser('file', ...args)) },
    lim: (...args): void => { console.log(loggerParser('lim', ...args)) },
    custom: (...args): void => { console.log(loggerParser(args.shift(), ...args)) }
}

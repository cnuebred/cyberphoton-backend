export type LoggerAppendix = {
    prev: string,
    next: string,
    prefix: string,
    suffix: string
}
export type LoggerEmbedStyle = 'log' | 'error' | 'warning' | 'file' | 'lim' | 'custom'
export type LoggerType = {
    [index in LoggerEmbedStyle]?: () => {
        prefix?: string
        suffix?: string
    }
}
export type Logger = {
    [index in LoggerEmbedStyle]: (...args) => void
}
export type ResponseDataObject = {
    status?: string
    msg?: string,
    type?: string,
    data?: { [index: string]: string }
}
export type Response = {
    ok?: (content?) => ResponseDataObject
    err: (content?) => ResponseDataObject
}
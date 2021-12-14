import { Response } from './utils'

export const bodyContentResponse: Response = {
    err: (content?) => {
        return { msg: `Error: missing data in body: ${content}` }
    }
}
export const headerContentResponse: Response = {
    err: (content?) => {
        return { msg: `Error: missing data in header: ${content}` }
    }
}
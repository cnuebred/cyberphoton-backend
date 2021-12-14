import { bodyContentResponse, headerContentResponse } from '../utils/responses.utils'

export const bodyContent = (properties: string[]) => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = (args) => {
            const keys = Object.keys(args.req.body)
            const notContains: string[] = []
            properties.forEach(item => {
                if (!keys.includes(item))
                    notContains.push(item)
            })
            if (args.req.body && notContains.length == 0)
                return originalMethod(args)
            else
                return args.res.send(bodyContentResponse.err(notContains))
        }
    }
}
export const headerContent = (properties: string[]) => {
    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const originalMethod = descriptor.value

        descriptor.value = (args) => {
            const keys = Object.keys(args.req.headers)
            const notContains: string[] = []
            properties.forEach(item => {
                if (!keys.includes(item))
                    notContains.push(item)
            })
            if (args.req.headers && notContains.length == 0)
                return originalMethod(args)
            else
                return args.res.send(headerContentResponse.err(notContains))
        }
    }
}



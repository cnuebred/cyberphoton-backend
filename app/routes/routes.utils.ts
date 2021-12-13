import { EndpointType } from './routes'

export const endpointsParser = (endpointItems: EndpointType[], parent?: EndpointType): EndpointType[] => {
    let endpointsParsed: EndpointType[] = []
    endpointItems.forEach(item => {
        if (parent)
            item.endpoint = parent.endpoint + item.endpoint
        if (item.children) {
            endpointsParsed.push(item)
            endpointsParsed = [...endpointsParsed, ...endpointsParser(item.children, item)]
        } else
            endpointsParsed.push(item)
    })
    return endpointsParsed
}
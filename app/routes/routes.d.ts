
export type EndpointType = {
    name: string
    endpoint: string
    component?: any
    method?: string[]
    children?: EndpointType[]
}
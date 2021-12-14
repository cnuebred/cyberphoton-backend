import { EndpointType } from './routes'

import { endpointsParser } from './routes.utils'

const endpointsList: EndpointType[] = [
    { name: 'test', method: ['get', 'post'], endpoint: '/test', /*component: Test*/ },
    { name: 'test', method: ['get', 'post'], endpoint: '/test/:id', /*component: Test*/ },
    {
        name: 'auth', method: ['get'], endpoint: '/auth', /*component: Test,*/ children: [
            { name: 'login', method: ['get'], endpoint: '/login', /*component: Test*/ }
        ]
    }
]



export const endpoints = endpointsParser(endpointsList)
import { ConfigType } from './config'

const configDev = (): ConfigType => {
    return {
        port: 8000,
        host: 'localhost',
        api: '/api',
        version: 'dev'
    }
}

export default configDev


import { ConfigType } from './config'
import configDev from './config.dev'
import configProd from './config.prod'
import { logger } from '../utils/logs.utils'

const configEnv = (): ConfigType => {
    logger.log('\n', 'Working in:', process.env.MODE, '\n')

    if (process.env.MODE === 'prod')
        return configProd()
    else
        return configDev()
}
export const config = configEnv()
import { endpoints } from './endpoints';
import { EndpointType } from './routes';
import { logger } from '../utils/logs.utils';
import { config } from '../config/config.env';
import { NextFunction, Response } from 'express';

export const router = (app) => {
    logger.lim()
    endpoints.forEach((item: EndpointType) => {
        logger.log(
            `[${item.method.join(', ').toUpperCase()}]`,
            `'${item.name}'`,
            `=> http://${config.host}:${config.port}${item.endpoint}`)
        const component = new item.component()

        item.method.forEach(method => {
            app[method](item.endpoint, (req: Request, res: Response, next: NextFunction) => {
                component[`_${method}`]({ req, res, next })
            })
        })
    })
    logger.lim()
}

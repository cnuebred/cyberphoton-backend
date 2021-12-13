import { logger } from '../../utils/logs.utils'
import { bodyContent, headerContent } from '../component.utils'
import { RequestMethodArgs as ReqArg } from '../components'


export class Test {
    constructor() { }
    @headerContent(['token'])
    _get({ req, res, next }: ReqArg) {
        console.log(req.headers)
        console.log(req.params)
        logger.log('Every thing is ok on get')
        res.send({ 'message': 'Hello' })
    }
    @headerContent(['token'])
    @bodyContent(['name', 'age'])
    _post({ req, res, next }: ReqArg) {
        logger.log('Every thing is ok on post')
        res.send({ 'data': req.body.name })
    }
}
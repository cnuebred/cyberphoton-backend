import { NextFunction, Request, Response } from 'express'

export type RequestMethodArgs = {
    req: Request
    res: Response,
    next: NextFunction
}
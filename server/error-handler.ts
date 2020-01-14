import { ApiError } from '../shared/api-types'
import { responseKO, RequestHandler } from './api'

export function withErrorHandler<T>(fn: RequestHandler<T>): RequestHandler<T, ApiError> {
  return async req => {
    try {
      const res = await fn(req)
      return res
    } catch (e) {
      if (e.statusCode === 400) {
        return responseKO({
          error: 'BadRequest',
          statusCode: e.statusCode,
          errorMessage: e.message,
        })
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.log(e)
        }
        return responseKO({
          statusCode: 500,
          error: 'InternalServerError',
          errorMessage: 'Oops something went wrong',
        })
      }
    }
  }
}

export class HTTPError extends Error {
  readonly statusCode: number

  constructor(statusCode: number, message?: string) {
    super(message)
    this.statusCode = statusCode
  }
}

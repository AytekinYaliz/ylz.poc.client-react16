/* @flow */

export const NodeEnvironments = {
   dev: 'development',
   prod: 'production'
}

export const HttpMethod = {
   GET: 'GET',
   POST: 'POST',
   PUT: 'PUT',
   DELETE: 'DELETE'
}

export const HttpStatusCode = {
   OK: 200,
   Created: 201,
   // Accepted: 202,
   NoContent: 204,
   BadRequest: 400,
   Unauthorized: 401,
   Forbidden: 403,
   NotFound: 404,
   UnprocessableEntity: 422,
   InternalServerError: 500
}

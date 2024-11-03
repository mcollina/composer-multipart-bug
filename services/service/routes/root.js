/// <reference path="../global.d.ts" />
'use strict'
/** @param {import('fastify').FastifyInstance} fastify */
module.exports = async function (fastify, opts) {
  fastify.get('/example', async (request, reply) => {
    return { hello: fastify.example }
  })

  fastify.post('/upload', {
    async preValidation (req, reply) {
      console.log('preValidation', req.body)
    },
    schema: {
      consumes: ['multipart/form-data'],
      body: {
        type: 'object',
        properties: {
          data: {
            description: 'hello',
            type: 'object'
          }
        },
        "required": ["data"]
      },

      response: {
        "200": {
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "foo": { "type": "string" }
                }
              }
            }
          }
        }
      }
    }
  }, async (req, reply) => {
    console.log(req.body)
    return { foo: 'bar' }
  })
}

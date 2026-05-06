const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',

    info: {
      title: 'Job Application API',
      version: '1.0.0',
      description: 'API documentation for Job Application',
    },

    servers: [
      {
        url: 'http://localhost:5000',
        description: "Local server"
      },
      {
        url: '',
        description: "Live server"
      }
    ],

    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },

  apis: [
    './routes/*.js',
    './docs/*.js'
  ],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
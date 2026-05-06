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
        url: 'https://job-application-api-9dp4.onrender.com/',
        description: "Production server"
      },
      {
        url: 'http://localhost:5000',
        description: "Local server"
      },
      
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
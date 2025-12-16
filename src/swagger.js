const swaggerJSDoc = require('swagger-jsdoc');

// swagger-jsdoc configuration
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'ODVA Backend API',
      version: '1.0.0',
      description: 'Documentation of the ODVA backend REST API',
    },
    servers: [
      {
        url: process.env.SWAGGER_SERVER_URL || `http://localhost:${process.env.PORT || 5000}`,
        description: 'Development server',
      },
    ],
  },
  apis: ['./src/routes/**/*.js', './src/controllers/**/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;

// src/swagger.ts
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'File Elaborator',
      version: '1.0.0',
      description: 'API documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./src/routes.ts'], // Percorso ai file con le annotazioni JSDoc
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export const setupSwagger = (app: any) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};

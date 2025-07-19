const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Tài liệu API Quản lý Nhân sự",
      version: "1.0.0",
      description: "Swagger UI cho các API quản lý nhân sự",
    },
    servers: [
      {
       url: "https://api-nhansu.onrender.com", // ✅ DOMAIN CỐ ĐỊNH SAU KHI DEPLOY
    description: "Server chạy trên Render (Node.js)",
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // nếu sau này có dùng
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./routes/*.js"], // ✅ Tự động quét tất cả file trong routes
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs,
};

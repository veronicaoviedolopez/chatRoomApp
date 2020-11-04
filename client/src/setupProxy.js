const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    ["/api", "/api/auth/token",
    "/api/user/invite", "/api/invite/user",
    "/api/user/create", "/api/chatroom/select",
    "/api/user/edit", "/api/chatroom/create",
    "/api/auth/login", "/api/chatroom/message/create",
    "/avatars/"
  ],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
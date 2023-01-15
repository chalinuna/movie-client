const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "Movie-env.eba-e2vabrjf.ap-northeast-1.elasticbeanstalk.com",
      changeOrigin: true,
    })
  );
};

module.exports = {
  assetPrefix:
    process.env.NODE_ENV === "production" ? "https://budlebee.github.io" : "",
  basePath: process.env.NODE_ENV === "production" ? "" : "",
};

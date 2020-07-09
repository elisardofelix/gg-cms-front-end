const enviroments = { dev: "dev", prod: "prod" };

module.exports = {
  env: enviroments.dev,
  theme: "skin-blue",
  baseApiURL: {
    dev: "http://localhost:8000",
    prod: "https://gg-cms.herokuapp.com",
  },
  defaultPageQtyPag: 10,
};

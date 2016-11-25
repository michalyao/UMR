// 暂时不支持微信啊。。
const restify = require('restify');
const builder = require('botbuilder');

const server = restify.createServer();
server.listen(process.env.port || 6680, () => console.log(`${server.name} listening to ${server.url}`));
// server.get("/", (req, res, next) => {
//   res.send("hello, world!");
//   return next();
// });

const connector = new builder.ChatConnector({
  appId: "4851421c-7d23-4b54-9bfe-1d9a90f93a98",
  appPassword: "G7a****************************"
});

const umrBot = new builder.UniversalBot(connector);
server.post("/api/messages", connector.listen());
umrBot.dialog("/", session => session.send("Hello World!"));
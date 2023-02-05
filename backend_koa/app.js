const Koa = require('koa');
const router = require('koa-router');
const bodyParser = require("koa-bodyparser");

const app = new Koa();
const PORT = 1337;
app.use(bodyParser());



// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'hello, world!'
//   };
// });
require('./routes')(app);



const server = app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});

module.exports = server;
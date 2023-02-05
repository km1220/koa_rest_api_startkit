import Koa from 'koa';
// import router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import AppRoutes from './routes/index.js';

const app = new Koa();
const PORT = 1337;
app.use(bodyParser());

// app.use(async (ctx) => {
//   ctx.body = {
//     status: 'success',
//     message: 'hello, world!'
//   };
// });
AppRoutes(app);


app.listen(PORT, () => {
	console.log(`Server listening on port: ${PORT}`);
});
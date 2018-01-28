import koa from 'koa'
import Router from 'koa-router'
import cors from 'koa2-cors'
import parser from 'koa-bodyparser'
import dbconnection from './db/dbconnection'
import api from './routes/api'


const app = new koa();

const cors_options={
    origin: function(ctx) {
      if (ctx.url === '/test') {
        return false;
      }
      return '*';
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept','Access-Control-Allow-Origin'],
  };

app.use(cors(cors_options))
    .use(parser())
    .use(api(Router));

(
    async () => {
    try {
        await dbconnection()
    } catch (error) {
        console.error(error);
        return;
    }
    app.listen(3011)
}
)();



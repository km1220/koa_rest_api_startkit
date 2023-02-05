import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import helmet from 'koa-helmet'
import cors from '@koa/cors'
import { Server } from 'http'

import { config } from './config'
import AppRoutes from './routes';




export const server = function (): Server {
    const app = new Koa()

    app.use(helmet())
    app.use(cors())
    app.use(bodyParser())

    AppRoutes(app);

    
    return app.listen(config.port, () => {
        console.log(`Server listening on port: ${config.port}`);
    })
}

server();
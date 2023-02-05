import dotenv from 'dotenv'
dotenv.config({ path: '.env' })

const isDevelopmentMode = process.env.NODE_ENV === 'development'

const config = {
    nodeEnv: process.env.NODE_ENV || 'development',
    port: +(process.env.PORT || 1337),
    debugLogging: isDevelopmentMode,
    // jwt: {
    //     accessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || 'your-secret-whatever',
    //     accessTokenLife: process.env.JWT_ACCESS_TOKEN_LIFE || '15m',
    //     refreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || 'your-refresh-whatever',
    //     refreshTokenLife: process.env.JWT_REFRESH_TOKEN_LIFE || '24h'
    // }, 
}

export { config }

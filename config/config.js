import env from 'dotenv'
env.config()

export default {
    HOST: process.env.HOST || '127.0.0.1',
    PORT: process.env.PORT || 8888,
    DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost/livechat',
    COOKIE_KEY: '9cf95dacd226dcf43da376cdb6cbba7035218921',
    JWT_KEY: '9cf95dacd226dcf43da376cdb6cbba7035218921'

}

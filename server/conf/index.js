/**
 * 所有的配置：mongoose,redis。。
 */

 // mongodb 连接相关配置
const MONGODB_USER = process.env.DB_USER || 'root'
const MONGODB_PASSWORD = process.env.DB_PASSWORD || 'root'
const MONGODB_HOSTNAME = process.env.DB_HOSTNAME || '127.0.0.1'
const MONGODB_PORT = process.env.DB_PORT || 27017
const MONGODB_NAME = process.env.DB_NAME || 'admin'

// 连接mongodb url
const DB_URL = `mongodb://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_HOSTNAME}:${MONGODB_PORT}/${MONGODB_NAME}`

const baseUrl = process.env.NODE_ENV === 'production' ? '' : 'localhost:8000'

// redis配置
const REDIS = {
    host:process.env.REDIS_HOST || '127.0.0.1',
    port:process.env.REDIS_PORT || 6379,
    password:process.env.REDIS_PASS || '123456789'
}

const JWT_SECRET = 'V%ff8bb50#4-b8ee-4&35b'


export default {
    MONGODB_USER,
    MONGODB_PASSWORD,
    MONGODB_HOSTNAME,
    MONGODB_PORT,
    MONGODB_NAME,
    baseUrl,
    DB_URL,
    REDIS,
    JWT_SECRET
}
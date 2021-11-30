import database from 'mongoose'
import config from '../config/config.js'

export function initMongoose() {
    return database.connect(config.DATABASE_URL)
}
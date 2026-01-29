import mongooes from 'mongoose';
import { env } from './dotenv.js';
mongooes.connect(env.MONGO_URL);

const db = mongooes.connection

db.on('connected', (err)=>{
    if(err){
        console.log('db disconnected');
        
    }
    else{
        console.log('Db Connected');
    }
})

export default db;
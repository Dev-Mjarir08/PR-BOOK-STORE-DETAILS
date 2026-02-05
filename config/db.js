import mongoose from 'mongoose';
import { env } from './dotenv.js';
mongoose.connect(env.MONGO_URL);

const db = mongoose.connection

db.on('connected', (err)=>{
    if(err){
        console.log('db disconnected');
        
    }
    else{
        console.log('Db Connected');
    }
})
console.log('ENV MONGO_URL:', env.MONGO_URL);

export default db;

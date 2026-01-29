import mongooes from 'mongoose';
mongooes.connect(process.env.MONGO_URL);

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
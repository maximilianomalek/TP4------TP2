import { MongoClient } from "mongodb"

const client = new MongoClient('mongodb://localhost',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

try {
    console.log('Conectando a la base de datos...')
    await client.connect()
    console.log('Base de datos conectada!')
    client.close()
}
catch(error) {
    console.log(`Error en la conexión de base datos: ${error.message}`)
}
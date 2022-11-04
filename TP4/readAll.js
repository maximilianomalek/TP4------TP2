import { Collection, MongoClient } from "mongodb"

const client = new MongoClient('mongodb://localhost',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

try {
    console.log('Conectando a la base de datos...')
    await client.connect()
    console.log('Base de datos conectada!')

    const db = client.db('empresa')

    let clientes = await db.collection('clientes').find({}).project({nombre: 1, apellido: 1, _id: 0}).toArray()
    console.log(clientes)

    let updateTodos = await db.collection('productos').updateMany({},
        {$set: {codigo: 'xxx-xxxxx'}}
    )
    console.log(updateTodos)

    let productos = await db.collection('productos').find({}).project({nombre: 1, precio: 1, codigo:1, _id: 0}).toArray()
    console.log(productos)

    client.close()
}
catch(error) {
    console.log(`Error en la conexión de base datos: ${error.message}`)
}
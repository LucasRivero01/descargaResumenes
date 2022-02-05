const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        // espero a que se conecte, si la conexion falla entra por el catch
        await mongoose.connect(process.env.MONGODB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error al conectar la base de datos');
    }
}

module.exports = {
    dbConnection
}
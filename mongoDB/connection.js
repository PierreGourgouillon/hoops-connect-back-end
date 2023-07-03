const mongoose = require("mongoose")

async function connectionMongoDB() {
    try {
        await mongoose.connect(
            "mongodb+srv://developer:YLKhHDf7hMGth9Nb@cluster.5wbhctv.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connecté à mongodb")
    } catch (e) {
        console.log("Problème de connexion")
    }
}

module.exports = connectionMongoDB
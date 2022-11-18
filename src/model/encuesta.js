const {Schema, model} = require('mongoose')
const encuestaSchema = Schema({
    nombreEncuesta : {
        type : String
    },
    fecha : {
        type : String
    },
    documentoEncuestado : {
        type : Number
    },
    nombreEncuestado: {
        type : String
    },
    edad: {
        type : Number
    },
    genero: {
        type : String
    },
    empleado: {
        type : Boolean
    }
})
module.exports = model("Encuesta", encuestaSchema)
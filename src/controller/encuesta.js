const {response} = require("express")
const Encuesta = require("../model/encuesta")

const getEncuesta = async(req, res = response) => {    
    const encuesta = await Encuesta.find(edad)
    res.json({
        msg : "GET API ENCUESTA",
        encuesta
    })
}

const postEncuesta = async(req, res) => {
    const { nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado } = req.body
    const encuesta = new Encuesta({nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado})
    await encuesta.save()
    res.json({
        msg : "POST API ENCUESTA",
        encuesta
    })
}

const deleteEncuesta = async(req, res) => {
    const {nombreEncuesta} = req.query
    const encuesta = await Encuesta.findOneAndDelete({nombreEncuesta : nombreEncuesta})
    res.json({
        msg : "DELETE API ENCUESTA",
        encuesta
    })
}

const putEncuesta = async(req, res) => { 
    const {nombreEncuesta, fecha, documentoEncuestado, nombreEncuestado, edad, genero, empleado} = req.body
    const encuesta = await Encuesta.findOneAndUpdate({nombreEncuesta : nombreEncuesta}, {fecha: fecha, documentoEncuestado: documentoEncuestado, nombreEncuestado: nombreEncuestado, edad: edad, genero: genero, empleado: empleado})
    res.json({
        msg : "PUT API ENCUESTA",
        encuesta
    })
}

const patchEncuesta = async(req, res) => { 
    const {nombreEncuesta, documentoEncuestado} = req.body
    const encuesta = await Encuesta.findOneAndUpdate({nombreEncuesta : nombreEncuesta}, {documentoEncuestado : documentoEncuestado})
    res.json({
        msg : "PATCH API ENCUESTA",
        encuesta
    })
}

module.exports = { getEncuesta, postEncuesta, deleteEncuesta, putEncuesta, patchEncuesta }
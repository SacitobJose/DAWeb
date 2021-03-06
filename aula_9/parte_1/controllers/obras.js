var Obra = require('../models/obras')

var Obras = module.exports

// Devolve a lista de obras
Obras.listar = () => {
    return Obra.find({}, {}).exec()
}

// Devolve a info de um premio
Obras.consultar = (id) => {
    return Obra.findOne({_id: id}).exec()
}

// Devolve a lista de categorias
Obras.compositores = () => {
    return Obra.distinct("compositor").exec()
}

Obras.periodos = () => {
    return Obra.distinct("periodo").exec()
}

Obras.lista_ano = (ano) => {
    return Obra.find({anoCriacao: ano}).exec()
}

Obras.lista_periodo = (p) => {
    return Obra.find({ periodo: p }).exec()
}

Obras.lista_comp_dur = (comp, dur) => {
    return Obra.find({ compositor: comp, duracao: { $gte: dur } }).exec()
}
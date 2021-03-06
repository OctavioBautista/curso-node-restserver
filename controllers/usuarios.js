const { response } = require("express");

const usuariosGet = (req = request, res = response) => {

    const params = req.query;

    res.json({
        msg: "get API - Controller",
        params,
    });
}

const usuariosPost = (req, res = response) => {

    const body = req.body;

    res.json({
        msg: "post API - Controller",
        body,
    });
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.json({
        msg: "put API - Controller",
        id,
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: "patch API - Controller",
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: "delete API - Controller",
    });
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPatch,
    usuariosPost,
    usuariosPut
}
const { response } = require('express');
const fs = require('fs');
const Resumenes = require('../models/resumen');
const consultaResumen = async(req, res = response) => {
    let dniNumero = req.params.dniNumero;
    let fechaVto = req.params.fechaVto;
    try {
     const resumenes = await Resumenes.findOne({ 'rca_res_tit_doc_numero': dniNumero, 'rca_res_fecha_vencimiento': fechaVto }).exec();
        //const resumenes = await Resumenes.findOne({ 'rca_res_tit_doc_numero': dniNumero }).exec();
        if (resumenes !== null) {
            const { rca_res_fecha_vencimiento, rca_res_tit_doc_tipo, rca_res_tit_doc_numero, rca_tipo_archivo, rca_archivo, rca_res_fecha_creacion } = resumenes
            if (rca_archivo == '') {
                return res.status(404).json({
                    message: 'No hay resumen cargado en la base de datos'
                });
            } else {
                return res.status(200).json(resumenes);
            }
        } else {
            return res.status(404).json({
                message: 'No hay datos cargados en la base de datos'
            });
        }
    } catch (error) {
        return res.status(500).json({
            message: 'Error al consultar la base de datos'
        });
    }
}

module.exports = {
    consultaResumen
}
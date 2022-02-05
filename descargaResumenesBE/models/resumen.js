const { Schema, model } = require('mongoose');

const ResumenSchema = Schema({
    rca_res_fecha_vencimiento: {
        type: Number,
        required: [true, 'La fecha de vencimiento es obligatoria']
    },
    rca_res_tit_doc_tipo: {
        type: String,
    },
    rca_res_tit_doc_numero: {
        type: Number,
        required: [true, 'El dni es obligatorio'],
        unique: true,
    },
    rca_tipo_archivo: {
        type: String,
    },
    rca_archivo: {
        type: String,
    },
    rca_res_fecha_creacion: {
        type: Date,
    }
});

module.exports = model('Resumenes', ResumenSchema);
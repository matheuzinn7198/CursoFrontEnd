//classe de modelagem de dados para Equipamento
//mongoose -> vai ajustar na modelagem da classe

import mongoose, { Document, Model, Schema } from "mongoose";

//atributos
export interface IEquipamento extends Document {
    _id: string;
    nome: string;
    modelo: string;
    numSerie: string;
    localizacao: string;
    status: string;
}

//construtor (Schema)
const IEquipamentoSchema: Schema<IEquipamento> = new Schema({
    nome: {type: String, required: true},
    modelo: {type: String, required: true},
    numSerie: {type: String, required: true, unique: true},
    localizacao: {type: String, required: true},
    status: { type: String, enum: ["ativo", "inativo", "manutencao"], default: "ativo" },
});

//toMap <=> fromMap

const Equipamento: Model<IEquipamento> = mongoose.models.Equipamento
|| mongoose.model<IEquipamento>("Equipamento", IEquipamentoSchema);

//componente reutilizavel
export default Equipamento;
import mongoose, { Document, Model, Schema } from "mongoose";

//definir a estrutura do OBJ
export interface ITarefa extends Document{
    //herdamos a base Document do Mongoose
    //vamos criar os atributos do OBJ
    titulo: string;
    concluida: boolean;
    criadaEm: Date;
}

//criar a regra (Schema) do MongoDB

const TarefaSchema: Schema<ITarefa> = new mongoose.Schema({
    titulo:{
        type: String,
        required: [true,"O Titulo é obrigatório"],
        trim: true,
        maxlength:[50, "máximo de 50 char"]
    },
    concluida:{
        type: Boolean,
        default: false
    },
    criadaEm: {
        type: Date,
        default: Date.now //pega o carimbo de data e hora que a tarefa foi criada
    }
})

//export do modelo

const Tarefa: Model<ITarefa> = mongoose.models.Tarefa || mongoose.model<ITarefa>("Tarefa", TarefaSchema);

export default Tarefa;
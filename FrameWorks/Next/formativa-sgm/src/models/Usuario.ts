//classe de modelagem de dados para Usuário
//mongoose -> vai ajustar na modelagem da classe

import mongoose, { Document, Model, Schema } from "mongoose";

//import do Bycrypt
import bcrypt from "bcrypt";

//atributos
export interface IUsuario extends Document {
    _id: string;
    nome: string;
    email: string;
    senha?: string; //permite que a senha retorne nulo( não retorna a senha para o client_side)
    funcao: string;
    compareSenha(senhaUsuario:string):Promise<boolean>;
    //devolve para o usuario apenas a booleana de comparação da senha
}

//construtor (Schema)
const UsuarioSchema: Schema<IUsuario> = new Schema({
    nome: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    senha: {type: String, required: true, select: false}, //select: false -> não retorna a senha para o client_side
    funcao: {
        type: String,
        enum: ["tecnico", "gerente", "admin"],
        required:true
    }
});

//criptografia
//método para criptografar a senha antes de emviar para o BD
UsuarioSchema.pre<IUsuario>("save", async function (next) {
    if(!this.isModified('senha') || !this.senha) return next;
    try {
        const salt = await bcrypt.genSalt(10); //todas as senhas usarão o mesmo padrão
        this.senha = await bcrypt.hash(this.senha, salt);
        next();
    } catch (error:any) {
        next(error);
    }
});

//método para comparar a senha antes de fazer o login
//quando faz o login ( comparar a senha diigitada e criptografada com a senha criptografada do banco)
UsuarioSchema.methods.compareSenha = function (senhaUsuario:string):Promise<boolean>{
    return bcrypt.compare(senhaUsuario, this.senha);
}

//toMap <=> fromMap
const Usuario: Model<IUsuario> = mongoose.models.Usuario
|| mongoose.model<IUsuario>("Usuario", UsuarioSchema);

//componente reutilizavel
export default Usuario;
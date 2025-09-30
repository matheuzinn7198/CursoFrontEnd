//pega a string de conexão nas variaveis de ambiente de projeto(Environment)

import mongoose from "mongoose";

//transforme texto em um endereço URL (URI)
const MONGODB_URI = process.env.DATABASE_URL;//1

if(!MONGODB_URI) {
    throw new Error("Defina o DATABASE_URL no .env.local");
}

//cache do sistema (mongoose), armazenar as conexões já estabelecidas
let cached = (global as any).mongoose;//2

//se cached não existir (primeira vez que acesso ao site)
if(!cached){
    cached = (global as any).mongoose = {conn: null, promise: null};
}

async function connectMongo() {
    //Verificar se conexão já existe, se já existe retorna a propria conexão
    if(cached.conn) return cached.conn;//3
        //verificar se não existe uma promessa de conexão em andamento
        if(!cached.promise){ //isso é nulo //4
            const aguard = {bufferComands: false};
            //crio uma promise de conexão
        cached.promise = mongoose.connect(MONGODB_URI!, aguard)
        .then((mongoose)=>{
            console.log("Conectado ao Mongo");
            return mongoose
        });
    }

//aguardar a conexão ser criada

try { //5
    //cria a conexão a partir da promessa que estava pendente
    cached.conn = await cached.promise;
} catch (error) {
    //se a conexão falhar
    cached.promise = null;
    throw error; //lança o erro para o view
}

return cached.conn;
}

//transforma em um componente reutilizavel
export default connectMongo;

//1.Passo criar o endereço de conexão
//2.Passo criar o cached para armazenar as conexões ao longo do projeto
//3.Passo verificar se já existe uma conexão estabelecida com DB
//4.Passo verifica se não existe uma promessa de conexão e cria uma promise
//5.Passo com a promisse criada, estabelece uma conexão com o banco
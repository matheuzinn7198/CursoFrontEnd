//criar as routes que não precisa de id

import { createTarefa, getAllTarefas } from "@/controllers/tarefaController";
import { NextRequest, NextResponse } from "next/server";


export async function GET() {
    try {
        const tarefas = await getAllTarefas();
        //trata a resposta obtida da conexão com o mongodb
        return NextResponse .json({success:true, data:tarefas});
    } catch (error) {
        return NextResponse.json({
            success: false,
            error:`Falha ao buscar as Tarefas: ${error}`, 
        }, {status: 500});
    }
}

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();//verifica se o conteudo esta em json
        const newTarefa = await createTarefa(data);
        return NextResponse.json({success:true, data: newTarefa}, {status:201});
    } catch (error) {
        return NextResponse.json({success:false,
             error:`Falha ao buscar as Tarefas: ${error}`}, {status:400})
    }
}
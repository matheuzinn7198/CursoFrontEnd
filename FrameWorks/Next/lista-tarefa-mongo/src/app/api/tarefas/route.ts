//PUT e DELETE que usam id para fazer as requisições

import { deleteTarefa, updateTarefa } from "@/controllers/tarefaController";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";

interface Parametros{
    id: string
}

export async function PUT(req: NextRequest, {params}:{params:Parametros}){
    try {
        const {id} = params;
        const data = await req.json();
        const tarefaAtualizada = await updateTarefa(id, data);
        if(!tarefaAtualizada){
            return NextResponse.json({success: false, error: "Not Found"}, {status:404});
        }
        return NextResponse.json({success: true, data: tarefaAtualizada})
    } catch (error) {
        return NextResponse.json({
            success:true,
            error:`Erro ao Atualizar Tarefa: ${error}`
        }, {status: 400});
    }
}

export async function DELETE(req: NextRequest, {params}:{params:Parametros}) {
    try {
        const {id} = params;
        const resultado = await deleteTarefa(id);

        if(!resultado){
            return NextResponse.json({sucess: false, error: "Not Found"},{status:404});
        }
        return NextResponse.json({success: true,
            error: `Erro ao Deletar Tarefa: ${error}`
        }, {status: 400});
    } catch (error) {
        
    }
}
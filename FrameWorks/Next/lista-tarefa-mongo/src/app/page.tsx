"use client";
import { ITarefa } from "@/models/tarefa";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

 //indicar que é a tela usada pelo cliente

export default function Home(){
  //useState => armazenamento localStorage
  const [tarefas, setTarefas] = useState<ITarefa[]>([]);
  const [newTarefa, setNewTarefa] = useState<string>("");

  //useEffect
  useEffect(()=>{
    //fazer o usseEffect no carregamento da tela inicial
    fetchTarefas(); //carregar todas as tarefas do BD
  }, []);

  //carregar tarefas
  const fetchTarefas = async () => {
    try {
      const resposta = await fetch("/api/tarefas");//realiza a conexão http com o backend
      const data = await resposta.json();//verficar se está em json
      if(data.success){
        setTarefas(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  //add Tarefa
  const addTarefa = async (e: FormEvent) => {
    e.preventDefault(); //evita o carregamento da tela
    if(!newTarefa.trim()) return;
    try {
      const resultado = await fetch("/api/tarefas",{
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({titulo:newTarefa})
      });
      const data = await resultado.json();
      if(data.success){//se resultado for ok
        setTarefas([...tarefas, data.data]);//adiciona a nova tarefa no vetor
        setNewTarefa("");//limpo o campo do input
      }
    } catch (error) {
      console.error(error);
    }
  }

  //update de Tarefa
  const atualizarTarefa = async () => {
  }

  //delete de Tarefa
  const deletarTarefa = async () =>{
  }

  return(
    <div>
      <h1>Lista de Tarefas</h1>
      <form onSubmit={addTarefa}>
        <input type="text"
        value={newTarefa}
        onChange={(e:ChangeEvent<HTMLInputElement>)=> setNewTarefa(e.target.value)}
        placeholder="Adicione uma nova Tarefa" />
        <button type="submit">Adicionar Tarefa</button>
     </form>
      <ul>
        {tarefas.map((tarefa)=> (
          <li key={tarefa._id.toString()}>
            
          </li>
        ))}
      </ul>

    </div>
  );

}
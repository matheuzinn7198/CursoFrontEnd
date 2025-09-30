import "./App.css";

import { useState } from "react"
import ToDoForm from "./componentes/ToDoForm";
import ToDoList from "./componentes/ToDoList";

const App = () =>{
  //lógica do componente
  const [tarefas, setTarefas] = useState([]);
  //estado para armazenamento da lista de tarefas

  const addTarefa = (tarefa) =>{
    setTarefas([...tarefas, tarefa]);
    //adiciona a nova tarefa ao array de tarefas, ...tarefas => copia todas as tarefas
    //que já estão adicionadas anteriormente
  };

  const removeTarefa = (index) =>{
    setTarefas(tarefas.filter((_,i)=> i !== index));
    //filtra o array de tarefas, removendo a tarefa com o índice igual ao index
    //(_,i) mantém o vetor original, com o novo índice
  };
  //view do componente
  return(
    <div>
      <h1>To-do-List APP</h1>
      <ToDoForm addTarefa={addTarefa}/>
      <ToDoList tarefas={tarefas} removeTarefa={removeTarefa}/>
    </div>
  );
}

export default App;
//componente principal do aplicativo
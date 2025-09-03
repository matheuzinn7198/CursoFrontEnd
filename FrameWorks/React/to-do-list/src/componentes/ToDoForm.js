//componente para o formulário para adicionar tarefas
//importe do css
import "./ToDoForm.css"

const { useState } = require("react")

const ToDoForm = ({addTarefa}) =>{
    //estado para armazenar o valor do input (campo para inserir a tarefa)
    const [tarefa, setTarefa] = useState("");
    //definir o useState => usa a memória local do navegador para armazenar as mudanças de estado
    //[primeiro campo o armazenamento, segundo campo a função de mudança de estado]

    //função para atualizar o estado com o valor do input
    const handleSubmit = (e) =>{
        //impedir o comportamento padrão do formulário
        e.preventDefault();
        //verificar se o campo não está vazio
        if(tarefa.trim()!==""){
            //adiciono a tarefa ao array de tarefas
            addTarefa(tarefa);
            //limpo o campo do input
            setTarefa("");
        }
    };
    return(
        //retorna o formulário (o view)
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Insira uma Nova Tarefa"
                value={tarefa}
                onChange={(e) => setTarefa(e.target.value)}/>
            <button type="submit">Adicionar</button>
        </form>
    );

};

export default ToDoForm;
//componente para criar um formulário para inserir uma nova tarefa
//pode ser reutilizado em outros componentes (export)
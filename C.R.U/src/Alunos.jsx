import React, {useContext} from "react";
import "./Alunos.css";
import { AlunoContext } from "./Contexts/Context";

export default function Alunos(props){
 
    const {setNomeAUpdate, setNotaAUpdate, setStatusUp, setNewAUpdate} = useContext(AlunoContext);
    const item = props.produto;

    const deleteAluno = () => {

      fetch(`https://localhost:7014/aluno/delete?id=${item.id}`, {
      method:"DELETE",
      headers:{
        "Content-type": "application/json"
      }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data == true){
            const newList = props.list.filter(a => a.id != item.id)
            props.setList(newList)
        }

    })
    .catch(err => console.log(err))


    }

    const handleUpdateInputs = () => {
        setNomeAUpdate(item.name);
        setNotaAUpdate(item.nota);
        setStatusUp(true);
        setNewAUpdate({
            id: item.id,
            name: item.name,
            nota: item.nota,
        })
    }

    return(
        <div className="cardContainer">
            <div className="alunos">
                <div className="nome">Nome: {item.name}</div>
                <div className="nota">Nota: {item.nota}</div>
                <button onClick={deleteAluno} className="btnDelete">Deletar</button>
                <button onClick={handleUpdateInputs} className="btnUpdate">Atualizar</button>
            </div>
        </div>
    )
}
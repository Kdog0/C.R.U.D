import React from "react";
import "./Alunos.css";

export default function Alunos(props){

    const item = props.produto

    const deleteAluno = () => {

         props.setList(props.list.filter(a => a.id != item.id))

         
         console.log(props.list);
     }

    return(
        <div className="alunos" key={props.id}>
            <div className="nome">{props.name}</div>
            <div className="nota">{props.nota}</div>
            <button onClick={deleteAluno()} className="btnDelete">Delete</button>
            <div>-------------------------------</div>
        </div>
    )
}
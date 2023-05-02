import React from "react";
import { useContext } from "react";
import { AlunoContext } from "../Contexts/Context";
import './Header.css'


export default function Header(){

    const {aluno, setSeatchA, setSearchStatus} = useContext(AlunoContext);

    const search = (e) => {
        const newList = aluno.filter(x => x.name.includes(e))
        
        setSeatchA(newList)
        if(newList.length > 0 )
        {
            setSearchStatus(true)
        }
    }

    return(
        <div className="headerContainer">
            <p className="titleSearch">Faça a sua pesquisa: </p>
            <input onChange={(e) => search(e.target.value)} className="inpSearch" type="text" />

        </div>
    )
}
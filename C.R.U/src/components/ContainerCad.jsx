import React, {useContext} from "react";
import {AlunoContext} from '../Contexts/Context'


export default function Cadastro(){
    const {nomeA, notaA, setNomeA, setNotaA, setAluno, aluno} = useContext(AlunoContext)


    const haddleAdd = () => {
        const newNota = parseFloat(notaA)
    
        const newAluno = {
          "name": nomeA,
          "nota": newNota
        }
    
        fetch('https://localhost:7014/aluno/register', {
          method:"POST",
          headers:{
            "Content-type": "application/json"
          },
          body: JSON.stringify(newAluno)
        })
        .then(res => res.json())
        .then(data => {
          setAluno([
            data,
            ...aluno
          ])
          setNomeA('');
          setNotaA('');
        })
        .catch(err => console.log(err))
      }

    return(
        <div className='ConteinerCadastro'> 
            <div className='divNome'>
            <label>
                <span className='inpTitle'>Aluno: </span>
                <input 
                placeholder='Digite o nome do aluno...'
                className='inputTxt' 
                type="text" 
                value={nomeA} 
                onChange={e => setNomeA(e.target.value)} />
            </label>
            </div>

            <div className='divNota'>
            <label>
                <span className='inpTitle'>Nota: </span>
            <input 
            placeholder='Digite a nota do aluno...'
            className='inputTxt' 
            type="text" 
            value={notaA} 
            onChange={e => setNotaA(e.target.value)} />
            </label>
            </div>
                <button className='cadBtn' onClick={haddleAdd}>Cadastra</button>
        </div>
    )
}
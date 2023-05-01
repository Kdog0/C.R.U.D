import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import Alunos from './Alunos'

function App() {
  const [aluno, setAluno] = useState([])
  const [nomeA, setNomeA] = useState('')
  const [notaA, setNotaA] = useState('')

  useEffect(() => {
    fetch(`https://localhost:7014/all`, {
        method:'GET',
        headers:{
            "Content-type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        setAluno(data)
        console.log(data);
      })
    .catch(err => console.log(err))  
}, [])

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
        ...aluno,
        newAluno
      ])

      console.log(data);
    })
    .catch(err => console.log(err))
  }


  return (
    <div className='Conteiner'>
      <div className='ConteinerCadastro'> 
        <div>
          Aluno
          <input 
          className='inputTxt' 
          type="text" 
          value={nomeA} 
          onChange={e => setNomeA(e.target.value)} />
        </div>
        <div>
          Nota
          <input 
          className='inputTxt' 
          type="text" 
          value={notaA} 
          onChange={e => setNotaA(e.target.value)} />
          </div>
        </div>
      <div>
        <button onClick={haddleAdd}>Cadastra</button>
          {aluno.map(item => 
          <div>
          <Alunos
          id={item.id}
          setList={setAluno}
          list={aluno}
          produto={item}
          name={item.name}
          nota={item.nota}
          />
          
          </div>
          )}
    </div>
    </div>
  )
}

export default App

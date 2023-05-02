import { useState, useContext, useEffect } from "react";
import "./App.css";
import Alunos from "./Alunos";
import Cadastro from "./components/ContainerCad";
import Update from "./components/ContainerUpdate";
import { AlunoContext } from "./Contexts/Context";
import Header from "./components/Header";

function App() {
  const { statusUp, aluno, setAluno, searchA, searchStatus} = useContext(AlunoContext);

  useEffect(() => {
    fetch(`https://localhost:7014/aluno/get/all`, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setAluno(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <Header />
    <div className="main">
      
      {statusUp ? <Update attList={setAluno} /> : <Cadastro />}

      <div className="listReverse">
        {searchStatus ? 
        searchA.map((item) => (
          <div key={item.id}>
            <Alunos
              id={item.id}
              setList={setAluno}
              list={aluno}
              produto={item}
              name={item.name}
              nota={item.nota}
            />
          </div>
        ))
        : 
        aluno.map((item) => (
          <div key={item.id}>
            <Alunos
              id={item.id}
              setList={setAluno}
              list={aluno}
              produto={item}
              name={item.name}
              nota={item.nota}
            />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default App;

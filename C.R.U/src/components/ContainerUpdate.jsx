import React, { useContext, useEffect } from "react";
import { AlunoContext } from "../Contexts/Context";

export default function Update(props) {
  const {
    notaAUpdate,
    nomeAUpdate,
    setNomeAUpdate,
    setNotaAUpdate,
    newAUpdate,
    setStatusUp
  } = useContext(AlunoContext);

  const handleUpdate = () => {
    fetch(`https://localhost:7014/aluno/update/${newAUpdate.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        id: newAUpdate.id,
        name: nomeAUpdate,
        nota: notaAUpdate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setStatusUp(false);
      })
      .catch((err) => console.log(err));

      setTimeout(() => {
        fetch(`https://localhost:7014/aluno/get/all`, {
            method:'GET',
            headers:{
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            props.attList(data)
        })
        .catch(err => console.log(err))
      }, 1000);
  };

  return (
    <div className="ConteinerUpdate">
      <div className="divNome">
        <label>
          <span className="inpTitle">Aluno: </span>
          <input
            placeholder="Digite o novo nome..."
            className="inputTxt"
            type="text"
            value={nomeAUpdate}
            onChange={(e) => setNomeAUpdate(e.target.value)}
          />
        </label>
      </div>

      <div className="divNota">
        <label>
          <span className="inpTitle">Nota: </span>
          <input
            placeholder="Digite a nova nota..."
            className="inputTxt"
            type="text"
            value={notaAUpdate}
            onChange={(e) => setNotaAUpdate(e.target.value)}
          />
        </label>
      </div>
      <button className="cadBtn" onClick={handleUpdate}>
        Atualizar
      </button>
    </div>
  );
}

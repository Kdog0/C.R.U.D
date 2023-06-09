import React, { useState } from "react";

export const AlunoContext = React.createContext();

export function AlunoProvider({ children }) {
  const [aluno, setAluno] = useState([])
  const [searchA, setSeatchA] = useState([])
  const [nomeAUpdate, setNomeAUpdate] = useState("");
  const [notaAUpdate, setNotaAUpdate] = useState("");
  const [nomeA, setNomeA] = useState("");
  const [notaA, setNotaA] = useState("");
  const [statusUp, setStatusUp] = useState(false);
  const [searchStatus, setSearchStatus] = useState(false);
  const [newAUpdate, setNewAUpdate] = useState({});

  return (
    <AlunoContext.Provider
      value={{
        nomeAUpdate,
        setNomeAUpdate,
        notaAUpdate,
        setNotaAUpdate,
        nomeA,
        setNomeA,
        notaA,
        setNotaA,
        statusUp, 
        setStatusUp,
        aluno,
        setAluno,
        newAUpdate, 
        setNewAUpdate,
        searchA, 
        setSeatchA,
        searchStatus, 
        setSearchStatus
      }}
    >
      {children}
    </AlunoContext.Provider>
  );
}

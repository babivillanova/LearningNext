import { useState } from "react";

function Home() {
  return (
    <>
    <div>Home</div>
    <Contador />
    </>
  )
}

function Contador(){
    const [contador, setContador] = useState(0);
    
    function adicionarContador(){
        setContador(contador + 1);
    }
    
    return (
        <div>
        <div>{contador}</div>
        <button onClick={adicionarContador}>Adicionar</button>
        </div>
    )
}

export default Home;
import { useState} from "react"

function App(){

  
  
  const Formulario = (props) => {
     
    const [nome, setNome] = useState('Ronaldo')

    return (
      <div>
        <h3>{props.titulo}</h3>
        <input className="nome"
      placeholder="Digite seu nome..."
      onChange={(e)=>{setNome(e.target.value)}}
      name="nome"
      type="text" />
      <button className="botao" onClick={

        
        () => {

         if (nome.lenght > 0) 
          alert(nome)
        else
          alert(props.mensagem)
        }
      }>

        CLIQUE AQUI
        </button>
      </div>
    )
  }

  return(
    <div>
      <h3>Pizzaria 2B</h3>
      <Formulario titulo = "Nome" mensagem = "Santos"/>
      <Formulario titulo = "E-mail" mensagem = "Curintia"/>
      <Formulario titulo = "Telefone" mensagem = "SP-fc o maioral"/>
      <Formulario/>
      <Formulario/>
      <Formulario/>
     
    </div>
  )
}

export default App
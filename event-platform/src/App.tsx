import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from "./lib/apollo"
import { Router } from "./Router"


function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App

// tsx = typescript + JSX (xml dentro do javascript
// CMS = Content Management System

// Wordpress traz tanto o painel de ADMIN quando o front-end (temas)
// Headless CMS é o painel de ADMIN (dados fornecidos por uma API REST ou GraphQL)

// React que consome essa API do CMS

// Query / Mutation
// Query = Buscar dados
// Mutation = Criar, alterar ou deletar dados

/* 
  Daria pra utilizar assim a query, mas a outra forma é mais limpa.
  Para isso precisa colocar o ApolloProvider no main

  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY,
    }).then(response => {
      console.log(response.data)
    })
  }, [])
*/
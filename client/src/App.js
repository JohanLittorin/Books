import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Books from "./Books";

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });

  return (
    <ApolloProvider client={client}>
      <div>
        <Books />
      </div>
    </ApolloProvider>
  );
}

export default App;

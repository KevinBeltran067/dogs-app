import Dogs from "./components/Dogs";
import Card from "./components/Card";

function App() {
  const perros= Dogs();

  return(
    <>
      {perros.map(p=>(
        <Card
        key={p.id}
        id={p.id} 
        img={p.url}
        ancho={p.width}
        alto={p.height}
        />
      ))}
    </>
  )
}

export default App;

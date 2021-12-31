import './App.css';
import OutraLista from './components/OutraLista';

const meusItens = ['React', 'Vue', 'Angular']

function App() {
    const nome = "teste";
    return (
        <div className="App">
            <h1>Renderização de Listas</h1>
            <OutraLista itens={meusItens}/>
        </div>
    );
}

export default App;
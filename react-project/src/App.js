import './App.css';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import HelloWorld from './components/HelloWorld';



function App() {
    const nome = "teste";
    return (
        <div className="App">
            <header className="App-header">
                <HelloWorld/>
                <SayMyName nome ="Thiago" />
                <SayMyName nome = {nome} />
                <Pessoa nome = "Thiago" idade = "20" profissao="Estudante" foto = "https://via.placeholder.com/150"/>
            </header>
        </div>
    );
}

export default App;
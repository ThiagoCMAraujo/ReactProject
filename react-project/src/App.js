import './App.css';
import Frase from './components/Frase';
import Eventos from './components/Eventos'
import List from './components/List'
import HelloWorld from './components/HelloWorld';
import Forms from './components/Forms';



function App() {
    const nome = "teste";
    return (
        <div className="App">
                <Eventos numero = "1"/>
                <Eventos numero = "2"/>
                <Forms/>

        </div>
    );
}

export default App;
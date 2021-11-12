import './App.css';
import Frase from './components/Frase';
import Pessoa from './components/Pessoa';
import SayMyName from './components/SayMyName';
import List from './components/List'
import HelloWorld from './components/HelloWorld';



function App() {
    const nome = "teste";
    return (
        <div className="App">
                <HelloWorld/>
                <Frase/>
            
                <List/>
        </div>
    );
}

export default App;
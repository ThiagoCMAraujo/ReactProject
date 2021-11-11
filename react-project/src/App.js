import logo from './logo.svg';
import HelloWorld from './components/HelloWorld';
import './App.css';

function App() {
    const name = 'Thiago'

    function sum(a, b) {
        return a + b
    }

    const url = 'https://via.placeholder.com/150'

    return (
        <div className="App">
            <header className="App-header">
                <HelloWorld/>
            </header>
        </div>
    );
}

export default App;
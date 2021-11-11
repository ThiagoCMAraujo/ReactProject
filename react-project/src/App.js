import logo from './logo.svg';
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
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                
                <p>Soma: {sum(1, 3)}</p>
                <img src={url} alt = ""/>    
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React with {name}

                </a>
            </header>
        </div>
    );
}

export default App;
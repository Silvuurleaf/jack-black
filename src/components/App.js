import '../css/App.css';
import Deck from './deck.js'


function App() {
    const deck = new Deck()
    deck.shuffle()
    console.log(deck.cards)

    return(
        <div className="App">
        <header>
            hello world
        </header>
        </div>
    );
}

export default App;

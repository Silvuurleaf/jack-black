import '../css/App.css';
import Deck from './deck.js'
import 'bootstrap/dist/css/bootstrap.min.css';


function App()
{
    const deck = new Deck()
    deck.shuffle()
    console.log(deck.cards)

    return(
        <>
            <div className="App">
            </div>

            <div className="container">
                <div className ="row">
                    <div className="col-4">
                        <div className ="deck">
                            52
                        </div>
                    </div>

                    <div className="col-4">
                        <div className="text"> dealer hand </div>
                    </div>

                    <div className="col-4">
                        <div className="curr-card card" data-value = "9 ♠">
                            ♠
                        </div>
                    </div>

                </div>
            </div>

            <div className="text"> player hand </div>
        </>
    );
}

export default App;

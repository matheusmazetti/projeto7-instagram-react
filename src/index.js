import ReactDOM from 'react-dom';
import Header from './Header';
import App from './App';
import Fundo from './Fundo';
function AppBase(){
    return(
        <div>
            <Header />
            <App />
            <Fundo />
        </div>
    )
}

ReactDOM.render(<AppBase />, document.querySelector(".root"));
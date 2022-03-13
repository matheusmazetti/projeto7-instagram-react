import ReactDOM from 'react-dom';
import Body from './Body';
import Header from './Header';
import Story from './Story';
function AppBase(){
    return(
        <div>
            <Header />
            <Body />
        </div>
    )
}

ReactDOM.render(<AppBase />, document.querySelector(".root"));

function App(){
    return(
        <Story />
    )
}

ReactDOM.render(<App />, document.querySelector(".esquerda"));
import ReactDOM from 'react-dom';
import Header from './Header';
import Story from './Story';
function App(){
    return(
        <div>
            <Header />
            <Story />
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));
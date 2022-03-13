import Story from './Story';
import Posts from './Posts';
import Sidebar from './Sidebar';

export default function App(){
    return(
    <div class="corpo">
        <div class="esquerda">
            <Story />
            <Posts />
        </div>
        <div class="sidebar">
            <Sidebar name="Catana" user="catanacomics" img="assets/catanacomics.svg" />
        </div>
    </div>
    )
}
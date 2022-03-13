export default function Story(){
    let storyObj=[{
        user: '9gag',
        img: 'assets/9gag.svg'
    },{
        user: 'meowed',
        img: 'assets/meowed.svg'
    },{
        user: 'barked',
        img: 'assets/barked.svg'
    },{
        user: 'nathanwpylestrangeplanet',
        img: 'assets/nathanwpylestrangeplanet.svg'
    },{
        user: 'respondeai',
        img: 'assets/respondeai.svg'
    },{
        user: 'filomoderna',
        img: 'assets/filomoderna.svg'
    },{
        user: 'wawawicomics',
        img: 'assets/wawawicomics.svg'
    },{
        user: 'memeriagourmet',
        img: 'assets/memeriagourmet.svg'
    }];
    const stories = storyObj.map(user => 
    <div class="story">
        <div class="imagem"><img src={user.img} /></div>
        <div class="usuario">{user.user}</div>
    </div>);
    return(
        <div class="stories">
            {stories}
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}
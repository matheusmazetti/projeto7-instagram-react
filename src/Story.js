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
    const storiesUser = storyObj.map(user => <div class="usuario">{user.user}</div>);
    const storiesImg = storyObj.map(user => 
        <div class="imagem">
            <img src={user.image} />
        </div>);
    return(
        <div class="stories">
            <div class="story">
              {storiesImg}
              {storiesUser}
            </div>
        </div>
    )
}
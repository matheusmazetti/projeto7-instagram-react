let sugestionsObj = [{
    userImg: 'assets/bad.vibes.memes.svg',
    userName: 'bad.vibes.memes',
    type: 'Segue você'
},{
    userImg: 'assets/chibirdart.svg',
    userName: 'chibirdart',
    type: 'Segue você'
},{
    userImg: 'assets/razoesparaacreditar.svg',
    userName: 'razoesparaacreditar',
    type: 'Novo no Instagram'
},{
    userImg: 'assets/adorable_animals.svg',
    userName: 'adorable_animals',
    type: 'Segue você'
},{
    userImg: 'assets/smallcutecats.svg',
    userName: 'smallcutecats',
    type: 'Segue você'
}]

export default function Sidebar(props){
    const sugestions = sugestionsObj.map(element => 
        <div class="sugestao">
        <div class="usuario">
          <img src={element.userImg} />
          <div class="texto">
            <div class="nome">{element.userName}</div>
            <div class="razao">{element.type}</div>
          </div>
        </div>

        <div class="seguir">Seguir</div>
      </div>   
    )

    return(
        <div class="sidebar">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <strong>{props.user}</strong>
                    {props.name}
                </div>
            </div>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestions}
            </div>    

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

    )
}
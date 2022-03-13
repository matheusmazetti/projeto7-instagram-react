let postsObj = [{
    user: 'meowed',
    userImg: 'assets/meowed.svg',
    postImg: 'assets/gato-telefone.svg',
    likesImg: 'assets/respondeai.svg',
    likesUser: 'respondeai',
    likeNumber: 'outras 101.523 pessoas'
},{
    user: 'barked',
    userImg: 'assets/barked.svg',
    postImg: 'assets/dog.svg',
    likesImg: 'assets/adorable_animals.svg',
    likesUser: 'adorable_animals',
    likeNumber: 'outras 99.159 pessoas'
}]

export default function Posts(){
    const post = postsObj.map(element => 
        <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={element.userImg} />
            {element.user}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={element.postImg} />
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name="heart-outline"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name="bookmark-outline"></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src={element.likesImg} />
            <div class="texto">
              Curtido por <strong>{element.likesUser}</strong> e <strong>{element.likeNumber}</strong>
            </div>
          </div>
        </div>
      </div>
    )

    return(
        <div class="posts">
            {post}    
        </div>
    )
}
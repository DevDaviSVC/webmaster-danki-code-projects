window.onload = function () {

    var items = [{
            id: 0,
            nome: 'Camiseta',
            img: 'images/image.jpg',
            quantidade: 0
        }, 
        {
            id: 1,
            nome: 'Sapato',
            img: 'images/image.jpg',
            quantidade: 0
        }, 
        {
            id: 2,
            nome: 'Bermuda',
            img: 'images/image.jpg',
            quantidade: 0
        },
        {
            id: 3,
            nome: 'Chapeu',
            img: 'images/image.jpg',
            quantidade: 0
        }
    ]

    inicializarLoja = () => {
        var containerProdutos = document.getElementById('produtos');
        items.map((val) => {
            containerProdutos.innerHTML += `

                <div class="produto-single">
                    <div class="img-wraper"><img src="` + val.img + `" /></div>
                    <p>` + val.nome + `</p>
                    <a key="` + val.id + `" href="#">Adicionar ao carrinho</a>
                </div>
            
            `;
        })

        containerProdutos.innerHTML += `
            <div class="clear"></div>
        `
    }

    inicializarLoja();

    atualizarCarrinho = () => {
        var containerCarrinho = document.getElementById('carrinho');
        containerCarrinho.innerHTML = '';
        items.map((val) => {
            if (val.quantidade > 0) {
                containerCarrinho.innerHTML += `

                <div class="produto-single">
                    <div class="img-wraper"><img src="` + val.img + `" /></div>
                    <p>` + val.nome + `</p>
                    <p>Quantidade: ` + val.quantidade + `</p>
                </div>
            
                `;
            }
        })

        containerCarrinho.innerHTML += `

            <div class="clear"></div>

        `;
    };

    var links = document.getElementsByTagName('a');

        for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', function () {
                let key = this.getAttribute('key');
                items[key].quantidade++;
                atualizarCarrinho();
                return false;
            });
        }

}
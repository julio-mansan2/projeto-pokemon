







const pokemons = document.querySelectorAll ('.pokemons');
const cartaoSelecionado = document.querySelector ('.selecionado')
const btnAvancar = document.getElementById ('btn-avancar')
const btnVoltar = document.getElementById ('btn-voltar')
let cartaoAtual = 0;

function escondercartaoSelecionado (){
        const cartaoSelecionado = document.querySelector ('.selecionado')
        cartaoSelecionado.classList.remove ('selecionado')

}

function mostrarCartao (indiceCartao){
        pokemons[cartaoAtual].classList.add ('selecionado');
}



btnAvancar.addEventListener ('click', function (){

        
        if(cartaoAtual === pokemons.length -1) return
 
        escondercartaoSelecionado ()
        
        cartaoAtual++;
        
        mostrarCartao (cartaoAtual)

        
     
} )


btnVoltar.addEventListener ('click', function (){
       
        if(cartaoAtual === 0) return
        const pokemons = document.querySelectorAll ('.pokemons');
        
        escondercartaoSelecionado ()
        
        cartaoAtual--;
        
        mostrarCartao (cartaoAtual)
     
})


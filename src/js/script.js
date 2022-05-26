/*
 ==================                      BABY STEPS                         ==============
objetivo 1 - preciso que o icone mude quando o mouse passe em cima de outro personagem .
temos que :
--colocar a classe " selecionado " em cima do personagem em que o mouse passou 
em cima para adicionar a animação.

objetivo 2 - retirar a animação de selecionado do pikachu. 
--preciso retirar a classe selecionado do personagem em que o mouse não está mais
em cima .

objetico 3 - quando o mouse passar em cima ,troca a imagem do personagem e nome.
temos que :
-- alterar a imagem personagem jogador 01 
-- alterar o nome personagem jogador 01
*/

const pokemons = document.querySelectorAll('.pokemon')

pokemons.forEach((pokemon) =>{
    pokemon.addEventListener('mouseenter', () =>{

        const pokemonSelecionado = document.querySelector('.selecionado')
        pokemonSelecionado.classList.remove('selecionado')
        pokemon.classList.add('selecionado')


        const idSelecionado = pokemon.attributes.id.value
        // console.log(idSelecionado)
        const imagemPokemonGrande = document.getElementById('pokemon-jogador-01')
        imagemPokemonGrande.src = `./src/assets/${idSelecionado}.png`
        // console.log(imagemPokemonGrande)
        const nomePokemonGrande = document.getElementById('nome-pokemon-grande')
        nomePokemonGrande.innerHTML
        //console.log(nomePokemonGrande)

        const nomePokemonMudar = pokemon.getAttribute('data-name')
        nomePokemonGrande.innerHTML = nomePokemonMudar
        
    })
})

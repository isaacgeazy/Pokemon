
const urlPokemonJ1 = () => {
    const urlPokemonj1 = 'https://pokeapi.co/api/v2/pokemon/25';
    return urlPokemonj1;
}
const urlPokemonJ2 = () => {
    const urlPokemonj2 = 'https://pokeapi.co/api/v2/pokemon/27';
    return urlPokemonj2;
}

const iniciar = async () => {
    const urlJ1 = urlPokemonJ1();
    const urlJ2 = urlPokemonJ2();
    const responsej1 = await fetch(urlJ1);
    const responsej2 = await fetch(urlJ2);
    const resultj1 = await responsej1.json();
    const resultj2 = await responsej2.json();
    ExibirPokemons(resultj1, resultj2);
}
const ExibirPokemons = (pokemon1, pokemon2) => {
    const imagemj1 = window.document.getElementById('imagem-jogador1');
    const textoj1 = window.document.getElementById('jogador1');

    imagemj1.src = pokemon1.sprites.other["official-artwork"].front_default;
    textoj1.innerHTML = pokemon1.name;

    const imagemj2 = window.document.getElementById('imagem-jogador2');
    const textoj2 = window.document.getElementById('jogador2');

    imagemj2.src = pokemon2.sprites.other["official-artwork"].front_default;
    textoj2.innerHTML = pokemon2.name;
}

document.addEventListener('DOMContentLoaded', iniciar);
// const pokedev = document.querySelectorAll('.pokedev');

// function select_listagem() {
//     pokedev.forEach((pokedev) =>
//         pokedev.classList.remove('ativo')
//     )
//     this.classList.add('ativo')
    
// }

// pokedev.forEach((pokedev) =>
//     pokedev.addEventListener('click', select_listagem)
// )


// Função global que chama todas as subsFunções
const listaSelecaoPokedevs = document.querySelectorAll(".pokedev");

listaSelecaoPokedevs.forEach(pokedev => {
	pokedev.addEventListener("click", () => {
		esconderCartaoPokedev();

		const idPokedevSelecionado = mostrarCartaoPokedevSelecionado(pokedev);

		desativarPokedevNaListagem();
		ativarPokedevSelecionadoNaListagem(idPokedevSelecionado);

	})
})

// Função para ativar um PokeDev na listagem
function ativarPokedevSelecionadoNaListagem(idPokedevSelecionado) {
	const pokedevSelecionadoNaListagem = document.getElementById(idPokedevSelecionado);
	pokedevSelecionadoNaListagem.classList.add("ativo");
}

// Função para desativar um PokeDev na listagem
function desativarPokedevNaListagem() {
	const pokedevAtivoNaListagem = document.querySelector(".ativo");
	pokedevAtivoNaListagem.classList.remove("ativo");
}

// Mostrar cartão de PokeDev
function mostrarCartaoPokedevSelecionado(pokedev) {
	const idPokedevSelecionado = pokedev.attributes.id.value;
	const idDoCartaoPokedevParaAbrir = "cartao-" + idPokedevSelecionado;
	const cartaoPokedevParaAbrir = document.getElementById(idDoCartaoPokedevParaAbrir);
	cartaoPokedevParaAbrir.classList.add("open");
	return idPokedevSelecionado;
}

// Desativar cartão de PokeDev
function esconderCartaoPokedev() {
	const cartaoPokedevAberto = document.querySelector(".open");
	cartaoPokedevAberto.classList.remove("open");
}


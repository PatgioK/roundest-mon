
const MAX_DEX_ID = 251;

//params to skip if pokemon is already selected
export const getRandomPokemon: (notThisOne?: number) => number = (
    notThisOne
    ) => {
    const pokedexNumber = Math.floor(Math.random() * (MAX_DEX_ID) + 1)

    if(pokedexNumber !== notThisOne) return pokedexNumber;
        return getRandomPokemon(notThisOne)
}

export const getOptionsForVote = () => {
    const firstId = getRandomPokemon();
    const secondId = getRandomPokemon(firstId);

    return [firstId, secondId]
}
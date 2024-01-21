const getCharacters = async () => {

    let response = await fetch('https://rickandmortyapi.com/api/character');
    let resJson = await response.json();
    console.log(resJson);
}
getCharacters();
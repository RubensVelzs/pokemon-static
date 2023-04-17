import axios from 'axios';

const pokeApi= axios.create({
    baseURL: "https://pokeapi.co/api/v8"
});

export default pokeApi;
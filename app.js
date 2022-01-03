const button = document.querySelector("button");
const jokeContainer = document.querySelector("#container");

const addNewJoke = async () => {
    const Joke = await newJoke();
    console.log(Joke);
    const newLi = document.createElement('LI');
    newLi.innerHTML = Joke;
    jokeContainer.append(newLi);
}

const newJoke = async () => {
    try{
        const config = {headers : {Accept : 'application/json'}};
        const result = await axios.get('https://icanhazdadjoke.com/' , config);
        console.log(result);
        return result.data.joke;
        }
    catch(e)
    {
        return "We ran out of jokes at the moment :|";
    }
}

button.addEventListener('click' , addNewJoke);
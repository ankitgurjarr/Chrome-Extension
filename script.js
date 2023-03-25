fetch('https://icanhazdadjoke.com/slack')
    .then(data => data.json())
    .then(JokeData => {
        const jokeText = JokeData.attachments[0].text;
        const jokeElement = document.getElementById("jokeID");
        jokeElement.innerHTML = jokeText;

        })
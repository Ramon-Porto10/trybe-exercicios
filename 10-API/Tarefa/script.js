const getDog = document.getElementById('Dog');
const getCat = document.getElementById('Cat');
const getRandom = document.getElementById('Surprise');
const getImage = document.getElementById('image');

getDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => getImage.src = data.message);
});

getCat.addEventListener('click', () => {
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then(data => getImage.src = data[0].url);
});

getRandom.addEventListener('click', () => {
    Promise.any([
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json()),

        fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json())
    ])
    .then(data => {
        if (Array.isArray(data)) {
            getImage.src = data[0].url;
        } else {
            getImage.src = data.message;
        }
    })
    .catch(Error => console.error('Ambas imagens falharam:', Error));
});
const dataCountries = require('./data.json');

const getCountriesByRegion = (data, region) => {
    const filterCountries = [];

    for (let index = 0; index < data.length; index += 1) {
        const langNames = [];
        if (data[index].region === region) {
            filterCountries.push({
                countryNames: data[index].name,
                population: data[index].population,
                languages: langNames,

        })
        
        }
        for (let indexlang = 0; indexlang < data[index].languages.length; indexlang += 1) {
            langNames.push(data[index].languages[indexlang].name)

        }

    }

    return filterCountries;

};

console.log(getCountriesByRegion(dataCountries, 'Asia'));
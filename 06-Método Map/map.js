const data = require('./data');

//const newarry = [];

//for (let index = 0; index < data.types.length; index += 1) {
    //newarry.push(data.types[index].name);
//}

//console.log(newarry);

const newarrymap = data.types.map((type) => type.name);

console.log(newarrymap);
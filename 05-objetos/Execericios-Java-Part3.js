const reader = {
    name: 'Julia',
    lastName: 'Pessoa',
    age: 21,
    favoriteBooks: [
      {
        title: 'O Senhor dos Anéis - a Sociedade do Anel',
        author: 'J. R. R. Tolkien',
        publisher: 'Martins Fontes',
      },
      {
        title: 'Harry Potter e o Prisioneiro de Azkaban',
        author: 'JK Rowling',
        publisher: 'Rocco',
      },
    ],

  };

 // for (let index = 0; index < reader.favoriteBooks.length; index += 1){

   // favoriteBooks[index] += 1;
    
  //};


console.log(`O livro favorito de ${reader.name} ${reader.lastName} se chama ${reader.favoriteBooks[1].title}`);
console.log(`${reader.name} tem ${reader.favoriteBooks.length} livros favoritos.`);
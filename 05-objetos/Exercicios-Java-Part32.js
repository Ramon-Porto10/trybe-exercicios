const school = {
    lessons: [
      {
        course: 'Python',
        students: 20,
        professor: 'Carlos Patrício',
        shift: 'Manhã',
      },
      {
        course: 'Kotlin',
        students: 10,
        professor: 'Gabriel Oliva',
        shift: 'Noite',
      },
      {
        course: 'JavaScript',
        students: 738,
        professor: 'Gustavo Caetano',
        shift: 'Tarde',
      },
      {
        course: 'MongoDB',
        students: 50,
        shift: 'Noite',
      },
    ]
  };

  // QUESTÃO 01

  const position =(obj,index) => Object.values(obj)[index];

  // QUESTÃO 02

  const getNumberOfStudents = (obj) => {

    let NumbersPerson = 0;

  for (index = 0; index > obj.lessons.length; index += 1) {
    NumbersPerson += obj.lessons[index].students;

  }

  return NumbersPerson;

  }

  // QUESTÃO 03

  const verificationKeys = (obj, keys) => {
 
    for (index = 0; index < obj.lessons.length; index += 1) {
      if (obj.lessons[index] === undefined)  {
        return false;
      } 
    }
      return true;
  };

  // QUESTÃO 04
  const alternTurn = (obj, course, Newturn) => {

    let turn = 'Noite';
 
    for (index = 0; index < obj.lessons.length; index += 1) {
      if (obj.lessons[index].shift === school.lessons[0].shift)  {
        return turn = Newturn;
      } 
    }
    return alternTurn
  };



  
  console.log(position(school,0));

  console.log(getNumberOfStudents(school));

  console.log(verificationKeys(school, 'Nada'));

  console.log(alternTurn(school, 'Python', 'Noite'));
  

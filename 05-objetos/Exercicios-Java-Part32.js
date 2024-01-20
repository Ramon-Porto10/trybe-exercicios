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

  console.log(position(school,0));

  const getNumberOfStudents = (school) => {

    const NumbersPerson = 0

  for (index = 0; index > school.lessons.length; index =+ 1) {
    NumbersPerson = school.lessons[index].students;

    return NumbersPerson;

  };

  };

  console.log(NumbersPerson(school));
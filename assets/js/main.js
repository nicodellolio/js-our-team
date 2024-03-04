
//file JS su cui lavorare:
const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];

//milestone 1: stampiamo le informazioni relative ad ogni membro in console
//iniziamo utilizzando un ciclo for
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    // console.log(teamMember);

    //che a sua volta conterrà un ciclo in
    for (const key in teamMember) {
        console.log(teamMember[key]);
    }
}



//file JS su cui lavorare:
const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: './assets/img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: './assets/img/angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: './assets/img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: './assets/img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: './assets/img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: './assets/img/barbara-ramos-graphic-designer.jpg',
    },
];


//creiamo un nodo della DOM
const rowElement = document.querySelector('.row')

//milestone 1: stampiamo le informazioni relative ad ogni membro in console
//iniziamo utilizzando un ciclo for
for (let i = 0; i < team.length; i++) {
    const teamMember = team[i];
    // console.log(teamMember);

    //creiamo un markup da inserire nel DOM
    const markup = `<div class="col"><div class="card p-2"><h3>${teamMember.name}</h3><aside>${teamMember.role}</div></div>`
    console.log(markup);
    rowElement.insertAdjacentHTML('beforeend', markup)
}




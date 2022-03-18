const secList = document.getElementById('list');
const header = document.querySelector('header');
const secNote = document.getElementById('note')

const headerBtn = document.getElementById('btn-js');
const addBtn = document.getElementById('add_btn');
const saveBtn = document.getElementById('save_btn');
const backBnt = document.getElementById('back__arrow')

const noteTitle = document.querySelector('.note__title');
const noteDesc = document.querySelector('.note__description');
const noteField = document.querySelector('.IntroductionField');
const capsUp = document.querySelector('.text__button');
const capsDown = document.querySelector('.btn-js');

const savedInformation = [];

headerBtn.onclick = function() {
    nextSection(header,secList);
};
addBtn.addEventListener('click', () => {
    nextSection(secList,secNote);
    clearZone();
});
saveBtn.addEventListener('click',() => {
    save();
});
capsUp.addEventListener('click', () => {
    noteField.value = noteField.value.toUpperCase();
});
capsDown.addEventListener('click', () => {
    noteField.value = noteField.value.toLowerCase();
});
backBnt. addEventListener('click', () => {
    nextSection(secNote, secList);
})




function nextSection(hide, show) {
    hide = hide.classList.add('hide');
    show = show.classList.remove('hide');
};
function save() {
    if(!noteTitle.value.trim().length && !noteDesc.value.trim().length && !noteField.value.trim().length){
        alert('You have not filled any fields.')
    }
    else {
        savedInfo();
        nextSection(secNote,secList);
        addCard();
    }
};
function savedInfo() {
    let temp = {};
    temp.title = noteTitle.value;
    temp.description = noteDesc.value;
    temp.text = noteField.value;
    let i = savedInformation.length;
    savedInformation[i] = temp;
    localStorage.setItem('todo', JSON.stringify(savedInformation))
};
function addCard(){
    let d = document.getElementsByClassName('list__box-content');
    let fatherCard = d[0];

    let card = document.createElement('div');
    let cardTitle = document.createElement('h3');
    let cardDesc = document.createElement('p');

    card.classList.add('card');
    cardTitle.classList.add('card__title')
    cardDesc.classList.add('card__description')

    fatherCard.insertBefore(card, fatherCard.firstChild);
    card.insertBefore(cardTitle, card.firstChild);
    card.appendChild(cardDesc);

    function out() {
        for(let key in savedInformation){
            let out = '';
            out += savedInformation[key].title;
            cardTitle.innerHTML = out;
        }
        for(let key in savedInformation){
            let out = '';
            if(savedInformation[key].description.trim().length === 0 && savedInformation[key].text.trim().length !== 0){
                out += savedInformation[key].text;
                cardDesc.innerHTML = out;
            }
            else {
                out += savedInformation[key].description;
                cardDesc.innerHTML = out;
            }
        }
    }
    out();
}   
function clearZone(){
    noteTitle .value = '';
    noteDesc.value = '';
    noteField.value = '';
}